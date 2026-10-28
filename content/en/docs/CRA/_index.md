---
linkTitle: "Cyber Resilience Act"
weight: 3
layout: docs
---


# The Cyber Reslience Act (CRA) - Overview

The [European Union Cyber Resilience Act (CRA)](https://cybersecurity.cd.foundation/docs/) is a regulation designed to strengthen the cybersecurity of products with digital elements throughout their entire lifecycle. It establishes mandatory cybersecurity requirements for manufacturers, including secure-by-design development, cybersecurity risk assessments, software component transparency, vulnerability management, security updates, and coordinated vulnerability disclosure. Unlike traditional security practices that focus primarily on development and release, the CRA emphasizes continuous security after deployment, requiring manufacturers to identify, assess, and remediate vulnerabilities throughout a product's support period. The regulation also establishes requirements for reporting actively exploited vulnerabilities and severe security incidents. For DevOps and platform engineering teams, the CRA reinforces the need to integrate cybersecurity practices across the entire CI/CD lifecycle—from Code and Prebuild through Build and Deploy to Post Deployment—while maintaining the evidence necessary to demonstrate compliance.

The CRA requirements which are addressed by this guide are principally found in <strong> Article 13, Article 14, Annex I Part I, Annex I Part II, and Annex VII.</strong> These requirements span several phases, so the mapping below assigns each activity to its primary implementation point.

## Phase 1 — Code and Prebuild
Objective: Prevent cybersecurity risks from being introduced during product planning, design, coding, and dependency selection. The CRA requires manufacturers to assess cybersecurity risks throughout the product lifecycle and design products with security appropriate to those risks. For DevOps teams, Phase 1 converts these requirements into development policies, threat modeling, dependency governance, secure coding practices, and vulnerability disclosure procedures.

## Phase 2 - Build and Deploy
Objective: Produce, validate, and distribute software releases that meet the product's applicable cybersecurity requirements. Phase 2 ensures that security requirements established during development are verified before a software release is made available. The CRA requires products to meet applicable security requirements, including the absence of known exploitable vulnerabilities when placed on the market, subject to the product risk assessment and regulatory provisions.

## Post Deployment
Objective: Continuously identify and address vulnerabilities, maintain security throughout the support period, and provide required disclosures and incident notifications. This phase deserves particular attention. The CRA does not treat security as complete when a software release passes its build-time checks. Manufacturers must operate vulnerability handling processes throughout the applicable support period, including handling vulnerabilities in third-party components and making security updates available.