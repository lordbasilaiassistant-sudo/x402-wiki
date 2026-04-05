# x402 Service Creation Workflow

## What This Does
Create, test, and deploy an x402 micropayment service on Bankr.

## Prerequisites
- Bankr API key with Agent API enabled
- Bankr CLI: `npm install -g @bankr/cli`

## Step 1: Create Handler

Write `x402/YOUR-SERVICE/index.ts`:

```typescript
export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return Response.json({ error: "POST required" }, { status: 405 });
  }
  let body: any;
  try { body = await req.json(); } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Your logic here
  const result = { data: "your response" };

  return Response.json(result);
}
```

## Step 2: Add to Config

In `bankr.x402.json`:
```json
{
  "your-service": {
    "description": "What it does",
    "price": "0.001",
    "methods": ["POST"],
    "schema": {
      "input": { "type": "object", "properties": {} },
      "output": { "type": "object", "properties": {} }
    }
  }
}
```

## Step 3: Set Environment Variables
```bash
bankr x402 env set MY_API_KEY=value
```

## Step 4: Deploy
```bash
bankr x402 deploy your-service
```

## Step 5: Test
```bash
bankr x402 call "https://x402.bankr.bot/YOUR_WALLET/your-service" -X POST -d '{}' --yes
```

## Rules
- Handler must be self-contained TypeScript
- 30 second timeout, 256MB memory
- All numbers as full decimal strings (never scientific notation)
- Test 10+ edge cases before deploying
- Zero crashes required
- Never use localhost — use public endpoints only
