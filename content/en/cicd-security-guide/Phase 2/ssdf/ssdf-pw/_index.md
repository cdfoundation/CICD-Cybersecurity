---
title: "Produce Well-Secured Software (PW)"
linkTitle: "Produce Well-Secured Software (PW)"
weight: 7
description: >
 Produce Well-Secured Software (PW) in the Build and Deploy CI/CD Steps
---


### Produce Well-Secured Software (PW)

Organizations should produce well-secured software with minimal security vulnerabilities in its releases.

<br>

**PW.1**

<strong>Design Software to Meet Security Requirements and Mitigate Security Risks: </strong> Identify and evaluate the security requirements for the software; determine what security risks the software is likely to face during operation and how the software’s design and architecture should mitigate those risks; and justify any cases where risk-based analysis indicates that security requirements should be relaxed or waived. Addressing security requirements and risks during software design (secure by design) is key for improving software security and also helps improve development efficiency.

<br>

To satisfy SSDF PW.1 in a build and deploy context using open-source tools, the focus shifts to:

- Embedding security controls directly into the build process

- Validating that build outputs (binaries, containers, packages) are hardened and free from known design-level weaknesses

- Preserving traceability from design requirements to deployed artifacts


<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
      <p>PW.1.1: Use forms of risk modeling, such as threat modeling, attack modeling, or attack surface mapping to help assess the security risk for the software.</p><br>
      <p>PW.1.2: Track and maintain the software’s security requirements, risks, and design decisions.</p><br>
      <p>PW.1.3: Where appropriate, build in support for using standardized security features and services (e.g., enabling software to integrate with existing log management, identity management, access control, and vulnerability management systems) instead of creating proprietary implementations of security features and services. </p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/semgrep/semgrep">Semgrep</a>
      <p> Prevents insecure code from being packaged and deployed.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://aquasecurity.github.io/trivy">Trivy</a>
      <p>Ensures that deployed artifacts align with secure baseline configurations</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">Zap (Zed Attack Proxy)</a>
      <p>Enforces approved component lists and security baselines before deployment.</p>
  </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Generates SBOMs for deployed applications for ongoing monitoring.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://dependencytrack.org">OWASP Dependency-Track</a>
      <p>Enforces approved component lists and security baselines before deployment.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Focused vulnerability scanning for deployed artifacts.</p>
   </td>
  </tr>
  <tr>
    <td>
      <a href="https://nixos.org">Nix</a>
      <p>Guarantees that build artifacts match the security-approved design exactly, with no drift or environmental differences.</p>
   </td>
  </tr>
  <tr>
    <td>
      <a href=" https://guix.gnu.org">GNU Guix</a>
      <p>Ensures that all deployed artifacts are built from a traceable, verifiable environment that aligns with design security baselines.</p>
   </td>
  </tr>
  <tr>
    <td>
      <a href=" https://bazel.build">Bazel</a>
      <p>Enforces secure build rules, prevents unauthorized changes, and produces identical outputs across build agents.</p>
   </td>
   <tr>
    <td>
      <a href="https://reproducible-builds.org">Reproducible Builds Framework</a>
      <p>Strengthens supply chain security by detecting unauthorized modifications between source and deployment.</p>
   </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/chainguard-dev/apko">Apko (Chainguard)</a>
      <p>Implements secure design principles like minimal attack surface and verified dependency selection.</p>
   </td> 
 </tr>
<tr>
    <td>
      <a href="https://www.sigstore.dev">Sigstore(Cosign,Fulcio, Rekor)</a>
      <p> Ensures artifacts come from a trusted, verified build process and haven’t been altered.</p>
   </td> 
 </tr>
<tr>
    <td>
      <a href="https://notaryproject.dev">Notary</a>
      <p>Provides cryptographic assurance that deployed artifacts are authentic and untampered.</p>
   </td> 
 </tr>
<tr>
    <td>
      <a href="https://in-toto.io">In-Toto</a>
      <p>Enforces integrity and accountability across the entire build-to-deploy pipeline.</p>
   </td> 
 </tr>
<tr>
    <td>
      <a href="https://theupdateframework.io">The Update Framework (TUF)</a>
      <p>Protects the integrity of deployment and update distribution channels.</p>
   </td> 
 </tr>
<tr>
    <td>
      <a href="https://www.openssl.org">OpenSSL</a>
      <p>Generate and manage keys for signing build artifacts. Implement TLS/SSL for secure communication between build agents and artifact repositories.</p>
   </td> 
 </tr>
<tr>
    <td>
      <a href="https://gnupg.org/">GnuPG</a>
      <p>Sign source code, commits, and build outputs and verify signatures before deploying artifacts.</p>
   </td> 
 </tr> 
<tr>
    <td>
      <a href="https://www.bouncycastle.org/">Bouncy Castle</a>
      <p>Embed cryptographic signing and verification into Java/.NET build pipelines.</p>
   </td> 
 </tr> 
<tr>
    <td>
      <a href="https://keylime.dev/">Keylime</a>
      <p>Validate that deployment environments meet hardware-based integrity requirements before deployment.</p>
   </td> 
 </tr> 
<tr>
    <td>
      <a href="https://attest.org/">Ethereum Attestation Service (EAS)</a>
      <p>Publish cryptographic attestations of build provenance or deployment approvals and provide a decentralized, tamper-proof audit log of artifact trust data.</p>
   </td> 
 </tr> 
 <tr>
    <td>
      <a href="https://kyverno.io/">Kyverno</a>
      <p>Enforce secure deployment design policies (e.g., approved base images, disallowed configurations).</p>
   </td> 
 </tr> 
 <tr>
    <td>
      <a href="https://www.openpolicyagent.org/">OPA</a>
      <p>Enforce security design requirements at build time (e.g., dependency approval, CVE thresholds). Apply consistent policy enforcement from build pipelines to runtime.</p>
   </td> 
 </tr>
 <tr>
    <td>
      <a href=" https://spiffe.io/">SPIFFE/SPIRE</a>
      <p>Ensure that deployed workloads meet security requirements for mutual authentication and zero trust and bind workload identity to build-time provenance for deployment integrity.</p>
   </td> 
 </tr> 
 <tr>
   <td>
      <a href="https://owasp.org/www-project-threat-dragon/">OWASP Threat Dragon</a>
       <p>Embeds threat models into CI/CD, ensuring security requirements are tied to architectural components before build. (Meets PW.1.1 and PW.1.2) </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-amass/">OWASP Amass</a>
      <p>Helps to refine security requirements around network exposure and asset inventory. (Meets PW.1.1) </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://cairis.org/index.html">CAIRIS</a>
       <p>Integrates security requirements into system models, which can then be validated in build & deploy. (Meets PW.1.1) </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://threagile.io/">Threagile</a>
        <p>Embeds threat models into CI/CD, ensuring security requirements are tied to architectural components before build. (Meets PW.1.1)</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://open-needs.org/">Open-Needs</a>
      <p>Requirements management tool for defining, tracking, and validating security requirements. Documents security requirements and links them to commits and build outputs.(Meets PW.1.1 and PW.1.2)</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://rmtoo.florath.net/">rmtoo</a>
          <p>Requirements management tool using plain text and version control for traceability. Supports traceability from design through build, ensuring requirements are carried into final artifacts.(Meets PW.1.2)</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openrmf.io/">OpenRMF® OSS</a>
      <p>Open-source compliance and risk management framework tool for tracking RMF (NIST 800-37) controls. Security requirements map to formal compliance controls that can be verified in build & deploy artifacts. (Meets PW1.2) </p>
    </td>
  </tr>
</table>
    

**PW.2**

<strong>Review the Software Design to Verify Compliance with Security Requirements and Risk Information:</strong>Help ensure that the software will meet the security requirements and satisfactorily address the identified risk information.

<br>

To satisfy SSDF PW.2 in a the build and deploy context using open-source tools, the is:

- Validating security architecture decisions before deploying

- Reviewing IaC and CI/CD configs to ensure they meet security baselines

- Enforcing design rules automatically in build pipelines

- atching misconfigurations and security gaps before release


<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
      <p>PW.2.1: Have 1) a qualified person (or people) who were not involved with the design and/or 2) automated processes instantiated in the toolchain review the software design to confirm and enforce that it meets all of the security requirements and satisfactorily addresses the identified risk information.
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openpolicyagent.org/">OPA</a>
      <p>Automated design compliance gate in CI/CD</p>
   </td> 
 </tr>
 <tr>
    <td>
      <a href="https://kyverno.io/">Kyverno</a>
      <p>Validates deployment configurations match approved security architecture.</p>
   </td> 
 </tr>  
  <tr>
      <td>
      <a href="https://www.checkov.io">Checkov</a>
      <p>Enforce network segmentation rules, encryption requirements, and secure defaults.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://kics.io">KICS (Keeping Infrastructure as Code Secure)</a>
      <p>Adds IaC review automation to the build process.</p>
  </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/semgrep/semgrep/">Semgrep</a>
      <p>Automated code review for alignment with security design requirements.</p>
    </td>
  </tr>
  <tr>
  <td>
      <a href="https://aquasecurity.github.io/trivy">Trivy (Config Scanning)</a>
      <p>Config compliance verification before deploying.</p>
    </td>
  </tr>
  <tr>
  <td>
      <a href="https://threatspec.org">ThreatSpec</a>
      <p>Ensures threat model-driven design requirements are implemented.</p>
    </td>
  </tr>
  <tr>
  <td>
      <a href="https://github.com/lyft/cartography">Cartography</a>
      <p>Post-build/pre-deploy architecture verification. Detect deviations from intended architecture.</p>
    </td>
  </tr>
   <tr>
  <td>
      <a href="https://kube-score.com">kube-score</a>
      <p>Review Kubernetes manifests for design compliance before deployment.Ensures pod security settings match approved deployment designs.</p>
    </td>
  </tr>   
  <tr>
    <td>
      <a href="https://github.com/dependabot">Dependabot</a>
      <p>Automated dependency update PRs with vulnerability alerts. Helps verify dependencies meet security requirements (e.g., no known CVEs, minimum versions). </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openrmf.io/">OpenRMF</a>
      <p>Open Risk Management Framework tracking tool. Can map design-level security requirements to NIST 800-53 controls and verify those controls are implemented in build configs. </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://eslint.org/">ESLint</a>
      <p>Runs in CI/CD pipelines or as a pre-commit hook to block merges if code violates the approved security or architectural rules before build.</p>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>SBOM-driven vulnerability scanner for images/filesystems. Validates that dependencies in the build match security baselines and are free from disallowed components. </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/quay/clair">Clair</a>
      <p>Static vulnerability analysis for container images. Confirms final images meet design security requirements before deployment. </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://terrasolid.com/products/terrascan/">Terrascan</a>
      <p>IaC scanning and policy enforcement (OPA-based). Enforces approved security design in Terraform, Kubernetes, Docker, and AWS CloudFormation configs before deploy.  </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.gerritcodereview.com/">Gerrit</a>
      <p>Code review and approval workflow tool. Enforces human review against design and security requirements before merge to release branches.  </p>
  </td>
  </tr>   
 </table>
    



<br>

**PW.4**

<p><strong>Reuse Existing, Well-Secured Software When Feasible Instead of Duplicating Functionality :</strong> Lower the costs of software development, expedite software development, and decrease the likelihood of introducing additional security vulnerabilities into the software by reusing software modules and services that have already had their security posture checked. This is particularly important for software that implements security functionality, such as cryptographic modules and protocols.</p><br>
<p> Note: PW.3 moved to PW.4 </p>

<br>

To satisfy SSDF PW.4 in a build and deploy context using open-source tools, the focus shifts to:

- Baking secure defaults into application code, containers, and deployment manifests

- Removing insecure, legacy, or unnecessary features from build artifacts

- Automatically applying baseline security settings during deployment

- Enforcing hardening standards before release


<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
      <p>PW.4.1: Acquire and maintain well-secured software components (e.g., software libraries, modules, middleware, frameworks) from commercial, opensource, and other third-party developers for use by the organization’s software.</p><br>
      <p>PW.4.2: Create and maintain well-secured software components in-house following SDLC processes to meet common internal software development needs that cannot be better met by third-party software components.</p> <br>
      <p>PW.4.3: Moved to PW.1.3</p> <br>
      <p>PW.4.4: Verify that acquired commercial, open-source, and all other third-party software components comply with the requirements, as defined by the organization, throughout their life cycles.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kyverno.io">Kyverno</a>
      <p>Ensures manifests meet secure baseline defaults before deployment.</p>
   </td> 
 </tr> 
  <tr>
    <td>
      <a href="https://www.openpolicyagent.org/">OPA</a>
      <p>Validates default configurations meet security requirements.</p>
   </td> 
 </tr>
 <tr>
      <td>
      <a href="https://www.checkov.io">Checkovn</a>
      <p>Detects and blocks insecure defaults in Terraform, Helm, or CloudFormation before release.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://kics.io">KICS (Keeping Infrastructure as Code Secure)</a>
      <p>Validates hardened defaults in cloud infrastructure provisioning.</p>
  </td>
  </tr> 
  <tr>
      <td>
      <a href="https://aquasecurity.github.io/trivy">Trivy</a>
      <p>Automated config compliance check during CI/CD.</p>
  </td>
  </tr>
  <tr>
      <td>
      <a href="https://cisecurity.org/cis-cat-lite"> CIS-CAT Lite</a>
      <p>Automates compliance testing for secure defaults.</p>
  </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/dev-sec">DevSec Hardening Framework</a>
      <p> Bakes hardened defaults into container or VM images before release.</p>
   </td>
  </tr>
   <tr>
    <td>
      <a href="https://kube-score.com">kube-score</a>
      <p>Pre-deployment validation of secure defaults in manifests.</p>
   </td>
  </tr>
    <tr>
      <td>
      <a href="https://www.open-scap.org">OpenSCAP </a>
      <p>Ensures deployed OS images meet hardened defaults.</p>
  </td>
  </tr>
  <tr>
    <td>
      <a href="https://cyclonedx.org/">CycloneDX</a>
      <p>SBOM format for documenting exact components/configurations in final build; helps verify secure defaults are present.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/opensbom-generator/spdx-sbom-generator">SPDX</a>
      <p>SBOM standard to record all components, licenses, and provenance; can confirm inclusion of hardened dependencies.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://artifacthub.io/">ArtifactHub</a>
      <p>Catalog of verified Helm charts, OLM operators, etc.; can enforce use of curated, secure-by-default packages.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://jfrog.com/community/download-artifactory-oss/">JFrog Artifactory OSS</a>
      <p>Repository manager for storing signed, verified artifacts with access controls.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sonatype.com/products/nexus-community-edition-download">Sonartype Nexus OSS</a>
      <p>Host artifacts and enforce policy checks before they’re promoted.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://goharbor.io/">Harbor</a>
      <p>OCI registry with vulnerability scanning, content signing, and policy enforcement for images.</p>
    </td>
  </tr>
 <tr>
    <td>
      <a href="https://docs.gitlab.com/ee/user/project/repository/signed_commits/">GitLab Signing</a>
      <p>Commit/tag signing in GitLab CE for provenance.</p>
    </td>
  </tr>
 <tr>
    <td>
      <a href="https://codeql.github.com/">GitHub CodeQL</a>
      <p>Detects code patterns violating security requirements.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.aquasec.com/products/trivy/">AquaSec Trivy</a>
      <p>Scans container images, IaC, and configs for insecure defaults.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://openssf.org/projects/allstar/">Allstar</a>
      <p>GitHub App enforcing security policies in repos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-samm/">OWASP SAMM</a>
      <p>Security maturity model to guide secure default practices.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-application-security-verification-standard/">OWASP ASVS</a>
      <p>Application security requirements to verify secure defaults.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-defectdojo/">OWASP Defectdojo</a>
      <p>Central vulnerability tracking; ensures issues found in builds are fixed before release.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p>Detects known-vulnerable dependencies in builds.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://about.gitea.com/">Gitea</a>
      <p>Self-hosted Git service with signing/policy support.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://about.gitlab.com/">GitLab (Community Edition)</a>
      <p>Git platform with signing, scanning, CI/CD policy integration.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.pytest.org/en/stable/index.html">Pytest</a>
      <p>Automated testing to confirm defaults work.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.selenium.dev/">Selenium</a>
      <p>Functional/UI test automation to verify secure settings.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://playwright.dev/">Playwright</a>
      <p>Functional/UI test automation to verify secure settings.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">OWASP ZAP</a>
      <p>DAST scanner to verify app defaults are not exploitable.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://testng.org/">TestNG</a>
      <p>	Java test framework for security/functional checks</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://cucumber.io/">Cucumber</a>
      <p>BDD framework for verifying functional + security requirements.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/quay/clair">Clair</a>
      <p>Image vulnerability scanner for OCI registries.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>SBOM-driven vuln scanner for builds and images</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/PyCQA/bandit">Bandit for Python</a>
      <p>Detects insecure code patterns/defaults in Python.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://semgrep.dev/">Semgrep</a>
      <p>Finds policy-violating patterns in code.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://brakemanscanner.org/">Brakeman</a>
      <p>Detects Rails-specific security issues/defaults.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gitleaks.io/">Gitleaks</a>
      <p>Detects secrets in code (prevents default creds exposure).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trufflesecurity.com/">TruffleHog</a>
      <p>Finds secrets in repos/history to avoid insecure defaults.</p>
     </td> 
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p>Detects known-vulnerable dependencies in builds.></p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://oss-review-toolkit.github.io/ort/">OSS Review Toolkit (ORT)</a>
      <p>Automates license/security checks; blocks noncompliant components.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://fossa.com/">FOSSA (Community Edition)</a>
      <p>License/dependency scanning; ensures compliance with default policies.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://scancode-toolkit.readthedocs.io/en/stable/">ScanCode Toolkit</a>
      <p>Detects license, copyright, and security metadata in artifacts.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/tern-tools/tern">Tern</a>
      <p>Container image inspection for dependency/component details.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://openpolicyagent.org/">Open Policy Agent (OPA)</a>
      <p>Policy-as-code for build & deploy; blocks insecure defaults in configs/manifests.</p>
  </td>
  </tr>
</table>
    

**PW.5**

<strong>Create Source Code by Adhering to Secure Coding Practices:</strong> Decrease the number of security vulnerabilities in the software, and reduce costs by minimizing vulnerabilities introduced during source code creation that meet or exceed organization-defined vulnerability severity criteria.

<br>

To satisfy SSDF PW.5 in a build and deploy context using open-source tools, the focus shifts to:

- Software artifacts are stored in secure, controlled repositories.

- Only approved, verified builds get stored and deployed.

- Repository access is restricted and auditable.

- Provenance and integrity checks are enforced before artifacts are accepted or deployed.


<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
      <p>PW.5.1: Follow all secure coding practices that are appropriate to the development languages and environment to meet the organization’s requirements.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://jfrog.com/community/download-artifactory-oss/">Artifactory Community Edition</a>
      <p>Acts as the central trusted artifact repository.</p>
   </td>
  </tr>
   <tr>
    <td>
      <a href="https://www.sonatype.com/products/nexus-repository">Nexus Repository OSS</a>
      <p>Acts as the central trusted artifact repository.</p>
   </td>
  </tr>
  <tr>
    <td>
      <a href="https://goharbor.io">Harbor</a>
      <p>Acts as the central trusted artifact repository.</p>
   </td>
  </tr> 
 <tr>
    <td>
      <a href="https://www.sigstore.dev">Sigstore(Cosign,Fulcio, Rekor)</a>
      <p>Ensures repository contents are authentic and tamper-free.</p>
   </td> 
 </tr> 
    <tr>
      <td>
      <a href="https://quay.github.io/clair/">Clair </a>
      <p>Ensures stored artifacts meet vulnerability requirements before deployment</p>
  </td>
  </tr>
  <tr>
      <td>
      <a href="https://in-toto.io">In-Toto</a>
      <p>Enforces provenance checks at repository ingestion.</p>
    </td>
  </tr>
 <tr>
    <td>
      <a href="https://theupdateframework.io">The Update Framework (TUF)</a>
      <p>Protects against repository and update tampering.</p>
  </td>
  </tr> 
  <tr>
    <td>
      <a href="https://notaryproject.dev">Notary (v2)</a>
      <p>Controls supply chain intake and internal artifact storage.</p>
    </td>
  </tr>
    <tr>
    <td>
      <a href="https://tekton.dev/docs/chains">Tekton Chains </a>
      <p>Ties repository artifacts back to secure build pipelines.</p>
    </td>
  </tr>

  <tr>
    <td>
      <a href="https://semgrep.dev/">Semgrep</a>
      <p>	Runs as part of the CI pipeline to automatically scan code for security flaws, policy violations, and unsafe patterns before artifacts are built. Supports rule-as-code to enforce secure build policies.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/PyCQA/bandit">Bandit for Python</a>
      <p>Python-focused static analyzer that checks for insecure functions, weak crypto, and common security issues before packaging or deployment.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://findbugs.sourceforge.net/">FindBugs</a>
      <p>Legacy Java static analysis; can be used to flag known insecure code patterns before build. Superseded by SpotBugs.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://spotbugs.readthedocs.io/">SpotBugs</a>
      <p>Modern replacement for FindBugs. Java bytecode scanner to enforce safe code practices before compiling final artifacts.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sonarsource.com/open-source-editions/sonarqube-community-edition/">SonarQube</a>
      <p>Comprehensive SAST platform; can be integrated in CI/CD to enforce quality gates, stopping builds that fail security rules.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">OWASP ZAP</a>
      <p>Runs against built/staged applications in pre-deployment environments to detect exploitable vulnerabilities, ensuring no insecure version is promoted.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/Arachni/arachni">Arachni</a>
      <p>Web application vulnerability scanner that can be part of a build’s QA stage to ensure secure release readiness.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p>Scans for known-vulnerable dependencies in the build, blocking insecure versions from being deployed.</p>
    </td>
  </tr>
 </table>
    
**PW.6**

<strong>Configure the Compilation, Interpreter, and Build Processes to Improve Executable Security:</strong> Decrease the number of security vulnerabilities in the software and reduce costs by eliminating vulnerabilities before testing occurs.

<br>

To satisfy SSDF PW.6 in a build and deploy context using open-source tools, the focus shifts to make security testing continuous and automatic so every build and every deployment candidate is evaluated against a security bar, with evidence captured for audit and release gates.:


<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
      <p>PW.6.1: Use compiler, interpreter, and build tools that offer features to improve executable security.</p> <br>
      <p>PW.6.2: Determine which compiler, interpreter, and build tool features should be used and how each should be configured, then implement and use the approved configurations.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/semgrep/semgrep">Semgrep</a>
      <p>Fast rule-based SAST with CI integration.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://www.sonarsource.com/open-source-editions/sonarqube-community-edition/">SonarQube Community</a>
      <p>General code quality + basic security rules.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://bandit.readthedocs.io/en/latest/">Bandit</a>
      <p>Python SAST linters.</p>
    </td>
  </tr>
    <tr>
      <td>
      <a href="https://github.com/golangci/golangci-lint/">Gosec<a>
      <p>Go SAST linters.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/cookpad/brakeman-linter-action">Brakeman<a>
      <p>Rails SAST linters.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://find-sec-bugs.github.io/">FindSecBugs<a>
      <p>Java SAST linters.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Trivy</a>
      <p>Vulnerability scan images/filesystems against SBOMs.</p>
   </td>
  </tr>
   <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Vulnerability scan images/filesystems against SBOMs.</p>
   </td>
  </tr> 
  <tr>
      <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Generate SBOMs (SPDX/CycloneDX) during build.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-track/">OWASP Dependency Track</a>
      <p>Continuous SBOM monitoring and alerting post-build./p>
    </td>
 </tr>
  <tr>
    <td>
      <a href="https://github.com/gitleaks/gitleaks">Gitleaks</a>
      <p> Block commits/builds that contain secrets; run in CI and as pre-commit hooks.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://reproducible-builds.org">Reproducible Builds</a>
      <p>Provides methods, guidelines, and supporting tools for deterministic builds, ensuring integrity and verifiability of source-to-binary outputs.</p>
    </td>
  </tr> 
   <tr>
    <td>
      <a href="https://bazel.build">Bazel</a>
      <p>Build system with hermetic (sandboxed) execution and explicit dependency tracking, preventing hidden or unverified dependencies.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://mesonbuild.com">Meson</a>
      <p>High-speed, deterministic build system that supports reproducibility and strict configuration-as-code.</p>
    </td>
  </tr>  
  <tr>
    <td>
      <a href="https://maven.apache.org">Apache Maven</a>
      <p>Enforces controlled dependency resolution and supports reproducible builds for Java and JVM-based projects.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://www.yoctoproject.org">Yocto Project</a>
      <p>Creates reproducible, controlled build environments for embedded Linux images, preventing environmental drift.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://source.android.com">AOSP Build System</a>
      <p>Uses prebuilt toolchains and sandboxed environments for secure, reproducible Android builds.</p>
    </td>
  </tr>  
 </table>
    

    
**PW.7**

<strong>Review and/or Analyze Human-Readable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements:</strong> Help identify vulnerabilities so that they can be corrected before the software is released to prevent exploitation. Using automated methods lowers the effort and resources needed to detect vulnerabilities. Human-readable code includes source code, scripts, and any other form of code that an organization deems human readable.

<br>

To satisfy SSDF PW.7 in a build and deploy context using open-source tools, the focus shifts to:

- Running automated code scanning in CI

- Ensuring manual/peer review requirements are enforced before merging to release branches

- Verifying code matches security policies defined earlier in PW.1 and validated in PW.2- Capturing audit evidence that review was completed before build artifacts are promoted


<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
      <p>PW.7.1: Determine whether code review (a person looks directly at the code to find issues) and/or code analysis (tools are used to find issues in code, either in a fully automated way or in conjunction with a person) should be used, as defined by the organization.</p><br>
      <p>PW.7.2: Perform the code review and/or code analysis based on the organization’s secure coding standards, and record and triage all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.</p> 
    </td>
  </tr>
 <tr>
      <td>
      <a href="https://semgrep.dev">Semgrep</a>
      <p>Runs automatically in CI before building deployment artifact.
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://www.sonarqube.org">SonarQube Community Edition</a>
      <p>Integrates with CI/CD to enforce clean code before release
      </td>
  </tr>
  <tr>
    <td>
      <a href="https://codeql.github.com">CodeQL</a>
      <p>Detect SQL injection, XSS, or unsafe deserialization patterns in codebase.</p>
    </td>
 </tr>
 <tr>
    <td>
      <a href="https://gitleaks.io">GitLeaks</a>
      <p>Protects against secret leakage in deployed artifacts</p>
  </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com">GitHub</a> and <a href="https://gitlab.com">GitLab</a>
      <p>Require two reviewers for any code changes in security-critical modules.</p>
  </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.defectdojo.org">DefectDojo</a> 
      <p>Provides verifiable audit trail for security review completion.</p>
   </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sigstore.dev">Sigstore Cosign</a> 
      <p>Provides verifiable audit trail for security review completion.</p>
  </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p>Continuously scans dependencies in each build for new CVEs. Can run on every commit or nightly in CI/CD.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">OWASP ZAP</a>
      <p>Can be automated in CI/CD to re-test staging environments for vulnerabilities as new code is deployed.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://retirejs.github.io/">Retire.js</a>
      <p>Focused on JavaScript libraries; detects newly disclosed vulnerabilities in frontend/back-end packages during builds.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://fossa.com/product/open-source-vulnerability-management">Fossa</a>
      <p>Scans dependencies for vulnerabilities and license issues, integrating with builds to catch new findings.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/PyCQA/bandit">Bandit for Python</a>
      <p>Runs in CI/CD for Python projects to catch newly introduced security issues.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/Checkmarx/kics">Checkmarx KICS</a>
      <p>Detecting Known Vulnerabilities – Compares IaC components and configurations against known security best practices and compliance frameworks (CIS Benchmarks, NIST, PCI-DSS).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/danmar/cppcheck">Cppcheck for C++</a>
      <p>Re-scans C/C++ code after every build to ensure no new issues were introduced.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/find-sec-bugs/find-sec-bugs">FindSecBugs</a>
      <p>Extension to SpotBugs that catches security flaws in Java bytecode continuously during the build cycle.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://codeql.github.com/">GitHub CodeQL</a>
      <p>Performs continuous security queries on code with each pull request or scheduled scan.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://pmd.github.io/">PMD</a>
      <p>Runs code quality and security rule checks on every commit/build.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://spotbugs.github.io/">SpotBugs</a>
      <p>Java static analysis integrated into the build pipeline for continuous vulnerability detection.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://danger.systems/js/">Danger JS</a>
      <p>Automates security-related PR review rules, preventing unsafe code from merging.</p>
  </td>
  </tr>
 </table>

<br>


**PW.8**

<strong>Test Executable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements:</strong> Help identify vulnerabilities so that they can be corrected before the software is released in order to prevent exploitation. Using automated methods lowers the effort and resources needed to detect vulnerabilities and improves traceability and repeatability. Executable code includes binaries, directly executed bytecode and source code,
and any other form of code that an organization deems executable.

<br>

To satisfy SSDF PW.8 in a post-deployment context using open-source tools, the focus shifts to:

- Running security tests against the final artifact in staging or pre-deployment environments

- Validating runtime configuration, dependencies, and permissions of the artifact

- Ensuring compliance with security baselines at the executable level

- Capturing evidence of artifact test results for compliance gates


<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="8">
      <p>PW.8.1: Determine whether executable code testing should be performed to find  vulnerabilities not identified by previous reviews, analysis, or testing and, if so, which types of testing should be used.</p><br>
      <p>PW.8.2: Scope the testing, design the tests, perform the testing, and document the results, including recording and triaging all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Trivy</a>
      <p>Run as a CI step after image build, before push to registry</p>
   </td>
  </tr>
   <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Confirms that final executable meets vulnerability thresholds.</p>
   </td>
  </tr>
   <tr>
    <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p> Feeds SBOM into SCA tools like Dependency-Track for ongoing monitoring</p> 
 <tr>
    <td>
      <a href="https://www.open-scap.org/features/standards/">OpenSCAP</a>
      <p>Ensures final artifact matches secure configuration requirements.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://cisecurity.org/cis-cat-lite">CIS-CAT Lite</a>
      <p>Baseline enforcement step before promotion to production.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">Zap (Zed Attack Proxy)</a>
      <p>Pre-release runtime security testing.</p>
  </td>
  </tr>
   <tr>
    <td>
      <a href="https://in-toto.io"> In-toto + <a href=" https://www.sigstore.dev"> Sigstore Cosign Attestations</a>
      <p>Provides verifiable evidence for compliance and audits.</p>
  </td>
  </tr> 
  </table>
    

**PW.9**

<strong>Configure Software to Have Secure Settings by Default: </strong> Help improve the  security of the software at the time of installation to reduce the likelihood of the software being deployed with weak security settings, putting it at greater risk of compromise.

<br>

To satisfy SSDF PW.9 in a build and deploy context using open-source tools, the focus shifts to:

- Embedding secure configs into container images, binaries, and IaC

- Removing insecure or unused features before packaging

- Applying security baselines (CIS, STIG, NIST) in the build process

- Validating those defaults as part of CI/CD

- Preventing insecure defaults from slipping into release candidates


<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="11">
      <p>PW.9.1: Define a secure baseline by determining how to configure each setting that has an effect on security or a security-related setting so that the default settings are secure and do not weaken the security functions provided by the platform, network infrastructure, or services.</p><br>
      <p>PW.9.2: Implement the default settings (or groups of default settings, if  applicable), and document each setting for software administrators.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/dev-sec">DevSec Hardening Framework</a>
      <p>Automates baseline hardening during image creation.</p>
   </td>
  </tr>
<tr>
    <td>
      <a href="https://github.com/chainguard-dev/apko">Chainguard Apko</a>
      <p> Produces secure-by-default container images.</p>
    </td>
  </tr> 
   <tr>
    <td>
      <a href=" https://aquasecurity.github.io/trivy/"> Trivy</a>
      <p>CI gate to block insecure defaults from being built/deployed.</p>
    </td>
  </tr>
 <tr>
    <td>
      <a href="https://www.checkov.io">Checkov</a>
      <p>Prevents insecure IaC defaults from reaching deployment.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kics.io"> KICS</a>
      <p>Prevents insecure IaC defaults from reaching deployment.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://www.open-scap.org/">OpenSCAP</a>
      <p>Produces compliance evidence before artifact promotion.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sigstore.dev">Sigstore Cosign</a> + <a href="https://in-toto.io">In-Toto</a>
      <p>Ensures only hardened, verified artifacts can be deployed.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://cisecurity.org/cis-cat-lite/">CIS-CAT Lite</a>
      <p>Verify hardened defaults match CIS requirements before release.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kyverno.io"> Kyverno</a>
      <p>Policy enforcement for manifests and configs at build time.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openpolicyagent.org/">OPA Conftest</a>
      <p>Codifies secure defaults as enforceable CI/CD policies.</p>
    </td>
  </tr>  
 </table>

