---
title: "Phase 2: Build and Deploy"
linkTitle: "Build and Deploy"
weight: 40
description: >
  Security Compliance for Build and Deploy
layout: docs
---
## Phase 2 - Build and Deploy

As software moves from development to production, the build and deploy stages play a pivotal role in maintaining the integrity, security, and provenance of your application. Phase 2 covers security controls and practices applied during the build and deployment stages of the CI/CD pipeline. These controls ensure that software artifacts are created, verified, and released in a trusted, repeatable, and policy-enforced manner before reaching runtime environments. Phase 2 focuses on preventing compromised or non-compliant artifacts from being deployed, establishing trust in the software supply chain before software enters live environments.


Specifically, Phase 2 includes:

-- Securing build environments and CI runners to prevent tampering

-- Reproducible and verifiable builds

-- Artifact integrity, signing, and provenance tracking

-- Build-time vulnerability and configuration analysis

-- Enforcement of security and compliance policies during builds

-- Secure container image creation and validation

-- Controlled deployment workflows with automated gates and approvals

-- Recording deployment metadata required for post-deployment visibility

### Key Phase 2 Security Activities

Compliance for Build and Deploy steps include:


[//]: # (- Reproducible and Deterministic Builds - Ensure that software artifacts can be independently verified and reproduced to prevent tampering.)

[//]: # (- Automated Threat Detection and Compliance Enforcement - Integrate continuous security analysis to detect misconfigurations, vulnerabilities, and unauthorized dependencies before deployment.)

[//]: # (- Policy-Enforced Deployments - Enforce verifiable security policies ensuring only compliant, attested software reaches production.)

[//]: # (- Trusted Execution Environments &#40;TEEs&#41; - Secure build environments against tampering using hardware-backed execution environments.)

[//]: # (- Cryptographic Attestation- Use digital signatures and cryptographic proofs to verify the authenticity and integrity of builds and deployments.)

|                                                       |                                                                                                                                       |
|-------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Reproducible and Deterministic Builds                 | Ensure that software artifacts can be independently verified and reproduced to prevent tampering.                                     |
| Automated Threat Detection and Compliance Enforcement | Integrate continuous security analysis to detect misconfigurations, vulnerabilities, and unauthorized dependencies before deployment. |
| Policy-Enforced Deployments                           | Enforce verifiable security policies ensuring only compliant, attested software reaches production.                                   |
| Trusted Execution Environments (TEEs)                 | Secure build environments against tampering using hardware-backed execution environments.                                             |
| Cryptographic Attestation                             | Use digital signatures and cryptographic proofs to verify the authenticity and integrity of builds and deployments.                   |

Following are guidelines from industry frameworks with suggested open source tooling needed to achieve the compliance goals.
