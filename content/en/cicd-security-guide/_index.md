---
title: "CI/CD Security Guide"
linkTitle: "CI/CD Security Guide"
weight: 40
menu:
  main:
    weight: 40
layout: docs
---
Securing your Continuous Integration and Continuous Deployment (CI/CD) pipeline is no longer optional—it’s essential. This guide is your go-to resource for building, implementing, and optimizing secure CI/CD workflows. Whether you’re a developer, DevOps engineer, or security professional, we provide information on the open-source tools and guidance you need to model security at every stage of your pipeline. From securing code and builds to monitoring post-deployment environments, our hub empowers teams to integrate security seamlessly into their workflows without sacrificing speed or agility. Explore, learn, and transform your CI/CD processes into a fortress of innovation and resilience.

This guide explores the intersection of security tooling and the CI/CD pipeline, identifying key security practices, tools, and strategies that align with accepted frameworks such as the [Secure Software Development Framework](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf) and the [NIST Cybersecurity Framework](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf). 

This guide delves into the integration of automated security testing, vulnerability scanning, static and dynamic analysis, and other essential tools that can be incorporated into the pipeline to enhance software security. By leveraging these frameworks and tools, organizations can develop a culture of security-driven development, reducing the likelihood of breaches and ensuring the integrity of their software products.

This CI/CD Cybersecurity Guide has been segmented into three 3 major chapters:

[//]: # (- Code and Prebuild - this section includes security tooling for the earliest points in the CI/CD workflow.)

[//]: # (- Build and Deploy - this section covers security tooling for both the build step and deployment step, regardless of where the deployment is occuring &#40;test or production&#41;.)

[//]: # (- Post Deploy - security does not stop after the binaries have been deployed. This section covers continuous vulnerability management and Dynamic Application Security Testing &#40;DAST&#41;.)

|                   |                                                                                                                                                                        |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Code and Prebuild | This section includes security tooling for the earliest points in the CI/CD workflow.                                                                                  |
| Build and Deploy  | This section covers security tooling for both the build step and deployment step, regardless of where the deployment is occuring (test or production).                 |
| Post Deploy       | Security does not stop after the binaries have been deployed. This section covers continuous vulnerability management and Dynamic Application Security Testing (DAST). |

For more information on Security Frameworks or Public Security Policy, visit the [OpenSSF Public Policy](https://openssf.org/public-policy/) or [EU Cybersecurity Resilience Act](https://openssf.org/public-policy/eu-cyber-resilience-act/) pages. 

You can also learn about the [OpenSSF Open Source Manifesto](https://openssf.org/blog/2023/08/24/join-us-in-adopting-the-open-source-consumption-manifesto/) to help along the journey. 

