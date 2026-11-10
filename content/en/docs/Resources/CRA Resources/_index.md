---
title: "EU Cyber Resilience Act Resources"
linkTitle: "EU Cyber Resilience Act"
description: "Official European Union Cyber Resilience Act resources covering secure software development, software supply chain security, DevSecOps, vulnerability management, and regulatory compliance."
weight: 140
type: docs
---

## European Union Cyber Resilience Act (CRA) Resources

The European Union Cyber Resilience Act (CRA), Regulation (EU) 2024/2847, establishes cybersecurity requirements for hardware and software products with digital elements made available on the EU market.

The CRA promotes security throughout the software product lifecycle, including secure design, development, production, vulnerability management, security updates, and coordinated vulnerability disclosure.

This section provides official European Commission, EUR-Lex, and European Union Agency for Cybersecurity (ENISA) resources to help software developers, DevOps teams, platform engineers, security professionals, and open-source maintainers understand and implement CRA requirements.

### Recommended Learning Path

For practitioners who are new to software security, the following progression provides a practical starting point.

| Step | Course | Learning Objective |
|---|---|---|
| 1 | Developing Secure Software (LFD121) | Understand secure software development fundamentals. |
| 2 | Secure AI/ML-Driven Software Development (LFEL1012) | Learn secure practices for AI-assisted software development. |
| 3 | Introduction to DevSecOps for Managers (LFS180) | Understand how security fits into CI/CD workflows. |
| 4 | Automating Supply Chain Security (LFEL1007) | Learn SBOMs, provenance, and software supply chain controls. |
| 5 | Securing Your Software Supply Chain with Sigstore (LFS182) | Learn software artifact signing and verification. |
| 6 | Securing Projects with OpenSSF Scorecard (LFEL1006) | Automate assessment of open-source project security. |
| 7 | Understanding the EU Cyber Resilience Act (LFEL1001) | Understand software cybersecurity regulatory obligations. |

---


### 1. Foundational CRA Legislation and Guidance

| Document or Resource | Reference | Description | Link |
|---|---|---|---|
| Cyber Resilience Act – Full Regulation | Regulation (EU) 2024/2847 | Complete legal text establishing cybersecurity requirements for products with digital elements. | [EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |
| Cyber Resilience Act – Overview | European Commission | Introduction to CRA objectives, scope, obligations, and implementation milestones. | [European Commission](https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act) |
| Cyber Resilience Act – Legislative Summary | European Commission | Accessible explanation of the CRA's major provisions, including manufacturers' responsibilities and open-source software. | [CRA Summary](https://digital-strategy.ec.europa.eu/en/policies/cra-summary) |
| Commission Guidance on CRA Implementation | C(2026) 5252 | Practical implementation guidance covering product scope, risk assessments, support periods, reporting, open-source software, and substantial modifications. | [Commission Guidance](https://digital-strategy.ec.europa.eu/en/library/commission-publishes-new-guidance-support-timely-cyber-resilience-act-implementation) |
| CRA Implementation FAQs | European Commission | Frequently asked questions explaining CRA obligations, applicability, responsibilities, and compliance considerations. | [CRA FAQs](https://digital-strategy.ec.europa.eu/en/library/cyber-resilience-act-implementation-frequently-asked-questions) |
| CRA Implementation Timeline | European Commission | Regulatory milestones, reporting requirements, standardization activities, and compliance deadlines. | [Implementation Timeline](https://digital-strategy.ec.europa.eu/en/factpages/cyber-resilience-act-implementation) |

### 2. Secure Software Development and DevSecOps

| CRA Reference | Requirement | Description | Link |
|---|---|---|---|
| Article 13(2)–(4) | Cybersecurity Risk Assessment | Manufacturers must assess cybersecurity risks, document their findings, and use the assessment to inform product security requirements. | [CRA Article 13](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |
| Annex I, Part I(1) | Secure-by-Design Development | Products must be designed, developed, and produced to provide cybersecurity appropriate to their risks. | [CRA Annex I](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |
| Annex I, Part I(2)(a) | Known Exploitable Vulnerabilities | Products must be made available on the market without known exploitable vulnerabilities. | [CRA Annex I](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |
| Annex I, Part I(2)(b) | Secure Default Configuration | Products must be available with secure default configurations, including the ability to reset to their original state. | [CRA Annex I](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |
| Annex I, Part I(2)(c) | Security Updates | Products must support addressing vulnerabilities through security updates, including automatic updates where applicable. | [CRA Annex I](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |
| Article 13(5) | Third-Party Component Due Diligence | Manufacturers must exercise due diligence when integrating third-party components, including open-source software. | [CRA Article 13](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |

### 3. Software Supply Chain Security and SBOMs

| CRA Reference | Requirement | Description | Link |
|---|---|---|---|
| Annex I, Part II(1) | Vulnerability Identification | Identify and document vulnerabilities and components contained in products, including maintaining an SBOM in a commonly used, machine-readable format covering at least top-level dependencies. | [CRA Annex I](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |
| Article 13(5) | Third-Party Dependency Security | Apply cybersecurity due diligence to integrated third-party software and hardware components. | [CRA Article 13](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |
| Annex I, Part II(5) | Security Testing and Reviews | Apply appropriate security testing and review practices during development and maintenance. | [CRA Annex I](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |
| Annex I, Part II(7) | Secure Software Distribution | Provide mechanisms for securely distributing product updates to address vulnerabilities. | [CRA Annex I](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |
| Annex VII | Technical Documentation | Maintain documentation supporting conformity, including product descriptions, cybersecurity risk assessments, security controls, and vulnerability-handling processes. | [CRA Annex VII](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |
| Article 31 | Technical Documentation Requirements | Establish and maintain technical documentation demonstrating conformity with applicable cybersecurity requirements. | [CRA Article 31](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |

### 4. Post-Deployment Vulnerability Management

| CRA Reference | Requirement | Description | Link |
|---|---|---|---|
| Annex I, Part II(1) | Vulnerability Identification and Documentation | Identify and document vulnerabilities and product components to support ongoing vulnerability handling. | [CRA Annex I](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |
| Annex I, Part II(2) | Vulnerability Remediation | Address and remediate vulnerabilities without delay, including providing security updates where appropriate. | [CRA Annex I](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |
| Annex I, Part II(3) | Security Testing | Conduct effective and regular tests and reviews of product security. | [CRA Annex I](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |
| Annex I, Part II(4) | Security Update Information | Publicly disclose information about fixed vulnerabilities when security updates are available, subject to applicable exceptions. | [CRA Annex I](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |
| Annex I, Part II(5) | Coordinated Vulnerability Disclosure | Establish and enforce a policy for coordinated vulnerability disclosure. | [CRA Annex I](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |
| Annex I, Part II(6) | Vulnerability Reporting Contact | Facilitate sharing information about potential vulnerabilities, including providing a contact address. | [CRA Annex I](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |
| Article 13(8) | Product Support Period | Determine the product support period and provide vulnerability handling during that period, subject to CRA requirements. | [CRA Article 13](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |

### 5. Vulnerability Disclosure and Regulatory Reporting

| Resource | Reference | Description | Link |
|---|---|---|---|
| CRA Reporting Obligations | Article 14 | Mandatory reporting of actively exploited vulnerabilities and severe incidents affecting product security. | [European Commission](https://digital-strategy.ec.europa.eu/en/policies/cra-reporting) |
| CRA Single Reporting Platform | Article 16 | ENISA-operated platform for submitting required vulnerability and incident notifications. | [ENISA SRP](https://www.enisa.europa.eu/topics/product-security/vulnerability-services/eu-incident-response-and-cyber-crisis-management/single-reporting-platform-srp) |
| CRA Reporting FAQs | ENISA | Guidance on registration, reporting responsibilities, notification workflows, and use of the Single Reporting Platform. | [ENISA FAQs](https://www.enisa.europa.eu/topics/product-security/vulnerability-services/eu-incident-response-and-cyber-crisis-management/single-reporting-platform-srp/frequently-asked-questions) |
| SRP Assigned Representative User Manual | ENISA v1.3 | Practical instructions for registration, notification submission, updates, and reporting workflows. | [User Manual PDF](https://www.enisa.europa.eu/sites/default/files/2026-11/SRP%20-%20User%20Manual%20-%20ARs%20v1.3.pdf) |
| CRA Open-Source Software Guidance | Article 24 | Responsibilities and special provisions for qualifying open-source software stewards and free and open-source software. | [European Commission](https://digital-strategy.ec.europa.eu/en/policies/cra-open-source) |


#### Key Reporting Deadlines

| Obligation | Deadline | Description |
|---|---|---|
| Early Warning | Within 24 hours | Initial notification after becoming aware of an actively exploited vulnerability or reportable severe incident. |
| Vulnerability or Incident Notification | Within 72 hours | More detailed notification concerning the vulnerability or incident. |
| Final Vulnerability Report | Within 14 days after a corrective measure is available | Final report concerning an actively exploited vulnerability and corrective measures. |
| Final Severe Incident Report | Within one month of the 72-hour notification | Final report concerning the severe incident and response. |

These deadlines are subject to the applicable CRA requirements and reporting criteria.

### 6. CRA Standards and Conformity Assessment

| Resource | Reference | Description | Link |
|---|---|---|---|
| CRA Standardisation Overview | European Commission | Explains harmonised European standards supporting conformity with CRA essential cybersecurity requirements. | [CRA Standardisation](https://digital-strategy.ec.europa.eu/en/policies/cra-standardisation) |
| CRA Standardisation Request | M/606 | European Commission request for the development of 41 horizontal and product-specific standards supporting CRA implementation. | [Standardisation Resources](https://digital-strategy.ec.europa.eu/en/policies/cra-standardisation) |
| CRA Technical Documentation | Annex VII | Requirements for technical evidence supporting product cybersecurity compliance. | [CRA Annex VII](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |
| CRA Conformity Assessment | Articles 32–33 | Requirements and procedures for assessing conformity, including applicable third-party assessment routes. | [CRA Regulation](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |
| CRA EU Declaration of Conformity | Article 28 and Annex V | Requirements for declaring that a product complies with applicable CRA requirements. | [CRA Regulation](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |

### 7. Open-Source Software and the CRA

The CRA recognizes the importance of free and open-source software and establishes specific provisions for open-source development communities.

Free and open-source software that is not made available on the market in the course of a commercial activity is generally outside the CRA's product requirements.

However, commercial software manufacturers incorporating open-source components must exercise due diligence, and qualifying open-source software stewards have specific responsibilities under Article 24.

| Resource | Focus | Link |
|---|---|---|
| European Commission CRA Open-Source Guidance | Applicability of the CRA to open-source software, maintainers, and software stewards. | [Open Source and CRA](https://digital-strategy.ec.europa.eu/en/policies/cra-open-source) |
| Article 24 – Open-Source Software Stewards | Cybersecurity policies, vulnerability handling, cooperation, and reporting responsibilities. | [CRA Regulation](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) |
| Commission CRA Implementation Guidance | Practical examples explaining commercial activity, open-source software, and regulatory scope. | [Commission Guidance](https://digital-strategy.ec.europa.eu/en/library/commission-publishes-new-guidance-support-timely-cyber-resilience-act-implementation) |
| CRA Implementation FAQs | Clarifications for developers, businesses, and open-source organizations. | [CRA FAQs](https://digital-strategy.ec.europa.eu/en/library/cyber-resilience-act-implementation-frequently-asked-questions) |

## CRA Resources Mapped to the CI/CD Cybersecurity Guide

| CI/CD Phase | Security Focus | Relevant CRA Requirements | Recommended Resources |
|---|---|---|---|
| Phase 1: Code and Prebuild | Cybersecurity risk assessments, Secure-by-Design, secure coding, dependency due diligence, and vulnerability disclosure preparation. | Article 13; Annex I, Part I; Annex I, Part II | CRA Regulation; Commission Implementation Guidance; CRA FAQs |
| Phase 2: Build and Deploy | Release security validation, SBOM generation, security testing, secure updates, and technical compliance documentation. | Article 13; Article 31; Annex I, Parts I and II; Annex VII | CRA Regulation; CRA Standardisation; Technical Documentation Requirements |
| Phase 3: Post Deployment | Continuous vulnerability management, affected-product identification, remediation, security updates, vulnerability disclosure, and regulatory reporting. | Articles 13–16; Annex I, Part II | CRA Reporting Guidance; ENISA Single Reporting Platform; ENISA Reporting FAQs |

## CRA Implementation Milestones

| Date | Milestone | Status |
|---|---|---|
| December 10, 2024 | CRA entered into force. | In effect |
| June 11, 2026 | Provisions concerning notification of conformity assessment bodies began applying. | In effect |
| July 27, 2026 | European Commission published practical CRA implementation guidance. | Published |
| September 11, 2026 | Manufacturer reporting obligations for actively exploited vulnerabilities and severe incidents began applying. | In effect |
| December 11, 2027 | Main CRA cybersecurity requirements begin applying. | Upcoming |
| December 11, 2027 | Article 24(3) reporting obligations for qualifying open-source software stewards begin applying. | Upcoming |





