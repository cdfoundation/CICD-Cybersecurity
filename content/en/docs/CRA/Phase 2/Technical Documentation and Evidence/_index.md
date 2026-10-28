---
title: "Technical Documenatation and Evidence - Build and Deploy"
linkTitle: "Technical Documenatation and Evidence"
weight: 10
layout: docs
description: >
 Technical Documenatation and Evidence for Build and Deploy Activities.
---

### Technical Documenatation and Evidence - Phase 2: Build and Deploy

**Objective:** Maintain the technical records and supporting security evidence needed to demonstrate conformity with applicable CRA requirements.

The CRA requires manufacturers to prepare technical documentation before placing covered products with digital elements on the EU market. This documentation must demonstrate how the product and its associated vulnerability handling processes satisfy applicable essential cybersecurity requirements.

Article 31 and Annex VII establish requirements for technical documentation, including product descriptions, software architecture, cybersecurity risk assessments, vulnerability handling procedures, security testing results, and relevant conformity information.

During Build and Deploy, CI/CD pipelines can automate the collection of evidence generated throughout development and release processes. Security scan results, SBOMs, build attestations, test reports, and release metadata can be associated with specific product versions to establish an auditable record of security activities.

This evidence supports the manufacturer's conformity assessment obligations, but automated evidence generation does not independently establish CRA conformity. Manufacturers must complete the applicable assessment procedures, prepare the EU declaration of conformity, and affix CE marking when required.

#### CRA Requirements and Open-Source Tooling

| CRA Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| Article 13(12), Article 31 | Technical documentation preparation | Assemble technical records demonstrating compliance with applicable product and vulnerability handling requirements before market placement. | [CycloneDX](https://cyclonedx.org/), [Syft](https://github.com/anchore/syft), [Tekton Chains](https://tekton.dev/docs/chains/) |
| Annex VII(1)–(2) | Product and release documentation | Maintain product descriptions, software versions, architecture information, and vulnerability handling procedures. | [CycloneDX](https://cyclonedx.org/), [SPDX](https://spdx.dev/) |
| Annex VII(3)–(4) | Cybersecurity risk and support-period documentation | Link documented cybersecurity risk assessments and support-period decisions to product releases. | [DefectDojo](https://defectdojo.com/), [Open Policy Agent](https://www.openpolicyagent.org/) |
| Annex VII(6) | Security test evidence | Preserve results of security testing and conformity verification activities for each applicable product release. | [OWASP ZAP](https://www.zaproxy.org/), [Trivy](https://trivy.dev/), [Tekton Chains](https://tekton.dev/docs/chains/) |
| Annex VII(2)(b), (8) | SBOM and vulnerability handling evidence | Maintain SBOMs, vulnerability disclosure procedures, security contacts, and documentation of secure update mechanisms. | [OWASP Dependency-Track](https://dependencytrack.org/), [CycloneDX](https://cyclonedx.org/) |
| Article 13(12)–(13), Article 31 | Documentation maintenance and retention | Maintain technical documentation and the EU declaration of conformity for the legally required retention period, updating documentation as appropriate. | [Harbor](https://goharbor.io/), [in-toto](https://in-toto.io/) |
| Articles 28–30, Article 32 | Conformity assessment evidence | Organize release evidence and supporting technical records for the applicable conformity assessment, declaration, and CE marking processes. | [SLSA](https://slsa.dev/), [Tekton Chains](https://tekton.dev/docs/chains/), [Sigstore Cosign](https://github.com/sigstore/cosign) |

#### Expected Compliance Evidence

- Product technical documentation and architecture descriptions.
- Version-specific SBOMs and software inventories.
- Cybersecurity risk assessment documentation.
- Security testing and vulnerability scanning reports.
- Artifact integrity and build provenance records.
- Vulnerability handling and secure update procedures.
- Records of applied cybersecurity standards and specifications.
- EU declaration of conformity and applicable conformity assessment records.
- Documentation maintenance and retention policies.

---

### Compliance Evidence Summary

Build and Deploy activities should establish a verifiable record demonstrating that cybersecurity requirements were evaluated and appropriate security controls were applied before a product was distributed or placed on the market.

Organizations should integrate evidence generation into their CI/CD pipelines wherever practical, linking security validation results, SBOMs, signed artifacts, and technical documentation to specific product versions and releases.

These records should support vulnerability management throughout the product support period, enable investigation of newly discovered security issues, and provide traceable documentation for applicable CRA conformity assessment requirements.

### References

- [EU Cyber Resilience Act — Regulation (EU) 2024/2847](https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng)
- [European Commission — Cyber Resilience Act Summary](https://digital-strategy.ec.europa.eu/en/policies/cra-summary)
- [NIST Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [OpenSSF Supply Chain Integrity](https://openssf.org/)

**Implementation Note:** The CRA establishes legal obligations for manufacturers and other covered economic operators. The suggested tools represent possible technical implementations and supporting evidence-generation mechanisms. They are not individually mandated by the CRA, and their use alone does not establish regulatory conformity.