# x402 Protocol — How It Works

## Overview

x402 is a pay-per-call micropayment protocol for machine-to-machine API access. An AI agent calls an HTTP endpoint, receives a `402 Payment Required` response with pricing, signs a USDC payment on-chain, and resends the request with payment proof. The server verifies payment and returns data.

No API keys. No OAuth. No rate limits. No subscriptions. Just pay-per-call.

## Payment Flow

```
Agent                          x402 Service                    Base L2
  │                                │                              │
  ├── POST /service ──────────────>│                              │
  │                                │                              │
  │<── 402 Payment Required ───────┤                              │
  │    {amount, token, recipient,  │                              │
  │     network, facilitator}      │                              │
  │                                │                              │
  ├── Sign USDC payment ──────────────────────────────────────────>│
  │                                │                              │
  ├── POST /service ──────────────>│                              │
  │    X-PAYMENT: {signature}      │                              │
  │                                ├── Verify payment ────────────>│
  │                                │<── Confirmed ────────────────┤
  │<── 200 OK + data ─────────────┤                              │
  │                                │                              │
```

## The 402 Response

When you call an x402 endpoint without payment, you get:

```http
HTTP/1.1 402 Payment Required
Content-Type: application/json

{
  "x402Version": 1,
  "accepts": [{
    "scheme": "exact",
    "network": "base",
    "maxAmountRequired": "1000",
    "resource": "https://x402.bankr.bot/0x.../vision",
    "description": "AI image analysis",
    "mimeType": "application/json",
    "payTo": "0x8f9ec800972258e48d7ebc2640ea0b5e245c2cf5",
    "maxTimeoutSeconds": 300,
    "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    "extra": {
      "name": "vision",
      "description": "Image analysis via Groq Llama 4 Scout"
    }
  }]
}
```

Key fields:
- **maxAmountRequired** — Price in token smallest units (USDC has 6 decimals, so 1000 = $0.001)
- **asset** — Payment token address (USDC: `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`)
- **payTo** — Service provider's wallet
- **network** — Blockchain network ("base" = Base mainnet, Chain ID 8453)

## Payment Token

All x402 services on Base use USDC:
- **Contract:** `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`
- **Decimals:** 6
- **Network:** Base mainnet (Chain ID 8453)

$0.001 = 1000 units. $1.00 = 1000000 units.

## Facilitators

A facilitator is a trusted intermediary that processes x402 payments. The two main facilitators:

1. **Coinbase CDP** (`cdp.coinbase.com`) — Coinbase's facilitator, auto-lists services in x402 Bazaar
2. **Bankr** (`api.bankr.bot`) — Bankr's facilitator, used by services deployed via Bankr CLI

The facilitator handles payment verification so the service doesn't need to run its own verification infrastructure.

## Ecosystem Stats (as of April 2026)

| Metric | Value |
|--------|-------|
| Total services indexed | 2,060+ |
| Actually working | ~14% (288) |
| Total volume | $19.6M USDC |
| Transactions | 5.1M+ |
| Active providers | ~6 established |
| Network | Base mainnet |
| Payment token | USDC |

Source: ScoutScore

## The 86% Problem

86% of indexed x402 services are spam, broken, or abandoned. 64% accept payment and return errors. Before calling an unknown x402 service:

1. Send the minimum payment first
2. Verify the response is valid data, not an error
3. Check the x402 Service Encyclopedia wiki for verified reviews

## Resources

- [x402 Protocol Spec](https://github.com/coinbase/x402) — Official specification
- [x402.org](https://www.x402.org) — Protocol website
- [x402 Service Encyclopedia](../../wiki) — Verified service directory (this repo)
- [Bankr CLI](https://bankr.bot) — Deploy and call x402 services
- [Coinbase CDP x402 Docs](https://docs.cdp.coinbase.com/x402) — Coinbase facilitator docs
