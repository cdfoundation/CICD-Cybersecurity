---
title: "Phase 2: Build and Deploy"
linkTitle: "Build and Deploy"
weight: 40
layout: docs
---
## Introduction

As software moves from development to production, the **build and deploy** stages play a pivotal role in maintaining the **integrity, security, and provenance** of your application. These phases involve **compiling, packaging, and preparing** your application for its live environment, making them prime targets for **supply chain attacks, unauthorized modifications, and hidden vulnerabilities**.

Integrating security into these phases ensures that your code is not only functional but also **safeguarded against threats**. From **dynamic analysis** during builds to **automated scans** for container security and misconfigurations, the right tools can help identify risks before deployment. Moreover, secure deployment pipelines **prevent unauthorized changes, enforce compliance, and enable safe rollouts**. Modern security frameworks like [TrustOps](https://github.com/trustops) also emphasize the use of **verifiable builds, cryptographic attestations, and runtime integrity enforcement**, leveraging Software Bill of Materials (SBOMs), Trusted Execution Environments (TEEs), and cryptographic signing, to embed security at every step of the build and deployment pipeline.

To secure your build and deployment pipelines, you can leverage:

* **Reproducible and Deterministic Builds** - Ensure that software artifacts can be independently verified and reproduced to prevent tampering.
* **Automated Threat Detection and Compliance Enforcement** - Integrate continuous security analysis to detect misconfigurations, vulnerabilities, and unauthorized dependencies before deployment.
* **Policy-Enforced Deployments** - Enforce verifiable security policies ensuring only compliant, attested software reaches production.
* **Trusted Execution Environments (TEEs)** - Secure build environments against tampering using hardware-backed execution environments.
* **Cryptographic Attestation** - Use digital signatures and cryptographic proofs to verify the authenticity and integrity of builds and deployments.

This page explores the key security tools and best practices for the build and deploy phase, ensuring your applications are delivered securely and maintain resilience in production environments. Learn how to protect your software, infrastructure, and users by embedding security into every step of your delivery process.

## **Open Source Tooling**

### **SBOM Tools and Attestation**
A **Software Bill of Materials (SBOM)** provides visibility into **software components, dependencies, and security risks**. When combined with **attestation mechanisms**, SBOMs enhance **trust and traceability** across the software supply chain.

- **[Apko](https://github.com/chainguard-dev/apko)** - Generates SBOMs for container images and **ensures compliance with security policies**.
- **[Docker BuildX](https://docs.docker.com/reference/cli/docker/buildx/build/#attest)** - Supports **attestation and provenance tracking** for build environments.
- **[Syft](https://github.com/anchore/syft)** - An **open-source SBOM generator** for container images and filesystems.
- **[Trivy](https://github.com/aquasecurity/trivy)** - Detects **vulnerabilities, misconfigurations, and exposed secrets** in containers and codebases.

### **Open Source Build Signing and Verification**
Ensuring **software artifacts remain authentic and unmodified** is essential for a **trusted software supply chain**. The following tools provide **cryptographic verification** to protect against **supply chain attacks**.

- **[sigstore.dev](https://www.sigstore.dev/)** - **Automated signing, verification, and transparency** for software artifacts.
- **[Notary](https://notaryproject.dev/)** - **Ensures integrity and authenticity** of deployed artifacts.
- **[in-toto](https://in-toto.io/)** - **Verifiable build pipelines** that define and track the **chain of custody** of software artifacts.
- **[GitHub Artifact Attestations](https://github.blog/changelog/2024-06-25-artifact-attestations-is-generally-available/)** - **Cryptographic artifact attestation** integrated into CI/CD workflows.
- **[The Update Framework (TUF)](https://theupdateframework.io/)** - **Prevents software update attacks** by verifying **signed metadata** before deployment.

### **Security-Enhanced Build and Deployment Tooling**

Beyond open-source tools, a **secure build and deploy pipeline** relies on **trusted execution environments, deterministic build systems, cryptographic verification, and policy-enforced deployment mechanisms**. These technologies provide **tamper-proof guarantees, verifiable attestations, and automated security policies** to strengthen the **software supply chain**.

#### **1. Reproducible and Deterministic Build Systems**  
Ensuring that **software builds are reproducible** enhances security by allowing independent verification of artifacts. These systems minimize **non-determinism** and ensure that a given input always produces the same output.

- **[Nix](https://nixos.org/)** - A **declarative package manager** that ensures **reproducible software builds** and isolated environments.
- **[Guix](https://guix.gnu.org/)** - A functional package manager providing **fully reproducible builds** with **cryptographic authentication**.
- **[Bazel](https://bazel.build/)** - A build system designed for **deterministic, scalable builds** across multiple platforms.
- **[Reproducible Builds](https://reproducible-builds.org/)** - A community-driven effort to make builds **verifiable and deterministic**.

#### **2. Trusted Execution Environments (TEEs) and Confidential Computing**  
Trusted Execution Environments (TEEs) provide **hardware-backed isolation** to secure the **build process, key management, and code execution**. These environments ensure **confidentiality and integrity** in the **build and deploy process** and can be found in major cloud providers.

- **[Intel TDX](https://www.intel.com/content/www/us/en/developer/tools/trust-domain-extensions/overview.html)** - Hardware-based **confidential and attestable execution**.
- **[AMD SEV](https://www.amd.com/en/developer/sev.html)** - Secure **virtual machine encryption and attestation**.
- **[Microsoft CCF (Confidential Consortium Framework)](https://github.com/microsoft/CCF)** - A **TEE-based confidential computing framework** for secure execution.
- **[AWS Nitro Enclaves](https://aws.amazon.com/ec2/nitro/nitro-enclaves/)** - **Isolated, attested environments** for running sensitive workloads.
- **[Confidential Containers](https://github.com/confidential-containers/confidential-containers/)** - **Confidential Kubernetes deployments** ensuring **attestation and integrity** in production.

#### **3. Cryptographic Signing and Verification**  
**Signing software artifacts and verifying them cryptographically** ensures **authenticity, integrity, and provenance** in the **software supply chain**.

- **[OpenSSL](https://www.openssl.org/)** - **Cryptographic library** for signing and verifying artifacts using **X.509 certificates**.
- **[GnuPG (GPG)](https://gnupg.org/)** - **PGP-based signing and encryption** for software packages.
- **[Bouncy Castle](https://www.bouncycastle.org/)** - A **Java cryptographic library** supporting various **digital signature algorithms**.
- **[Keylime](https://keylime.dev/)** - **Remote attestation and integrity verification** for cryptographic security.
- **[Ethereum Attestation Service (EAS)](https://attest.org/)** - On-chain and off-chain **cryptographic attestations** for decentralized verification.

#### **4. Secure Build and Deployment Policies**  
Automated **security policy enforcement** in CI/CD pipelines ensures **only verifiably secure software** is built and deployed.

- **[Kyverno](https://kyverno.io/)** - **Kubernetes-native policy engine** for validating software deployments.
- **[OPA (Open Policy Agent)](https://www.openpolicyagent.org/)** - A **declarative policy engine** for access control and security enforcement.
- **[SPIFFE/SPIRE](https://spiffe.io/)** - **Workload identity and attestation** for secure service-to-service communication.

For a **more comprehensive list of tools, methodologies, research, and best practices**, see **[Awesome TrustOps](https://github.com/trustops/awesome-trustops)**.

### **Conclusion**

**Secure and trustworthy build and deploy pipelines** require **reproducibility, cryptographic attestation, confidential execution, and automated security policies**. These technologies help **eliminate trust assumptions, prevent unauthorized modifications, and ensure compliance** throughout the **software lifecycle**.
