---
title: "Secure-by-Design Requirements - Code and Prebuild"
linkTitle: "Secure-by-Design Requirements"
weight: 6
layout: docs
description: >
 Secure-by-Design Requirements for Code and Prebuild Activities
---

### Secure-by-Design Requirements - Phase 1: Code and Prebuild

**Objective:** Integrate security requirements directly into software architecture, coding practices, and configuration management.

The CRA establishes essential cybersecurity requirements designed to reduce vulnerabilities and ensure products provide an appropriate level of security. These include secure default configurations, protection against unauthorized access, data confidentiality and integrity, minimization of attack surfaces, and mechanisms for addressing vulnerabilities through security updates.

During Code and Prebuild, development teams should define security requirements before implementation and incorporate automated security checks into developer workflows. Secure coding practices, static application security testing (SAST), secret detection, and policy validation help identify potential weaknesses before software is committed or promoted to the build pipeline.

#### CRA Requirements and Open-Source Tooling

| CRA Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| Annex I, Part I(1) | Secure-by-design development | Incorporate security requirements into application architecture, coding standards, and development workflows. | [Semgrep](https://semgrep.dev/), [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/) |
| Annex I, Part I(2)(b) | Secure default configurations | Establish secure configuration baselines and validate configuration policies before release. | [Open Policy Agent](https://www.openpolicyagent.org/), [Checkov](https://www.checkov.io/) |
| Annex I, Part I(2)(d)–(f) | Access control and data protection | Define requirements for authentication, authorization, encryption, confidentiality, and data integrity. | [Semgrep](https://semgrep.dev/), [Gitleaks](https://github.com/gitleaks/gitleaks) |
| Annex I, Part I(2)(g) | Data minimization | Identify unnecessary data collection and define controls to limit data processing. | [Semgrep](https://semgrep.dev/), [Open Policy Agent](https://www.openpolicyagent.org/) |
| Annex I, Part I(2)(j)–(k) | Attack surface reduction and exploit mitigation | Identify unnecessary services, exposed interfaces, and potential exploit paths. | [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/), [Semgrep](https://semgrep.dev/) |
| Annex I, Part I(2)(c) | Security update readiness | Design software components and configurations to support secure vulnerability remediation and updates. | [Open Policy Agent](https://www.openpolicyagent.org/), [Renovate](https://github.com/renovatebot/renovate) |

#### Expected Compliance Evidence

- Secure coding standards and development policies.
- Application security architecture documentation.
- Static analysis and secrets scanning results.
- Configuration policy definitions and validation results.
- Security-focused code review records.
- Documented security update design requirements.

