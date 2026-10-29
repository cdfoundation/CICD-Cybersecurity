---
title: "Third-Party Dependency Due Diligence - Code and Prebuild"
linkTitle: "Third-Party Dependency Due Diligence"
weight: 7
layout: docs
description: >
 Third-Party Dependency Due Diligence for Code and Prebuild Activities
---

### Third-Party Dependency Due Diligence - Phase 1: Code and Prebuild

**Objective:** Reduce software supply chain risks by evaluating open-source and commercial dependencies before they are incorporated into products.

Article 13(5) requires manufacturers to exercise due diligence when integrating third-party components, including free and open-source software, to ensure those components do not compromise product cybersecurity.

For DevOps teams, this means establishing dependency governance practices that evaluate known vulnerabilities, project maintenance, security practices, and dependency provenance before adding new libraries, frameworks, or packages.

Dependency inventories should be maintained throughout development and should provide the foundation for generating a machine-readable Software Bill of Materials (SBOM) during the build process. Automated scanning can identify known vulnerabilities, while project security assessments can help teams understand risks associated with open-source components.

#### CRA Requirements and Open-Source Tooling

| CRA Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| Article 13(5) | Third-party dependency due diligence | Evaluate security risks associated with open-source and commercial dependencies before adoption. | [OpenSSF Scorecard](https://securityscorecards.dev/), [OSV-Scanner](https://github.com/google/osv-scanner) |
| Article 13(5) | Open-source project security assessment | Review project maintenance, security policies, vulnerability history, and development practices. | [OpenSSF Scorecard](https://securityscorecards.dev/) |
| Annex I, Part II(1) | Dependency identification and inventory | Track direct and transitive dependencies and prepare component information for SBOM generation. | [Syft](https://github.com/anchore/syft), [CycloneDX](https://cyclonedx.org/) |
| Annex I, Part II(1)–(2) | Known vulnerability identification | Identify known vulnerabilities in dependencies and initiate risk-based remediation. | [OSV-Scanner](https://github.com/google/osv-scanner), [OWASP Dependency-Check](https://owasp.org/www-project-dependency-check/) |
| Article 13(5)–(6) | Dependency vulnerability response | Establish processes for reviewing, updating, replacing, and reporting vulnerabilities in third-party components. | [Renovate](https://github.com/renovatebot/renovate), [OSV-Scanner](https://github.com/google/osv-scanner) |

#### Expected Compliance Evidence

- Approved dependency inventories.
- Third-party component security assessments.
- Open-source project risk evaluations.
- Dependency vulnerability scanning results.
- Dependency upgrade and remediation records.
- Documented component selection and exception decisions.