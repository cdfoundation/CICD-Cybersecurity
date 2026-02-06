---
title: "1.2 Protect the Software (PS)"
linkTitle: "1.2 Protect the Software (PS)"
weight: 6
layout: docs
description: >
 1.2 Protect the Software (PS) Phase 1 Tasks
---

## 1.2 Protect the Software (PS) Tasks for Code and Prebuild

Organizations should protect all components of their software from tampering and unauthorized access.

<br>

### PS.1: Protect All Forms of Code from Unauthorized Access and Tampering

Help prevent unauthorized changes to code, both inadvertent and intentional, which could circumvent or negate the intended security characteristics of the software.
For code that is not intended to be publicly accessible, this helps prevent theft of the software and may make it more difficult or time-consuming for attackers to find vulnerabilities in the software.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="30">
      <strong>PS.1.1:</strong>
      <p>
        Store all forms of code – including source code, executable code, and configuration-as-code –  based on the principle of least privilege so that only authorized personnel, tools, services, etc. have access.
      </p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">
        Store all source code and configuration-as-code in a code repository, and restrict access to it based on the nature of the code. For example, open source code intended for public access may need its integrity and availability protected; other code may also need its confidentiality protected.
      </p>
    </td>
    <td>
      <a href="https://github.com/">GitHub</a><p>Provides a centralized source code repository with access control, auditability, and workflow enforcement supporting SSDF practices for secure code management and change control.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gitlab.com/">GitLab</a><p>Delivers integrated source control, CI/CD, and security workflows that enable SSDF-aligned governance, traceability, and secure development processes.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://bitbucket.org/">Bitbucket</a><p>Supports SSDF by managing source code with role-based access, commit integrity options, and mandatory review workflows.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://sourceforge.net/">SourceForge</a><p>Hosts and distributes open-source projects with version control and release management supporting SSDF requirements for code provenance and transparency.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://subversion.apache.org/">Subversion</a><p>Provides centralized version control enabling SSDF practices for change tracking, audit trails, and controlled access to source code.</p>
    </td>
  </tr>
  <tr>
     <td>
      <a href="https://git-scm.com/">Git</a><p>Enables immutable history, traceability, and distributed development workflows foundational to SSDF source integrity and accountability.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gitbucket.github.io/">GitBucket</a><p>Offers Git-based repository hosting with access control and collaboration features supporting SSDF secure development governance.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gitea.com/">Gitea</a><p>Provides lightweight, self-hosted Git repositories that support SSDF requirements for controlled source management and auditability.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gittuf.dev/">gittuf</a><p>Strengthens SSDF compliance by enforcing cryptographic policies and verifiable trust metadata over Git repositories and workflows.</p>
    </td>
  </tr>
  <tr>
  <td>
      <a href="https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits">GitHub Signing Commits</a><p>Ensures SSDF-aligned source integrity by cryptographically verifying the identity of commit authors.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sigstore.dev/">Sigstore</a><p>Enables SSDF-aligned artifact and commit verification through keyless, auditable cryptographic signing and transparency logs.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners/">Github CODEOWNERS</a><p>Enforces SSDF role separation and accountability by requiring designated owners to review and approve code changes.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/features/code-review">GitHub Code Review</a><p>Supports SSDF secure development by enforcing peer review, policy checks, and approval gates before code integration.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/user/project/codeowners/">Gitlab CODEOWNERS</a><p>Implements SSDF responsibility assignment by automatically routing changes to accountable reviewers.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/development/code_review/">Gitlab Code Review Guidelines</a><P>Establishes SSDF-aligned review standards that reduce defects and security risks prior to merging code.</p>
    </td>
  </tr>
</table>

<br>

### PS.2 Provide a Mechanism for Verifying Software Release Integrity

Help software acquirers ensure that the software they acquire is legitimate and has not been tampered with.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="10">
      <strong>PS.2.1:</strong>
      <p>
        Make software integrity verification information available to software acquirers.
      </p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">
        Post cryptographic hashes for release files on a well-secured website.
      </p>
    </td>
    <td>
      <a href="https://infra.apache.org/release-signing.html/">Apache Infrastructure Signing Releases</a><p>Supports SSDF by ensuring that Apache software releases are cryptographically signed and verifiable, establishing trusted provenance and protecting against tampered distribution artifacts.</p>
    </td>
  <tr>
    <td>
      <a href="https://www.openpgp.org/">OpenPGP</a><p>Provides SSDF-aligned cryptographic mechanisms for signing and verifying code and artifacts to ensure authenticity, integrity, and non-repudiation.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.gnupg.org/">The GNU Privacy Guard</a><p>Implements OpenPGP standards to enable SSDF practices for signing source code, commits, and releases with verifiable developer identity.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://letsencrypt.org/">Let's Encrypt</a><p>Supports SSDF secure delivery by issuing free, automated TLS certificates that protect software distribution channels and developer services from interception and tampering.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.ejbca.org/">EJBCA Community</a><p>Enables SSDF compliance by providing an open-source PKI for managing certificates used to authenticate developers, systems, and software artifacts.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.dogtagpki.org/">Dogtag Certificate System</a><p>Supports SSDF trust and identity requirements by issuing and managing digital certificates for secure software signing and infrastructure authentication.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openxpki.org/">OpenXPKI</a><p>Provides SSDF-aligned certificate lifecycle management to establish, audit, and enforce trust across software development and release pipelines.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://smallstep.com/product/team/devops/index.html/">Step-CA</a><p>Enables SSDF automation of cryptographic identity by issuing short-lived certificates for developers, CI/CD systems, and software signing workflows.</p>
    </td>
  </tr>
</table>

<br>

### PS.3 Archive and Protect Each Software Release

Preserve software releases in order to help identify, analyze, and eliminate vulnerabilities discovered in the software after release.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>

  <tr>
    <td rowspan="28">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PS.3.1:</strong>
        <p>
          Securely archive the necessary files and supporting data (e.g., integrity verification information, provenance data) to be retained for each software release.
        </p>
        <div style="height: 16px"></div>
        <p style="font-style: italic">
          Store the release files, associated images, etc. in repositories following the organization’s established policy. Allow read-only access to them by necessary personnel and no access by anyone else.
        </p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PS.3.2:</strong>
        <p>
          Collect, safeguard, maintain, and share provenance data for all components of each software release (e.g., in a Software Bill of Materials (SBOM)).
        </p>
        <div style="height: 16px"></div>
        <p style="font-style: italic">
          Make the provenance data available to software acquirers in accordance with the organization’s policies, preferably using standards-based formats.
        </p>
      </div>
    </td>
    <td>
      <a href="https://docs.github.com/en/get-started/learning-about-github/access-permissions-on-github/">Access Permissions on GitHub</a><p>Enforces SSDF role-based access control by restricting who can view, modify, or administer source code repositories.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/user/permissions/">GitLab Roles and Permissions</a><p>Supports SSDF governance by defining granular roles that enforce least privilege and separation of duties across the SDLC.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization/">GitHub Repository Roles for an Organization</a><p>Implements SSDF organizational controls by standardizing permission levels across teams and repositories.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/user/permissions/">GitLab Roles and Permissions</a><p>Implements SSDF organizational controls by standardizing permission levels across teams and repositories.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://ortelius.io/">Ortelius</a><p>Extends SSDF controls beyond source code by enforcing access, traceability, and accountability over deployed software, SBOMs, and live environment metadata through a deployment-centric digital twin.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/aetheris-ai/aibom-generator/">AI SBOM Generator</a><p>Supports SSDF by automatically generating and maintaining accurate software bills of materials that improve component visibility and vulnerability traceability across the SDLC.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://cyclonedx.org/">CycloneDX</a><p>Enables SSDF-aligned component transparency by providing a standardized SBOM format optimized for security, integrity, and risk analysis.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/usnistgov/swid-tools/">Software Identification (SWID) Tagging Tools and Utilities</a><p>Support SSDF practices by uniquely identifying installed software components to enable asset inventory, provenance tracking, and vulnerability correlation.</p>
  </tr>
  <tr>
    <td>
      <a href="https://spdx.dev/">SPDX</a><p>Provides an SSDF-compliant standard for documenting software components, licenses, and relationships to support supply-chain transparency and compliance.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://openssf.org/projects/bomctl/">bomctl</a><p>Supports SSDF SBOM consumption by validating, querying, and managing SBOMs throughout build and release workflows.</p>
    </td>  
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a><p>Enables SSDF vulnerability detection by identifying known CVEs in third-party dependencies during development and build phases.</p>
    </td></tr>
  <tr>
    <td>
      <a href="https://dependencytrack.org/">Dependency-Track</a><p>Supports SSDF risk management by continuously analyzing SBOMs to monitor component vulnerabilities and policy compliance.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://clairproject.org/">Clair</a><p>Contributes to SSDF by scanning container images for known vulnerabilities prior to deployment.</p>
    </td>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype/">Grype</a><p>Supports SSDF secure build practices by detecting known vulnerabilities in container images and file systems using SBOM data.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://ortelius.io/">Ortelius</a><p>Extends SSDF beyond build time by correlating and aggregating SBOMs, vulnerabilities, and deployment metadata to identify which live environments are actually at risk.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://openssf.org/projects/protobom/">Protobom</a><p>Supports SSDF interoperability by providing reusable libraries and tools for generating and transforming SBOMs across formats.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/syft/">Syft</a><p>Enables SSDF component discovery by generating SBOMs from source code, containers, and runtime artifacts.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://hoppr.dev/">Hoppr</a><p>Supports SSDF SBOM sharing and discovery by enabling secure distribution and retrieval of SBOM artifacts.</p>
      </td>
  <tr>
    <td>
      <a href="https://github.com/tern-tools/tern/">Tern</a><p>Contributes to SSDF transparency by analyzing container images to produce detailed component inventories and SBOMs.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/">Trivy</a><p>Supports SSDF secure development by scanning for vulnerabilities, misconfigurations, and exposed secrets across code and artifacts.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/google/aoss-verifier/">aoss-verifier</a><p>Enables SSDF compliance validation by verifying the integrity and authenticity of open-source artifacts.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://sigstore.dev/">Sigstore</a><p>Supports SSDF provenance by enabling cryptographically verifiable signing of artifacts and SBOMs with transparency logs.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.tlsnotary.org/">TLSNotary Protocol</a><p>Contributes to SSDF trust by providing cryptographic proof of data integrity for externally retrieved security and dependency metadata.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.github.com/en/actions/">GitHub Actions</a><p>Enables SSDF automation by embedding security checks, SBOM generation, and policy enforcement directly into CI workflows.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/ci/">GitLab CI/CD</a>Supports SSDF secure pipelines by integrating build, test, scan, and release controls within a governed CI/CD system.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.jenkins.io/">Jenkins</a><p>Jenkins is a fully open-source automation server, released under the MIT License, with an extensible plugin ecosystem governed by the Jenkins community and widely used to implement SSDF-aligned CI/CD security controls.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.updatecli.io/">Updatecli</a><p>Supports SSDF remediation by automating dependency, configuration, and policy updates in a controlled and auditable manner.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.mend.io/renovate/">Renovate</a><p>Enables SSDF secure maintenance by automatically updating vulnerable dependencies while preserving review and approval controls.</p>
    </td>
  </tr>
 </table>

<br>
