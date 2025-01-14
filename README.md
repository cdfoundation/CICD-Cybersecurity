# CI/CD Cybersecurity SIG Overview

Continuous Integration and Continuous Delivery (CI/CD) pipelines are critical touchpoints where code-level vulnerabilities, container security, and vulnerability remediation efforts converge in modern software development. As security demands rise across the software lifecycle—from code to cloud—CI/CD teams are increasingly tasked with embedding cybersecurity guardrails directly into their processes. This SIG is dedicated to advancing security tooling within CI/CD pipelines, with a focus on defining DevSecOps best practices and developing frameworks for secure pipeline implementation from code to cloud. 

The CI/CD Cybersecurity SIG will play a pivotal role in advancing CI/CD security and supporting organizations in meeting modern cybersecurity demands. With focused efforts on integration frameworks, best practices, and emerging tooling, this SIG will address the critical need to embed security into every stage of the CI/CD pipeline, ensuring a resilient and secure software development lifecycle.

## Why This SIG Is Needed

There is a pressing need for stronger security measures within CI/CD, as underscored by industry trends and research:
- Rising Vulnerabilities: In 2024 alone, over 500,000 new vulnerabilities were discovered, many of which remain unaddressed for extended periods, often exceeding a year. A slow response to these vulnerabilities can be costly: IBM estimates that delays in vulnerability remediation cost enterprises an average of $5.5 million annually.
- Expanding Threat Landscape with AI: The push to develop AI-driven solutions has introduced new security challenges. This trend has broadened the attack surface, necessitating additional tooling to secure models and pipelines related to Large Language Models (LLMs) and AI workloads.
The evolution of CI/CD pipelines is crucial to address these mounting security concerns. While organizations like the CNCF and OpenSSF are incubating innovative security tools, discussions on integrating these tools within CI/CD pipelines remain limited.

## SIG Goals and Objectives

The CI/CD Cybersecurity SIG aims to:

- Develop Integration Frameworks: Create specifications and standards for integrating open-source security tooling into CI/CD pipelines.
- Promote Security Best Practices: Establish security guardrails and best practices for CI/CD teams, covering key areas like code-level security, container security, and vulnerability management.
- Identify and Evaluate Emerging Tools: Serve as a resource to evaluate and recommend new open-source and proprietary tools that align with evolving security requirements within CI/CD.
- Collaborate with Industry Leaders: Engage with projects under CNCF, OpenSSF, and other relevant foundations to promote cross-community collaboration and adoption of CI/CD security solutions.

## Scope of Work

The SIG will focus on:
- Developing and disseminating frameworks, playbooks, and guidelines for securely integrating security tooling within CI/CD.
- Providing recommendations for securing pipelines used in AI and LLM deployments.
- Identify gaps in current security tooling for CI/CD and collaborate with the community to address these gaps.
- Identifying gaps in security recommendations related specifically to CI/CD implementations.
- The SIG will consider guidelines from work previously completed, including:
  - [The NIST Secure Software Development Framework](https://www.cisa.gov/resources-tools/resources/nist-sp-800-218-secure-software-development-framework-v11-recommendations-mitigating-risk-software)
  - [IBM’s X-Force Threat Landscape Report](https://www.ibm.com/reports/threat-intelligence)
  - [The NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
  - [Securing the AI Software Supply Chain](https://research.google/pubs/securing-the-ai-software-supply-chain/)

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
* Fernando Castillo ([@ferjcast](https://github.com/ferjcast)), Researcher  @ TU Berlin

## New Members

Membership to the CDF CI/CD Cybersecurity SIG is open to the public and self-declared.

New members are advised to:

* Join the SIG and CDF TOC mail lists.
* Join the [SIG-CICD-Cybersecurity Slack Channel](https://cdeliveryfdn.slack.com/archives/C082V7WN9K4)
* Join the [mailing list](https://lists.cd.foundation/g/CICD-Cybersecurity)
* Go through the README.md document.
* Submit a PR to add yourself to the members list.
* Regularly join the SIG Meetings.
* Here are various ways to get involved:
  * Share your thoughts by joining the meetings or by posting to maillist.
  * Present a project the community you are part of is working on.
  * Add a topic you would like to discuss to the agenda.
  * Create a new issue to start gathering feedback and collaborating.
  * Choose an issue where help is needed and comment on it expressing interest.
  * Propose a Proof of Concept

# Governance

CI/CD Cybersecurity is a [CDF Special Interest Group](https://github.com/cdfoundation/toc/tree/master/sigs).
Governance details for this SIG can be found [here](https://github.com/cdfoundation/sig-best-practices#governance)
