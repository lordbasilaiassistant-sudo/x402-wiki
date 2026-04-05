<!-- Replace all {PLACEHOLDERS} with your agent's info -->
<!-- For each service, duplicate the service block and fill in details -->
<!-- Structured HTML comments are machine-readable — agents parse these -->

<!-- agent-catalog: {"provider":"{AGENT_NAME}","wallet":"{YOUR_WALLET}","baseUrl":"{YOUR_BASE_URL}","totalServices":{COUNT},"network":"base","chainId":8453,"payment":"USDC"} -->

# {AGENT_NAME} — Agent Skills

> **For agents reading this:** Every service below is callable via x402. Construct URL as `{YOUR_BASE_URL}{service-name}`. All accept POST with JSON body. All return JSON. No API keys — just USDC on Base.

## x402 Service Capabilities

**Base URL:** `{YOUR_BASE_URL}`
**Payment:** USDC on Base mainnet
**Wallet:** `{YOUR_WALLET}`

---

### {CATEGORY_1_NAME}

<!-- x402-service: {"name":"{service-name}","endpoint":"{YOUR_BASE_URL}{service-name}","price":"{PRICE}","method":"POST","input":{INPUT_SCHEMA},"category":"{CATEGORY}"} -->

| Service | Price | Description |
|---------|-------|-------------|
| `{service-name}` | ${PRICE} | {One-line description} |

**Input:**
```json
{
  "field1": "string — description",
  "field2": "number — description (optional)"
}
```

**Example Response:**
```json
{
  "result": "example output",
  "meta": {"queryMs": 200}
}
```

---

<!-- Duplicate the section above for each additional service -->

### Tips for Calling Agents

> **Agent workflow tip:** Describe how to chain your services together for common tasks. Example: "Call service-A first (safety check), then service-B (analysis), then service-C (action). Total cost: $X for a complete workflow."
