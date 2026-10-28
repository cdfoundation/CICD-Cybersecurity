---
title: "Release Security Validation - Build and Deploy"
linkTitle: "Release Security Validation"
weight: 10
layout: docs
description: >
 Release Security Validation for Build and Deploy Activities
---

### CRA Release Security Validation - Phase 2: Build and Deploy


**Objective:** Verify that software releases satisfy applicable cybersecurity requirements and that known exploitable vulnerabilities are addressed before release.

The CRA requires manufacturers to ensure that products with digital elements meet essential cybersecurity requirements appropriate to their intended purpose and documented cybersecurity risk assessment. These requirements include making products available without known exploitable vulnerabilities, providing secure default configurations, protecting against unauthorized access, and maintaining product integrity and availability.

During Build and Deploy, DevOps teams should integrate automated security testing and vulnerability scanning into CI/CD pipelines. Release security gates should evaluate identified vulnerabilities, validate security configurations, and verify that software meets established security requirements before artifacts are promoted to production or distribution environments.

Security validation should include documented decisions regarding identified vulnerabilities, remediation outcomes, and any remaining risks requiring further evaluation.

#### CRA Requirements and Open-Source Tooling

| CRA Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| Annex I, Part I(2)(a) | Known exploitable vulnerability checks | Scan release dependencies and software artifacts for known vulnerabilities; assess exploitability and resolve identified risks before release. | [Trivy](https://trivy.dev/), [Grype](https://github.com/anchore/grype), [OSV-Scanner](https://github.com/google/osv-scanner) |
| Annex I, Part II(3) | Security testing and validation | Execute automated security tests, vulnerability scans, and security reviews as part of build pipelines. | [OWASP ZAP](https://www.zaproxy.org/), [Trivy](https://trivy.dev/), [Semgrep](https://semgrep.dev/) |
| Annex I, Part I(2)(b), (d)–(g) | Secure configuration and data protection | Validate secure defaults, authentication, authorization, confidentiality, integrity, and data minimization controls. | [Kyverno](https://kyverno.io/), [Open Policy Agent](https://www.openpolicyagent.org/), [OWASP ZAP](https://www.zaproxy.org/) |
| Annex I, Part I(2)(h)–(l) | Product security and resilience | Test availability, attack surface reduction, exploit mitigations, and other applicable security requirements. | [OWASP ZAP](https://www.zaproxy.org/), [Trivy](https://trivy.dev/), [Checkov](https://www.checkov.io/) |
| Article 13(2)–(4) | Risk-based release approval | Evaluate security findings against the documented product risk assessment and record release decisions. | [DefectDojo](https://defectdojo.com/), [Open Policy Agent](https://www.openpolicyagent.org/) |

#### Expected Compliance Evidence

- Software vulnerability scanning reports.
- Static and dynamic application security testing results.
- Security configuration validation results.
- Identified vulnerability remediation records.
- Release security approval decisions.
- Documented security exceptions and supporting risk assessments.
- CI/CD security gate execution logs.