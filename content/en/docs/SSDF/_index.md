---
linkTitle: "Secure Software Development Framework"
weight: 2
layout: docs
---

# NIST Secure Software Development Framework (SSDF) — Overview
The [Secure Software Development Framework](https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-218.pdf), defined in NIST SP 800-218, provides a structured set of security practices designed to reduce software vulnerabilities throughout the software development lifecycle (SDLC). Rather than treating security as a final checkpoint before release, SSDF encourages organizations to integrate security into development, build, deployment, and ongoing maintenance activities. The framework establishes four core practice groups: Prepare the Organization (PO), Protect the Software (PS), Produce Well-Secured Software (PW), and Respond to Vulnerabilities (RV). Together, these practices help organizations prevent vulnerabilities, protect software integrity, identify security risks, and respond to vulnerabilities that emerge after release.


## Phase 1: Code and Prebuild
Primary objective: Prevent security weaknesses from entering the software supply chain.
This phase focuses on establishing secure development practices before software enters the build process. It includes defining security requirements, protecting source code repositories, reviewing code, managing dependencies, and identifying vulnerabilities early through activities such as static application security testing (SAST), software composition analysis (SCA), and secrets detection.


## Phase 2: Build and Deploy
Primary objective: Ensure software is built, packaged, and deployed through trusted, secure, and verifiable processes.
This phase focuses on protecting the software build process and ensuring that only validated, trusted artifacts are deployed. Security practices include securing CI/CD infrastructure, controlling access to build systems, scanning dependencies and container images, generating Software Bills of Materials (SBOMs), signing artifacts, and verifying software provenance and integrity.


## Phase 3: Post Deployment
Primary objective: Continuously detect, assess, and remediate vulnerabilities in deployed software throughout its operational lifecycle.
This phase extends security beyond the CI/CD pipeline to address vulnerabilities discovered after software has been released. It includes continuous vulnerability monitoring, identifying affected deployed software, assessing exposure, performing dynamic application security testing (DAST), coordinating remediation, and maintaining vulnerability response processes as new threats emerge.

