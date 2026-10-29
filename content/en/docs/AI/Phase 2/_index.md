
---
title: "Build and Deploy"
linkTitle: "Build and Deploy"
description: "Securing AI-generated code, validating AI models, testing AI applications, and enforcing secure build and deployment controls."
weight: 20
type: docs
---


## Validating AI Artifacts and Securing AI-Enabled Software Delivery

Artificial intelligence introduces new security considerations into the build and deployment process. AI-generated code, machine learning models, prompts, agent configurations, and supporting dependencies must be validated before they are incorporated into production software.

**Phase 2: Build and Deploy** focuses on ensuring that AI-generated code and AI application components are securely built, tested, verified, and authorized for deployment.

This phase extends traditional CI/CD security practices to address AI-specific vulnerabilities, model integrity, adversarial testing, agent permissions, and the traceability of AI-related software artifacts.

The objective is to establish automated security controls that verify the integrity and security of AI-enabled software before it reaches production.

## Phase 2 Outcomes

By implementing these practices, DevOps teams establish automated security controls for validating and deploying AI-enabled software.

Expected outcomes include:

- AI-generated code is validated using established secure development and testing practices.
- AI models and supporting artifacts are verified for integrity and provenance.
- AI applications are tested for prompt injection, unsafe behavior, and unauthorized tool execution.
- Autonomous agents and AI services operate within defined deployment permissions.
- Software releases include traceable AI artifacts, dependencies, and security evaluation results.
- Deployment authorization and security policies are consistently enforced.
- Security evidence is available for ongoing vulnerability management and compliance assessments.

These outcomes help ensure that AI-enabled applications enter production with verified artifacts, tested security controls, and traceable release information.

## Related Security Frameworks

The following frameworks provide guidance relevant to Phase 2 AI security activities.

| Framework | Relevant Guidance |
|---|---|
| [NIST SP 800-218 – Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final) | Secure software production, security testing, artifact protection, and vulnerability identification. |
| [NIST SP 800-218A – AI SSDF Profile](https://csrc.nist.gov/pubs/sp/800/218/a/final) | AI-specific secure development practices, including AI model security and lifecycle considerations. |
| [NIST AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/) | AI risk measurement, evaluation, validation, and risk management. |
| [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/) | Prompt injection, sensitive information disclosure, supply chain vulnerabilities, excessive agency, and other AI application risks. |
| [OpenSSF Model Signing](https://openssf.org/projects/model-signing/) | Signing and verification of AI model artifacts to support integrity and provenance. |
| [SLSA](https://slsa.dev/) | Software supply chain integrity, build provenance, and protection against artifact tampering. |

These frameworks and projects provide guidance and technical capabilities that can support AI security controls. They do not all establish mandatory regulatory compliance requirements.


## Integrating AI Security into the CI/CD Pipeline

AI security controls should be incorporated into existing CI/CD automation rather than implemented as disconnected manual processes.

This section will cover a typical AI-enabled software delivery workflow to include:


