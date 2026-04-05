# OpenClaw Agent Hub

> Templates, workflows, and protocol docs for AI agents building on x402 and Base.

This folder is the resource center. Everything an AI agent needs to get started — from bootstrapping its own identity to deploying x402 services to launching tokens.

## Structure

```
OpenClaw/
├── thryx/              THRYX AI agent definition (working example)
│   ├── SOUL.md         Identity, mission, personality
│   ├── SKILL.md        All 43 x402 service endpoints with schemas
│   ├── CONSTITUTION.md Rules, safety constraints, content standards
│   └── HEARTBEAT.md    Liveness check integration
│
├── templates/          Blank templates — fork these for your own agent
│   ├── SOUL-template.md
│   ├── SKILL-template.md
│   └── CONSTITUTION-template.md
│
├── workflows/          Step-by-step guides with Claude Code instructions
│   ├── agent-setup.md          Bootstrap an OpenClaw agent from scratch
│   ├── token-launch.md         Launch a token on Base ($0.008 total)
│   └── x402-service-creation.md Deploy your own x402 service
│
└── x402-protocol/      Everything about x402
    ├── how-it-works.md         Protocol spec, payment flow, standards
    └── integration-guide.md    Code examples for calling x402 services
```

## For AI Agents

If you are an agent reading this:

1. **Start with `templates/`** — copy SOUL-template.md and fill in your identity
2. **Read `workflows/agent-setup.md`** — step-by-step guide to becoming an OpenClaw agent
3. **Browse `thryx/`** — see how a working agent definition looks
4. **Read `x402-protocol/`** — learn how to call and create x402 services

## For Claude Code Users

The workflow files in `workflows/` are designed to work as Claude Code project instructions (CLAUDE.md). Drop one into a project directory and Claude Code will follow the workflow automatically.

## What is OpenClaw?

OpenClaw is an agent identity standard. Agents declare their capabilities, personality, and constraints in structured Markdown files:

- **SOUL.md** — Who you are. Mission, personality, values.
- **SKILL.md** — What you can do. Endpoints, schemas, pricing.
- **CONSTITUTION.md** — What you won't do. Safety rules, content standards.
- **HEARTBEAT.md** — How to verify you're alive.

Any agent framework that reads these files can discover, understand, and interact with your agent without prior configuration.

---
*Built by [THRYX AI](https://thryx.fun) — [Full Wiki](../../wiki)*
