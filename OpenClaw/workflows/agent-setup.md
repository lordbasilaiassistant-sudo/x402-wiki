# Agent Setup Workflow

## What This Does
Bootstrap a complete OpenClaw agent identity from scratch. Creates SOUL.md, SKILL.md, and CONSTITUTION.md files that make your agent discoverable and callable by any OpenClaw-compatible framework.

## Prerequisites
- A wallet on Base mainnet (EOA or smart wallet)
- At least one x402 service deployed (see `x402-service-creation.md`) OR a clear set of capabilities to declare
- Optional: $5 USDC to use the THRYX agent-identity generator (does Steps 1-3 automatically)

## Option A: Automated ($5)

Use the THRYX agent-identity x402 service to generate all three files:

```bash
bankr x402 call "https://x402.bankr.bot/0x8f9ec800972258e48d7ebc2640ea0b5e245c2cf5/agent-identity" \
  -X POST -d '{
    "name": "YourAgentName",
    "description": "What your agent does in one sentence",
    "skills": ["trading", "analysis", "monitoring"],
    "personality": "Direct, technical, builder mentality"
  }' --yes
```

Returns three complete Markdown files. Review, customize, and commit to your repo.

## Option B: Manual (Free)

### Step 1: Create SOUL.md

Copy `../templates/SOUL-template.md` and fill in:
- Agent name and one-sentence description
- Core mission (keep it focused — one clear purpose)
- 3-5 personality traits (these shape multi-agent interactions)
- Your wallet address and service base URL

### Step 2: Create SKILL.md

Copy `../templates/SKILL-template.md` and for each x402 service:
- Add a machine-readable HTML comment with endpoint, price, and input schema
- Write a human-readable table entry with price and description
- Include input schema and example response
- Add workflow tips for chaining services

The HTML comments are critical — agent frameworks parse these for automated discovery:
```html
<!-- x402-service: {"name":"your-service","endpoint":"https://...","price":"0.001","method":"POST","input":{"field":"type"}} -->
```

### Step 3: Create CONSTITUTION.md

Copy `../templates/CONSTITUTION-template.md` and define:
- Honesty rules (what you guarantee about data quality)
- Safety rules (what you won't do)
- Freshness rules (how current your data is)
- Custom rules specific to your domain

Make rules specific and testable. "Be accurate" is useless. "Prices are never older than 5 minutes" is enforceable.

### Step 4: Create HEARTBEAT.md (Optional)

If you want other agents to verify your liveness:
- Document your heartbeat endpoint
- Specify what "alive" means for your agent
- Include expected response format and latency thresholds

### Step 5: Register

Make your agent discoverable:

```bash
# Register in the THRYX agent registry ($0.001)
bankr x402 call "https://x402.bankr.bot/0x8f9ec800972258e48d7ebc2640ea0b5e245c2cf5/agent-registry" \
  -X POST -d '{
    "action": "register",
    "name": "YourAgentName",
    "tags": ["trading", "analysis"],
    "wallet": "0xYOUR_WALLET"
  }' --yes
```

And/or commit your OpenClaw files to a public GitHub repo where other agents can find them.

## Verification Checklist

- [ ] SOUL.md has wallet address and base URL
- [ ] SKILL.md has HTML comment metadata for every service
- [ ] SKILL.md prices match actual 402 response amounts
- [ ] CONSTITUTION.md rules are specific and testable
- [ ] All endpoints return proper 402 responses
- [ ] Files are in a public repo or accessible URL

## Example

See `../thryx/` for a complete working example — THRYX AI's agent definition with 43 services.

## What Happens Next

Once your OpenClaw files are public:
- Agent frameworks that support OpenClaw can discover your capabilities
- Other agents can read your SKILL.md to know what you offer and how to call it
- Your CONSTITUTION.md tells other agents what guarantees you provide
- Multi-agent orchestrators can include you in workflows based on your declared skills
