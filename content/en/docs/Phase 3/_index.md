---
title: "Phase 3: Post Deploy"
linkTitle: "Post Deploy"
weight: 45
layout: docs
description: >
  Security Compliance for Post Deploy
---
## Phase 3 - Post Deploy

Phase 3, Post Deploy, extends CI/CD cybersecurity beyond deployment into live, running systems. While earlier phases focus on preventing vulnerabilities from entering the pipeline, Phase 3 assumes that risk continues after release. New vulnerabilities are disclosed daily, configurations drift, and threat actors target production environments directly.

The Phase 3 primary focus is on continuous visibility, post-deployment detection and response to vulnerabilities running on live systems.It ensures organizations can identify which running systems are affected when new vulnerabilities emerge, detect malicious or anomalous behavior at runtime, and respond quickly to minimize operational and security impact. Phase 3 establishes the feedback loop that connects production reality back to development and security teams, enabling continuous improvement across the software delivery lifecycle. In scope for this phase includes:

-- Continuous vulnerability detection for deployed applications, services, containers, and infrastructure

-- Runtime and post-deployment security monitoring

-- Dynamic Application Security Testing (DAST) against running systems

-- Integration of vulnerability intelligence feeds and alerts

-- Incident detection, alerting, and response workflows

-- Measurement of security performance (e.g., MTTD, MTTR)

-- Feedback mechanisms that inform remediation and future development



### Key Phase 3 Security Activities

Compliance for Post-Deploy steps include:

|                                                       |                                                                                                                                       |
|-------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| <strong>ACTIVITY</strong>                          | <strong>PURPOSE</strong>                                    |
| Runtime anomaly detection                             | Detect production attacks                                     |
| DAST scanning                                       | Find runtime vulnerabilities |
| Vulnerability feed integration                         | Continuously update CVE data                                   |
| Alerting & Response                                                  | Triage and respond                                        |

Following are guidelines from industry frameworks with suggested open source tooling needed to achieve the compliance goals.



### Industry Frameworks

Following are guidelines from industry frameworks with suggested open source tooling needed to achieve the compliance goals.
