---
title: "AI Incident Response and Recovery"
linkTitle: "AI Incident Response and Recovery"
description: "Detecting, investigating, containing, and recovering from AI-related cybersecurity incidents involving models, agents, prompts, and supporting infrastructure."
weight: 500
type: docs
---

## AI Incident Response and Recovery - Phase 3: Post Deploy

AI-enabled applications introduce security incident scenarios that may differ from traditional application and infrastructure compromises.

Incidents can involve prompt injection, unauthorized agent execution, compromised model artifacts, manipulated retrieval content, sensitive information exposure, or abuse of external tools and services.

These incidents may affect application behavior even when the underlying software binaries remain unchanged.

During Post Deploy, organizations should extend established cybersecurity incident response procedures to include AI-specific threats, affected assets, and recovery requirements.

This activity focuses on detecting and investigating AI security incidents, containing affected systems, preserving evidence, restoring trusted configurations, and incorporating lessons learned into CI/CD security practices.

### AI Incident Response and Recovery

**Objective:** Establish repeatable processes for detecting, investigating, containing, recovering from, and documenting AI-related security incidents while preserving reliable security evidence and preventing recurrence.

The [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) establishes a lifecycle approach to cybersecurity risk management, including detection, response, and recovery.

[NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final) provides incident response recommendations aligned with the NIST Cybersecurity Framework.

The [NIST AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/) provides guidance for measuring and managing risks associated with AI systems.

For DevOps teams, incident response should incorporate AI application telemetry, agent execution records, model and configuration inventories, deployment evidence, and software dependency information.

Security teams should be able to identify which AI components were involved, which actions occurred, which resources were affected, and whether the incident involved compromised software, manipulated model behavior, or unauthorized agent activity.

Recovery must restore both trusted software artifacts and approved AI configurations, permissions, models, and data sources.

#### AI Security Requirements and Open-Source Tooling

| Framework Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| NIST CSF DE.CM, DE.AE | AI security incident detection | Detect suspicious model interactions, unexpected agent execution, unauthorized access, and infrastructure security events. | [Falco](https://falco.org/), [Wazuh](https://github.com/wazuh/wazuh) |
| NIST CSF RS.AN | AI incident investigation | Correlate AI application telemetry, agent tool calls, authentication records, and infrastructure logs. | [OpenSearch](https://opensearch.org/), [OpenTelemetry](https://opentelemetry.io/) |
| NIST CSF ID.AM, RS.AN | Affected AI asset identification | Identify affected models, software dependencies, application releases, configurations, and deployed environments. | [Ortelius](https://ortelius.io/), [GUAC](https://guac.sh/) |
| NIST CSF RS.AN | Security evidence preservation | Preserve relevant execution logs, security events, deployment records, and model artifact identifiers for investigation. | [OpenSearch](https://opensearch.org/), [Velociraptor](https://docs.velociraptor.app/) |
| NIST CSF RS.MI | Agent and workload containment | Isolate compromised workloads, suspend agent execution, and restrict access to affected services. | [Kubernetes](https://kubernetes.io/), [Cilium](https://cilium.io/) |
| NIST CSF PR.AA, RS.MI | Credential and permission revocation | Revoke affected identities, rotate credentials, and restrict compromised agent permissions. | [Keycloak](https://www.keycloak.org/), [Open Policy Agent](https://www.openpolicyagent.org/) |
| NIST CSF RC.RP | Trusted artifact recovery | Restore approved application versions, container images, models, prompts, and deployment configurations. | [Argo CD](https://argo-cd.readthedocs.io/), [Flux](https://fluxcd.io/) |
| NIST CSF RC.RP | Recovery validation | Execute security and functional validation before restoring affected AI services to production. | [Jenkins](https://www.jenkins.io/), [Promptfoo](https://github.com/promptfoo/promptfoo) |
| NIST CSF RS.MA, RS.AN | Incident coordination and tracking | Maintain incident records, assign investigation responsibilities, and document response actions. | [DFIR-IRIS](https://github.com/dfir-iris/iris-web), [Gitea](https://about.gitea.com/) |
| NIST CSF ID.IM | Continuous security improvement | Convert incident findings into development security requirements, regression tests, and updated CI/CD policies. | [Gitea](https://about.gitea.com/), [Open Policy Agent](https://www.openpolicyagent.org/) |

*The listed tools support incident detection, investigation, containment, and recovery activities. They do not replace an established incident response process or guarantee identification of every AI-specific threat.*

#### AI Incident Response Workflow

A typical AI security incident response process should include:

**1. Detection and Triage**

Identify suspicious AI behavior, unauthorized agent actions, sensitive information exposure, or infrastructure security events.

Determine the potential impact and initiate the appropriate incident response procedures.

**2. Investigation and Impact Assessment**

Collect relevant telemetry, agent execution records, model information, configuration versions, and deployment evidence.

Identify affected applications, users, services, and supporting infrastructure.

**3. Containment**

Restrict compromised services, suspend affected agents, revoke credentials, and prevent additional unauthorized operations.

Containment procedures should preserve evidence where practical.

**4. Remediation**

Correct identified vulnerabilities, remove malicious configurations or content, replace compromised artifacts, and address unauthorized access paths.

Changes should be validated through established CI/CD workflows.

**5. Recovery**

Restore approved model versions, prompts, agent configurations, application artifacts, and infrastructure settings.

Verify that recovered services operate within approved security boundaries before resuming normal operations.

**6. Lessons Learned**

Document root causes, incident impact, remediation outcomes, and opportunities to improve security controls.

Update threat models, security tests, monitoring rules, and deployment policies to reduce the likelihood of recurrence.

#### Expected Security Evidence

- AI security incident detection records and alerts.
- Incident classification and severity assessments.
- AI application and agent execution logs.
- Model, prompt, and agent configuration version records.
- Affected software component and deployment inventories.
- Security investigation findings and incident timelines.
- Records of contained workloads and suspended agents.
- Credential revocation and access restriction records.
- Remediation changes and associated validation results.
- Recovery procedures and approved rollback records.
- Security and functional testing results following recovery.
- Incident closure and post-incident review reports.
- Updated threat models, monitoring policies, and CI/CD security requirements.

These artifacts demonstrate that AI-related security incidents can be investigated and resolved through structured, repeatable processes.

Security incident findings should inform future development, testing, and deployment activities.

## Additional Resources

- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework)
- [NIST SP 800-61 Rev. 3 - Incident Response](https://csrc.nist.gov/pubs/sp/800/61/r3/final)
- [NIST AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/)
- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/)
- [MITRE ATLAS](https://atlas.mitre.org/)
- [OpenTelemetry](https://opentelemetry.io/)
- [Falco](https://falco.org/)
- [Velociraptor](https://docs.velociraptor.app/)
