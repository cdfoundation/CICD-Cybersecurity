---
title: "AI Agent Identity and Permissions"
linkTitle: "AI Agent Identity and Permissions"
description: "Securing autonomous AI development agents through identity management, least-privilege access, credential protection, and authorization controls."
weight: 200
type: docs
---

## AI Agent Identity and Permissions - Phase 1: Code and Prebuild

Artificial intelligence agents are increasingly used to generate code, modify repositories, update dependencies, execute commands, and automate software development activities. Unlike traditional coding assistants, autonomous agents may perform actions directly within development environments and interact with external tools and services.

These capabilities introduce security risks when agents are granted excessive permissions, unrestricted tool access, or credentials that provide access to sensitive resources.

During Code and Prebuild, organizations should establish identity, authentication, authorization, and access control requirements for AI agents before they are integrated into development workflows.

This phase focuses on preventing unauthorized agent activity, protecting credentials, and ensuring that AI agents operate within explicitly defined security boundaries.

The following activities map NIST Secure Software Development Framework (SSDF) practices and OWASP AI security guidance to actionable CI/CD practices and suggested open-source tools. The tools are illustrative and are not mandated by these frameworks.

### AI Agent Identity and Permissions

**Objective:** Ensure autonomous AI agents operate with verified identities, least-privilege permissions, controlled access to development resources, and appropriate authorization for security-sensitive actions.

The [NIST Secure Software Development Framework (SSDF)](https://csrc.nist.gov/pubs/sp/800/218/final) emphasizes protecting development environments, securing software development processes, and preventing unauthorized changes to software artifacts.

The [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/) identifies excessive agency as a risk when AI systems are granted unnecessary functionality, permissions, or autonomy.

For DevOps teams, AI agent access should be treated similarly to other automated service identities. Agents should use dedicated identities where supported, receive only the permissions required for their assigned tasks, and operate within controlled execution environments.

Agent-generated instructions should never replace independent access control decisions. Permissions must be enforced by repository platforms, identity services, execution environments, and other trusted systems.

#### AI Security Requirements and Open-Source Tooling

| Framework Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| NIST SSDF PO.2, PO.5 | Agent identity management | Assign controlled identities to development agents and establish authentication requirements for accessing repositories, tools, and services. | [Keycloak](https://www.keycloak.org/), [SPIRE](https://spiffe.io/) |
| NIST SSDF PO.5; OWASP LLM06 | Least-privilege access | Restrict agent permissions to approved repositories, APIs, directories, and development resources. | [Open Policy Agent](https://www.openpolicyagent.org/), [Casbin](https://casbin.org/) |
| NIST SSDF PO.5, PS.1 | Credential and secrets protection | Prevent agents from accessing unnecessary credentials and use controlled secret distribution mechanisms. | [SOPS](https://github.com/getsops/sops), [External Secrets Operator](https://external-secrets.io/) |
| OWASP LLM06 | Tool authorization | Restrict which tools, commands, and external services agents may invoke; enforce authorization independently of model-generated instructions. | [Open Policy Agent](https://www.openpolicyagent.org/), [Conftest](https://www.conftest.dev/) |
| NIST SSDF PO.5; OWASP LLM06 | Agent execution isolation | Execute agents within restricted containers or sandboxed development environments. | [Podman](https://podman.io/), [gVisor](https://gvisor.dev/) |
| NIST SSDF PS.1, PS.2 | Change authorization | Require review and approval for security-sensitive repository modifications and prevent agents from bypassing protected development workflows. | [Gitea](https://about.gitea.com/), [Open Policy Agent](https://www.openpolicyagent.org/) |
| NIST SSDF PO.3; OWASP LLM06 | Agent activity auditing | Record agent actions, tool execution, authentication events, and changes to development artifacts. | [OpenTelemetry](https://opentelemetry.io/), [Falco](https://falco.org/) |

*Framework references identify relevant security practices and risk categories. Specific agent access controls are implementation recommendations rather than requirements explicitly prescribed for agents by every referenced framework.*

#### Expected Security Evidence

- Documented AI agent identities and assigned responsibilities.
- Defined access control policies for repositories, tools, and services.
- Records demonstrating least-privilege permissions.
- Credential management and secrets protection configurations.
- Approved agent tool and command allowlists.
- Security policies for agent execution environments.
- Records of required reviews and approvals for agent-generated changes.
- Agent activity logs and security-relevant execution records.
- Evidence of authentication and authorization policy enforcement.

These artifacts provide evidence that autonomous AI agents are operating within controlled security boundaries and that development teams retain accountability for agent-initiated actions.

Agent security requirements established during Phase 1 should be validated during Phase 2: Build and Deploy and monitored throughout Phase 3: Post Deploy.

## Additional Resources

- [NIST Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [NIST AI SSDF Profile](https://csrc.nist.gov/pubs/sp/800/218/a/final)
- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/)
- [OWASP Agentic AI Security](https://genai.owasp.org/)
- [SPIFFE and SPIRE](https://spiffe.io/)
