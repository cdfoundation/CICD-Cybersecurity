---
linkTitle: "Home"
weight: 1
layout: docs
---

## Implementing Open Source Security Tooling into your CI/CD Pipeline ##

Securing your Continuous Integration and Continuous Deployment (CI/CD) pipeline is no longer optional—it’s essential. This guide is your go-to resource for building, implementing, and optimizing secure CI/CD workflows. Whether you’re a developer, DevOps engineer, or security professional, we provide information on the open-source tools and guidance you need to model security at every stage of your pipeline. From securing code and builds to monitoring post-deployment environments, our hub empowers teams to integrate security seamlessly into their workflows without sacrificing speed or agility. Explore, learn, and transform your CI/CD processes into a fortress of innovation and resilience.

## Why this Guide ##

This guide helps DevOps engineers build security-compliant CI/CD pipelines by mapping new open-source automation tools to evolving security frameworks. As security standards evolve, pipeline updates are essential to ensure safer software development. This guide explores the intersection of security tooling and the CI/CD pipeline, identifying key security practices, tools, and strategies that align with accepted frameworks such as the [Secure Software Development Framework](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf) and the [NIST Cybersecurity Framework](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf). This guide aligns framework-defined tasks with open-source tools to accomplish them.

This guide maps open-source tooling to the requirements of the following standards:

### SSDF
The [Secure Software Development Framework](https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-218.pdf), developed by the National Institute of Standards and Technology (NIST), provides a comprehensive approach to ensuring security across the software development process, from initial design through deployment and maintenance. The framework outlines key practices and guidelines that organizations can implement to secure their software development lifecycle (SDLC), with a particular emphasis on integrating security into automated processes.

### CRA
The [European Union Cyber Resilience Act (CRA)](https://cybersecurity.cd.foundation/docs/) is a regulation designed to strengthen the cybersecurity of products with digital elements throughout their entire lifecycle. It establishes mandatory cybersecurity requirements for manufacturers, including secure-by-design development, cybersecurity risk assessments, software component transparency, vulnerability management, security updates, and coordinated vulnerability disclosure. 

It segments each standard using three primary DevOps phases:

- Phase 1: Code and Prebuild. This section includes security tooling for the earliest points in the CI/CD workflow.
- Phase 2: Build and Deploy. This section covers security tooling for both the build step and deployment step, regardless of where the deployment is occurring (test or production).
- Phase 3: Post Deploy - This secion covers what is needed after deployment. Security does not stop after the binaries have been deployed. This section covers continuous vulnerability management and Dynamic Application Security Testing (DAST).

For more information visit:
- [OpenSSF Public Policy](https://openssf.org/public-policy/)
- [EU Cybersecurity Resilience Act](https://openssf.org/public-policy/eu-cyber-resilience-act/) 
- [NIST DevSecOps Practices](https://pages.nist.gov/nccoe-devsecops/ )

You can also learn about the [OpenSSF Open Source Manifesto](https://openssf.org/blog/2023/08/24/join-us-in-adopting-the-open-source-consumption-manifesto/) to help you along your journey.

## Compliance Goals

Compliance Policies and Practices are being defined across both public and private sectors. Specifically, the US Executive Order (EO) on Improving the Nation’s Cybersecurity and the EU Cyber Resilience Act (CRA) aim to define how to manage threats and vulnerabilities by establishing standardized frameworks for cybersecurity requirements. These frameworks cover the complete software development process, from design through ongoing monitoring of production software assets.

The inclusion of security tooling in the Continuous Integration and Continuous Deployment (CI/CD) pipeline is one crucial area where policy and practices can be implemented and automated. With the rapid pace of development and deployment in modern DevOps environments, security must be seamlessly embedded into each phase of the pipeline to protect applications and data from vulnerabilities and attacks.This is the new job of the DevOps team. This guide is intended to help the DevOps teams easily navigate the new frameworks and understand the tooling needed to achieve the stated compliance goals.


## Disclaimer
This CI/CD Cybersecurity Guide is meant to serve as a reference point. Users are strongly encouraged to review these recommendations to fit their specific project security requirements and organizational standards. By using this guide, you agree to do so at your own risk and discretion. The Continuous Delivery Foundation and the Linux Foundation shall not be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this guide, even if advised of the possibility of such damage.
