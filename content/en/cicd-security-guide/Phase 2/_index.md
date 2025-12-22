---
title: "Phase 2: Build and Deploy"
linkTitle: "Build and Deploy"
weight: 40
description: >
  Security Compliance for Build and Deploy
layout: docs
---
## Introduction

As software moves from development to production, the build and deploy stages play a pivotal role in maintaining the integrity, security, and provenance of your application. These phases involve compiling, packaging, and preparing your application for its live environment, making them prime targets for supply chain attacks, unauthorized modifications, and hidden vulnerabilities.  

Integrating security into these phases ensures that your code is not only functional but also safeguarded against threats. From dynamic analysis during builds to automated scans for container security and misconfigurations, the right tools can help identify risks before deployment. Moreover, secure deployment pipelines prevent unauthorized changes, enforce compliance, and enable safe rollouts. Compliance for Build and Deploy steps include:


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
