
---
title: "Secure AI Deployment"
linkTitle: "Secure AI Deployment"
description: "Deploying AI applications and agents with least-privilege access, secure configurations, secrets protection, workload isolation, and release authorization."
weight: 400
type: docs
---


## Secure AI Deployment - Phase 2: Build and Deploy

AI-enabled applications often depend on models, external APIs, vector databases, retrieval services, and autonomous agents that interact with other applications and infrastructure.

These integrations introduce security risks when deployed applications or agents receive excessive permissions, unrestricted network access, sensitive credentials, or unauthorized tool capabilities.

During Build and Deploy, organizations should ensure AI applications and autonomous agents are deployed within controlled environments that enforce access policies, workload isolation, secure configuration, and release authorization.

This activity extends established CI/CD deployment security practices to address the operational capabilities and security requirements of AI-enabled applications.

### Secure AI Deployment

**Objective:** Ensure AI applications, models, and autonomous agents are deployed using verified artifacts, controlled identities, least-privilege permissions, protected credentials, and independently enforced security policies.

The [NIST Secure Software Development Framework (SSDF)](https://csrc.nist.gov/pubs/sp/800/218/final) establishes practices for protecting software development environments and ensuring the integrity of software releases.

The [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/) identifies excessive agency, prompt injection, and improper output handling as risks that can affect deployed AI applications.

For DevOps teams, secure deployment should ensure that AI services and agents operate only within approved access and execution boundaries.

AI-generated instructions must not independently grant permissions or authorize privileged operations. Access decisions should be enforced by trusted application, identity, and infrastructure controls.

#### AI Security Requirements and Open-Source Tooling

| Framework Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| NIST SSDF PO.5; OWASP LLM06 | Workload identity and authentication | Assign controlled workload identities to AI applications and agents and authenticate access to protected services. | [SPIRE](https://spiffe.io/), [Keycloak](https://www.keycloak.org/) |
| NIST SSDF PO.5; OWASP LLM06 | Least-privilege authorization | Restrict access to repositories, databases, APIs, tools, and infrastructure based on approved policies. | [Open Policy Agent](https://www.openpolicyagent.org/), [Casbin](https://casbin.org/) |
| NIST SSDF PO.5 | Secrets management | Protect credentials and API keys through secure configuration and controlled secrets distribution. | [SOPS](https://github.com/getsops/sops), [External Secrets Operator](https://external-secrets.io/) |
| NIST SSDF PO.5 | Workload isolation | Deploy AI workloads in controlled environments with restricted execution privileges and resource boundaries. | [Kubernetes](https://kubernetes.io/), [gVisor](https://gvisor.dev/) |
| OWASP LLM06 | Agent tool authorization | Enforce restrictions on the tools, commands, and external operations that agents can invoke. | [Open Policy Agent](https://www.openpolicyagent.org/), [Kyverno](https://kyverno.io/) |
| NIST SSDF PS.2 | Deployment artifact verification | Verify approved container images and applicable artifact signatures before deployment. | [Sigstore Cosign](https://github.com/sigstore/cosign), [Kyverno](https://kyverno.io/) |
| NIST SSDF PO.5 | Network access restrictions | Restrict connections between AI workloads, internal resources, and external services. | [Cilium](https://cilium.io/), [Kubernetes NetworkPolicy](https://kubernetes.io/docs/concepts/services-networking/network-policies/) |
| NIST SSDF PO.1, PS.2 | Deployment authorization | Apply release approval policies and prevent deployment of unauthorized or unverified AI components. | [Open Policy Agent](https://www.openpolicyagent.org/), [Argo CD](https://argo-cd.readthedocs.io/) |
| NIST SSDF PO.3, PS.1 | Deployment traceability | Record deployed versions, configuration changes, approvals, and release history. | [Argo CD](https://argo-cd.readthedocs.io/), [Flux](https://fluxcd.io/) |

*These controls apply established software security and infrastructure practices to AI-enabled applications. Deployment authorization and infrastructure security controls should operate independently of model-generated decisions.*

#### Expected Security Evidence

- Approved AI deployment configurations.
- Workload identity and authentication records.
- Agent permission and authorization policies.
- Secrets management and credential access configurations.
- Workload isolation and network security policies.
- Verified container and artifact signatures.
- Deployment policy enforcement records.
- Release approval and change authorization evidence.
- Deployment configuration and version history.
- Records of rejected or unauthorized deployment attempts.

These artifacts provide evidence that AI applications and agents are deployed within controlled environments and operate under defined security restrictions.

Deployment evidence should be retained for continuous security monitoring, vulnerability management, and incident response during Phase 3: Post Deploy.

## Additional Resources

- [NIST Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [NIST AI SSDF Profile](https://csrc.nist.gov/pubs/sp/800/218/a/final)
- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/)
- [Open Policy Agent](https://www.openpolicyagent.org/)
- [SPIFFE and SPIRE](https://spiffe.io/)
- [Kubernetes Security](https://kubernetes.io/docs/concepts/security/)

