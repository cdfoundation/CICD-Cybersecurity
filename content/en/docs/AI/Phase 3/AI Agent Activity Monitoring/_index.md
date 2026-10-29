---
title: "AI Agent Activity Monitoring"
linkTitle: "AI Agent Activity Monitoring"
description: "Monitoring autonomous AI agents for unauthorized tool execution, excessive permissions, suspicious actions, and security policy violations."
weight: 300
type: docs
---


## AI Agent Activity Monitoring - Phase 3: Post Deploy

Autonomous AI agents introduce security risks because they can execute actions rather than simply generate responses. Production agents may interact with APIs, access databases, execute commands, modify files, invoke external tools, and communicate with other agents. These capabilities create security concerns when agents perform unauthorized actions, exceed assigned permissions, expose sensitive information, or respond to manipulated instructions.

During Post Deploy, organizations should continuously monitor AI agent activity to detect suspicious behavior, enforce authorization boundaries, and maintain auditable records of agent operations.

This activity focuses on establishing visibility into agent identities, tool calls, permissions, execution history, and security-sensitive actions.

### AI Agent Activity Monitoring

**Objective:** Ensure autonomous AI agent activity is observable, attributable, and auditable, with controls capable of detecting unauthorized actions, excessive permissions, and security policy violations.

The [NIST AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/) provides guidance for monitoring and managing AI-related risks throughout system operation.

The [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) establishes practices for monitoring systems, detecting suspicious activity, and managing access-related security risks.

The [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/) identifies excessive agency as a security risk when AI systems have unnecessary functionality, permissions, or autonomy.

For DevOps teams, autonomous agents should be monitored similarly to other privileged automated services, with additional visibility into model-directed tool selection and execution.

Security controls should record which agent initiated an action, what resource was accessed, which tool was invoked, and whether the action was authorized.

Agent-generated explanations should not replace independent audit logs, access control records, and execution telemetry.

#### AI Security Requirements and Open-Source Tooling

| Framework Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| NIST AI RMF MEASURE, MANAGE | Agent activity observability | Collect traces and events associated with agent execution, model requests, and external tool interactions. | [OpenTelemetry](https://opentelemetry.io/), [Jaeger](https://www.jaegertracing.io/) |
| NIST CSF PR.AA; OWASP LLM06 | Agent identity and access monitoring | Monitor authentication, authorization decisions, and access to protected resources. | [Keycloak](https://www.keycloak.org/), [Open Policy Agent](https://www.openpolicyagent.org/) |
| OWASP LLM06 | Agent tool execution monitoring | Record tool calls and identify unauthorized commands, API operations, or unexpected resource modifications. | [OpenTelemetry](https://opentelemetry.io/), [Falco](https://falco.org/) |
| OWASP LLM01, LLM06 | Agent instruction manipulation detection | Investigate suspicious agent actions associated with untrusted inputs, retrieved content, or manipulated instructions. | [Promptfoo](https://github.com/promptfoo/promptfoo), [Garak](https://github.com/NVIDIA/garak) |
| NIST CSF DE.CM | Suspicious process execution detection | Monitor agent workloads for unexpected process execution, privilege escalation, and system activity. | [Falco](https://falco.org/), [Tetragon](https://tetragon.io/) |
| NIST CSF PR.AA | Agent authorization policy enforcement | Evaluate permissions independently of AI-generated instructions and deny unauthorized operations. | [Open Policy Agent](https://www.openpolicyagent.org/), [Casbin](https://casbin.org/) |
| NIST CSF DE.AE | Agent activity correlation | Correlate agent execution records with application logs, authentication events, and infrastructure security findings. | [OpenSearch](https://opensearch.org/), [Wazuh](https://github.com/wazuh/wazuh) |
| NIST CSF RS.MI | Agent containment | Support suspension of compromised agent workloads and revocation of affected credentials. | [Kubernetes](https://kubernetes.io/), [Keycloak](https://www.keycloak.org/) |
| NIST AI RMF MANAGE | Agent activity auditing | Retain records of security-sensitive actions, tool execution results, and authorization decisions for investigation. | [OpenTelemetry](https://opentelemetry.io/), [OpenSearch](https://opensearch.org/) |

*Agent observability and authorization are separate controls. Monitoring records what an agent attempted or performed, while trusted authorization systems must independently determine which actions are permitted.*

#### Expected Security Evidence

- Inventory of active AI agents and assigned identities.
- Agent authentication and authorization records.
- Agent tool invocation and execution logs.
- Records of access to protected APIs and services.
- Alerts identifying unauthorized or suspicious agent actions.
- Agent permission and policy enforcement results.
- Runtime process execution and infrastructure security events.
- Correlated agent activity and application security records.
- Records of suspended agents and revoked credentials.
- Security investigation and remediation records.
- Audit trails linking agent actions to initiating requests and execution contexts.

These artifacts demonstrate that autonomous AI agents operate under monitored and enforceable security controls.

Agent monitoring should support timely investigation of unauthorized operations while retaining sufficient evidence to establish which actions occurred and what systems were affected.

## Additional Resources

- [NIST AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/)
- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework)
- [OWASP Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/)
- [OpenTelemetry](https://opentelemetry.io/)
- [Falco](https://falco.org/)
- [Open Policy Agent](https://www.openpolicyagent.org/)
