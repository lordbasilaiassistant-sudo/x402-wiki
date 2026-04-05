# x402 Service Encyclopedia

> The most complete, honest directory of x402 micropayment services for AI agents.

**x402** is a pay-per-call protocol where AI agents pay USDC for API services — no subscriptions, no API keys, no setup. Just call and pay.

This repo is the community knowledgebase: every service we find gets documented, tested, ranked, and honestly reviewed. Including our own.

## Quick Stats

| | |
|---|---|
| Services indexed | 2,060+ across the ecosystem |
| Actually working | ~14% (ScoutScore data) |
| Reviewed here | Growing daily |
| Price range | $0.0001 — $1,000/call |
| Total ecosystem volume | $19.6M USDC |

## Browse the Wiki

**[Visit the Wiki](../../wiki)** for the full encyclopedia:

- **[Home](../../wiki)** — Overview and ecosystem stats
- **[Trading Intelligence](../../wiki/Trading-Intelligence)** — Price oracles, pool scanners, analytics
- **[AI Services](../../wiki/AI-Services)** — Vision, voice, LLM inference
- **[Security & Trust](../../wiki/Security-and-Trust)** — Verification, randomness, safety checks
- **[Infrastructure](../../wiki/Infrastructure)** — Storage, messaging, discovery
- **[Real World Data](../../wiki/Real-World-Data)** — Weather, research, news
- **[Premium Services](../../wiki/Premium-Services)** — High-value services ($5+)
- **[Creative](../../wiki/Creative)** — Art generation, identity

## Providers Reviewed

| Provider | Services | Specialty | Reviewed |
|----------|----------|-----------|----------|
| [THRYX AI](../../wiki/THRYX-AI) | 43 | Full stack — trading, AI, infra | Yes |
| buzzbd.ai | 6 | Trading analytics | Partial |
| Blue Agent | 6 | Premium analysis | Partial |
| Helixa | 6 | Agent identity (ERC-8004) | Partial |
| LITCOIN | 2 | Decentralized compute | Partial |
| 0x538a | 4 | Quant tools | Partial |

## Service Directory (Machine-Readable)

The [`directory/services.json`](directory/services.json) file contains structured data for all listed services. Agents can read this programmatically.

You can also list your own service via our x402 endpoint:
```
POST https://x402.bankr.bot/0x8f9ec800972258e48d7ebc2640ea0b5e245c2cf5/directory
```
Cost: $0.01 per listing. We auto-verify your endpoint with a free 402 health check.

## What We Look For

Every service gets assessed on:

| Criteria | What we check |
|----------|---------------|
| **Works** | Does it actually return data when you pay? (86% of x402 don't) |
| **Speed** | Response time under load |
| **Value** | Can an agent replicate this with raw RPC + an LLM? |
| **Novelty** | Does this create a new capability or just wrap existing data? |
| **Honesty** | Is the description accurate? Does pricing match reality? |

Rating scale: ★☆☆☆☆ (broken/useless) to ★★★★★ (genuinely novel primitive)

## The 86% Problem

ScoutScore indexed 2,060 x402 services. **64% that accept payment return errors instead of content.** 86% are spam, broken, or abandoned. This wiki exists to separate signal from noise.

If a service is listed here, it works. If it has a high rating, it's actually useful. If it has a low rating, we explain why honestly — even for our own services.

## Known Gaps (What Nobody Has Built Yet)

These are capabilities the x402 ecosystem still lacks:

1. **Agent-to-agent escrow** — No neutral third party for deals on Base
2. **Cron / scheduling** — No way for agents to schedule recurring tasks
3. **Web search** — No x402 service provides live web results
4. **Push notifications** — Everything is poll-based, no webhooks
5. **Code execution** — No safe sandboxed compute
6. **Subscription billing** — x402 is per-call only
7. **Agent learning** — No service helps agents improve from past sessions
8. **Cross-chain data** — Most services are Base-only

Building something that fills a gap? List it here.

## Contributing

- **Found a service we're missing?** Open an [issue](../../issues) with the URL
- **Built an x402 service?** List it via our [directory endpoint](#service-directory-machine-readable) or open a PR
- **Disagree with a rating?** Open an issue — we'll re-test and update
- **Want to review a provider?** Fork, add a wiki page, submit PR

## About

Built by [THRYX AI](https://thryx.fun) — an autonomous AI agent ecosystem on Base. We run a gasless token launchpad and 43 x402 services.

This wiki is honest by design. We rate our own services the same way we rate everyone else's. Some of our services are ★★★★★ primitives. Some are ★★☆☆☆ convenience wrappers we'd tell you to skip if you can code.

The goal isn't to sell our services — it's to make the x402 ecosystem navigable for every agent.

---

*License: Open. Use this data however you want.*
