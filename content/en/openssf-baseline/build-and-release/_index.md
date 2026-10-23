---
title: "Build and Release"
linkTitle: "Build and Release"
description: "OpenSSF Baseline Build and Release controls (OSPS-BR) and how they connect to Raven Phase 1 and Phase 2."
weight: 20
---

Build and Release in the [OpenSSF Baseline](https://baseline.openssf.org/versions/2026-02-19.html) covers how a project compiles, packages, and distributes software. The OSPS-BR family asks teams to keep untrusted input away from privileged pipeline steps, identify every release, protect transport channels, describe what changed, ingest dependencies with standard tools, attach signatures or hashes, and keep secrets out of source control.

Those expectations line up with Raven’s [Phase 2: Build and Deploy](/docs/phase-2/) work on build integrity, artifact provenance, and policy gates, and with the secrets and provenance practices in [Phase 1: Code and Prebuild](/docs/phase-1/).

## OSPS-BR control families

### OSPS-BR-01 — Untrusted input in pipelines

Treat branch names, commit messages, tags, pull request titles, and similar metadata as untrusted. Validate or sanitize those values before a workflow uses them. Isolate untrusted code snapshots from privileged credentials, especially jobs that run before a collaborator reviews the change. At higher maturity, apply the same hygiene to inputs supplied by trusted collaborators on manual workflow runs. Related Raven pages: [Phase 2](/docs/phase-2/) and [1.1 Prepare the Organization](/docs/phase-1/ssdf/ssdf-po/).

### OSPS-BR-02 — Unique version identifiers

Give every official release a unique version, using a scheme the project can keep consistent (for example SemVer, CalVer, or a commit identifier). At Level 3, associate each asset in the release with that identifier or with its own unique id so consumers can tell artifacts apart. Related Raven pages: [Phase 2](/docs/phase-2/) and [1.2 Protect the Software](/docs/phase-1/ssdf/ssdf-ps/).

### OSPS-BR-03 — Encrypted channels

Official project and distribution URLs should be reachable only over authenticated, encrypted channels such as HTTPS or SSH. Downloads should resist adversary-in-the-middle substitution, whether through TLS, signed releases, or a trusted package registry. Related Raven pages: [Phase 1](/docs/phase-1/) and [Phase 2](/docs/phase-2/).

### OSPS-BR-04 — Release changelogs

Each official release should include a human-readable log of functional and security changes, not only raw commit subjects. Call out security impact and who should care about the change. Related Raven pages: [2.3 Produce Well-Secured Software](/docs/phase-2/ssdf/ssdf-pw/) and [1.2 Protect the Software](/docs/phase-1/ssdf/ssdf-ps/).

### OSPS-BR-05 — Standardized dependency tooling

When the pipeline pulls dependencies, use the ecosystem’s usual package managers, lockfiles, or manifests instead of ad-hoc copies. That makes builds repeatable and gives later SCA and SBOM steps a single source of truth. Related Raven pages: [Phase 1 dependency scanning](/docs/phase-1/) and [Phase 2](/docs/phase-2/).

### OSPS-BR-06 — Signatures and hashes

Sign release assets, or list each asset’s cryptographic hash in a signed manifest. Common options include Sigstore, GPG, SLSA provenance, or verification summary attestations. Consumers can then check that the bits they fetched match what the project published. Related Raven pages: [Phase 2](/docs/phase-2/) and [PS.2 software release integrity](/docs/phase-1/ssdf/ssdf-ps/).

### OSPS-BR-07 — Secrets and credentials

Keep unencrypted secrets out of the version control system, using ignore rules, pre-commit checks, and scanning. At Level 3, document how the project stores, accesses, and rotates credentials so they are not hard-coded in the tree. Related Raven pages: [1.1 Prepare the Organization](/docs/phase-1/ssdf/ssdf-po/) and [1.2 Protect the Software](/docs/phase-1/ssdf/ssdf-ps/).

## Related Raven routes

- [OpenSSF Baseline overview](/openssf-baseline/)
- [Vulnerability Management](/openssf-baseline/vulnerability-management/)
- [External Frameworks](/openssf-baseline/external-frameworks/)
- [Phase 1: Code and Prebuild](/docs/phase-1/)
- [Phase 2: Build and Deploy](/docs/phase-2/)
- [NIST AI Risk Management Framework](/nist-ai-rmf/)
- [EU Cyber Resilience Act](/cyber-resilience-act/)
