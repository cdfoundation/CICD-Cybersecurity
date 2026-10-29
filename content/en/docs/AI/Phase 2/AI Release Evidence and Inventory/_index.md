---
title: "AI Release Evidence and Inventory"
linkTitle: "AI Release Evidence and Inventory"
description: "Maintaining traceable inventories of AI models, prompts, dependencies, configurations, security evaluations, and deployment evidence."
weight: 500
type: docs
---



## AI Release Evidence and Inventory - Phase 2: Build and Deploy

AI-enabled software releases may include more than traditional source code, libraries, and container images.

Applications can depend on AI models, prompts, agent configurations, retrieval components, external services, and supporting datasets that influence their behavior.

Without an accurate inventory of these components, organizations may struggle to identify which AI assets are deployed, determine which systems are affected by security findings, or reproduce the configuration of a previous release.

During Build and Deploy, organizations should create and retain inventories and security evidence that associate AI components with their application releases and deployment records.

This activity focuses on establishing traceability across the AI software supply chain and ensuring security evidence remains available after deployment.

### AI Release Evidence and Inventory

**Objective:** Maintain accurate, traceable records of AI models, prompts, agent configurations, software dependencies, security evaluations, and deployment artifacts associated with each software release.

The [NIST Secure Software Development Framework (SSDF)](https://csrc.nist.gov/pubs/sp/800/218/final) establishes practices for preserving software integrity, tracking software components, and generating evidence associated with secure development.

The [NIST AI SSDF Profile (SP 800-218A)](https://csrc.nist.gov/pubs/sp/800/218/a/final) extends secure development guidance to address AI model development and lifecycle considerations.

For DevOps teams, release inventories should extend beyond traditional Software Bills of Materials (SBOMs) to include relevant AI assets and their relationships to deployed applications.

An SBOM identifies software components and dependencies, but may not fully capture models, datasets, prompts, and agent configurations. Additional AI-specific inventories or metadata may therefore be necessary.

The resulting release evidence should enable teams to determine what was built, what was tested, what was approved, and what was deployed.

#### AI Security Requirements and Open-Source Tooling

| Framework Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| NIST SSDF PS.3 | Software component inventory | Generate SBOMs identifying application packages, libraries, containers, and supporting software dependencies. | [Syft](https://github.com/anchore/syft), [CycloneDX](https://cyclonedx.org/) |
| NIST SP 800-218A; NIST SSDF PS.3 | AI model inventory | Record model identifiers, versions, approved sources, artifact hashes, and relationships to application releases. | [DVC](https://dvc.org/), [MLflow](https://github.com/mlflow/mlflow) |
| NIST SSDF PS.1, PS.3 | Prompt and agent configuration tracking | Associate approved prompt versions, agent instructions, tool definitions, and configuration revisions with releases. | [Git](https://git-scm.com/), [DVC](https://dvc.org/) |
| NIST SSDF PS.3 | AI dependency relationships | Document relationships among AI models, application components, software packages, and supporting artifacts. | [CycloneDX](https://cyclonedx.org/), [GUAC](https://guac.sh/) |
| NIST SSDF PS.2 | Artifact integrity evidence | Record cryptographic verification results and signatures for approved release artifacts. | [Sigstore Cosign](https://github.com/sigstore/cosign), [OpenSSF Model Signing](https://openssf.org/projects/model-signing/) |
| NIST SSDF PS.2, PS.3 | Build provenance | Generate attestations identifying trusted build processes, source revisions, and resulting release artifacts. | [SLSA](https://slsa.dev/), [in-toto](https://in-toto.io/) |
| NIST SSDF PW.8 | AI security evaluation evidence | Preserve test cases, AI security evaluation results, identified risks, and release acceptance decisions. | [Promptfoo](https://github.com/promptfoo/promptfoo), [Inspect AI](https://github.com/UKGovernmentBEIS/inspect_ai) |
| NIST SSDF PO.3, PS.3 | Deployment evidence | Record approved application versions, deployment configurations, release identifiers, and target environments. | [Argo CD](https://argo-cd.readthedocs.io/), [Flux](https://fluxcd.io/) |
| NIST SSDF RV.1, RV.2 | Vulnerability traceability | Associate identified vulnerabilities and remediation records with relevant software components and releases. | [OSV](https://osv.dev/), [GUAC](https://guac.sh/), [Ortelius](https://ortelius.io)|

*Release inventories may require multiple complementary formats and tools. SBOMs, model metadata, provenance attestations, security evaluation results, and deployment records serve different purposes and should be linked using stable identifiers wherever practical.*

#### Expected Security Evidence

- Software Bills of Materials for applicable software artifacts.
- AI model inventories identifying model names, versions, and sources.
- Model integrity verification records.
- Approved prompt and agent configuration versions.
- AI dependency and component relationship records.
- Build provenance and artifact attestations.
- AI security testing and evaluation reports.
- Vulnerability scanning and remediation records.
- Release approvals and authorization decisions.
- Deployment records identifying target environments and application versions.
- Traceable links between AI artifacts, application releases, and deployed systems.
- Retained security evidence supporting investigation, audits, and vulnerability management.

These artifacts provide a record of the software and AI components included in each release and the security controls applied before deployment.

Release inventories should remain available after deployment so newly discovered vulnerabilities can be correlated with affected software components, AI models, applications, and environments.

This information provides the foundation for continuous vulnerability management, affected-system identification, and incident response during Phase 3: Post Deploy.

## Additional Resources

- [NIST Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [NIST AI SSDF Profile](https://csrc.nist.gov/pubs/sp/800/218/a/final)
- [CycloneDX](https://cyclonedx.org/)
- [SLSA](https://slsa.dev/)
- [Sigstore](https://www.sigstore.dev/)
- [GUAC](https://guac.sh/)
- [OpenSSF Model Signing](https://openssf.org/projects/model-signing/)
