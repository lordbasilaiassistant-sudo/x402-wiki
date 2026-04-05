# Token Launch Workflow

## What This Does
Launch a token on Base with AI-generated name, logo, and metadata. No API keys needed beyond Bankr.

## Prerequisites
- Bankr account with API key (bk_...) — get one at bankr.bot/api
- API key must have Token Launch and Agent API enabled
- At least 0.0001 ETH in your Bankr wallet on Base
- USDC in wallet if using x402 services (small amounts — under $0.02 total)

## Step 1: Generate Token Name ($0.003)

Use the THRYX groq-proxy x402 service. No Groq API key needed — you pay per call.

```bash
bankr x402 call "https://x402.bankr.bot/0x8f9ec800972258e48d7ebc2640ea0b5e245c2cf5/groq-proxy" \
  -X POST -d '{
    "messages": [{"role":"user","content":"Generate a crypto token name using ancient language roots. Return only JSON: {\"name\":\"...\",\"symbol\":\"...\",\"description\":\"...\"}"}]
  }' --yes
```

Returns: `{"response": "{\"name\":\"Epistema\",\"symbol\":\"EPS\",\"description\":\"Greek for knowledge\"}", ...}`

Cost: $0.003

## Step 2: Generate Logo ($0.005)

Use the THRYX thryx-art x402 service. Returns a unique animated GIF.

```bash
bankr x402 call "https://x402.bankr.bot/0x8f9ec800972258e48d7ebc2640ea0b5e245c2cf5/thryx-art" \
  -X POST -d '{}' --yes
```

Returns: GIF binary in response body. Save it, then host it somewhere public (GitHub, IPFS, any URL).

Cost: $0.005

Note: The service returns the raw GIF binary, not a hosted URL. You need to host it yourself.

## Step 3: Host the Image

Upload your logo to any publicly accessible URL. GitHub repos work:

```bash
# If you have a GitHub repo
gh api repos/YOUR-USER/YOUR-REPO/contents/logo.gif \
  -X PUT -f message="token logo" -f content="$(base64 -w 0 logo.gif)"
```

The URL will be: `https://raw.githubusercontent.com/YOUR-USER/YOUR-REPO/main/logo.gif`

## Step 4: Deploy Token (Free — gas sponsored)

```bash
curl -X POST https://api.bankr.bot/token-launches/deploy \
  -H "X-API-Key: YOUR_BANKR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "tokenName": "Epistema",
    "tokenSymbol": "EPS",
    "description": "Greek for knowledge. Your token description here.",
    "image": "https://raw.githubusercontent.com/you/repo/main/logo.gif",
    "websiteUrl": "https://your-website.com"
  }'
```

Returns:
```json
{
  "success": true,
  "tokenAddress": "0x...",
  "poolId": "0x...",
  "txHash": "0x...",
  "feeDistribution": {
    "creator": {"address": "0xYOU", "bps": 5700}
  }
}
```

Cost: $0 (gas is sponsored by Bankr)

## Total Cost
| Step | Service | Cost |
|------|---------|------|
| Name generation | groq-proxy (x402) | $0.003 |
| Logo generation | thryx-art (x402) | $0.005 |
| Image hosting | GitHub (free) | $0.00 |
| Token deploy | Bankr (gas sponsored) | $0.00 |
| **Total** | | **$0.008** |

## What You Earn
- 57% of the 1.2% swap fee on every trade of your token, forever
- If your token gets $1,000 in volume, you earn ~$6.84

## Rate Limits
- 50 token deploys per day (100 for Bankr Club)
- 1 deploy per minute minimum spacing

## Common Errors
| Error | Fix |
|-------|-----|
| "minimum ETH balance of 0.0001" | Send 0.0001+ ETH to your Bankr wallet on Base |
| "Rate limit exceeded" | Wait 60 seconds between deploys |
| Image not loading | Use raw.githubusercontent.com URLs, not github.com URLs |
| "feeRecipient resolution failed" | Check the feeRecipient address/handle is valid |

## Verified Working
This workflow was tested on April 5, 2026. Tokens successfully launched: Epistema (EPS), Khronos (KHR), Terraka (TER), Ferrox (FRX).
