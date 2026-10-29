---
title: "Prompt and Agent Configuration Security"
linkTitle: "Prompt and Agent Configuration Security"
description: "Protecting system prompts, agent instructions, tool definitions, and AI application configurations through version control, access policies, and security review."
weight: 500
type: docs
---

## Prompt and Agent Configuration Security - Phase 1: Code and Prebuild

AI-enabled applications rely on system prompts, agent instructions, tool definitions, and configuration files to determine how models interact with users, applications, and external services.

These artifacts can directly influence application behavior, data access, tool execution, and security boundaries.

Unlike traditional source code, prompts and agent configurations may be modified independently of application binaries. Unauthorized or poorly reviewed changes can introduce security risks even when the underlying application code remains unchanged.

During Code and Prebuild, organizations should treat security-sensitive prompts, agent instructions, and configurations as managed development artifacts.

This phase focuses on protecting AI configurations against unauthorized modification, establishing secure review processes, and ensuring that agent capabilities remain aligned with approved security policies.

The following activities map NIST security guidance and OWASP AI risk categories to actionable CI/CD practices and suggested open-source tools.

### Prompt and Agent Configuration Security

**Objective:** Ensure system prompts, agent instructions, tool configurations, and AI application settings are version-controlled, reviewed, protected against unauthorized changes, and aligned with established security requirements.

The [NIST Secure Software Development Framework (SSDF)](https://csrc.nist.gov/pubs/sp/800/218/final) establishes practices for protecting software artifacts, controlling changes, and integrating security requirements into development workflows.

The [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/) identifies prompt injection, system prompt leakage, and excessive agency as security concerns affecting AI-enabled applications.

For DevOps teams, prompts and agent configurations should be managed using established source control and change management practices.

Security-sensitive changes should be reviewed before acceptance, and automated policies should prevent unauthorized modifications to agent permissions, tool access, and execution settings.

System prompts should not be treated as a security boundary. Authorization must be enforced by trusted application and infrastructure controls independently of model instructions.

#### AI Security Requirements and Open-Source Tooling

| Framework Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| NIST SSDF PS.1 | Prompt and configuration version control | Maintain approved system prompts, agent instructions, and tool definitions in protected source repositories. | [Git](https://git-scm.com/), [Gitea](https://about.gitea.com/) |
| NIST SSDF PS.1, PS.2 | Configuration integrity | Protect security-sensitive configuration files against unauthorized changes and verify approved versions before use. | [Git](https://git-scm.com/), [Sigstore Cosign](https://github.com/sigstore/cosign) |
| NIST SSDF PW.7 | Security review of prompt changes | Review modifications to system prompts, agent instructions, and tool configurations before merging changes. | [Gitea](https://about.gitea.com/), [Open Policy Agent](https://www.openpolicyagent.org/) |
| OWASP LLM01 | Prompt injection risk reduction | Identify untrusted input paths and test whether external content can alter system instructions or agent behavior. | [Promptfoo](https://github.com/promptfoo/promptfoo), [Garak](https://github.com/NVIDIA/garak) |
| OWASP LLM07 | System prompt information protection | Prevent secrets and credentials from being embedded in prompts and assess unintended disclosure of sensitive instructions or information. | [Gitleaks](https://github.com/gitleaks/gitleaks), [detect-secrets](https://github.com/Yelp/detect-secrets) |
| OWASP LLM06 | Agent tool configuration security | Restrict approved tools, commands, API operations, and agent permissions through enforceable security policies. | [Open Policy Agent](https://www.openpolicyagent.org/), [Conftest](https://www.conftest.dev/) |
| NIST SSDF PO.5; OWASP LLM06 | Configuration access control | Limit modification of agent permissions, prompt templates, and tool definitions to authorized identities. | [Keycloak](https://www.keycloak.org/), [Casbin](https://casbin.org/) |
| NIST SSDF PS.1; OWASP LLM01 | Configuration validation | Validate structured agent configurations against approved schemas and security policy requirements. | [JSON Schema](https://json-schema.org/), [Conftest](https://www.conftest.dev/) |
| NIST SSDF PO.3, PS.1 | Configuration change traceability | Record changes, approvals, and versions of security-sensitive AI configuration artifacts. | [Git](https://git-scm.com/), [Gitea](https://about.gitea.com/) |

*The referenced frameworks provide relevant software security practices and AI risk categories. The implementation recommendations translate those practices into CI/CD controls for prompts, agent instructions, and configuration artifacts.*

#### Expected Security Evidence

- Version-controlled system prompts and agent instructions.
- Approved tool definitions and agent configuration records.
- Security review and approval records for configuration changes.
- Documented policies restricting agent permissions and tool access.
- Configuration validation and policy enforcement results.
- Secrets scanning results for prompts and configuration files.
- Prompt injection testing results and identified security findings.
- Records of unauthorized or rejected configuration modifications.
- Traceable configuration versions associated with application changes.
- Documented procedures for updating and restoring approved AI configurations.

These artifacts provide evidence that AI instructions and configurations are managed through controlled development processes.

Configuration controls established during Phase 1 should support security testing and release verification during Phase 2: Build and Deploy.

After deployment, changes to AI instructions, tools, and permissions should remain subject to authorization, monitoring, and audit requirements.

## Additional Resources

- [NIST Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [NIST AI SSDF Profile](https://csrc.nist.gov/pubs/sp/800/218/a/final)
- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/)
- [OWASP Generative AI Security Project](https://genai.owasp.org/)
- [Open Policy Agent](https://www.openpolicyagent.org/)
- [Promptfoo](https://github.com/promptfoo/promptfoo)
