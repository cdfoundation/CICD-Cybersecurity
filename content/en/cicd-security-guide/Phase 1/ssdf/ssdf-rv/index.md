---
title: "Respond to Vulnerabilites"
linkTitle: "Respond to Vulnerabilities (RV)"
weight: 8
description: >
 Respond to Vulnerabilities (RV) CI/CD Steps
---


### Respond to Vulnerabilities (RV)

Task: Identify and Respond to Vulnerabilities
How to Achieve: Organizations should identify residual vulnerabilities in their software releases and respond appropriately to address those vulnerabilities and prevent similar ones from occurring in the future.

**RV.1 Identify and Confirm Vulnerabilities on an Ongoing Basis**

<u>Open-Source Tools to Achieve:</u>


_Identify Vulnerabilities_

_Static Application Security Testing (SAST):_

- [Semgrep](https://semgrep.dev/)
- [SonarQube](https://www.sonarqube.org/)
- [CodeQL](https://codeql.github.com/)

_Dynamic Application Security Testing (DAST):_

- [OWASP ZAP](https://www.zaproxy.org/)
- [w3af](https://github.com/andresriancho/w3af)

_Software Composition Analysis (SCA):_

- [OWASP Dependency-Check](https://owasp.org/www-project-dependency-check/)
- [Trivy]( https://github.com/aquasecurity/trivy)
- [Grype](https://github.com/anchore/grype)

**RV.2 Assess, Prioritize, and Remediate Vulnerabilities**

- [OWASP Defectdojo](https://www.defectdojo.org/)
- [GitLab Security Scanning](https://docs.gitlab.com/ee/user/application_security/)
- [Tsunami Security Scanner](https://github.com/google/tsunami-security-scanner)


**RV.3 Identify Root Cause and help to reduce frequency of vulnerabilities in the future**
- [Open Policy Agent (OPA)]( https://www.openpolicyagent.org/)
- [Sigstore](https://www.sigstore.dev/)
- [in-toto](https://in-toto.io/)
