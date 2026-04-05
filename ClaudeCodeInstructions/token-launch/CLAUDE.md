# Token Launch Workflow

## What This Does
Launch a token on Base using x402 services + Bankr. Generates name, art, and deploys.

## Prerequisites
- Bankr API key (bk_...) with token launch enabled
- Groq API key (for name generation)
- At least 0.0001 ETH in Bankr wallet on Base

## Step 1: Generate Token Name
```javascript
// Use Groq to generate a name from ancient language roots
const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
  method: "POST",
  headers: { "Authorization": "Bearer " + GROQ_API_KEY, "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "meta-llama/llama-4-scout-17b-16e-instruct",
    messages: [{ role: "user", content: "Generate a crypto token name using ancient language roots. Return JSON: {name, symbol, description}" }]
  })
});
```

## Step 2: Generate Logo
```bash
# Via thryx-art x402 service
bankr x402 call "https://x402.bankr.bot/0x8f9ec800972258e48d7ebc2640ea0b5e245c2cf5/thryx-art" -X POST -d '{}' --yes
```

## Step 3: Host the Image
Upload to GitHub or any public URL.

## Step 4: Deploy via Bankr
```javascript
const res = await fetch("https://api.bankr.bot/token-launches/deploy", {
  method: "POST",
  headers: { "X-API-Key": BANKR_API_KEY, "Content-Type": "application/json" },
  body: JSON.stringify({
    tokenName: "YourToken",
    tokenSymbol: "SYM",
    description: "What it does",
    image: "https://your-hosted-image-url",
    websiteUrl: "https://your-website"
  })
});
// Returns: { tokenAddress, poolId, txHash, feeDistribution }
```

## Fees
- Token launch: free (gas sponsored by Bankr)
- Creator earns: 57-95% of all swap fees forever
- Min ETH required: 0.0001 on Base
- Rate limit: 50 deploys/day, 1 per minute

## Common Errors
- "minimum ETH balance" - need 0.0001 ETH in Bankr wallet
- "Rate limit exceeded" - wait 60 seconds between deploys
- Image URL 403 - use raw.githubusercontent.com URLs
