---
title: "Protect the Software (PS)"
linkTitle: "Protect the Software (PS)"
weight: 6
description: >
 Protect the Software (PS) Post-Deployment CI/CD Steps
---

### Protect the Software (PS)
Protect the Software (PS): Organizations should protect all components of their
software from tampering and unauthorized access.

<br>

**PS.1**

<strong>Protect All Forms of Code from Unauthorized Access and Tampering </strong>: Help prevent unauthorized changes to code, both inadvertent and intentional, which could circumvent or negate the intended security characteristics of the software. For code that is not intended to be publicly accessible, this helps prevent theft of the software and may make it more difficult or time-consuming for attackers to find vulnerabilities in the software.

<br>

To satisfy SSDF PS.1 in a post-deployment context using open-source tools, the focus shifts from just defining to:

- Protecting deployed artifacts (binaries, containers, scripts, configs) from being altered in production

- Ensuring post-deployment code integrity is verifiable at any time

- Maintaining secure storage, transport, and retrieval of code and artifacts

- Keeping an audit trail for all modifications and access

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="16">
      <p>PS.1.1: Store all forms of code including source code, executable code, and configuration-as-code based on the principle of least privilege so that only authorized personnel, tools, services, etc. have access.</p>
    </td>
    <td>
      <a href="https://docs.sigstore.dev/cosign/"> Cosign Sigstore</a>
      </a>
      <p>Sign and verify container images, binaries, and other artifacts.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.sigstore.dev/logging/overview/">Rekor Sigstore</a>
      <p> Immutable public transparency log for signatures and metadata.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://in-toto.io">In-Toto</a>
      <p>End-to-end supply chain verification to ensure deployed artifacts came from trusted sources.</p>
    </td>
  </tr>
    <tr>
    <td>
      <a href="https://www.gnupg.org/">Gnu Privacy GuardG</a>
      <p>Sign and verify any file type, including tarballs and configuration files.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://goharbor.io/">Harbor</a>
      <p> Container registry with built-in vulnerability scanning, content signing, and RBAC.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/sonatype/nexus-public">Sonatype Nexus OSS</a>
      <p> Secure artifact repository with access controls.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/jfrog/charts/blob/master/stable/artifactory-oss/README.md">JFrog Artifactory OSS</a>
      <p>Manages binary repositories with fine-grained permissions.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/Tripwire/tripwire-open-source">Tripwire OSS</a>
      <p>Monitors filesystem for unauthorized changes.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://aide.github.io/">AIDE (Advanced Intrusion Detection Environment) </a>
      <p>Creates a baseline of files and detects alterations.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://falco.org/">Falco</a>
      <p>Detects suspicious activity in Kubernetes or container environments, including file changes.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://open-policy-agent.github.io/gatekeeper/website/docs/install/">Kubernetes RBAC + OPA Gatekeeper</a>
      <p>Enforces role-based policies for container image deployment.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/keycloak/keycloak">Keycloak</a>
      <p>Centralized authentication/authorization for artifact registries and CI/CD systems.</p>
    </td>
  </tr> 
 <tr>
    <td>
      <a href="https://github.com/wazuh/wazuh">Wazuh</a>
      <p> SIEM platform that monitors access logs and alerts on anomalies.</p>
    </td>
  </tr> 
 <tr>
    <td>
      <a href="https://ortelius.io">Ortelius Evidence Store</a>
      <p>Tracks which version of a service is deployed where, and links to its signed SBOM.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Generates SBOMs for deployed artifacts for later verification.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-track/">OWASP Dependency-Track</a>
      <p>Monitors components in deployed artifacts against CVE feeds.</p>
    </td>
  </tr>
  </table>
    


**PS.2**

<strong>Provide a Mechanism for Verifying Software Release Integrity:</strong> Help software acquirers ensure that the software they acquire is legitimate and has not been tampered with. Make software integrity verification information available to software acquirers.

<br>


To satisfy SSDF PS.2 in a post-deployment context using open-source tools, the focus shifts to:

- Keeping exact copies of every release artifact (binaries, containers, configs, SBOMs)

- Recording and publishing cryptographic verification data (signatures, hashes, attestations)

- Ensuring acquirers can confirm that what they have matches the trusted, official release


<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="16">
      PS.2.1: Make software integrity verification information available to software acquirers.
    </td>
    <td>
      <a href="https://goharbor.io/"> Harbor</a>
      </a>
      <p>Container registry with image retention policies, RBAC, and content trust.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sonatype/nexus-public">Sonatype Nexus OSS</a>
      <p>Artifact repository for storing binaries and dependencies.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/jfrog/charts/blob/master/stable/artifactory-oss/README.md">JFrog Artifactory OSS</a>
      <p>Binary management with retention and access control.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/">GitHub</a>
      <p>Tag and store release binaries, SBOMs, and checksums.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sigstore/cosign">Sigstore cosign</a>
      <p>Sign and verify container images, SBOMs, and other artifacts.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sigstore/rekor">Sigstore Rekor</a>
      <p>Immutable transparency log for all signed artifacts and metadata.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.gnupg.org/">Gnu Privacy Guard</a>
      <p>Sign and verify tarballs, binaries, or SBOM files.</p>
    </td>
  </tr> 
<tr>
    <td>
      <a href="https://in-toto.io/">In-Toto</a>
      <p>Provide end-to-end build provenance verification.</p>
    </td>
</tr>
<tr>
    <td>
      <a href="https://ortelius.io/">Ortelius</a>
      <p>Maps deployed services to specific versions and their SBOMs.</p>
    </td>
 </tr>
 <tr>
    <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Generates SBOMs from deployed artifacts.</p>
    </td>
 </tr>
 <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-track/">OWASP Dependency-Track</a>
      <p>Continuously monitors SBOMs for new CVEs in preserved releases.</p>
    </td>
 </tr> 
 <tr>
    <td>
      <a href="https://aide.github.io/">AIDE (Advanced Intrusion Detection Environment)</a>
      <p>Filesystem integrity checker to detect changes in stored artifacts.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://github.com/Tripwire/tripwire-open-source">Tripwire OSS</a>
      <p>Baseline and monitor stored release directories for modifications.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/wazuh/wazuh">Wazuh</a>
      <p>SIEM that audits artifact repository activity.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.redhat.com/en/blog/configure-linux-auditing-auditd">AuditD</a>
      <p>Linux-level auditing for access to preserved release files.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://www.keycloak.org/getting-started/getting-started-kube/">Kubernetes RBAC / Keycloak </a>
      <p>Restrict who can upload or modify artifacts in registries.</p>
    </td>
  </tr>
  </table>
    


**PS.3**

<strong> Archive and Protect Each Software Release:</strong> Preserve software releases in order to help identify, analyze, and eliminate vulnerabilities discovered in the software after release.

<br>


To satisfy SSDF PS.3 in a post-deployment context using open-source tools, the focus shifts to:

- Keeping a tamper-proof record of every software component in each release

- Ensuring provenance data remains accessible for audits, investigations, and vulnerability response

- Allowing acquirers and downstream users to independently verify the origin and integrity of every component

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="13">
      <p>PS.3.1: Securely archive the necessary files and supporting data (e.g., integrity verification information, provenance data) to be retained for each software release.</p><br>
      <p> PS.3.2: Collect, safeguard, maintain, and share provenance data for all components of each software release (e.g., in a software bill of materials [SBOM]).</p>
    </td>
    <td>
      <a href="https://github.com/anchore/syft/"> Syft</a>
      </a>
      <p>Generate SBOMs from deployed containers, VMs, or file systems (SPDX & CycloneDX formats).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Trivy </a>
      <p>Create SBOMs and scan for vulnerabilities in deployed systems.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://in-toto.io/">In-Toto</a>
      <p>Record build steps and supply chain metadata as signed “link” files.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sigstore/cosign/">Cosign Attest</a>
      <p>Capture build and deployment provenance as signed attestations.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.gnupg.org/">Gnu Privacy Guard</a>
      <p>Sign SBOMs and metadata for offline or private distribution.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sigstore/rekor/">Rekor</a>
      <p>Store signatures and attestations in an immutable, public transparency log.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/Tripwire/tripwire-open-source">Tripwire OSS</a>
      <p>Detect unauthorized changes in locally stored provenance archives.</p>
    </td>
  </tr>  
  <tr>
    <td>
      <a href="https://aide.github.io/">AIDE (Advanced Intrusion Detection Environment)</a>
      <p>Detect unauthorized changes in locally stored provenance archives.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://ortelius.io/">Ortelius Evidence Store</a>
      <p>Version and track deployed services and their SBOMs; link them to environments and releases. API/UI access for sharing SBOM and component history for specific releases.</p>
    </td>
  </tr> 
 <tr>
    <td>
      <a href="https://github.com/DependencyTrack/dependency-track">Dependency Track</a>
      <p>Continuously monitor preserved SBOMs for new CVEs.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://goharbor.io/">Harbor</a>
      <p>Attach SBOMs and signatures to container images in a registry.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://cyclonedx.org/capabilities/bomlink/">CycloneDX BOM Portal (OSS)</a>
      <p>Host and validate SBOMs in a web-accessible interface.</p>
     </td>
  </tr>
</table>
