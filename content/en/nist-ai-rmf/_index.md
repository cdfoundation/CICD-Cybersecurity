---
title: "NIST AI Risk Management Framework"
linkTitle: "NIST AI RMF"
description: "How the NIST AI RMF functions apply to CI/CD and AI-assisted software delivery."
type: docs
layout: docs
weight: 20
---

The [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) is a voluntary guide for managing risks to people, organizations, and society that come from designing, developing, using, and evaluating AI systems. NIST released AI RMF 1.0 in January 2023 and later published a [Generative AI Profile](https://www.nist.gov/itl/ai-risk-management-framework) (NIST-AI-600-1) for risks that are specific to generative models.

Raven treats AI as an accelerator of existing CI/CD patterns, not as a separate delivery stack. Assistive coding, test generation, review bots, and model-backed release decisions still pass through the same integrity, provenance, access, and monitoring points described in the [CI/CD Security Guide](/docs/).

## The four functions in a pipeline

### Govern

Set roles, policies, and accountability for where AI may change source, pipeline configuration, or production behavior. Decide who can enable model-backed jobs, which data those jobs may see, and how exceptions are recorded. This is the organizational counterpart to [Prepare the Organization](/docs/phase-1/ssdf/ssdf-po/) in Phase 1.

### Map

Inventory where AI enters the path: generated patches, suggested dependency upgrades, automated reviewers, deployment chatops, or models shipped as product features. Record intended use, data sensitivity, and who is affected if the output is wrong or hostile. Mapping keeps AI work visible in [Phase 1](/docs/phase-1/) and [Phase 2](/docs/phase-2/) instead of treating it as an untracked side channel.

### Measure

Put evaluation in front of merge and release. That includes ordinary SAST, SCA, and policy gates plus checks that are specific to model output: prompt or tool-call logs, eval suites, red-team cases, and provenance of the model and training or retrieval data. Measurement is how [Build and Deploy](/docs/phase-2/) and [Build and Release](/openssf-baseline/build-and-release/) stay trustworthy when part of the change was machine-authored.

### Manage

Prioritize findings, roll back bad releases, and feed production signals back to development. [Phase 3: Post Deploy](/docs/phase-3/) already covers runtime detection, DAST, and vulnerability response. For AI features, management also means watching for drift, abuse, and unexpected tool use after the artifact is live.

## What to carry from the existing guide

- Keep generated code and pipeline edits under the same review, signing, and secret-handling rules as human changes. See [Phase 1](/docs/phase-1/) and [OSPS-BR-01 / BR-07](/openssf-baseline/build-and-release/).
- Record which model or agent produced a change when that information is available, so later incident review can follow the same commit-to-artifact trail.
- Treat new classes of vulnerability—prompt injection against pipeline bots, poisoned retrieved context, leaked secrets in model logs—as inputs to the [Respond to Vulnerabilities](/docs/phase-1/ssdf/ssdf-rv/) and [OpenSSF Vulnerability Management](/openssf-baseline/vulnerability-management/) practices.

Official starting points: the [NIST AI RMF page](https://www.nist.gov/itl/ai-risk-management-framework), the [AI RMF 1.0](https://www.nist.gov/itl/ai-risk-management-framework) download, and the Trustworthy and Responsible AI Resource Center linked from that site.

## Related Raven routes

- [CI/CD Security Guide](/docs/)
- [Phase 1: Code and Prebuild](/docs/phase-1/)
- [Phase 2: Build and Deploy](/docs/phase-2/)
- [Phase 3: Post Deploy](/docs/phase-3/)
- [OpenSSF Baseline](/openssf-baseline/)
- [EU Cyber Resilience Act](/cyber-resilience-act/)
