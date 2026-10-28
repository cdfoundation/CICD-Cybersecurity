---
title: "Artifact Integrity and Secure Distribution - Build and Deploy"
linkTitle: "Artifact Integrity and Secure Distribution"
weight: 10
layout: docs
description: >
 Artifact Integrity and Secure Distribution for Build and Deploy Activities.
---

### Artifact Integrity and Secure Distribution - Phase 2: Build and Deploy

**Objective:** Protect software artifacts against unauthorized modification and establish secure mechanisms for distributing products and security updates.

The CRA requires manufacturers to protect the integrity of products with digital elements and provide mechanisms for securely distributing security updates. These requirements help ensure that software received by users has not been tampered with and that product updates can be delivered securely.

During Build and Deploy, DevOps teams should establish controls that verify the authenticity and integrity of software artifacts as they move through build pipelines, artifact repositories, distribution channels, and deployment environments.

Artifact signing, cryptographic verification, software supply chain attestations, and deployment policy enforcement can support these objectives. Organizations should also validate that security updates can be delivered reliably and that update mechanisms protect against unauthorized modifications.

Although the CRA does not mandate specific artifact signing or provenance technologies, these practices can provide supporting evidence of software integrity and secure distribution controls.

#### CRA Requirements and Open-Source Tooling

| CRA Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| Annex I, Part I(2)(f) | Software integrity protection | Protect software artifacts, configurations, and release packages against unauthorized modification. | [Sigstore Cosign](https://github.com/sigstore/cosign), [Harbor](https://goharbor.io/) |
| Annex I, Part I(2)(c) | Secure update capability | Validate that products support appropriate mechanisms for receiving and applying security updates. | [TUF](https://theupdateframework.io/), [Sigstore Cosign](https://github.com/sigstore/cosign) |
| Annex I, Part II(7) | Secure update distribution | Establish mechanisms for securely distributing security updates and protecting update integrity. | [TUF](https://theupdateframework.io/), [Sigstore Cosign](https://github.com/sigstore/cosign), [Harbor](https://goharbor.io/) |
| Annex I, Part II(8) | Security update delivery and user information | Validate update availability and delivery workflows, including appropriate user notifications and update instructions. | [Harbor](https://goharbor.io/), [Flux](https://fluxcd.io/), [Argo CD](https://argo-cd.readthedocs.io/) |
| Article 13(4), Annex VII(2)(c) | Build and release traceability | Record build provenance, artifact metadata, and release validation evidence to support the documented security processes. | [in-toto](https://in-toto.io/), [SLSA](https://slsa.dev/), [Tekton Chains](https://tekton.dev/docs/chains/) |
| Annex I, Part I(2)(f) | Deployment integrity verification | Validate approved software artifacts and enforce deployment policies before promotion. | [Kyverno](https://kyverno.io/), [OPA Gatekeeper](https://open-policy-agent.github.io/gatekeeper/), [Sigstore Cosign](https://github.com/sigstore/cosign) |

#### Expected Compliance Evidence

- Signed software artifacts and verification records.
- Build provenance and software supply chain attestations.
- Artifact repository access and integrity records.
- Secure update validation and distribution test results.
- Deployment policy enforcement logs.
- Release version and artifact traceability information.
- Documented software update and rollback procedures.