

---
title: "AI Security Testing and Red Teaming"
linkTitle: "AI Security Testing and Red Teaming"
description: "Evaluating AI applications for prompt injection, sensitive data disclosure, excessive agency, unsafe outputs, and adversarial security risks."
weight: 300
type: docs
---


## AI Security Testing and Red Teaming - Phase 2: Build and Deploy

AI-enabled applications introduce security risks that traditional application security testing may not fully identify.

Large language models (LLMs), retrieval-augmented generation (RAG) systems, and autonomous AI agents process dynamic inputs, interact with external information, and may invoke tools or execute actions.

These capabilities create attack surfaces involving prompt injection, sensitive information disclosure, unauthorized tool execution, insecure output handling, and excessive agency.

During Build and Deploy, organizations should incorporate AI-specific security evaluations and adversarial testing into CI/CD workflows.

This activity focuses on identifying unsafe AI application behavior before production deployment and establishing repeatable security testing practices.

### AI Security Testing and Red Teaming

**Objective:** Identify AI-specific vulnerabilities and unsafe behavior through automated security evaluations, adversarial testing, and independently enforced release acceptance criteria.

The [NIST Secure Software Development Framework (SSDF)](https://csrc.nist.gov/pubs/sp/800/218/final) establishes security testing and vulnerability identification practices for software releases.

The [NIST AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/) emphasizes evaluating and managing risks throughout the AI system lifecycle.

The [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/) identifies common AI application security risks, including prompt injection, sensitive information disclosure, improper output handling, and excessive agency.

For DevOps teams, AI security evaluations should be automated wherever practical and incorporated into existing build and release validation processes.

Security testing should evaluate not only the model's responses but also whether the application enforces access controls, protects sensitive information, and prevents unauthorized tool actions.

Because AI behavior may be nondeterministic, teams should define repeatable test scenarios, execution parameters, evaluation criteria, and acceptable failure thresholds.

#### AI Security Requirements and Open-Source Tooling

| Framework Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| OWASP LLM01 | Prompt injection testing | Test whether malicious direct or indirect prompts can override instructions or cause unauthorized application behavior. | [Promptfoo](https://github.com/promptfoo/promptfoo), [Garak](https://github.com/NVIDIA/garak) |
| OWASP LLM02 | Sensitive information disclosure testing | Evaluate whether AI responses expose confidential data, credentials, personal information, or restricted context. | [Promptfoo](https://github.com/promptfoo/promptfoo), [Microsoft Presidio](https://github.com/microsoft/presidio) |
| OWASP LLM05 | Improper output handling | Test whether AI-generated content can trigger unsafe downstream operations, including injection or command execution. | [OWASP ZAP](https://www.zaproxy.org/), [Semgrep](https://github.com/semgrep/semgrep) |
| OWASP LLM06 | Excessive agency testing | Evaluate whether AI agents can invoke unauthorized tools, exceed assigned permissions, or perform unapproved actions. | [Inspect AI](https://github.com/UKGovernmentBEIS/inspect_ai), [Promptfoo](https://github.com/promptfoo/promptfoo) |
| OWASP LLM08 | RAG and retrieval security testing | Test retrieval workflows for untrusted content injection, unauthorized access, and manipulation of retrieved information. | [Garak](https://github.com/NVIDIA/garak), [Promptfoo](https://github.com/promptfoo/promptfoo) |
| OWASP LLM10 | Resource consumption testing | Assess whether requests can cause excessive model execution, resource exhaustion, or uncontrolled service usage. | [k6](https://github.com/grafana/k6), [Locust](https://github.com/locustio/locust) |
| NIST SSDF PW.8; NIST AI RMF MEASURE | Automated security evaluation | Execute predefined adversarial evaluations and retain measurable security testing results. | [Inspect AI](https://github.com/UKGovernmentBEIS/inspect_ai), [Promptfoo](https://github.com/promptfoo/promptfoo) |
| NIST SSDF PW.8, RV.2 | Security regression testing | Reexecute security evaluations after changes to models, prompts, tools, dependencies, or application logic. | [Jenkins](https://www.jenkins.io/), [Tekton](https://tekton.dev/) |
| NIST SSDF PO.1, PW.8 | Security release gates | Apply measurable security acceptance criteria and prevent releases when required AI security evaluations fail. | [Open Policy Agent](https://www.openpolicyagent.org/), [Conftest](https://www.conftest.dev/) |

*AI security testing tools have different capabilities and coverage. No single testing tool can establish that an AI application is free of vulnerabilities or unsafe behaviors.*

#### Expected Security Evidence

- AI application security test plans and acceptance criteria.
- Prompt injection testing results.
- Sensitive information disclosure evaluation reports.
- Agent permission and tool execution test results.
- RAG and retrieval security testing records.
- Resource consumption and abuse testing results.
- Security regression test results.
- Records of identified vulnerabilities and remediation activities.
- Automated security gate results.
- Approved exceptions and documented residual risks.
- Traceable AI evaluation results associated with application releases.

These artifacts demonstrate that AI applications have undergone defined security evaluations before deployment.

Security testing should be repeated when significant changes occur to models, prompts, agent permissions, retrieval sources, or connected tools.

## Additional Resources

- [NIST Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [NIST AI SSDF Profile](https://csrc.nist.gov/pubs/sp/800/218/a/final)
- [NIST AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/)
- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/)
- [MITRE ATLAS](https://atlas.mitre.org/)
- [Inspect AI](https://inspect.aisi.org.uk/)
