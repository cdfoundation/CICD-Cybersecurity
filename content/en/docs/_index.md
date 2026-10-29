---
linkTitle: "Home"
weight: 1
layout: docs
---

# Implementing Open-Source Security and AI Tooling in Your CI/CD Pipeline

Securing the Continuous Integration and Continuous Delivery (CI/CD) pipeline is essential to building resilient software. As development practices evolve to include AI-generated code, autonomous agents, and AI-powered applications, DevOps teams must address new security challenges alongside traditional software supply chain risks.

The **CI/CD Cybersecurity Guide** provides practical guidance for integrating open-source security tools into every stage of the software delivery lifecycle. Designed for developers, DevOps engineers, platform engineers, and security professionals, the guide connects recognized cybersecurity frameworks with actionable security practices and open-source automation.

From securing source code and build environments to validating AI-generated changes and monitoring deployed applications, this guide helps teams embed security throughout the CI/CD pipeline without compromising delivery speed or agility.

NOTE: This guide focuses exclusively on open-source security tools and does not include or endorse commercial products, ensuring vendor-neutral guidance that promotes transparency, accessibility, and community-driven innovation.

## Why This Guide?

Modern software delivery requires security practices that extend beyond traditional code scanning and pre-deployment testing. Software supply chain vulnerabilities, evolving regulatory requirements, AI-assisted development, and emerging threats to deployed applications demand a more comprehensive approach to DevSecOps.

This guide helps teams understand what security activities are needed, where they belong in the CI/CD pipeline, and which open-source tools can help implement them.

The guide maps security practices to established cybersecurity frameworks, providing practical implementation guidance rather than prescribing specific vendors or products.

It also addresses the growing role of artificial intelligence in software delivery, including securing AI-generated code, protecting autonomous development agents, validating AI applications, and monitoring AI systems after deployment.

## Security Frameworks and Guidance

The CI/CD Cybersecurity Guide organizes security practices around three major areas.

### Secure Software Development Framework (SSDF)

The [NIST Secure Software Development Framework (SSDF)](https://csrc.nist.gov/pubs/sp/800/218/final) provides foundational security practices for developing, building, deploying, and maintaining secure software.

SSDF establishes a common approach to integrating security into the Software Development Lifecycle (SDLC). It emphasizes secure development environments, software integrity, vulnerability identification, and remediation.

This guide maps SSDF practices to CI/CD activities and identifies open-source tools that can automate or support their implementation.

### EU Cyber Resilience Act (CRA)

The [European Union Cyber Resilience Act (CRA)](https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act) establishes cybersecurity requirements for products with digital elements throughout their lifecycle.

The CRA introduces requirements for secure-by-design development, cybersecurity risk assessment, software component transparency, vulnerability handling, security updates, and coordinated vulnerability disclosure.

This guide maps relevant CRA requirements to CI/CD activities, helping DevOps teams understand how open-source tooling can support cybersecurity compliance and ongoing vulnerability management.

### AI Security in the CI/CD Pipeline

Artificial intelligence is transforming software development and delivery. AI coding assistants generate application code, autonomous agents modify dependencies and configurations, and AI models are increasingly integrated into production applications.

These capabilities introduce security risks that traditional CI/CD practices may not fully address, including vulnerable AI-generated code, prompt injection, excessive agent permissions, compromised models, and unauthorized automated changes.

The **AI Security chapter** extends existing DevSecOps practices to address three areas:

- **Securing AI-Assisted Development:** Validating AI-generated code, managing autonomous agent permissions, protecting sensitive information, and assessing AI-related software supply chain risks.
- **Securing AI Applications and Deployment:** Testing AI applications, verifying model integrity, securing AI artifacts, and implementing release validation and authorization controls.
- **Securing AI in Production:** Monitoring deployed AI applications, detecting abnormal behavior, auditing agent activity, and supporting controlled AI-assisted vulnerability remediation.

The chapter draws on the [NIST AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/), [NIST SP 800-218A](https://csrc.nist.gov/pubs/sp/800/218/a/final), and [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/).

It focuses on practical security controls that can be integrated into existing CI/CD workflows using open-source tooling.

## Security Across Three CI/CD Phases

Each chapter organizes security activities around three primary phases of the DevOps lifecycle. This consistent structure helps teams identify and implement security controls at the appropriate stage of software delivery.

### Phase 1: Code and Prebuild

Security begins before software is built.

This phase covers secure development practices, source code analysis, dependency risk assessment, secrets management, and software supply chain security.

For AI-assisted development, it also addresses validating AI-generated code, securing development agents, managing agent permissions, and assessing risks associated with AI models, datasets, and third-party dependencies.

**Goal:** Identify and reduce security risks early in development before they enter the build pipeline.

### Phase 2: Build and Deploy

Security controls must protect the processes used to build, package, validate, and deploy software.

This phase includes automated security testing, Software Bills of Materials (SBOMs), artifact integrity, provenance, secure build environments, and deployment validation.

For AI-enabled development and applications, it also covers model verification, AI security testing, validation of AI-generated changes, and authorization controls for automated deployments.

**Goal:** Ensure software and AI artifacts are tested, verified, and authorized before deployment.

### Phase 3: Post Deploy

Security does not stop when software reaches production.

New vulnerabilities are continuously discovered, deployed applications evolve, and emerging threats can affect software long after its initial release.

This phase addresses continuous vulnerability monitoring, deployed software inventory, affected-system identification, Dynamic Application Security Testing (DAST), remediation, and security updates.

For AI applications, it extends monitoring to model behavior, agent activity, unauthorized tool execution, data exposure, and AI-specific runtime threats.

It also explores how AI can support vulnerability analysis and remediation while maintaining validation, human oversight, and auditable security controls.

**Goal:** Maintain visibility into deployed software and AI systems, detect emerging threats, and support timely, controlled remediation.

## Open-Source Security Tooling

Open-source security tools play a critical role in making secure software delivery accessible, automated, and repeatable.

Throughout the guide, security activities are connected to open-source projects that can help teams implement controls within existing CI/CD environments.

The guide emphasizes:

- **Automation:** Incorporating security checks directly into development, build, deployment, and runtime workflows.
- **Transparency:** Using open-source tooling to improve visibility into security controls, dependencies, and results.
- **Continuous Security:** Extending security beyond initial deployment to address newly discovered vulnerabilities and evolving threats.
- **Evidence and Traceability:** Producing security artifacts, test results, and deployment records that support audits and compliance assessments.
- **Tool Independence:** Encouraging security practices and interoperable solutions rather than requiring specific tools or vendors.

The objective is to help teams select appropriate open-source tools and implement security practices that align with their technology stacks, operational requirements, and risk profiles.

## Compliance Goals

Cybersecurity policies, regulations, and industry frameworks increasingly require organizations to demonstrate that security is integrated throughout the software lifecycle.

Frameworks such as NIST SSDF and regulations such as the EU Cyber Resilience Act establish expectations for secure development, vulnerability management, software integrity, and ongoing maintenance.

Artificial intelligence adds new considerations, including the security of AI-generated code, model provenance, agent permissions, automated decision-making, and runtime monitoring.

CI/CD pipelines provide an opportunity to translate these requirements into automated, repeatable security practices.

By embedding security controls into existing workflows, DevOps teams can reduce manual security effort, improve consistency, generate compliance evidence, and respond more effectively to emerging vulnerabilities.

**The goal of this guide is to help DevOps teams turn security requirements into practical, automated activities across the entire software delivery lifecycle.**

## Additional Resources

The following resources provide further guidance on cybersecurity frameworks, secure software development, and open-source security practices.

- [OpenSSF Public Policy](https://openssf.org/public-policy/)
- [OpenSSF EU Cyber Resilience Act Resources](https://openssf.org/public-policy/eu-cyber-resilience-act/)
- [NIST DevSecOps Practices](https://pages.nist.gov/nccoe-devsecops/)
- [NIST Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [NIST AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/)
- [NIST AI SSDF Profile (SP 800-218A)](https://csrc.nist.gov/pubs/sp/800/218/a/final)
- [OWASP Generative AI Security Project](https://genai.owasp.org/)
- [OpenSSF Open Source Consumption Manifesto](https://openssf.org/blog/2023/08/24/join-us-in-adopting-the-open-source-consumption-manifesto/)

## Disclaimer

This CI/CD Cybersecurity Guide is meant to serve as a reference point. Users are strongly encouraged to review these recommendations to fit their specific project security requirements and organizational standards.

By using this guide, you agree to do so at your own risk and discretion. The Continuous Delivery Foundation and the Linux Foundation shall not be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this guide, even if advised of the possibility of such damage.