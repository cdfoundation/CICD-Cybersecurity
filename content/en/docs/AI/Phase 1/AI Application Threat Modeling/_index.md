---
title: "AI Application Threat Modeling"
linkTitle: "AI Application Threat Modeling"
description: "Identifying AI application security risks including prompt injection, excessive agency, data exposure, insecure tool integrations, and trust boundary violations."
weight: 300
type: docs
---


## AI Application Threat Modeling - Phase 1: Code and Prebuild

Artificial intelligence applications introduce security risks that extend beyond those found in traditional software architectures. Applications incorporating large language models (LLMs), retrieval-augmented generation (RAG), autonomous agents, external data sources, and tool integrations create new attack surfaces and trust relationships.

These systems may process untrusted prompts, retrieve external content, invoke privileged tools, and generate outputs that influence application behavior.

During Code and Prebuild, organizations should perform AI-specific threat modeling to identify potential vulnerabilities before application components are implemented or integrated into the CI/CD pipeline.

This phase focuses on identifying attack paths, evaluating security boundaries, and establishing controls to prevent unauthorized model behavior, sensitive information disclosure, and unsafe agent actions.

The following activities map NIST security guidance and OWASP AI risk categories to actionable threat modeling practices and suggested open-source tools.

### AI Application Threat Modeling

**Objective:** Identify and document AI-specific attack surfaces, trust boundaries, potential threats, and appropriate security controls before developing or deploying AI-enabled applications.

The [NIST Secure Software Development Framework (SSDF)](https://csrc.nist.gov/pubs/sp/800/218/final) emphasizes integrating security requirements and risk analysis into software design and development activities.

The [NIST AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/) provides guidance for identifying, measuring, and managing risks associated with AI systems.

The [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/) identifies risks including prompt injection, sensitive information disclosure, supply chain vulnerabilities, improper output handling, and excessive agency.

For DevOps teams, threat modeling should be integrated into application architecture reviews, development planning, and security requirements definition.

AI components should be evaluated as part of the complete application architecture rather than as isolated models.

Threat models should identify how users, models, agents, retrieved information, and external services interact and where trust boundaries must be enforced.

#### AI Security Requirements and Open-Source Tooling

| Framework Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| NIST SSDF PW.1, PW.2 | AI application threat modeling | Create architectural threat models identifying AI components, external services, data flows, and security boundaries. | [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/), [OWASP pytm](https://github.com/OWASP/pytm) |
| OWASP LLM01 | Prompt injection risk assessment | Identify direct and indirect prompt injection paths through user input, retrieved documents, tool results, and external content. | [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/), [Promptfoo](https://github.com/promptfoo/promptfoo) |
| OWASP LLM06 | Excessive agency assessment | Identify tools and actions that could allow AI agents to exceed authorized permissions or perform unsafe operations. | [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/), [Open Policy Agent](https://www.openpolicyagent.org/) |
| OWASP LLM02 | Sensitive information exposure | Document sensitive data flows and identify potential disclosure through prompts, model outputs, logs, and external integrations. | [Microsoft Presidio](https://github.com/microsoft/presidio), [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/) |
| OWASP LLM05 | Unsafe output handling | Identify where model-generated output is executed, rendered, parsed, or passed to downstream systems without sufficient validation. | [OWASP pytm](https://github.com/OWASP/pytm), [Semgrep](https://github.com/semgrep/semgrep) |
| OWASP LLM08 | Retrieval and vector security | Assess unauthorized retrieval, malicious content injection, access control weaknesses, and exposure through vector databases. | [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/), [Garak](https://github.com/NVIDIA/garak) |
| NIST AI RMF MAP, MEASURE | AI risk assessment | Evaluate likelihood, potential impact, system context, and appropriate mitigations for identified AI threats. | [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/), [DefectDojo](https://github.com/DefectDojo/django-DefectDojo) |
| NIST SSDF PW.1, PW.2 | Security requirements definition | Convert identified threats into design requirements, acceptance criteria, and security testing tasks. | [OWASP pytm](https://github.com/OWASP/pytm), [Open Policy Agent](https://www.openpolicyagent.org/) |

*Threat modeling tools support risk identification and documentation. Testing tools such as Promptfoo and Garak can help validate selected threats but do not replace architectural threat modeling.*

#### Expected Security Evidence

- Documented AI application threat models.
- Architecture diagrams identifying AI components and external services.
- Data flow diagrams showing model inputs, outputs, and tool interactions.
- Identified trust boundaries and security-sensitive integration points.
- Prompt injection and agent misuse risk assessments.
- Sensitive information exposure assessments.
- Documented AI security risks and assigned risk owners.
- Security requirements and mitigation plans derived from identified threats.
- Records of architecture reviews and threat model updates.

These artifacts provide evidence that AI-specific security risks were considered during application planning and design.

Threat models developed during Phase 1 should inform the automated AI security testing and release validation activities performed during Phase 2: Build and Deploy.

## Additional Resources

- [NIST Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [NIST AI SSDF Profile](https://csrc.nist.gov/pubs/sp/800/218/a/final)
- [NIST AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/)
- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/)
- [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/)
- [MITRE ATLAS](https://atlas.mitre.org/)
