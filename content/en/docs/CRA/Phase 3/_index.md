---
title: "Post Deployment Tasks"
linkTitle: "Post Deployment Tasks"
weight: 6
layout: docs
description: >
 The Cyber Reslience Act for Post Deploy CI/CD Steps: Phase 3
---


## Achieving Post Deploy Tasks of the Secure Software Development Framework

The European Union Cyber Resilience Act (CRA) establishes cybersecurity obligations that extend beyond software development and initial release. Manufacturers of covered products with digital elements must maintain processes for identifying, evaluating, and addressing vulnerabilities throughout the applicable product support period. These responsibilities include monitoring software components for newly disclosed vulnerabilities, determining which products are affected, distributing security updates, and coordinating vulnerability disclosures.

During Post Deployment, organizations must be prepared to respond to vulnerabilities discovered after software has been released. A software component that was considered secure during development may become vulnerable when a new Common Vulnerabilities and Exposures (CVE) record is published. Build-time scanning alone cannot identify every future vulnerability.

For DevOps and platform engineering teams, continuous vulnerability management should extend the CI/CD pipeline into operational environments. By correlating software component inventories, SBOMs, product versions, and deployment records with emerging vulnerability intelligence, organizations can identify affected products, prioritize remediation, and maintain evidence demonstrating ongoing security activities.

The following sections map CRA requirements to actionable Post Deployment practices and suggested open-source tooling. The tools are illustrative and are not mandated by the regulation.



