---
title: "OpenSSF Project Security Baseline"
linkTitle: "OpenSSF Baseline"
description: "Project-level security controls from the Open Source Project Security Baseline, connected to the Raven CI/CD guide."
type: docs
layout: docs
cascade:
  type: docs
  layout: docs
weight: 10
---

The [Open Source Project Security (OSPS) Baseline](https://baseline.openssf.org/versions/2026-02-19.html) is a catalog of security criteria that open-source projects can use to show a strong security posture. Controls are grouped by category and by three maturity levels:

- **Level 1** applies to any project, including non-code projects.
- **Level 2** applies to code projects with at least two maintainers and a small set of regular users.
- **Level 3** applies to code projects with a large, consistent user base.

This section of Raven Pipeline Security covers three Baseline categories that sit closest to CI/CD work: Build and Release, Vulnerability Management, and External Frameworks. The pages summarize control families by identifier and point back to the official Baseline text. They are a companion to the existing [CI/CD Security Guide](/docs/), not a replacement for it.

Raven already maps open-source tooling to the NIST Secure Software Development Framework across [Code and Prebuild](/docs/phase-1/), [Build and Deploy](/docs/phase-2/), and [Post Deploy](/docs/phase-3/). The Baseline adds project-governance expectations—how releases are identified and signed, how vulnerabilities are received and published, and how those practices relate to other public frameworks.

## Pages in this section

- [Build and Release](/openssf-baseline/build-and-release/) — OSPS-BR controls for pipeline input, versioning, transport, changelogs, dependencies, signatures, and secrets.
- [Vulnerability Management](/openssf-baseline/vulnerability-management/) — OSPS-VM controls for disclosure, contacts, private reporting, publication, dependency remediation, and application security testing.
- [External Frameworks](/openssf-baseline/external-frameworks/) — the Baseline’s mapped catalogs, including SSDF, CSF, CRA, SLSA, and others.

Official source: [OSPS Baseline, version 2026-02-19](https://baseline.openssf.org/versions/2026-02-19.html).

## Related Raven routes

- [CI/CD Security Guide](/docs/)
- [NIST AI Risk Management Framework](/nist-ai-rmf/)
- [EU Cyber Resilience Act](/cyber-resilience-act/)
