---
title: "EU Cyber Resilience Act"
linkTitle: "Cyber Resilience Act"
description: "How the EU Cyber Resilience Act relates to Raven’s CI/CD guide, OpenSSF vulnerability management, and product lifecycle security."
type: docs
layout: docs
weight: 30
---

The [EU Cyber Resilience Act (CRA)](https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act) is Regulation (EU) 2024/2847. It sets horizontal cybersecurity requirements for products with digital elements placed on the EU market—hardware and software that can connect, from consumer devices to application software. Manufacturers are expected to treat security as a lifecycle duty: design and development, vulnerability handling after release, and security updates for the support window they declare.

The Act entered into force on 10 December 2024. Reporting duties apply from 11 September 2026. The main product obligations apply from 11 December 2027. Some product classes that matter more for cybersecurity may need assessment by a notified body. Products that meet the rules carry CE marking, and national market-surveillance authorities enforce them.

This page is orientation for CI/CD and open-source stewards. It is not legal advice and it does not determine whether a given project is in scope.

## What the CRA asks of a delivery pipeline

- **Secure design and development.** Controls during coding, build, and release—access, integrity, dependency hygiene, and artifact provenance—are the practical counterparts of Raven [Phase 1](/docs/phase-1/) and [Phase 2](/docs/phase-2/), and of [OpenSSF Build and Release](/openssf-baseline/build-and-release/).
- **Vulnerability handling.** Manufacturers must be able to receive reports, assess impact, and act during the product’s support life. That matches [OpenSSF Vulnerability Management](/openssf-baseline/vulnerability-management/) (OSPS-VM-01 through VM-06) and the Respond to Vulnerabilities pages in [Phase 1](/docs/phase-1/ssdf/ssdf-rv/), [Phase 2](/docs/phase-2/ssdf/ssdf-rv/), and [Phase 3](/docs/phase-3/ssdf/ssdf-rv/).
- **Security updates.** Users need a supported path to patched versions. [Phase 3](/docs/phase-3/) covers the post-deploy loop that detects newly disclosed issues in running systems and feeds fixes back into the pipeline.
- **Documentation and component visibility.** Expectations around documentation and software bills of materials sit next to early SBOM generation in [Phase 1](/docs/phase-1/) and release metadata in [OSPS-BR-02, BR-04, and BR-06](/openssf-baseline/build-and-release/).

## Open-source stewards

The CRA distinguishes commercial manufacturers from certain open-source software stewards that support widely used projects without placing a product on the market in the manufacturer sense. Steward duties are narrower and focus on collaboration around vulnerabilities rather than full manufacturer conformity. Projects should read the regulation and the Commission’s implementation guidance to see which role, if any, applies. Raven’s [vulnerability-management](/openssf-baseline/vulnerability-management/) page is the closest technical companion for either role.

## How this page connects to the rest of the site

The existing guide already mentions the CRA on the [docs home](/docs/) as a public-policy driver. This route collects the pipeline-facing themes and links them to the OpenSSF Baseline and to the [NIST AI Risk Management Framework](/nist-ai-rmf/) for products or pipelines that include AI components.

Official starting points: the [Commission CRA policy page](https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act) and [Regulation (EU) 2024/2847](https://eur-lex.europa.eu/eli/reg/2024/2847/oj).

## Related Raven routes

- [CI/CD Security Guide](/docs/)
- [Phase 3: Post Deploy](/docs/phase-3/)
- [OpenSSF Vulnerability Management](/openssf-baseline/vulnerability-management/)
- [OpenSSF Build and Release](/openssf-baseline/build-and-release/)
- [OpenSSF External Frameworks](/openssf-baseline/external-frameworks/)
- [NIST AI Risk Management Framework](/nist-ai-rmf/)
