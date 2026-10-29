---
title: "Security Risk Assessment - Code and Prebuild"
linkTitle: "Security Risk Assessment"
weight: 5
layout: docs
description: >
 Security Risk Assessment for Code and Prebuild Activities
---

## CRA Security Risk Assessment - Phase 1: Code and Prebuild

The European Union Cyber Resilience Act (CRA) establishes cybersecurity requirements for products with digital elements throughout their lifecycle. During Code and Prebuild, organizations should incorporate cybersecurity risk assessments, secure-by-design principles, third-party dependency reviews, and vulnerability disclosure planning into their software development practices.

This phase focuses on preventing security vulnerabilities before software enters the build pipeline. By integrating CRA-aligned practices into developer workflows, organizations can identify risks earlier, reduce dependency exposure, and establish the processes needed to maintain product security after deployment.

The following activities map CRA requirements to actionable CI/CD practices and suggested open-source tools. The tools are illustrative and are not mandated by the regulation.

### CRA Security Risk Assessment

**Objective:** Identify, evaluate, and document cybersecurity risks before software development and throughout the product lifecycle.

Article 13 requires manufacturers to perform cybersecurity risk assessments that consider the intended purpose, reasonably foreseeable use, operational environment, and expected lifetime of products with digital elements. These assessments inform the selection of appropriate cybersecurity controls and must be documented and updated as appropriate during the product's support period.

For DevOps teams, risk assessments should be integrated into application planning, architecture reviews, and development workflows. Threat modeling can help identify potential attack vectors, vulnerable components, insecure configurations, and risks introduced by software dependencies. Identified risks should be tracked as development tasks, with appropriate mitigation strategies and documented decisions.

#### CRA Requirements and Open-Source Tooling

| CRA Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| Article 13(2)–(3) | Cybersecurity risk assessment | Identify and assess security risks during planning and design; reassess when product functionality or threats change. | [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/) |
| Article 13(3) | Threat identification and analysis | Evaluate potential attack vectors, operational environments, and assets requiring protection. | [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/), [OWASP pytm](https://github.com/izar/pytm) |
| Article 13(4), Article 31, Annex VII | Risk assessment documentation | Record identified risks, mitigation decisions, and applicable security requirements as part of product technical documentation. | [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/), [DefectDojo](https://defectdojo.com/) |
| Annex I, Part I(1) | Risk-based security controls | Define appropriate security controls based on product risks and expected operational conditions. | [Open Policy Agent](https://www.openpolicyagent.org/), [Semgrep](https://semgrep.dev/) |

#### Expected Compliance Evidence

- Documented cybersecurity risk assessments.
- Threat models and architectural security reviews.
- Security requirements derived from identified risks.
- Risk mitigation decisions and assigned responsibilities.
- Records of risk assessment updates.


