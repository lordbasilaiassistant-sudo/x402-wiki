#!/usr/bin/env node
/**
 * Free 402 health check for community-submitted x402 services.
 *
 * This is the check CONTRIBUTING.md promises submitters: we confirm the
 * endpoint really answers HTTP 402 and that the advertised `payTo` matches the
 * wallet in the submission. It is deliberately NOT verification -- it proves
 * the endpoint is alive and self-consistent, nothing about the data behind it.
 *
 * Usage:
 *   node scripts/health-check.mjs                 # re-check every queue entry
 *   node scripts/health-check.mjs agent-earn-radar  # re-check one, by id
 *   node scripts/health-check.mjs --write         # persist results to queue.json
 */
import { readFileSync, writeFileSync } from 'node:fs';

const BASE_USDC = '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913';
const QUEUE = new URL('../directory/queue.json', import.meta.url);
const TIMEOUT_MS = 15000;

/** Payment terms can arrive in the JSON body or in a base64 `payment-required` header. */
function extractTerms(res, text) {
  let payload = null;
  const header = res.headers.get('payment-required');
  if (header) {
    try { payload = JSON.parse(Buffer.from(header, 'base64').toString('utf8')); } catch {}
  }
  if (!payload) { try { payload = JSON.parse(text); } catch {} }
  if (!payload) return null;
  const accepts = payload.accepts ?? payload.paymentRequirements ?? null;
  const terms = Array.isArray(accepts) ? accepts[0] : accepts;
  return terms ? { ...terms, x402Version: payload.x402Version } : null;
}

export async function healthCheck(entry) {
  const started = Date.now();
  const result = { checkedAt: new Date().toISOString().slice(0, 10) };
  try {
    const res = await fetch(entry.probe.url, {
      method: entry.probe.method,
      headers: { 'content-type': 'application/json' },
      body: entry.probe.body ? JSON.stringify(entry.probe.body) : undefined,
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    const text = await res.text();
    result.latencyMs = Date.now() - started;
    result.httpStatus = res.status;

    const terms = extractTerms(res, text);
    if (terms) {
      result.x402Version = terms.x402Version ?? null;
      result.scheme = terms.scheme ?? null;
      result.network = terms.network ?? null;
      result.payTo = terms.payTo ?? null;
      result.asset = terms.asset ?? null;
      result.amountAtomic = String(terms.maxAmountRequired ?? terms.amount ?? '');
      result.payToMatches =
        String(terms.payTo ?? '').toLowerCase() === entry.wallet.toLowerCase();
      result.assetIsBaseUSDC = String(terms.asset ?? '').toLowerCase() === BASE_USDC;
    } else {
      result.note = text.slice(0, 200).replace(/\s+/g, ' ').trim();
    }
    // The check the wiki actually promises: a live 402 whose payee is the
    // wallet the submitter claimed. Everything else is recorded, not gating.
    result.verdict = res.status === 402 && result.payToMatches === true ? 'PASS' : 'FAIL';
  } catch (err) {
    result.latencyMs = Date.now() - started;
    result.error = String(err?.message ?? err);
    result.verdict = 'FAIL';
  }
  return result;
}

const args = process.argv.slice(2);
const write = args.includes('--write');
const only = args.filter((a) => !a.startsWith('--'));

const queue = JSON.parse(readFileSync(QUEUE, 'utf8'));
const targets = only.length ? queue.filter((e) => only.includes(e.id)) : queue;
if (!targets.length) {
  console.error(`No queue entries matched: ${only.join(', ')}`);
  process.exit(1);
}

let failures = 0;
for (const entry of targets) {
  const result = await healthCheck(entry);
  entry.healthCheck = result;
  entry.status = result.verdict === 'PASS' ? 'HEALTH_CHECKED' : 'UNREACHABLE';
  const detail = result.error
    ? result.error
    : `HTTP ${result.httpStatus} in ${result.latencyMs}ms` +
      (result.payTo ? ` -> payTo ${result.payTo} (match=${result.payToMatches})` : '');
  console.log(`${result.verdict === 'PASS' ? 'PASS' : 'FAIL'}  ${entry.id.padEnd(34)} ${detail}`);
  if (result.verdict !== 'PASS') failures++;
}

if (write) {
  writeFileSync(QUEUE, JSON.stringify(queue, null, 2) + '\n');
  console.log(`\nWrote ${targets.length} result(s) to directory/queue.json`);
}
console.log(`\n${targets.length - failures}/${targets.length} passed.`);
