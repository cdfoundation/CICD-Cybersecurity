# CDF Project Proposal: CI/CD Cybersecurity Guide

## Project Name
CI/CD Cybersecurity Guide

## Project Type
Documentation, guidance, and reference architecture project based on existing frameworks. First iteration focuses on the Secure Software Development Framework. 

## Proposed Maturity Level
incubating (with intent to graduate)

## Proposing Group
CDF CI/CD Cybersecurity Special Interest Group (SIG)

## Proposed Governance
CI/CD Technical Oversight Committee (TOC)

## Background and Context

Over the past year, the CDF CI/CD Cybersecurity SIG has operated as an active working group focused on improving the security posture of modern continuous delivery pipelines. The SIG was formed in response to growing industry concern around software supply chain attacks, increasing regulatory pressure, and the expanding responsibilities placed on DevOps and platform engineering teams.

During its first year, the SIG successfully delivered the **CI/CD Cybersecurity Guide**  
https://cybersecurity.cd.foundation/

The guide is a vendor-neutral, practitioner-focused resource that documents how open-source security tooling integrates directly into CI/CD workflows based on industry standard frameworks. It reflects the use of open-source tooling that can be adopted in CI/CD pipelines used by organizations running Jenkins, Tekton, Shipwright, Spinnaker and internal developer platforms. The guide focuses on new OS tooling from the OpenSSF, Apache, and other OS foundations.  

With the guide published and in active community use, the SIG believes the initiative has reached sufficient maturity, scope, and sustainability to progress into an official CDF project.


## Problem Statement

[Full Overview](https://github.com/cdfoundation/CICD-Cybersecurity/blob/main/README.md)

Why this Guide Now: 
This guide helps DevOps engineers build security-compliant CI/CD pipelines by mapping new open-source automation tools to evolving security frameworks. As security standards evolve, pipeline updates are essential to ensure safer software development. This guide examines the intersection of security tooling and the CI/CD pipeline, highlighting key security practices, tools, and strategies that align with established frameworks, including the Secure Software Development Framework and the NIST Cybersecurity Framework. This guide aligns framework-defined tasks with open-source tools to facilitate their accomplishment, providing a shared orientation model for practitioners as CI/CD systems become more automated and interconnected.

As CI/CD pipelines increasingly incorporate AI - and LLM-assisted workflows, delivery velocity and automation continue to accelerate, placing new pressure on verification, provenance, and control points within the pipeline. This guide treats AI as an accelerator of existing CI/CD patterns—not a separate domain—reinforcing the need for clear, framework-aligned security practices that help practitioners reason about risk as complexity increases.

Modern software delivery environments face several challenges:

- CI/CD pipelines have become a primary attack surface.
- Security guidance is often fragmented, tool-specific, or disconnected from delivery workflows.
- Platform engineering teams are increasingly responsible for embedding security guardrails into internal developer platforms.
- Organizations struggle to translate high-level security requirements into actionable CI/CD implementation patterns.

There is a clear need for a foundation-owned, continuously maintained reference guide that aligns CI/CD security practices with open-source security tooling as delivery models continue to evolve.

## Project Scope

The CI/CD Cybersecurity Guide project will:

- Maintain and evolve the existing cybersecurity.cd.foundation content
- Provide practical guidance for securing CI/CD systems and internal developer platforms
- Map security practices and tooling to pipeline stages and operational workflows
- Reference and integrate CDF-hosted projects where applicable
- Offer architecture diagrams, workflow patterns, and implementation examples
- Support education, adoption, and community contribution


## Non-Goals

This project will not:

- Create or maintain security tooling
- Provide compliance certification or auditing services
- Replace individual project documentation
- Define new frameworks or guidelines


## Alignment with CDF Mission

This project directly supports the CDF mission by:

- Advancing best practices in continuous delivery
- Strengthening the reliability and trustworthiness of CI/CD systems
- Promoting interoperability and shared implementation guidance
- Supporting the long-term sustainability of CDF projects through secure adoption

## Project Deliverables

- Versioned releases of the CI/CD Cybersecurity Guide
- Maintained website and documentation repository
- Roadmap-driven content updates
- Community contribution framework
- Reference architectures and diagrams
  
## Initial Roadmap (High-Level)

### Phase 1
- Transition guide to CDF project governance
- Establish maintainers and a contribution model
- Stabilize structure and terminology
- Define release cadence

### Phase 2
- Expand platform engineering content
- Add AI lifecycle patterns
- Deepen references to CDF ecosystem projects

### Phase 3
- Ongoing community-driven updates
- Regular content refresh aligned to industry changes
- Build more features into the site.
  - Advance searching / Tag/Filter System
  - Seach History and Bookmarking
  - Breadcrumbs
  - Phase Dashboard Cards

## Community and Sustainability

The project will:

- Operate under open governance
- Welcome contributors across the CDF ecosystem
- Maintain a transparent roadmap planning
- Encourage participation from practitioners, platform engineers, and project maintainers
- Provide continuity beyond the original SIG membership


## Success Metrics

- Active maintainers and contributors
- Regular content releases
- Adoption and references across CDF events and materials
- Community engagement and feedback
- Alignment with evolving CI/CD and platform engineering practices


## Summary

After one year of sustained SIG activity and successful delivery of the CI/CD Cybersecurity Guide, the initiative is ready to mature into a full Continuous Delivery Foundation project. Transitioning this work under CI/CD TOC governance will provide the structure, longevity, and visibility necessary to ensure the guide continues to evolve as a foundational resource for secure CI/CD and platform engineering practices across the global open source ecosystem.


## Link to *current* Code of Conduct (if one is adopted already)

[Code of Conduct](https://github.com/cdfoundation/CICD-Cybersecurity/blob/main/CODE_OF_CONDUCT.md)

## Sponsor from TOC, if identified (a sponsor helps mentor projects)

Tracy Ragan - [@tracyragan](https://github.com/tracyragan)



## Source control (GitHub by default)

[CICD Cybersecurity Guide](https://github.com/cdfoundation/CICD-Cybersecurity)

## Issue tracker (GitHub by default)

[Guide Main Issue Page](https://github.com/cdfoundation/CICD-Cybersecurity/issues)


## Names of initial committers, if different from those submitting proposal

Initial committers are same as ones submitting proposal.

## Briefly describe the project's leadership team and decision-making process

[Kate Scarcella](https://github.com/k8scarcella) is the Chair of the CI/CD Cybersecurity SIG. 

Experienced Security Architect with a demonstrated history of working in the information technology and services industry. Skilled in NERC CIPC Requirements, Management, Leadership, Security, and Project Management. Strong engineering professional with a Masters of Science focused in Computer and Information Systems Security/Information Assurance from Nova Southeastern University. 

[Tracy Ragan](https://github.com/TracyRagan) Primary Contributor / Author

Tracy is a recognized expert in software supply chain security and DevSecOps, specializing in managing complex, decoupled architectures. She is the CEO of DeployHub, a scalable continuous vulnerability management platform that empowers software to 'self-heal' by automatically applying remediations for newly identified vulnerabilities. Tracy serves on the Governing Board of the Open Source Security Foundation (OpenSSF) as a General Member Representative and member of the Technology Oversight Committee at the Continuous Delivery Foundation (CDF). Earlier in her career, she was a founding Board Member of the Eclipse Foundation, where she worked alongside IBM to advance the integrated development environment (IDE) ecosystem.

#### CI/CD Cybersecurity Community
The CI/CD Cybersecurity community meets bi-weekly for an overall project status meeting.  Guide content, format, and expansion are the topics of these meetings. 

- [General Meeting Minutes](https://docs.google.com/document/d/1DXgvzQzMRqvvryB_W0Te4foA0Loh5WvwKojEEa7W0ak/edit?usp=sharing)
- [Meeting Recordings Youtube](https://www.youtube.com/watch?v=Q8m067Z35uE&list=PL2KXbZ9-EY9TIHn457fyjjrUcM5fSszy8)


## CI/CD Cyberseucrity Guide License

[Apache](https://github.com/cdfoundation/CICD-Cybersecurity/blob/main/LICENSE)

## Guide Disclaimer - On first page of guide: 

Disclaimer
This CI/CD Cybersecurity Guide is meant to serve as a reference point. Users are strongly encouraged to review these recommendations to fit their specific project security requirements and organizational standards. By using this guide, you agree to do so at your own risk and discretion. The Continuous Delivery Foundation and the Linux Foundation shall not be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this guide, even if advised of the possibility of such damage.

## Contributing Guidelines 

- [Contributing Guidelines](https://github.com/cdfoundation/CICD-Cybersecurity/blob/main/CONTRIBUTING.md)

## Preferred maturity level (see stages below)

Incubation

## List of project's official communication channels (slack, irc, mailing lists)

- [Slack](https://cdeliveryfdn.slack.com/archives/C082V7WN9K4)


## Link to project's website

- [Homepage](https://cybersecurity.cd.foundation/)
- [SIG Page](https://cd.foundation/cybersecurity/)


## Infrastructure Needs
Netlify for hosting the Guide's webpage. (estimated cost $10 monthly)
