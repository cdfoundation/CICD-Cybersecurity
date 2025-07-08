# CI/CD Cybersecurity SIG Overview

[Website](https://cicd-cybersecurity.netlify.app/)

Continuous Integration and Continuous Delivery (CI/CD) pipelines are critical touchpoints where code-level vulnerabilities, container security, and vulnerability remediation efforts converge in modern software development. As security demands rise across the software lifecycle—from code to cloud—CI/CD teams are increasingly tasked with embedding cybersecurity guardrails directly into their processes. This SIG is dedicated to advancing security tooling within CI/CD pipelines, with a focus on defining DevSecOps best practices and developing frameworks for secure pipeline implementation from code to cloud. 

The CD Foundation’s CI/CD Cybersecurity SIG (Special Interest Group) aims to address this challenge by advancing security tooling within CI/CD pipelines. This SIG will identify open-source DevSecOps tools aligned with established secure software development frameworks, integrating them into existing pipelines to ensure end-to-end security from code to cloud

This SIG will develop a guide to help DevOps engineers build security-compliant CI/CD pipelines by mapping new open-source security automation tools to evolving security frameworks. As security standards evolve, pipeline updates are essential to ensure safer software development. The SIG will explore the intersection of security tooling and the CI/CD pipeline, identifying key security practices, tools, and strategies that align with accepted frameworks such as the Secure Software Development Framework and the NIST Cybersecurity Framework. This SIG will align framework-defined tasks with open-source tools to accomplish them.

## Why This SIG Is Needed

There is a pressing need for stronger security measures within CI/CD, as underscored by industry trends and research:
- Rising Vulnerabilities: As of 2024, there are 250,000 vulnerabilities, many of which remain unaddressed for extended periods, often exceeding a year. A slow response to these vulnerabilities can be costly: IBM estimates that delays in vulnerability remediation cost enterprises an average of $5.5 million annually.
- Expanding Threat Landscape with AI: The push to develop AI-driven solutions has introduced new security challenges. This trend has broadened the attack surface, necessitating additional tooling to secure models and pipelines related to Large Language Models (LLMs) and AI workloads.
The evolution of CI/CD pipelines is crucial to address these mounting security concerns. While organizations like the CNCF and OpenSSF are incubating innovative security tools, discussions on integrating these tools within CI/CD pipelines remain limited.

## SIG Goals and Objectives

The CI/CD Cybersecurity SIG aims to:

- Support Framework Compliance: Identify and map open source security tools to established secure software development frameworks and standards for integration into CI/CD pipelines.

- Promote Security Best Practices: Encourage adherence to security guardrails within CI/CD workflows, with an emphasis on key domains such as, Code-level security, repo security, Container security, and Vulnerability management
  
- Track and Align Emerging Tools:  Monitor and catalog emerging security tools that support evolving CI/CD requirements and align with recognized security standards and best practices.


Collaborate with Industry Leaders:
Partner with CNCF, OpenSSF, and other relevant communities to drive adoption of standardized security practices and foster cross-industry collaboration.
## Scope of Work

The SIG will undertake the following key activities:
- Map and document tool to framework ‘tasks’, playbooks, and guidelines for securely integrating security tooling within CI/CD.
- Provide recommendations for securing pipelines used in AI and LLM deployments.
- Identify gaps in current CI/CD security tooling and collaborate with the community to address these gaps.
- Review and enhance existing security recommendations tailored specifically to CI/CD pipelines.
- The SIG will consider guidelines from work previously completed, including:
  - [The NIST Secure Software Development Framework](https://www.cisa.gov/resources-tools/resources/nist-sp-800-218-secure-software-development-framework-v11-recommendations-mitigating-risk-software)
  - [IBM’s X-Force Threat Landscape Report](https://www.ibm.com/reports/threat-intelligence)
  - [The NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
  - [Securing the AI Software Supply Chain](https://research.google/pubs/securing-the-ai-software-supply-chain/)

Additional References include the [Proactive Software Supply Chain Risk Management Framework](https://s3c2.org/psscrm/)

# Audience and Participants

The effort should be open to all involved in the field of CI/CD, AI, and Security. Within CDF it is essential we engage our broader community, including:
- Open-source project communities from the CDF, OpenSSF, and CNCF
- CDF and OpenSSF Ambassadors
- OpenSSF DevRel Committee
- CDF CD Events
- CDF Member companies
- CDF End User Council participants

## Members

* Tracy Ragan ([@tracyragan](https://github.com/tracyragan)), DeployHub (TOC Sponsor)
* Sacha Wharton ([@sachajw](https://github.com/sachajw)), i1 Solutions, Ortelius Security Team
* Joshua Blengino, CloudBees
* Tony Carrato ([@tcarrato68](https://github.com/@tcarrato68)), Technical Security Advisor
* Brian Dawson, DeployHub
* Jude Wellington, Jenkins Meetup Organizer
* Kate Scarcella ([@k8scarcella](http://github.com/k8scarcella)), Cybersecurity Architect Consultant, Ortelius Architecture Team
* Utkarsh Sharma ([@codeWithUtkarsh](http://github.com/codeWithUtkarsh)) Acutro, Ortelius Architecture Team
* Jing Chen ([@jdchen5](https://github.com/jdchen5)), Consultant HSBC
* Pawel Piwosz ([@pawelpiwosz](https://github.com/pawelpiwosz/) Tameshi, Cloud Solution Architect  
* V Sreenivas ([@cnu1812](https://github.com/cnu1812)), StackUp
* Eduardo Brito ([@edurbrito-cyber](https://github.com/edurbrito-cyber)), Security Engineer @ Cybernetica AS
* James Leone ([@jleonelion](https://github.com/jleonelion)) IBM Consulting, Practice Director
* Shahriyar Al Mustakim Mitul ([@mitul3737](https://github.com/mitul3737)), BRACU
* Kris Stern ([@krisstern](https://github.com/krisstern)), Jenkins
* John Linford, Open Group
* Jasim Alam ([@jasimalam](https://github.com/jasimalam)), Astha IT
* Fernando Castillo ([@ferjcast](https://github.com/ferjcast)), Researcher  @ TU Berlin
* Safeer C M ([@safeercm](https://github.com/safeercm)), DevOps and SRE Consultant
* Adam Roper ([@roperscrossroads](https://github.com/roperscrossroads)), Platforms & Infrastructure Specialist
* Shiv Ganesan ([@ganshiv](https://github.com/ganshiv)), DevSecOps and Platform Engineer
* Alex Wiecehrt ([@AlexanderWiechert](https://github.com/AlexanderWiechert)), DevOps and Cloud Solution Architect
* Ann Marie Fred ([@amfred](https://github.com/amfred)), SPSE at Red Hat
* Minyi Chen ([@minyihc](https://github.com/minyihc)), Fidelity Investments
* Rajiv Singh ([@iamrajiv](https://github.com/iamrajiv)), A.P. Moller - Maersk

## New Members

Membership to the CDF CI/CD Cybersecurity SIG is open to the public and self-declared.

New members are advised to:

* Join the SIG and CDF TOC mail lists.
* Join the [SIG-CICD-Cybersecurity Slack Channel](https://cdeliveryfdn.slack.com/archives/C082V7WN9K4)
* Join the [mailing list](https://lists.cd.foundation/g/CICD-Cybersecurity)
* Go through the README.md document.
* Submit a PR to add yourself to the members list.
* Regularly join the SIG Meetings.
* Contribute to the Documentation [CICD-cybersecurity.netlify.app](https://cicd-cybersecurity.netlify.app/community/)
* Here are various ways to get involved:
  * Share your thoughts by joining the meetings or by posting to maillist.
  * Present a project the community you are part of is working on.
  * Add a topic you would like to discuss to the agenda.
  * Create a new issue to start gathering feedback and collaborating.
  * Choose an issue where help is needed and comment on it expressing interest.
  * Propose a Proof of Concept

# Governance

CI/CD Cybersecurity is a [CDF Special Interest Group](https://github.com/cdfoundation/toc/tree/master/sigs).
Governance details for this SIG can be found [here](https://github.com/cdfoundation/CICD-Cybersecurity#governance)



