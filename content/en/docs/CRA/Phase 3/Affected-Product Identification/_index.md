---
title: "Affected-Product Identification - Post Deployment"
linkTitle: "Affected-Product Identification"
weight: 10
layout: docs
description: >
 Affected-Product Identification for Post Deployment Activities.
---

### Affected-Product Identification - Phase 3: Post Deployment

**Objective:** Identify which released products, software versions, and operational deployments are affected when new vulnerabilities are disclosed.

The CRA requires manufacturers to identify and document vulnerabilities and components contained in their products and to assess vulnerabilities according to the risks they pose. Effective vulnerability handling depends on understanding which products contain affected components and whether those components introduce exploitable security risks.

For DevOps teams, this requires establishing traceability between software components, SBOMs, product versions, release artifacts, and the environments where software is deployed.

An SBOM identifies the components contained in a software product or release, but an SBOM alone does not necessarily identify where affected software is currently running. Correlating component inventories with release and deployment metadata provides additional visibility into the operational impact of newly disclosed vulnerabilities.

This process, commonly referred to as vulnerability impact analysis or blast-radius assessment, helps organizations distinguish vulnerabilities affecting actively deployed products from vulnerabilities associated with obsolete or unused releases.

Where deployment information is available, teams can associate affected products with specific environments, endpoints, applications, and responsible owners. This supports faster investigation, targeted remediation, and improved communication with affected users.

While the CRA does not explicitly mandate endpoint-level deployment mapping, this capability can strengthen vulnerability handling and provide supporting evidence of product-specific risk assessment.

#### CRA Requirements and Open-Source Tooling

| CRA Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| Annex I, Part II(1) | Affected-component identification | Correlate disclosed vulnerabilities with SBOM components, software versions, and supported products. | [OWASP Dependency-Track](https://dependencytrack.org/), [OSV.dev](https://osv.dev/), [Ortelius](https://ortelius.io/) |
| Article 13(8), Annex I, Part II(2) | Product vulnerability impact assessment | Determine which product versions are affected and evaluate the risks associated with identified vulnerabilities. | [Ortelius](https://ortelius.io/), [DefectDojo](https://defectdojo.com/), [OWASP Dependency-Track](https://dependencytrack.org/) |
| Annex I, Part II(1)–(2) | Release and deployment traceability | Associate software components and SBOMs with release artifacts and available deployment records. | [Ortelius](https://ortelius.io/), [Argo CD](https://argo-cd.readthedocs.io/), [Flux](https://fluxcd.io/) |
| Annex I, Part II(2) | Vulnerability blast-radius assessment | Identify affected product versions and, where supported, deployed applications, environments, and endpoints. | [Ortelius](https://ortelius.io/), [OWASP Dependency-Track](https://dependencytrack.org/) |
| Annex I, Part II(2), (4) | Remediation ownership and affected-product communication | Identify responsible teams and maintain records of affected products for remediation and security advisories. | [Ortelius](https://ortelius.io/), [DefectDojo](https://defectdojo.com/) |
| Annex I, Part II(1)–(2) | Vulnerability status and exploitability documentation | Document product-specific vulnerability assessments, including whether vulnerabilities are affected, not affected, fixed, or under investigation. | [OpenVEX](https://github.com/openvex), [CycloneDX](https://cyclonedx.org/), [Ortelius](https://ortelius.io/) |

#### Expected Compliance Evidence

- Component-to-product vulnerability mappings.
- Product and release version inventories.
- SBOM-to-release associations.
- Available deployment and endpoint inventory records.
- Affected-product and vulnerability impact assessments.
- Product-specific vulnerability status statements.
- Assigned remediation ownership and tracking records.
- Documented decisions concerning product exposure and exploitability.