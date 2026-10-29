---
title: "AI Runtime Security Monitoring"
linkTitle: "AI Runtime Security Monitoring"
description: "Continuously monitoring deployed AI applications for prompt injection, sensitive information exposure, suspicious model behavior, and runtime security threats."
weight: 100
type: docs
---


## AI Runtime Security Monitoring - Phase 3: Post Deploy

Artificial intelligence applications introduce runtime behaviors that traditional application security monitoring may not fully capture. Large language models (LLMs), retrieval-augmented generation (RAG) systems, and autonomous agents interact with users, external data sources, APIs, and supporting services in ways that can create additional security risks.

These risks include prompt injection, sensitive information disclosure, unauthorized tool execution, model manipulation, and resource abuse.

During Post Deploy, organizations should continuously monitor AI applications to identify suspicious activity, detect security policy violations, and respond to emerging threats.

This activity extends established runtime security monitoring practices to include AI-specific behavior, model interactions, and application security events.

### AI Runtime Security Monitoring

**Objective:** Detect and investigate suspicious AI application behavior, unauthorized access, prompt injection attempts, sensitive information exposure, and runtime security policy violations.

The [NIST AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/) emphasizes ongoing measurement, monitoring, and management of risks associated with AI systems.

The [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) provides guidance for identifying, detecting, responding to, and recovering from cybersecurity threats.

The [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/) identifies AI-specific threats including prompt injection, sensitive information disclosure, excessive agency, and unbounded consumption.

For DevOps teams, runtime monitoring should combine application telemetry, infrastructure security events, AI interaction traces, and independently enforced security policies.

Monitoring should collect sufficient information to investigate suspicious behavior while protecting confidential prompts, user information, credentials, and sensitive model outputs.

AI-generated explanations of suspicious activity should not replace independently collected security evidence.

#### AI Security Requirements and Open-Source Tooling

| Framework Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| NIST AI RMF MEASURE, MANAGE | AI application runtime observability | Collect application traces, metrics, errors, and AI interaction telemetry to establish operational and security baselines. | [OpenTelemetry](https://opentelemetry.io/), [Prometheus](https://prometheus.io/) |
| OWASP LLM01 | Prompt injection monitoring | Monitor suspicious input patterns and use security evaluations to investigate potential prompt injection attempts. | [Promptfoo](https://github.com/promptfoo/promptfoo), [Garak](https://github.com/NVIDIA/garak) |
| OWASP LLM02 | Sensitive information exposure detection | Detect potentially exposed sensitive information in appropriately authorized and protected application telemetry. | [Microsoft Presidio](https://github.com/microsoft/presidio), [OpenTelemetry](https://opentelemetry.io/) |
| OWASP LLM05, LLM06 | Suspicious tool execution | Detect unexpected commands, process execution, and unauthorized operations initiated by AI-enabled applications. | [Falco](https://falco.org/), [Tetragon](https://tetragon.io/) |
| OWASP LLM10 | Resource abuse monitoring | Monitor inference request rates, resource consumption, service latency, and abnormal usage patterns. | [Prometheus](https://prometheus.io/), [Grafana](https://github.com/grafana/grafana) |
| NIST CSF DE.CM | Continuous infrastructure monitoring | Monitor containers, Kubernetes workloads, and supporting AI application infrastructure for suspicious activity. | [Falco](https://falco.org/), [Wazuh](https://github.com/wazuh/wazuh) |
| NIST CSF DE.AE | Security event correlation | Correlate AI application events with infrastructure logs, authentication records, and security alerts. | [OpenSearch](https://opensearch.org/), [Wazuh](https://github.com/wazuh/wazuh) |
| NIST AI RMF MANAGE | Runtime policy enforcement | Enforce defined access, network, and execution policies independently of model-generated instructions. | [Open Policy Agent](https://www.openpolicyagent.org/), [Kyverno](https://kyverno.io/) |
| NIST CSF DE.CM, RS.AN | Security investigation and evidence | Preserve security-relevant telemetry and records needed to investigate suspected AI incidents. | [OpenTelemetry](https://opentelemetry.io/), [OpenSearch](https://opensearch.org/) |

*Observability tools collect and analyze runtime information but do not automatically detect every AI-specific attack. Prompt injection testing tools primarily support security evaluations and require additional integration for continuous monitoring.*

#### Expected Security Evidence

- AI application runtime monitoring configurations.
- AI service traces, metrics, and security event records.
- Records of detected suspicious input or application behavior.
- Unauthorized tool execution and access violation alerts.
- Sensitive information exposure detection results.
- Resource usage and abnormal consumption monitoring reports.
- Infrastructure and container runtime security findings.
- Correlated application and security event records.
- Security incident investigation records.
- Runtime policy enforcement and alert response evidence.

These artifacts demonstrate that deployed AI applications are subject to continuous security monitoring and that security-relevant events can be investigated.

Monitoring findings should feed into vulnerability management, incident response, and the security requirements applied during earlier CI/CD phases.

## Additional Resources

- [NIST AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/)
- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework)
- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/)
- [OpenTelemetry](https://opentelemetry.io/)
- [Falco](https://falco.org/)
- [MITRE ATLAS](https://atlas.mitre.org/)
