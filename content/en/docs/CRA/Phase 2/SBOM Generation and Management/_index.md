---
title: "SBOM Genearation and Management - Build and Deploy"
linkTitle: "SBOM Genearation and Management"
weight: 10
layout: docs
description: >
 SBOM Genearation and Management for Build and Deploy Activities.
---

### SBOM Genearation and Management - Phase 2: Build and Deploy


**Objective:** Establish software component transparency by generating, validating, and maintaining machine-readable Software Bills of Materials.

The CRA requires manufacturers to identify and document vulnerabilities and components contained in their products, including by creating a Software Bill of Materials (SBOM) in a commonly used, machine-readable format covering at least the product's top-level dependencies.

For DevOps teams, SBOM generation should be integrated into automated build processes. SBOMs should identify software components and dependencies associated with each release and provide a foundation for vulnerability assessment, dependency tracking, and future security updates.

Organizations should maintain version-specific SBOMs and associate them with corresponding build artifacts, release identifiers, and product versions. While the CRA establishes minimum SBOM requirements, including transitive dependencies and retaining deployment associations can improve vulnerability impact analysis and remediation efficiency.

SBOMs should be stored securely, maintained as appropriate throughout the product support period, and made available to competent authorities when legally required.

#### CRA Requirements and Open-Source Tooling

| CRA Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| Annex I, Part II(1) | SBOM generation | Automatically generate machine-readable SBOMs covering at least top-level software dependencies. | [Syft](https://github.com/anchore/syft), [CycloneDX](https://cyclonedx.org/), [SPDX](https://spdx.dev/) |
| Annex I, Part II(1) | Software component identification | Identify and document software components, versions, and dependency relationships associated with each product release. | [Syft](https://github.com/anchore/syft), [OWASP Dependency-Track](https://dependencytrack.org/) |
| Annex I, Part II(1)–(2) | SBOM-based vulnerability analysis | Correlate SBOM components with known vulnerabilities and initiate remediation workflows. | [OWASP Dependency-Track](https://dependencytrack.org/), [OSV-Scanner](https://github.com/google/osv-scanner), [Grype](https://github.com/anchore/grype) |
| Article 13(5), Annex I, Part II(1) | Third-party dependency traceability | Track third-party dependencies and associate component information with specific product versions. | [CycloneDX](https://cyclonedx.org/), [Syft](https://github.com/anchore/syft) |
| Article 31, Annex VII(2)(b), (8) | SBOM retention and documentation | Maintain SBOM records as part of product technical documentation and support legally required access by market surveillance authorities. | [OWASP Dependency-Track](https://dependencytrack.org/), [CycloneDX](https://cyclonedx.org/), [SPDX](https://spdx.dev/) |

#### Expected Compliance Evidence

- Machine-readable SBOMs associated with product releases.
- Software component and dependency inventories.
- SBOM generation and validation records.
- Component vulnerability assessment reports.
- Product version and SBOM traceability records.
- Documented SBOM retention and access procedures.
- Third-party component identification records.