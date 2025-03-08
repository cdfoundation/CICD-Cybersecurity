---
title: "Phase 1: Code and Prebuild"
linkTitle: "Code and Prebuild"
weight: 20
layout: docs
---


## Introduction

Integrating security into every stage of the Software Development Life Cycle (SDLC) is more critical than ever. The code and prebuild stage is foundational to creating secure, reliable, and high-performing applications. Failing to address vulnerabilities early can lead to costly fixes, data breaches, and reputational damage down the line.

This section provides a comprehensive guide to the essential security tools that developers and DevOps teams should use during the code and prebuild phase to ensure vulnerabilities are identified and mitigated before they can cause harm. From Static Application Security Testing (SAST) to dependency scanning and secure CI/CD pipelines, the right tools can help you adopt a proactive approach to software security while maintaining development velocity.

## Compliance Goals

Compliance Policies and Practices are being defined across both public and private sectors. Specifically, the US Executive Order (EO) on Improving the Nation’s Cybersecurity and the EU Cyber Resilience Act (CRA) aim to define how to manage threats and vulnerabilities by establishing standardized frameworks for cybersecurity requirements. These frameworks cover the complete software development process, from design through ongoing monitoring of production software assets.

The inclusion of security tooling in the Continuous Integration and Continuous Deployment (CI/CD) pipeline is one crucial area where policy and practices can be implemented and automated. With the rapid pace of development and deployment in modern DevOps environments, security must be seamlessly embedded into each phase of the pipeline to protect applications and data from vulnerabilities and attacks.

## Secure Software Development Framework

The [Secure Software Development Framework](https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-218.pdf), developed by the National Institute of Standards and Technology (NIST), provides a comprehensive approach to ensuring security across the software development process, from initial design through deployment and maintenance. The framework outlines key practices and guidelines that organizations can implement to secure their software development lifecycle (SDLC), with a particular emphasis on integrating security into automated processes. This guide focuses specifically on DevSecOps tooling and practices:

[//]: # (- Prepare the Organization &#40;PO&#41;: Organizations should ensure that their people,)

[//]: # (processes, and technology are prepared to perform secure software development at the)

[//]: # (organization level. Many organizations will find some PO practices to also be applicable)

[//]: # (to subsets of their software development, like individual development groups or projects.)

[//]: # ()
[//]: # (- Protect the Software &#40;PS&#41;: Organizations should protect all components of their software from tampering and unauthorized access.)

[//]: # ()
[//]: # (- Produce Well-Secured Software &#40;PW&#41;: Organizations should produce well-secured software with minimal security vulnerabilities in its releases.)

[//]: # ()
[//]: # (- Respond to Vulnerabilities &#40;RV&#41;: Organizations should identify residual vulnerabilities in their software releases and respond appropriately to address those vulnerabilities and prevent similar ones from occurring in the future.)

|                                    |                                                                                                                                                                                                                                                                                                                        |
|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Prepare the Organization (PO)      | Organizations should ensure that their people, processes, and technology are prepared to perform secure software development at the organization level. Many organizations will find some PO practices to also be applicable to subsets of their software development, like individual development groups or projects. |
| Protect the Software (PS)          | Organizations should protect all components of their software from tampering and unauthorized access.                                                                                                                                                                                                                  |
| Produce Well-Secured Software (PW) | Organizations should produce well-secured software with minimal security vulnerabilities in its releases.                                                                                                                                                                                                              |
| Respond to Vulnerabilities (RV)    | Organizations should identify residual vulnerabilities in their software releases and respond appropriately to address those vulnerabilities and prevent similar ones from occurring in the future.                                                                                                                    |                                                           |

The following section defines the “Task” as defined in the S2DF document with a list of open-source tools to achieve the task.

<br>

---

### Protect the Organization (PO)

**PO.3 Implement Supporting Toolchains**

Use automation to reduce human effort and improve the accuracy, reproducibility, usability, and comprehensiveness of security practices throughout the SDLC, as well as provide a way to document and demonstrate the use of these practices. Toolchains and tools may be used at different levels of the organization, such as organization-wide or project-specific, and may address a particular part of the SDLC, like a build pipeline.

<u>Open-Source Tools to Achieve:</u>

_Workflow Framework_

- [In-toto framework](https://in-toto.io/docs/what-is-in-toto/)


<br>

---

### Protect the Software (PS)

**PS.1.1 Store all forms of code**

PS.1.1: Store all forms of code – including source code, executable code, and configuration-as-code – based on the principle of least privilege so that only authorized personnel, tools, services, etc. have access.

<u>Open-Source Tools to Achieve:</u>

_Source Repositories_

- [GitHub](https://git-hub.com/)
- [SourceForge](https://sourceforge.net/)


<br>

---

### Produce Well-Secured Software (PW)

**PW.4.1 Acquire and Maintain Well-secured Software**

Ensure safe use of components (e.g., software libraries, modules, middleware, frameworks) from commercial, open-source, and other third-party developers for use by the organization’s software. Implement a Software Bill of Materials (SBOM) scan to obtain provenance information for each software component. Establish one or more software repositories to host sanctioned and vetted open-source components.

<u>Open-Source Tools to Achieve:</u>

_SBOM Generation and Attestation Tools:_

- [CycloneDX](https://cyclonedx.org/)
- [SPDX](https://github.com/opensbom-generator/spdx-sbom-generator)

_Binary Repositories:_

- [ArtifactHub](https://artifacthub.io/)
- [JFrog Artifactory OSS](https://jfrog.com/community/download-artifactory-oss/)
- [Sonatype Nexus OSS](https://www.sonatype.com/products/nexus-community-edition-download)
- [Harbor](https://goharbor.io/) 

_Git Commit Signing:_

- [GitHub Signing](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)
- [GitLab Signing](https://docs.gitlab.com/ee/user/project/repository/signed_commits/)
- [Bit Bucket](https://confluence.atlassian.com/bitbucketserver/using-gpg-keys-913477014.html)

_Repo Security Scanning_
- [GitHub CodeQL](https://codeql.github.com/)
- [AquaSec Trivy](https://www.aquasec.com/products/trivy/)
- [Dependabot](https://docs.github.com/en/enterprise-server@3.4/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)
- [FrogBot](https://github.com/jfrog/frogbot)
- [Allstar](https://openssf.org/projects/allstar/)


**PW.7 Review and/or Analyze Human-Readable Code**

Help identify vulnerabilities so that they can be corrected before the software is released to prevent exploitation. Using automated methods lowers the effort and resources needed to detect vulnerabilities. Human-readable code includes source code, scripts, and any other form of code that an organization deems human-readable.

<u>Open-Source Tools to Achieve:</u>

- [OWASP Dependency-Check](https://owasp.org/www-project-dependency-check/)
- [Dependency-Track](https://github.com/DependencyTrack/dependency-track)
- [OWASP ZAP](https://www.zaproxy.org/)
- [SonarQube](https://www.sonarsource.com/open-source-editions/sonarqube-community-edition/)
- [Retire.js](https://www.sonarsource.com/open-source-editions/sonarqube-community-edition/)
- [Fossa](https://fossa.com/product/open-source-vulnerability-management)
- [Veracode](https://www.veracode.com/)
- [SonarQube](https://www.sonarsource.com/open-source-editions/)
- [Semgrep](https://github.com/semgrep/semgrep)
- [Bandit for Python](https://github.com/PyCQA/bandit)
- [Checkmarx KICS](https://github.com/Checkmarx/kics)
- [Cppcheck for C##](https://github.com/danmar/cppcheck)
- [FindSecBugs](https://github.com/find-sec-bugs/find-sec-bugs)


<br>

---

### Respond to Vulnerabilities (RV)

Task: Identify and Respond to Vulnerabilities
How to Achieve: Organizations should identify residual vulnerabilities in their software releases and respond appropriately to address those vulnerabilities and prevent similar ones from occurring in the future.

<u>Open-Source Tools to Achieve:</u>


