# x402 Service Creation Workflow

## What This Does
Create, test, and deploy a paid x402 micropayment service that other agents can call.

## Prerequisites
- Bankr account with API key — get one at bankr.bot/api
- API key must have Agent API and Token Launch enabled, and NOT be read-only
- Bankr CLI installed: `npm install -g @bankr/cli`
- Login: `bankr login --api-key YOUR_KEY`

## Step 1: Initialize

```bash
bankr x402 init
```

Creates `x402/` directory and `bankr.x402.json` config file.

## Step 2: Create Your Handler

Create `x402/YOUR-SERVICE/index.ts`:

```typescript
export default async function handler(req: Request): Promise<Response> {
  // Validate input
  if (req.method !== "POST") {
    return Response.json({ error: "POST required." }, { status: 405 });
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }

  // Your logic here — can make outbound HTTP calls
  // Available: fetch(), crypto, Buffer, setTimeout
  // NOT available: fs, require, node modules

  return Response.json({ result: "your data" });
}
```

### Handler Rules
- Must be self-contained TypeScript — no require() or import from local files
- Can import from npm packages if you add a package.json in the service dir
- 30-second execution timeout
- 256MB memory limit
- Can make outbound HTTP requests (fetch)
- Environment variables available via process.env

## Step 3: Add to Config

In `bankr.x402.json`:
```json
{
  "services": {
    "your-service": {
      "description": "What it does — be specific, agents read this",
      "price": "0.001",
      "methods": ["POST"],
      "schema": {
        "input": {
          "type": "object",
          "properties": {
            "query": {"type": "string", "description": "What to search for"}
          },
          "required": ["query"]
        },
        "output": {
          "type": "object",
          "properties": {
            "result": {"type": "string", "description": "The answer"}
          }
        }
      }
    }
  }
}
```

## Step 4: Set Environment Variables (if needed)

```bash
bankr x402 env set MY_SECRET=value
```

Variables are encrypted at rest and available as `process.env.MY_SECRET` in your handler.

## Step 5: Deploy

```bash
bankr x402 deploy your-service
```

Returns the live URL: `https://x402.bankr.bot/YOUR_WALLET/your-service`

## Step 6: Test With Real Payment

```bash
bankr x402 call "https://x402.bankr.bot/YOUR_WALLET/your-service" \
  -X POST -d '{"query":"test"}' --yes
```

Requires USDC in your wallet to pay yourself.

## Quality Checklist

Before deploying, verify:
- [ ] Handles null/undefined/empty input without crashing
- [ ] Handles wrong types (number instead of string) without crashing
- [ ] Handles missing required fields with clear error message
- [ ] Returns proper HTTP status codes (400 for bad input, 405 for wrong method)
- [ ] All numbers as full decimal strings (never scientific notation like 1.23e-8)
- [ ] Response time under 25 seconds (leave 5s buffer for the 30s timeout)
- [ ] Description is accurate and specific

## Pricing Guide

| Service Type | Suggested Price | Why |
|-------------|----------------|-----|
| Free API wrapper | $0.001 | Low value, high volume |
| RPC data aggregation | $0.002-0.01 | Medium value |
| AI-powered analysis | $0.003-0.01 | Groq/LLM costs ~$0.0001 |
| Unique primitive | $0.005-0.05 | High value, novel capability |
| Premium/outcome | $1-100 | Delivers measurable results |

## Revenue

Your earnings appear in: `bankr x402 list`
Platform fee: 5% (after first 1,000 free requests/month)

## Verified Working
This workflow was tested on April 5, 2026 with 43 services successfully deployed.
