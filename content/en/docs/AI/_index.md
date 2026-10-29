---
linkTitle: "AI Security in the CI/CD Pipeline"
weight: 4
layout: docs
---

# AI Security in the CI/CD Pipeline - Overview

Artificial intelligence (AI) is transforming how software is designed, developed, tested, deployed, and maintained. AI coding assistants generate application code, autonomous agents modify repositories and dependencies, and AI models are increasingly integrated into production applications. While these capabilities accelerate software delivery, they introduce new cybersecurity risks that traditional CI/CD security practices may not fully address. These include vulnerable AI-generated code, excessive agent permissions, prompt injection, compromised AI models, sensitive information exposure, and unauthorized automated actions.

Securing AI requires extending established DevSecOps practices to address both **software developed using AI and AI-powered applications deployed into production**. AI-generated code must be validated, autonomous agents must operate within controlled security boundaries, AI models and dependencies must be verified, and deployed AI applications must be continuously monitored for emerging threats. For DevOps and platform engineering teams, AI security reinforces the need to integrate cybersecurity controls across the entire CI/CD lifecycle—from Code and Prebuild through Build and Deploy to Post Deployment—while maintaining security evidence, traceability, and appropriate human oversight.

## Related Security Frameworks

The following frameworks provide guidance relevant to AI security activities.

| Framework | Relevant Guidance |
|---|---|
| [NIST SP 800-218 – Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final) | Secure development practices, software protection, vulnerability prevention, and secure development environments. |
| [NIST SP 800-218A – AI SSDF Profile](https://csrc.nist.gov/pubs/sp/800/218/a/final) | AI-specific considerations extending secure software development practices. |
| [NIST AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/) | AI risk identification, governance, measurement, and management. |
| [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/) | AI application risks including prompt injection, sensitive information disclosure, supply chain vulnerabilities, and excessive agency. |
| [OpenSSF](https://openssf.org/) | Open-source software supply chain security, project integrity, and secure development practices. |

These references provide security guidance for AI-assisted development and AI applications. They do not all establish mandatory compliance requirements.

This guide maps AI security activities to three primary phases of the CI/CD pipeline, identifying practical security controls and open-source tooling that can support their implementation. These phases are: 

