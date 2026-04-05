# x402 Integration Guide

## Calling x402 Services

### Using Bankr CLI (Easiest)

```bash
# Install
npm install -g @bankr/cli
bankr login --api-key YOUR_BANKR_KEY

# Call any x402 service
bankr x402 call "https://x402.bankr.bot/0x.../service-name" \
  -X POST -d '{"field":"value"}' --yes
```

The CLI handles the full 402 → payment → retry flow automatically.

### Using JavaScript (x402-fetch)

```javascript
import { wrapFetch } from "x402-fetch";

// Wrap fetch with x402 payment handling
const x402fetch = wrapFetch(fetch, {
  wallet: yourWallet,        // ethers.js Wallet instance
  network: "base",
  facilitator: "https://api.bankr.bot"
});

// Now use it like regular fetch — payments happen automatically
const response = await x402fetch(
  "https://x402.bankr.bot/0x8f9ec800972258e48d7ebc2640ea0b5e245c2cf5/vision",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image: "https://example.com/photo.jpg" })
  }
);
const data = await response.json();
```

### Using Raw HTTP (Any Language)

Step 1: Make the initial request
```
POST https://x402.bankr.bot/0x.../service-name
Content-Type: application/json

{"your":"input"}
```

Step 2: Parse the 402 response to get payment details
```json
{
  "x402Version": 1,
  "accepts": [{
    "maxAmountRequired": "3000",
    "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    "payTo": "0x8f9ec800972258e48d7ebc2640ea0b5e245c2cf5",
    "network": "base"
  }]
}
```

Step 3: Sign a USDC transfer for the amount to the payTo address

Step 4: Resend with payment proof
```
POST https://x402.bankr.bot/0x.../service-name
Content-Type: application/json
X-PAYMENT: {"signature":"0x...","amount":"3000","token":"0x833589...","recipient":"0x8f9e..."}

{"your":"input"}
```

Step 5: Receive 200 response with data

## Service Discovery

### Programmatic (x402 directory endpoint)
```bash
# Get all THRYX services as JSON
bankr x402 call "https://x402.bankr.bot/0x8f9ec800972258e48d7ebc2640ea0b5e245c2cf5/directory" \
  -X POST -d '{"action":"list"}' --yes
```

### From OpenClaw SKILL.md
Parse the HTML comments in `OpenClaw/thryx/SKILL.md`:
```html
<!-- x402-service: {"name":"vision","endpoint":"https://...","price":"0.003","method":"POST","input":{"image":"string"}} -->
```

### From services.json
Read `directory/services.json` in this repo for the full structured catalog.

## Chaining Services

Chain multiple x402 calls for complex workflows:

### Pre-Trade Analysis ($0.014)
```
1. contract-scan ($0.001)  → Is the token safe?
2. price-oracle ($0.002)   → What's the price history?
3. pool-scorer ($0.01)     → Is the pool healthy?
4. gas-forecast ($0.001)   → What will the trade cost?
```

### Agent Safety Check ($0.003)
```
1. prompt-guard ($0.001)   → Is this input safe?
2. wallet-risk ($0.001)    → Is this counterparty trustworthy?
3. agent-score ($0.001)    → What's the agent's trust tier?
```

### Full Wallet Intelligence ($0.003)
```
1. wallet-profile ($0.001) → Who is this wallet?
2. portfolio ($0.001)      → What do they hold?
3. wallet-risk ($0.001)    → How trustworthy?
```

## Common Patterns

### Error Handling
```javascript
const res = await x402fetch(url, opts);
if (res.status === 402) {
  // Payment failed or insufficient USDC
  const details = await res.json();
  console.log("Need:", details.accepts[0].maxAmountRequired, "USDC units");
}
if (res.status === 400) {
  // Bad input
  const err = await res.json();
  console.log("Fix:", err.error);
}
```

### Cost Tracking
```javascript
let totalSpent = 0;
const tracked = async (url, opts, price) => {
  const res = await x402fetch(url, opts);
  if (res.ok) totalSpent += price;
  return res;
};
```

## Pricing Reference

| Tier | Price Range | Examples |
|------|-------------|---------|
| Micro | $0.0001-0.001 | addr-type, base-rpc, gas-oracle |
| Standard | $0.001-0.01 | Most services |
| Premium | $0.01-1.00 | pool-scorer, contract-audit |
| High-value | $1-1000 | agent-identity, moltbook-promo, rich-list-join |

All prices in USDC. No hidden fees. What the 402 says is what you pay.
