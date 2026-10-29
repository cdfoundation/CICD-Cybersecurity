---
title: "AI Model and Data Supply Chain"
linkTitle: "AI Model and Data Supply Chain"
description: "Securing AI model provenance, training datasets, third-party dependencies, licensing, and AI software supply chain integrity."
weight: 400
type: docs
---

## AI Model and Data Supply Chain - Phase 1: Code and Prebuild

AI-enabled applications increasingly depend on externally sourced models, training datasets, machine learning frameworks, model repositories, and third-party software components.

These dependencies introduce security risks beyond traditional software package management. AI models may originate from untrusted sources, datasets may contain malicious or manipulated content, and model files may include unsafe serialization formats or dependencies.

During Code and Prebuild, organizations should establish processes for evaluating the provenance, integrity, licensing, and security of AI models and data before incorporating them into applications.

This phase focuses on identifying supply chain risks early, maintaining visibility into AI dependencies, and establishing trusted sources for AI components.

The following activities map NIST Secure Software Development Framework (SSDF), the AI SSDF Profile, and OWASP AI security guidance to actionable CI/CD practices and suggested open-source tools.

### AI Model and Data Supply Chain

**Objective:** Ensure AI models, datasets, frameworks, and third-party dependencies are evaluated for provenance, integrity, vulnerabilities, licensing, and supply chain risks before entering the software delivery pipeline.

The [NIST Secure Software Development Framework (SSDF)](https://csrc.nist.gov/pubs/sp/800/218/final) establishes practices for identifying, evaluating, and securing third-party software components.

The [NIST AI SSDF Profile (SP 800-218A)](https://csrc.nist.gov/pubs/sp/800/218/a/final) extends secure development guidance to address additional security considerations associated with AI model development and integration.

The [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/) identifies AI supply chain vulnerabilities and data and model poisoning as significant risks.

For DevOps teams, AI model and data dependencies should be evaluated before being introduced into trusted development environments.

This includes verifying component sources, reviewing applicable licenses, identifying known vulnerabilities, and documenting dependencies between models, datasets, frameworks, and application components.

Organizations should also establish requirements for maintaining accurate inventories of AI assets so they can be tracked throughout the build, deployment, and operational lifecycle.

#### AI Security Requirements and Open-Source Tooling

| Framework Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| NIST SSDF PW.4; OWASP LLM03 | Third-party AI dependency review | Evaluate AI frameworks, libraries, and externally sourced model dependencies before approving them for development use. | [OSV-Scanner](https://github.com/google/osv-scanner), [Trivy](https://github.com/aquasecurity/trivy) |
| NIST SP 800-218A; OWASP LLM03 | AI model provenance | Record model sources, versions, identifiers, and available integrity information for externally obtained AI models. | [Git LFS](https://git-lfs.com/), [DVC](https://dvc.org/) |
| NIST SSDF PS.2, PS.3 | Model integrity verification | Validate available checksums and signatures and preserve traceable records of approved AI artifacts. | [Sigstore Cosign](https://github.com/sigstore/cosign), [OpenSSF Model Signing](https://github.com/sigstore/model-transparency) |
| NIST SP 800-218A; OWASP LLM04 | Dataset integrity and poisoning risk | Track dataset sources, assess untrusted content, validate data integrity, and document potential poisoning risks. | [DVC](https://dvc.org/), [Great Expectations](https://github.com/great-expectations/great_expectations) |
| NIST SSDF PW.4; OWASP LLM03 | AI model file security | Evaluate externally sourced model files for potentially unsafe serialized content before use. | [ModelScan](https://github.com/protectai/modelscan) |
| NIST SSDF PW.4 | Software dependency vulnerability analysis | Identify known vulnerabilities in AI frameworks, runtimes, packages, and supporting software components. | [OSV-Scanner](https://github.com/google/osv-scanner), [Trivy](https://github.com/aquasecurity/trivy) |
| NIST SSDF PW.4 | License and usage review | Review licensing obligations associated with AI frameworks, third-party packages, models, and datasets. | [ScanCode Toolkit](https://github.com/aboutcode-org/scancode-toolkit), [ORT](https://github.com/oss-review-toolkit/ort) |
| NIST SSDF PS.3 | AI component inventory | Maintain inventories of AI models, software dependencies, and supporting artifacts, including relationships where supported. | [Syft](https://github.com/anchore/syft), [CycloneDX](https://cyclonedx.org/), [DVC](https://dvc.org/) |
| NIST SSDF PS.3; NIST SP 800-218A | AI artifact traceability | Associate approved models, datasets, and dependencies with source control revisions and release records. | [DVC](https://dvc.org/), [in-toto](https://in-toto.io/) |

*These tools address different aspects of AI supply chain security. Traditional SBOM tools do not necessarily capture complete model, dataset, or prompt inventories. Model provenance, dataset security, and licensing may require additional records and specialized validation.*

#### Expected Security Evidence

- Inventory of approved AI models and associated versions.
- Records identifying model sources, repositories, and provenance.
- Model integrity verification results and available signatures.
- Dataset source records and integrity assessments.
- Documented assessments of data and model poisoning risks.
- Software dependency vulnerability scanning results.
- Model file security scan results.
- Third-party component license and usage reviews.
- AI component inventories and applicable SBOMs.
- Records of rejected or unapproved AI components.
- Traceable relationships between models, datasets, dependencies, and application development artifacts.

These artifacts provide evidence that AI models and supporting dependencies have been evaluated before entering the software delivery process.

Supply chain records created during Phase 1 should support model verification and artifact integrity controls in Phase 2: Build and Deploy, as well as continuous vulnerability management during Phase 3: Post Deploy.

## Additional Resources

- [NIST Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [NIST AI SSDF Profile](https://csrc.nist.gov/pubs/sp/800/218/a/final)
- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/)
- [OpenSSF Model Signing](https://openssf.org/projects/model-signing/)
- [CycloneDX](https://cyclonedx.org/)
- [OpenSSF](https://openssf.org/)
