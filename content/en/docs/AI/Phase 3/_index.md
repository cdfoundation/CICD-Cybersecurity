
---
title: "Post Deployment"
linkTitle: "Post Deployment"
description: "Continuously monitoring deployed AI applications, managing vulnerabilities, auditing autonomous agents, and supporting secure AI-assisted remediation."
weight: 30
type: docs
---

## Continuous AI Security Monitoring and Controlled Remediation

Security does not stop when an AI-enabled application reaches production. New vulnerabilities are discovered, AI models and dependencies change, autonomous agents interact with external systems, and emerging threats can affect applications long after their initial deployment.

**Phase 3: Post Deploy** focuses on maintaining continuous security visibility into deployed AI applications, models, agents, and their supporting software components.

This phase extends traditional vulnerability management and runtime security practices to address AI-specific threats, including prompt injection, unauthorized agent activity, sensitive information disclosure, model compromise, and unsafe automated actions.

It also explores how artificial intelligence can support vulnerability analysis and remediation while maintaining independent validation, human oversight, and auditable security controls.

The objective is to ensure that deployed AI-enabled software remains secure throughout its operational lifecycle.

## Why AI Security Must Continue After Deployment

Traditional post-deployment security activities focus on monitoring applications, identifying vulnerabilities, detecting suspicious behavior, and applying security updates.

AI-enabled applications introduce additional challenges:

- **Changing AI Threats:** Newly discovered attack techniques can affect deployed AI applications without requiring changes to their underlying source code.
- **Autonomous Agent Activity:** AI agents may execute commands, access APIs, modify resources, or interact with external systems during production operations.
- **Model and Dependency Vulnerabilities:** Deployed AI services depend on models, frameworks, libraries, containers, and supporting infrastructure that may develop new security exposures.
- **Prompt Injection and Data Exposure:** Malicious inputs and untrusted external content can manipulate model behavior or expose sensitive information.
- **Limited Deployment Visibility:** Organizations may lack an accurate inventory of which AI models, prompts, dependencies, and configurations are running in production.
- **AI-Assisted Remediation Risks:** AI-generated security fixes may introduce compatibility issues, unintended changes, or new vulnerabilities if applied without validation.

Addressing these challenges requires continuous security monitoring, accurate deployed asset inventories, and controlled remediation workflows.


#

## Phase 3: Post Deployment Outcomes

By implementing these practices, DevOps and security teams establish continuous security oversight for deployed AI-enabled software.

Expected outcomes include:

- Deployed AI applications are monitored for suspicious behavior, unauthorized access, and emerging threats.
- AI agents operate with observable and auditable execution histories.
- Newly disclosed software vulnerabilities are correlated with affected production applications and dependencies.
- AI-specific behavioral risks are assessed alongside traditional software vulnerabilities.
- AI-assisted remediation changes are independently tested and approved before release.
- Compromised models, agents, and applications can be isolated, rolled back, or recovered.
- Security evidence supports incident investigation, vulnerability management, and compliance assessments.
- Production security findings provide feedback into earlier CI/CD security activities.

These outcomes support a continuous security model in which monitoring, vulnerability identification, remediation, and verification extend throughout the operational lifecycle.

## Related Security Frameworks

The following frameworks provide guidance relevant to Phase 3 AI security activities.

| Framework | Relevant Guidance |
|---|---|
| [NIST SP 800-218 – Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final) | Vulnerability identification, remediation, root cause analysis, and improvements to secure development practices. |
| [NIST SP 800-218A – AI SSDF Profile](https://csrc.nist.gov/pubs/sp/800/218/a/final) | AI-specific secure development and vulnerability management considerations across the AI lifecycle. |
| [NIST AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/) | Monitoring, measurement, governance, and ongoing management of AI-related risks. |
| [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/) | AI security risks including prompt injection, sensitive information disclosure, improper output handling, excessive agency, and model-related threats. |
| [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) | Continuous cybersecurity risk management, detection, response, and recovery activities. |
| [NIST SP 800-61 – Incident Response](https://csrc.nist.gov/pubs/sp/800/61/r3/final) | Incident response planning, detection, analysis, containment, and recovery. |
| [OpenSSF](https://openssf.org/) | Open-source software supply chain security, vulnerability management, and secure development practices. |

These frameworks provide guidance for implementing and managing AI security controls. They do not all establish mandatory regulatory compliance requirements.

## Integrating AI Security into the CI/CD Pipeline

AI security controls should be incorporated into existing CI/CD automation rather than implemented as disconnected manual processes.

This section will cover a typical AI-enabled software delivery workflow to include:

