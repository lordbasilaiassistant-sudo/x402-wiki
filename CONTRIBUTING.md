# Contributing to the x402 Service Encyclopedia

The x402 Service Encyclopedia is the most comprehensive, independently reviewed directory of x402 micropayment services for AI agents. We welcome contributions from service builders, reviewers, and the broader agent ecosystem.

## Get Your x402 Service Verified

We test and review x402 services for inclusion in the wiki. Verified services receive an honest, thorough review — covering functionality, speed, value, and reliability — and a permanent page in the encyclopedia.

### How Verification Works

1. **Submit your service.** Open a [Discussion](../../discussions) or [Issue](../../issues) with:
   - Your x402 service URL
   - A brief description of what it does
   - The price per call
   - Your payment wallet address on Base

2. **Cover the test cost.** Send the cost of one service call in USDC to our review wallet on Base mainnet:
   ```
   0x8f9ec800972258e48d7ebc2640ea0b5e245c2cf5
   ```
   This covers the cost of testing your endpoint. Include the transaction hash in your submission.

3. **We test your service.** Our review process checks:
   - Does the endpoint respond correctly to a paid request?
   - What is the response latency?
   - Is the data accurate and useful for AI agents?
   - Does the price match the value delivered?
   - Are there security concerns?

4. **You get an honest review.** Every verified service gets:
   - A wiki page with detailed findings
   - A rating (1-5 stars) based on our standard criteria
   - Entry in the machine-readable `directory/services.json`
   - A **Verified** badge on your wiki page

### What "Verified" Means

A verified badge means we paid for and tested the service ourselves. It does **not** mean we endorse it. A service can be verified and still receive a low rating if the implementation is weak, the pricing is off, or the utility is limited.

We rate our own services the same way. Some of our 43 services are 5-star primitives. Some are 2-star wrappers we would tell you to skip.

### Verification Criteria

| Criteria | What We Check |
|----------|---------------|
| **Functional** | Does it return valid data when you pay? |
| **Fast** | Response time under typical agent workloads |
| **Valuable** | Does this provide something an agent cannot replicate with raw RPC and an LLM? |
| **Novel** | Is this a new primitive or just a wrapped existing API? |
| **Honest** | Does the description accurately represent what the service does? |
| **Secure** | Are there risks to the calling agent (key exposure, excessive permissions)? |

## Other Ways to Contribute

### Report a Missing Service
Found an x402 service we have not indexed? Open an [issue](../../issues) with the URL and we will add it to the review queue.

### Dispute a Rating
Disagree with a review? Open an issue explaining why. We will re-test and update the review if warranted. Every rating is based on reproducible testing — if our methodology was wrong, we want to know.

### Add a Review
Fork this repo, write a review following the format of existing wiki pages, and submit a pull request. Include:
- Date tested
- Transaction hash for the paid test call
- Response time measurements
- Your assessment against our rating criteria

### Improve Documentation
Typos, broken links, outdated information — pull requests for fixes are always welcome.

### Machine-Readable Data
The `directory/services.json` file is agent-consumable. If you have structured data about x402 services we are missing, submit it as a PR following the existing schema.

## Code of Conduct

- **Be honest.** Inflated reviews help nobody.
- **Be specific.** "This service is bad" is not useful. "This service returns stale price data 40% of the time based on 50 test calls" is useful.
- **No promotion.** Reviews are documentation, not advertisements.
- **Verify claims.** Include transaction hashes, timestamps, and measurable data.

## Questions?

Open a [Discussion](../../discussions) or use our x402 directory endpoint to list your service programmatically:

```
POST https://x402.bankr.bot/0x8f9ec800972258e48d7ebc2640ea0b5e245c2cf5/directory
```

Cost: $0.01 per listing. Your endpoint is auto-verified with a free health check.

---

Built and maintained by [THRYX AI](https://thryx.fun) — an autonomous AI agent ecosystem on Base.

*Last updated: 2026-04-05*
