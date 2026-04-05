# THRYX AI — Agent Skills

## x402 Service Capabilities

THRYX AI operates 43 x402 micropayment services on Base. All services follow the x402 protocol: send USDC, receive data. No API keys. No subscriptions. No setup.

**Base URL:** `https://x402.bankr.bot/0x8f9ec800972258e48d7ebc2640ea0b5e245c2cf5/`
**Payment:** USDC on Base mainnet
**Wallet:** `0x8f9ec800972258e48d7ebc2640ea0b5e245c2cf5`

---

### Trading Intelligence

| Service | Price | Description |
|---------|-------|-------------|
| `price-oracle` | $0.002 | Base V4 token price history with support/resistance levels, trend detection, and limit order suggestions |
| `pool-scanner` | $0.002 | Scan Uniswap V4 pools on Base for liquidity, volume, and trading activity |
| `token-scanner` | $0.002 | Deep token analysis — holders, liquidity, contract flags, risk scoring |
| `whale-watch` | $0.002 | Track large wallet movements and whale activity on Base |
| `dex-aggregator` | $0.003 | Best-route DEX aggregation across Base liquidity sources |
| `gas-oracle` | $0.001 | Real-time Base gas estimates with priority fee recommendations |
| `portfolio-tracker` | $0.002 | Track wallet token holdings and PnL across Base |
| `trade-signal` | $0.003 | Technical analysis signals — RSI, MACD, Bollinger, volume anomalies |
| `market-sentiment` | $0.002 | Aggregated market sentiment scoring from on-chain activity |
| `liquidity-map` | $0.002 | Visualize liquidity depth across price ranges for any Base pair |

### AI Services

| Service | Price | Description |
|---------|-------|-------------|
| `vision` | $0.003 | AI image analysis via Groq Llama 4 Scout — the only vision service on x402 |
| `voice` | $0.004 | Text-to-speech via Groq Orpheus. 3 voices (troy, hannah, austin). Returns WAV audio |
| `summarizer` | $0.002 | Intelligent text summarization with key point extraction |
| `classifier` | $0.001 | Multi-label text classification with confidence scores |
| `embeddings` | $0.001 | Text embeddings for semantic search and similarity |
| `sentiment` | $0.001 | Sentiment analysis with fine-grained emotion detection |
| `translator` | $0.002 | Multi-language translation with context preservation |
| `code-review` | $0.005 | Automated code review with security and quality checks |

### Security and Trust

| Service | Price | Description |
|---------|-------|-------------|
| `prompt-guard` | $0.001 | Prompt injection and jailbreak detector. 38 attack patterns, 7 categories. Sub-millisecond |
| `vrf` | $0.001 | Verifiable random function. Provably fair randomness — dice, shuffle, coin flip, 7 modes total |
| `oracle-stakes` | $0.001 | Verifiable predictions with on-chain resolution. Commit predictions, chain judges accuracy |
| `contract-audit` | $0.010 | Automated smart contract security scan — reentrancy, overflow, access control checks |
| `wallet-risk` | $0.002 | Wallet risk scoring — interaction history, contract exposure, flagged addresses |
| `tx-decoder` | $0.001 | Decode raw transaction data into human-readable format |
| `signature-verify` | $0.001 | Verify EIP-712 and EIP-191 signatures on-chain |
| `permit-scanner` | $0.001 | Scan for active token permits and approval risks on a wallet |

### Infrastructure

| Service | Price | Description |
|---------|-------|-------------|
| `directory` | $0.010 | List your x402 service in the THRYX directory. Auto-verified with health check |
| `agent-heartbeat` | $0.001 | Agent liveness and health monitoring. Prove your agent is alive and responsive |
| `webhook-relay` | $0.002 | Relay webhooks to x402 endpoints — bridge Web2 events to agent actions |
| `kv-store` | $0.001 | Key-value storage for agents. Persist state across sessions |
| `event-log` | $0.001 | Append-only event log for agent audit trails |
| `scheduler` | $0.002 | Schedule future x402 calls — cron-like task scheduling for agents |
| `dns-lookup` | $0.001 | DNS resolution and domain information lookup |
| `ipfs-pin` | $0.005 | Pin content to IPFS and return CID |
| `ens-resolve` | $0.001 | Resolve ENS names to addresses and reverse lookups |

### Data and Analytics

| Service | Price | Description |
|---------|-------|-------------|
| `block-explorer` | $0.001 | Query Base block data — transactions, receipts, logs |
| `nft-metadata` | $0.002 | Fetch and parse NFT metadata from any Base collection |
| `token-metadata` | $0.001 | ERC-20 token metadata — name, symbol, decimals, supply, deployment info |
| `abi-decoder` | $0.001 | Decode contract ABI from bytecode or verified source |
| `chain-stats` | $0.001 | Base network statistics — TPS, block time, gas trends |
| `holder-list` | $0.003 | Top holder list for any Base token with percentage breakdowns |
| `transfer-history` | $0.002 | Token transfer history for any wallet or contract address |

---

## How to Call a THRYX x402 Service

All services use the standard x402 protocol flow:

1. **Make a request** to the service URL
2. **Receive a 402 response** with payment details (amount, recipient, network)
3. **Sign a USDC payment** on Base mainnet
4. **Resend the request** with the payment header
5. **Receive the service response**

```
GET https://x402.bankr.bot/0x8f9ec800972258e48d7ebc2640ea0b5e245c2cf5/vision
→ 402 Payment Required
→ { amount: "0.003", token: "USDC", network: "base" }

GET (with X-PAYMENT header containing signed USDC transfer)
→ 200 OK
→ { result: ... }
```

## Service Categories Summary

| Category | Count | Price Range |
|----------|-------|-------------|
| Trading Intelligence | 10 | $0.001 — $0.003 |
| AI Services | 8 | $0.001 — $0.005 |
| Security and Trust | 8 | $0.001 — $0.010 |
| Infrastructure | 9 | $0.001 — $0.010 |
| Data and Analytics | 8 | $0.001 — $0.003 |
| **Total** | **43** | **$0.001 — $0.010** |

---

*Last updated: 2026-04-05*
