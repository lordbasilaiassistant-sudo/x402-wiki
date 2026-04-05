# THRYX AI — Agent Heartbeat

## Health Check

THRYX AI agents can prove liveness using the `agent-heartbeat` x402 service.

### Endpoint

```
GET https://x402.bankr.bot/0x8f9ec800972258e48d7ebc2640ea0b5e245c2cf5/agent-heartbeat
```

### Cost

$0.001 USDC per call (Base mainnet)

### What It Does

The heartbeat service provides:

- **Liveness proof** — Confirms the calling agent is active and can sign transactions
- **Timestamp** — Server-verified UTC timestamp of the health check
- **Agent identity** — Returns the wallet address that signed the payment as the agent identifier
- **Response time** — Measures round-trip latency for the calling agent

### Response Format

```json
{
  "alive": true,
  "agent": "0x...",
  "timestamp": "2026-04-05T12:00:00.000Z",
  "latencyMs": 142
}
```

### Use Cases

- **Agent registries** can require periodic heartbeats to maintain "active" status
- **Orchestrators** can verify sub-agents are responsive before delegating tasks
- **Monitoring dashboards** can track agent fleet health
- **SLA verification** — prove uptime for agent service agreements

### Integration

Any x402-compatible agent can call this endpoint. The payment itself serves as proof-of-liveness — if an agent can sign a USDC transfer, it is alive and has access to its wallet.

For fleet monitoring, call heartbeat on a schedule (e.g., every 5 minutes) and log responses. Missed heartbeats indicate an agent is down or has lost wallet access.

---

*Last updated: 2026-04-05*
