---
title: "Phase 1: Code and Prebuild"
linkTitle: "Code and Prebuild"
weight: 20
description: >
  Security Compliance for Code and Prebuild
layout: docs
---


## Introduction

Integrating security into every stage of the Software Development Life Cycle (SDLC) is more critical than ever. The code and prebuild stage is foundational to creating secure, reliable, and high-performing applications. Failing to address vulnerabilities early can lead to costly fixes, data breaches, and reputational damage down the line.

This section provides a comprehensive guide to the essential security tools that developers and DevOps teams should use during the code and prebuild phase to ensure vulnerabilities are identified and mitigated before they can cause harm. From Static Application Security Testing (SAST) to dependency scanning and secure CI/CD pipelines, the right tools can help you adopt a proactive approach to software security while maintaining development velocity. Following are guidelines from industry frameworks with suggested open source tooling needed to achieve the compliance goals. For example: 


-- Ensure source code integrity and provenance

-- Prevent unauthorized access to repositories and pipelines

-- Detect insecure code patterns early - shift left

-- Identify vulnerable open-source dependencies

-- Generate SBOMs as early as possible

-- Establish traceability from commit → artifact → deployment


### Key Phase 1 Security Activities

Compliance for Code and Prebuild steps include:

|                                                       |                                                                                                                                       |
|-------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| <strong>ACTIVITY</strong>                          | <strong>PURPOSE</strong>                                    |
| Repository Access Control                             | Prevent unauthorized code change                                     |
| Commit Signing                                        | Establish software provenance |
| Branch Protection                                     | Enforce peer review and policy                                   |
| SAST                                                  | Detect insecure code patterns                                        |
| Dependency Scanning                                   |Identify vulnerable libraries                     |
| SBOM Generation                                       |Create early component visibility                  |

Following are guidelines from industry frameworks with suggested open source tooling needed to achieve the compliance goals.
