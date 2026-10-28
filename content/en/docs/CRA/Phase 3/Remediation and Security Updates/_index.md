---
title: "Remediation and Security Update - Post Deployment"
linkTitle: "Remediation and Security Update"
weight: 10
layout: docs
description: >
 Remediation and Security Update for Post Deployment Activities.
---

### Remediation and Security Update - Phase 3: Post Deployment

**Objective:** Address identified vulnerabilities without delay and securely distribute appropriate security updates to affected products.

The CRA requires manufacturers to address and remediate vulnerabilities in relation to the risks they pose to their products. Remediation may involve updating vulnerable dependencies, modifying application code, applying configuration changes, replacing affected components, or implementing other appropriate mitigation measures.

Where technically feasible, security updates must be provided separately from functionality updates. The CRA also establishes requirements for securely distributing security updates and making them available without delay and, subject to specified exceptions, free of charge.

For DevOps teams, vulnerability remediation should connect Post Deployment monitoring with development and build workflows. When a vulnerability is identified, teams should evaluate available fixes, determine compatibility with affected products, create remediation changes, and validate those changes through automated build and security testing.

Remediation workflows should support dependency upgrades, application changes, regression testing, release approval, and controlled deployment of security updates.

Where applicable, organizations should maintain records demonstrating that fixes were developed, tested, released, and communicated to affected users. Deployment verification provides additional operational assurance that updated software has reached the intended environments.

Automating these workflows can reduce remediation delays while maintaining required security reviews and release authorization controls.

#### CRA Requirements and Open-Source Tooling

| CRA Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| Annex I, Part II(2) | Vulnerability remediation | Investigate identified vulnerabilities and implement appropriate fixes or mitigating measures without delay, based on product risk. | [Renovate](https://github.com/renovatebot/renovate), [DefectDojo](https://defectdojo.com/), [Ortelius](https://ortelius.io/) |
| Article 13(6) | Third-party vulnerability remediation coordination | Coordinate identified component vulnerabilities and applicable fixes with upstream maintainers. | [GitHub Security Advisories](https://docs.github.com/en/code-security/security-advisories), [Renovate](https://github.com/renovatebot/renovate) |
| Annex I, Part II(2) | Dependency and application updates | Update vulnerable dependencies or application code and validate remediation through automated builds and tests. | [Renovate](https://github.com/renovatebot/renovate), [Trivy](https://trivy.dev/), [Grype](https://github.com/anchore/grype) |
| Annex I, Part II(2) | Separation of security and functionality updates | Maintain workflows capable of delivering security fixes independently of unrelated functionality changes where technically feasible. | [Renovate](https://github.com/renovatebot/renovate), [Argo CD](https://argo-cd.readthedocs.io/), [Flux](https://fluxcd.io/) |
| Annex I, Part I(2)(c) | Security update capability | Support product mechanisms for receiving and applying appropriate security updates. | [The Update Framework (TUF)](https://theupdateframework.io/), [Sigstore Cosign](https://github.com/sigstore/cosign) |
| Annex I, Part II(7) | Secure update distribution | Verify the authenticity and integrity of security updates before delivery or installation. | [The Update Framework (TUF)](https://theupdateframework.io/), [Sigstore Cosign](https://github.com/sigstore/cosign), [Harbor](https://goharbor.io/) |
| Annex I, Part II(8) | Timely update availability and user advisories | Distribute available security fixes without delay, subject to CRA requirements, and communicate relevant user actions. | [Argo CD](https://argo-cd.readthedocs.io/), [Flux](https://fluxcd.io/), [GitHub Security Advisories](https://docs.github.com/en/code-security/security-advisories) |
| Article 13(8)–(9) | Support-period security maintenance | Maintain vulnerability handling capabilities and ensure security updates remain available for the applicable period. | [Harbor](https://goharbor.io/), [Ortelius](https://ortelius.io/) |
| Annex I, Part II(2)–(3) | Remediation validation | Reassess vulnerability status after remediation and verify that updated software addresses the identified security issue. | [Trivy](https://trivy.dev/), [Grype](https://github.com/anchore/grype), [OWASP Dependency-Track](https://dependencytrack.org/) |

#### Expected Compliance Evidence

- Vulnerability remediation records and assigned responsibilities.
- Dependency upgrade and application modification history.
- Security update build and test results.
- Documented remediation risk assessments.
- Security update release and distribution records.
- Signed update artifacts and integrity verification results.
- User notification and security advisory records.
- Product version and deployment verification records.
- Security update availability and retention records.
- Documented mitigation decisions for vulnerabilities that cannot be immediately patched.
