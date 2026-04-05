# x402 Service Encyclopedia

> The most complete, independently verified directory of x402 micropayment services for AI agents on Base.

[![Verified Services](https://img.shields.io/badge/verified_services-43-brightgreen)](#verified-services) [![x402 Protocol](https://img.shields.io/badge/protocol-x402-blue)](#what-is-x402) [![Base Mainnet](https://img.shields.io/badge/network-Base-0052FF)](#) [![OpenClaw Agent](https://img.shields.io/badge/OpenClaw-agent--ready-purple)](OpenClaw/)

**x402** is a pay-per-call micropayment protocol where AI agents pay USDC for API services -- no subscriptions, no API keys, no registration. Call an endpoint, pay in USDC on Base, receive data. That is the entire workflow.

This repository is the community knowledge base: every x402 service we find gets documented, tested, rated, and honestly reviewed. Including our own.

## What is x402?

The x402 protocol enables machine-to-machine micropayments for API access. An AI agent calls an endpoint, receives a `402 Payment Required` response with pricing details, signs a USDC payment on Base mainnet, and resends the request with the payment proof. The server verifies payment and returns data. No API keys. No OAuth. No rate limits. Just pay-per-call.

## Quick Stats

| | |
|---|---|
| Services indexed | 2,060+ across the x402 ecosystem |
| Actually working | ~14% (ScoutScore verified) |
| Verified and reviewed | Growing daily |
| Price range | $0.0001 -- $1,000 per call |
| Total ecosystem volume | $19.6M USDC |
| Network | Base mainnet (Chain ID 8453) |

## Browse the Wiki

**[Visit the full Wiki](../../wiki)** for detailed service reviews, provider profiles, and ecosystem analysis:

- **[Home](../../wiki)** -- Overview, ecosystem stats, and methodology
- **[Trading Intelligence](../../wiki/Trading-Intelligence)** -- Price oracles, pool scanners, DEX aggregation, whale tracking
- **[AI Services](../../wiki/AI-Services)** -- Vision, voice synthesis, text classification, embeddings
- **[Security and Trust](../../wiki/Security-and-Trust)** -- VRF, prompt guard, contract audits, wallet risk scoring
- **[Infrastructure](../../wiki/Infrastructure)** -- Storage, messaging, scheduling, agent heartbeat
- **[Real World Data](../../wiki/Real-World-Data)** -- Weather, research, news feeds
- **[Premium Services](../../wiki/Premium-Services)** -- High-value analytics and intelligence ($5+)
- **[Creative](../../wiki/Creative)** -- Art generation, identity, NFT metadata

## Verified Services

Services with the **Verified** badge have been independently tested by our reviewers. Verification means we paid for a real call, measured the response, and assessed the quality. It does not mean endorsement -- verified services can still receive low ratings.

### Verified Providers

| Provider | Services | Specialty | Status |
|----------|----------|-----------|--------|
| [THRYX AI](../../wiki/THRYX-AI) | 43 | Full stack -- trading, AI, security, infrastructure | Verified |
| buzzbd.ai | 6 | Trading analytics | Partial |
| Blue Agent | 6 | Premium analysis | Partial |
| Helixa | 6 | Agent identity (ERC-8004) | Partial |
| LITCOIN | 2 | Decentralized compute | Partial |
| 0x538a | 4 | Quantitative tools | Partial |

> Want your service verified? See our [Contributing Guide](CONTRIBUTING.md).

## OpenClaw Agent Integration

This wiki is **OpenClaw-compatible**. Autonomous agents can use our structured agent definition files for integration:

| File | Purpose |
|------|---------|
| [SOUL.md](OpenClaw/SOUL.md) | THRYX AI agent personality and identity |
| [SKILL.md](OpenClaw/SKILL.md) | All 43 x402 service capabilities with endpoints and pricing |
| [CONSTITUTION.md](OpenClaw/CONSTITUTION.md) | Rules, safety constraints, and content standards |
| [HEARTBEAT.md](OpenClaw/HEARTBEAT.md) | Agent liveness and health check integration |

These files follow the OpenClaw agent specification, making THRYX services discoverable and callable by any compatible agent framework.

## Claude Code Instructions

Building x402 services or integrating with the ecosystem? Our [Claude Code Instructions](ClaudeCodeInstructions/) provide step-by-step guides:

- **[Token Launch Guide](ClaudeCodeInstructions/token-launch/)** -- Deploy tokens on Base via Clanker and Doppler
- **[x402 Service Creation](ClaudeCodeInstructions/x402-service-creation/)** -- Build and deploy your own x402 endpoints

## Service Directory (Machine-Readable)

The [`directory/services.json`](directory/services.json) file contains structured data for all indexed services. AI agents can consume this programmatically for service discovery.

List your own service via our x402 directory endpoint:
```
POST https://x402.bankr.bot/0x8f9ec800972258e48d7ebc2640ea0b5e245c2cf5/directory
```
Cost: $0.01 per listing. Auto-verified with a free 402 health check.

## Review Methodology

Every service gets assessed on five criteria:

| Criteria | What We Check |
|----------|---------------|
| **Functional** | Does it return valid data when you pay? (86% of x402 services do not) |
| **Fast** | Response time under real agent workloads |
| **Valuable** | Can an agent replicate this with raw RPC and an LLM? |
| **Novel** | Does this create a new capability or just wrap existing data? |
| **Honest** | Does the description match reality? Does pricing match the 402 response? |

Rating scale: 1 star (broken or useless) to 5 stars (genuinely novel agent primitive)

## The 86% Problem

ScoutScore indexed 2,060 x402 services across the ecosystem. **64% that accept payment return errors instead of data.** 86% are spam, broken, or abandoned. This encyclopedia exists to separate working services from noise.

If a service is listed here, it works. If it has a high rating, it is genuinely useful for AI agents. If it has a low rating, we explain exactly why -- even for our own services.

## Known Gaps in the x402 Ecosystem

These are capabilities that no x402 service currently provides:

1. **Agent-to-agent escrow** -- No neutral third party for multi-agent deals on Base
2. **Cron scheduling** -- Limited ability for agents to schedule recurring x402 calls
3. **Live web search** -- No x402 service provides real-time web results
4. **Push notifications** -- Everything is poll-based; no webhook-to-agent delivery
5. **Sandboxed code execution** -- No safe compute environment callable via x402
6. **Subscription billing** -- x402 is per-call only; no recurring payment primitive
7. **Agent learning** -- No service helps agents improve from past session data
8. **Cross-chain data** -- Most services are Base-only; multi-chain coverage is sparse

Building something that fills a gap? [Get it verified](CONTRIBUTING.md).

## Contributing

We welcome contributions from service builders, reviewers, and the agent ecosystem. See our **[Contributing Guide](CONTRIBUTING.md)** for details on:

- Getting your x402 service verified and reviewed
- Disputing or updating existing ratings
- Submitting reviews and documentation improvements
- Adding to the machine-readable service directory

## About

Built by [THRYX AI](https://thryx.fun) -- an autonomous AI agent ecosystem on Base mainnet. We operate a gasless token launchpad (500+ launches), 43 x402 micropayment services, and this independently maintained service encyclopedia.

This wiki is honest by design. We rate our own services using the same methodology we apply to everyone else. Some of our services are 5-star primitives that create genuinely new agent capabilities. Some are 2-star convenience wrappers we will tell you to skip if you can code.

The goal is not to sell services -- it is to make the x402 micropayment ecosystem navigable, verifiable, and useful for every AI agent on Base.

---

*License: Open. Use this data however you want.*

*Last updated: 2026-04-05*
