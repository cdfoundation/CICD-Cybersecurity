---
title: "AI Model and Artifact Integrity"
linkTitle: "AI Model and Artifact Integrity"
description: "Verifying AI model provenance, signatures, artifact integrity, and trusted model distribution throughout the CI/CD pipeline."
weight: 200
type: docs
---


## AI Model and Artifact Integrity - Phase 2: Build and Deploy

AI-enabled applications increasingly incorporate pretrained models, fine-tuned models, embeddings, model adapters, and supporting software artifacts obtained from external repositories.

These artifacts introduce supply chain security risks, including compromised models, unauthorized modifications, unsafe serialization formats, and untrusted dependencies.

During Build and Deploy, organizations should verify that AI models and supporting artifacts originate from approved sources and have not been modified unexpectedly.

This activity extends established software supply chain security practices to AI models, associated dependencies, and release artifacts.

### AI Model and Artifact Integrity

**Objective:** Ensure AI models and supporting software artifacts are verified for provenance, integrity, authenticity, and known security risks before packaging or deployment.

The [NIST Secure Software Development Framework (SSDF)](https://csrc.nist.gov/pubs/sp/800/218/final) establishes practices for protecting software artifacts and verifying software integrity.

The [NIST AI SSDF Profile (SP 800-218A)](https://csrc.nist.gov/pubs/sp/800/218/a/final) addresses additional security considerations associated with AI model development and integration.

The [OpenSSF Model Signing project](https://openssf.org/projects/model-signing/) provides open-source capabilities for signing and verifying AI model artifacts.

For DevOps teams, model verification should become an automated CI/CD activity similar to container signature verification, dependency scanning, and software artifact validation.

Model signatures and checksums help establish artifact integrity, but do not independently prove that a model is free of malicious behavior or vulnerabilities. Additional security assessments remain necessary.

#### AI Security Requirements and Open-Source Tooling

| Framework Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| NIST SSDF PS.2; OWASP LLM03 | Model provenance verification | Verify model origin, approved distribution source, version, and associated provenance records before use. | [OpenSSF Model Signing](https://openssf.org/projects/model-signing/), [in-toto](https://in-toto.io/) |
| NIST SSDF PS.2 | Cryptographic model integrity | Validate cryptographic hashes or signatures to detect unauthorized modifications to model artifacts. | [OpenSSF Model Signing](https://openssf.org/projects/model-signing/), [Sigstore Cosign](https://github.com/sigstore/cosign) |
| NIST SSDF PW.4; OWASP LLM03 | Model file security | Scan supported AI model formats for potentially malicious serialized content and unsafe loading mechanisms. | [ModelScan](https://github.com/protectai/modelscan) |
| NIST SSDF PW.4, PW.7 | Model dependency vulnerability analysis | Scan frameworks, libraries, containers, and supporting software components for known vulnerabilities. | [Trivy](https://github.com/aquasecurity/trivy), [OSV-Scanner](https://github.com/google/osv-scanner) |
| NIST SSDF PS.3 | Model and dependency inventory | Record model identifiers, versions, approved sources, and supporting software dependencies. | [Syft](https://github.com/anchore/syft), [CycloneDX](https://cyclonedx.org/) |
| NIST SSDF PS.2, PS.3 | Model version traceability | Associate model versions and approved artifacts with application release records. | [DVC](https://dvc.org/), [Git LFS](https://git-lfs.com/) |
| NIST SSDF PS.2 | Build provenance and attestations | Generate and preserve provenance records identifying how artifacts were built and verified. | [SLSA](https://slsa.dev/), [in-toto](https://in-toto.io/) |
| NIST SSDF PO.1, PS.2 | Artifact admission policies | Prevent unapproved or unverified model and software artifacts from proceeding to deployment. | [Kyverno](https://kyverno.io/), [Open Policy Agent](https://www.openpolicyagent.org/) |

*Artifact integrity and model security are related but distinct. Signature verification establishes properties of the artifact and its origin, while behavioral evaluations and vulnerability scanning assess different security risks.*

#### Expected Security Evidence

- Inventory of approved AI models and artifact versions.
- Model provenance and source verification records.
- Model checksum and signature verification results.
- Model file security scanning reports.
- Software dependency vulnerability reports.
- Model and software component inventories.
- Build provenance and release attestations.
- Records of approved and rejected model artifacts.
- Deployment policy enforcement results.
- Traceable relationships between model artifacts and application releases.

These artifacts provide evidence that AI model integrity and provenance are evaluated before deployment.

Verified model records should be retained for post-deployment inventory management, vulnerability analysis, and incident investigation.

## Additional Resources

- [NIST Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [NIST AI SSDF Profile](https://csrc.nist.gov/pubs/sp/800/218/a/final)
- [OpenSSF Model Signing](https://openssf.org/projects/model-signing/)
- [SLSA](https://slsa.dev/)
- [Sigstore](https://www.sigstore.dev/)
- [CycloneDX](https://cyclonedx.org/)
