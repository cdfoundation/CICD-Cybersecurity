---
title: "3.3 Produce Well-Secured Software (PW)"
linkTitle: "3.3 Produce Well-Secured Software (PW)"
weight: 7
layout: docs
description: >
 3.3 Produce Well-Secured Software (PW) in the Post-Deploy CI/CD Steps
---

### 3.3 Produce Well-Secured Software (PW) for Post Deploy Tasks

Organizations should produce well-secured software with minimal security vulnerabilities in its releases.

<br>

**PW.1**

<strong>Design Software to Meet Security Requirements and Mitigate Security Risks: </strong> Identify and evaluate the security requirements for the software; determine what security risks the software is likely to face during operation and how the software’s design and architecture should mitigate those risks; and justify any cases where risk-based analysis indicates that security requirements should be relaxed or waived. Addressing security requirements and risks during software design (secure by design) is key for improving software security and also helps improve development efficiency.

<br>

To satisfy SSDF PW.1 in a post-deployment context using open-source tools, the focus shifts to:

- Keeping a tamper-proof record of every software component in each release

- Ensuring provenance data remains accessible for audits, investigations, and vulnerability response

- Allowing acquirers and downstream users to independently verify the origin and integrity of every component


<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="15">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.1.1:</strong>
        <p>Use forms of risk modeling, such as threat modeling, attack modeling, or attack surface mapping to help assess the security risk for the software.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.1.2:</strong>
        <p>Track and maintain the software’s security requirements, risks, and design decisions.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.1.3:</strong>
        <p>Where appropriate, build in support for using standardized security features and services (e.g., enabling software to integrate with existing log management, identity management, access control, and vulnerability management systems) instead of creating proprietary implementations of security features and services.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/semgrep/semgrep">Semgrep</a>
      <p> Static and Dynamic Analysis that an be run against deployed codebases in staging mirrors to detect insecure patterns.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/wapiti-scanner/wapiti">Wapiti</a>
      <p>Web application security scanner for deployed apps.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">Zap (Zed Attack Proxy)</a>
      <p>Active and passive testing of live apps for vulnerabilities.</p>
  </td>
  </tr>
  <tr>
    <td>
      <a href="https://community.chef.io/tools/chef-inspec">Inspec</a>
      <p>Validates that deployed applications meet secure coding standards.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://ortelius.io">Ortelius</a>
      <p>10 minute synchronizing to OSV.dev for new vulnerability detection in deployed artifacts.</p>
   </td>
  </tr>   <tr>
    <td>
      <a href="https://www.open-scap.org/features/standards/">OpenSCAP</a>
      <p>Scans systems for compliance with security coding-related baselines.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://falco.org/">Falco</a>
      <p>Logging and Monitoring - Detects insecure behavior at runtime (e.g., unsafe system calls).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://wazuh.com/">Wazuh</a>
      <p>Monitors application and OS logs for security-related events.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/Neo23x0/auditd">AuditD</a>
      <p>Captures low-level system calls related to code execution.</p>
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
      <a href="https://hoppr.dev/">Hoppr</a>
      <p>Hoppr is an SBOM / supply-chain utility kit—SBOM processing and movement of supply-chain “materials” aligns to provenance collection/maintenance/sharing.</p>
     </td>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-track/">OWASP Dependency-Track</a>
      <p>Continuously tracks SBOMs for new vulnerabilities</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Trivy</a>
      <p>Scans deployed containers/filesystems for known CVEs in code and dependencies.</p>
   </td>
  </tr>
   <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Focused vulnerability scanning for deployed artifacts.</p>
   </td>
  </tr>
</table>
    

**PW.2**

<strong>Review the Software Design to Verify Compliance with Security Requirements and Risk Information:</strong>Help ensure that the software will meet the security requirements and satisfactorily address the identified risk information.

<br>

To satisfy SSDF PW.2 in a post-deployment context using open-source tools, the focus shifts to:

- Continuous verification that deployed code (source or binary) hasn’t been tampered with.

- Ongoing vulnerability assessment of deployed applications and components.

- Post-release code review triggers when a vulnerability or incident is detected.

- Auditable evidence that deployed software matches approved, reviewed code.


<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="13">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.2.1:</strong> 
        <p>Have (1) a qualified person (or people) who were not involved with the design and/or (2) automated processes instantiated in the toolchain review the software design to confirm and enforce that it meets all of the security requirements and satisfactorily addresses the identified risk information.</p>
      </div>    
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/sigstore/cosign">Sigstore Cosign</a>
      <p> Verify deployed containers and binaries were signed at build time.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/sigstore/rekor">Rekore</a>
      <p> Store verification data and attestations in a tamper-evident log.</p>
  </td>
  </tr>
  <tr>
      <td>
      <a href="https://in-toto.io/">In-Toto</a>
      <p>Ensure deployed code matches the reviewed build pipeline steps.</p>
  </td>
  </tr>
    <tr>
      <td>
      <a href="https://github.com/Tripwire/tripwire-open-source">Tripwire OSS </a>
      <p>Monitor deployed files for unauthorized changes.</p>
  </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/semgrep/semgrep/">Semgrep</a>
      <p> Review mirrored deployed code for security issues or policy violations.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://codeql.github.com/">GitHub CodeQL</a>
      <p>Advanced code queries to detect vulnerability patterns.</p>
      </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/wapiti-scanner/wapiti">Wapiti</a>
      <p>Web vulnerability scanning against deployed endpoints.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://ortelius.io">Ortelius</a>
      <p>Track vulnerabilities to live endpoints for quick remediation times.</p>
   </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">Zap (Zed Attack Proxy)</a>
      <p>Automated and manual DAST testing for live applications.</p>
  </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sullo/nikto/">Nikto</a>
      <p>Server-focused vulnerability scanning.</p>
  </td>
  </tr> 
  <tr>
    <td>
      <a href="https://www.open-scap.org/features/standards/">OpenSCAP</a>
      <p>Map results to compliance baselines.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://defectdojo.com/community">DefectDojo</a>
      <p>Track vulnerabilities found during post-deployment reviews and link to remediation./p>
    </td>
  </tr>
</table>


<br>

**PW.4**

<p><strong>Reuse Existing, Well-Secured Software When Feasible Instead of Duplicating Functionality :</strong> Lower the costs of software development, expedite software development, and decrease the likelihood of introducing additional security vulnerabilities into the software by reusing software modules and services that have already had their security posture checked. This is particularly important for software that implements security functionality, such as cryptographic modules and protocols.</p><br>
<p> Note: PW.3 moved to PW.4 </p>

<br>

To satisfy SSDF PW.4 in a post-deployment context using open-source tools, the focus shifts to:

- Vulnerability detection runs continuously on production or production-equivalent environments.

- Results are triaged and assigned quickly.

- There is an automated or semi-automated path to remediation (e.g., patching, image rebuild, or component upgrade).

- All activity is auditable and linked to release artifacts.

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="18">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.4.1:</strong>
        <p>Acquire and maintain well-secured software components (e.g., software libraries, modules, middleware, frameworks) from commercial, opensource, and other third-party developers for use by the organization’s software.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.4.2:</strong>
        <p>Create and maintain well-secured software components in-house following SDLC processes to meet common internal software development needs that cannot be better met by third-party software components.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.4.3:</strong>
        <p>Moved to PW.1.3</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.4.4:</strong>
        <p>Verify that acquired commercial, open-source, and all other third-party software components comply with the requirements, as defined by the organization, throughout their life cycles.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://git-scm.com/">Git</a>
      <p> Stores signed vulnerability reports and patch commit metadata.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sigstore/rekor">Rekore</a>
      <p> Logs scan results, remediations, and signatures immutably.</p>
  </td>
  </tr>
  <tr>
    <td>
      <a href="https://ortelius.io">Ortelius</a>
      <p>Audit and evidence retention tracks which environments are running which version, enabling targeted redeployment of patched builds.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Trivy</a>
      <p> Scans running containers, filesystems, and Kubernetes clusters; also generates SBOMs.</p>
   </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>SBOM-driven vulnerability scanning for images and directories.</p>
    </td>
  </tr>
    <tr>
      <td>
      <a href="https://github.com/quay/claircore">Clair </a>
      <p>Monitors container registries for vulnerable images.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openvas.org/">OpenVAS / Greenbone</a>
      <p>Network and host vulnerability scanning.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Generates SBOMs from deployed environments.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-track/">OWASP Dependency-Track</a>
      <p>CWatches SBOMs for new CVEs and policy violations.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/nix-community/vulnix">Vulnix</a>
      <p>Nix-based vulnerability scanning from SBOM input.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kyverno.io/">Kyverno</a>
      <p>Kubernetes-native admission controller enforcing vulnerability thresholds.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://falco.org/">Falco</a>
      <p>Detects runtime anomalies that may indicate exploitation.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sullo/nikto/">Nikto</a>
      <p>Server-focused vulnerability scanning.</p>
  </td>
  </tr> 
  <tr>
    <td>
      <a href="https://keel.sh/">Keel</a>
      <p>Automates container redeployments when a new image is pushed.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kured.dev/">Kured</a>
      <p>Automated Kubernetes node reboots for kernel patching.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://defectdojo.com/community">DefectDojo</a>
      <p>Centralizes vulnerability data from scanners; assigns remediation tasks and tracks SLAs./p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/TheHive-Project/TheHive">The Hive</a>
      <p> Incident response and coordination for urgent vulnerability events./p>
    </td>
  </tr>
</table>
    

**PW.5**

<strong>Create Source Code by Adhering to Secure Coding Practices:</strong> Decrease the number of security vulnerabilities in the software, and reduce costs by minimizing vulnerabilities introduced during source code creation that meet or exceed organization-defined vulnerability severity criteria.

<br>

To satisfy SSDF PW.5 in a post-deployment context using open-source tools, the focus shifts to:

- Ongoing verification of integrity, compliance, and security posture for deployed software.

- Continuous checks to ensure that the running software still meets the security requirements it had at release.

- Detecting drift, newly introduced vulnerabilities, and configuration changes.

- Maintaining verifiable evidence of these checks over time.


<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="16">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.5.1:</strong>
        <p>Follow all secure coding practices that are appropriate to the development languages and environment to meet the organization’s requirements.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Trivy</a>
      <p>Ongoing scans of deployed containers, filesystems, and Kubernetes clusters.</p>
   </td>
  </tr>
   <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Detect CVEs in deployed SBOMs or images.</p>
   </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/quay/claircore">Clair </a>
      <p>Continuous vulnerability scanning for registry images.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p> Generate SBOMs from running systems for ongoing monitoring.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://community.chef.io/tools/chef-inspec">Inspec</a>
      <p> Define and run compliance checks (CIS, NIST, org-specific policies) against deployed environments.</p>
  </td>
  </tr> 
  <tr>
    <td>
      <a href="https://www.open-scap.org/features/standards/">OpenSCAP</a>
      <p>Evaluate running systems against security baselines.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/aquasecurity/kube-bench">Kube-bench </a>
      <p>Validate Kubernetes deployments against CIS benchmarks.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/aquasecurity/kube-hunter/">Kube-hunter </a>
      <p>Identify potential attack paths in deployed Kubernetes clusters.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://falco.org/">Falco</a>
      <p>Detect runtime changes to files, processes, and network behavior.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://aide.github.io/">AIDE</a>
      <p>File integrity monitoring to ensure binaries/configs aren’t altered.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://osquery.io/">osquery</a>
      <p>Query system state to detect unauthorized configuration changes.</p>
      </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openpolicyagent.org/">Open Policy Agent</a>
      <p>Enforce continuous compliance policies at runtime.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kyverno.io/">Kyverno</a>
      <p>Kubernetes-native policy engine to prevent insecure updates.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://defectdojo.com/community">DefectDojo</a>
      <p>Centralize verification results and track issues over time./p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sigstore/rekor">Rekor</a>
      <p>Store signed verification reports in a tamper-proof ledger.</p>
    </td>
  </tr>
</table>
    
**PW.6**

<strong>Configure the Compilation, Interpreter, and Build Processes to Improve Executable Security:</strong> Decrease the number of security vulnerabilities in the software and reduce costs by eliminating vulnerabilities before testing occurs.

<br>

To satisfy SSDF PW.6 in a post-deployment context using open-source tools, the focus shifts to:

- Running scheduled scans on running containers, VMs, and registries; integrate with SBOM monitoring

- Maintain SBOMs for deployed software; monitor for new CVEs.

- Score findings (CVSS, EPSS); prioritize fixes based on severity & exploitability.

- Auto-rebuild/redeploy when patched images are available.

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="9">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.6.1:</strong>
        <p>Use compiler, interpreter, and build tools that offer features to improve executable security.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.6.2:</strong>
        <p>Determine which compiler, interpreter, and build tool features should be used and how each should be configured, then implement and use the approved configurations.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Trivy</a>
      <p>Trivy runs weekly scans on all production container images and hosts → results are signed and logged in Rekor.</p>
   </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Regenerates SBOMs for deployed artifacts, and flags new CVEs.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://defectdojo.com/community">DefectDojo</a>
      <p>CVSS scoring + SLA assignment to owners./p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://keel.sh/">Keel</a>
      <p>Auto-rebuild/redeploy when patched images are available</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kured.dev/">Kured</a>
      <p>Automated Kubernetes node reboots for kernel patching.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://argoproj.github.io/rollouts/">Argo Rollouts</a>
      <p> Use canary/staged rollouts for patched versions.</p>
  </td>
  </tr> 
  <tr>
    <td>
      <a href="https://www.openvas.org/">OpenVAS</a>
      <p>Run scheduled scans on running containers, VMs, and registries; integrate with SBOM monitoring</p>
    </td>
  <tr>
    <td>
      <a href="https://github.com/sigstore/rekor">Rekor</a>
      <p>Store signed records of detection, triage, fix, and verification</p>
  </td>
  </tr>
</table>
    

**PW.7**

<strong>Review and/or Analyze Human-Readable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements:</strong> Help identify vulnerabilities so that they can be corrected before the software is released to prevent exploitation. Using automated methods lowers the effort and resources needed to detect vulnerabilities. Human-readable code includes source code, scripts, and any other form of code that an organization deems human readable.

<br>

To satisfy SSDF PW.7 in a post-deployment context using open-source tools, the focus shifts to:

- Maintain a record showing that the deployed version went through the organization’s required code review and/or automated analysis process.

- Ensure all emergency/hotfix patches pushed post-deployment are also reviewed or analyzed — even if done after release.

- Maintain Audit-Ready Evidence

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="5">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.7.1:</strong>
        <p>Determine whether code review (a person looks directly at the code to find issues) and/or code analysis (tools are used to find issues in code, either in a fully automated way or in conjunction with a person) should be used, as defined by the organization.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.7.2:</strong>
        <p>Perform the code review and/or code analysis based on the organization’s secure coding standards, and record and triage all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.</p> 
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/semgrep/semgrep">Semgrep</a>
      <p> Run SAST against the exact code linked to deployed binaries; include dependency scanning</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://codeql.github.com/">GitHub CodeQL</a>
      <p>Re-run code analysis on production mirrors.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://defectdojo.com/community">DefectDojo</a>
      <p>Keeps immutable records of all reviews, approvals, and automated analysis runs</p>
    </td>
  <tr>
    <td>
      <a href="https://github.com/sigstore/rekor">Rekor</a>
      <p>Signed commits, protected branch history, scan results.</p>
    </td>
  </tr>
</table>


**PW.8**

<strong>Test Executable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements:</strong> Help identify vulnerabilities so that they can be corrected before the software is released in order to prevent exploitation. Using automated methods lowers the effort and resources needed to detect vulnerabilities and improves traceability and repeatability. Executable code includes binaries, directly executed bytecode and source code,
and any other form of code that an organization deems executable.

<br>

To satisfy SSDF PW.8 in a post-deployment context using open-source tools, the focus shifts to:

- Continuously Test Deployed Executables for Vulnerabilities

- Verify Compliance with Security Requirements

- Feed Findings Back into Development

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="9">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.8.1:</strong>
        <p>Determine whether executable code testing should be performed to find  vulnerabilities not identified by previous reviews, analysis, or testing and, if so, which types of testing should be used.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.8.2:</strong>
        <p>Scope the testing, design the tests, perform the testing, and document the results, including recording and triaging all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Trivy</a>
      <p>Scans deployed containers/filesystems for known CVEs in code and dependencies.</p>
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
      <a href="https://ortelius.io">Ortelius</a>
      <p>10 minute synchronizing to OSV.dev for new vulnerability detection in deployed artifacts.</p>
   </td>
  </tr>
  <tr>
      <td>
      <a href="https://www.openvas.org/">OpenVAS / Greenbone</a>
      <p>Network and host vulnerability scanning.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://community.chef.io/tools/chef-inspec">Inspec</a>
      <p>Map scan results to security standards (NIST, CIS, OWASP ASVS)</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://www.open-scap.org/features/standards/">OpenSCAP</a>
      <p>Compliance scan outputs, baseline profiles, exception docs.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/wapiti-scanner/wapiti">Wapiti</a>
      <p>DAST, fuzzing, and runtime monitoring to detect insecure behavior</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">Zap (Zed Attack Proxy)</a>
      <p>DAST/fuzzing reports.</p>
    </td>
  </tr>
</table>
    

**PW.9**

<strong>Configure Software to Have Secure Settings by Default: </strong> Help improve the  security of the software at the time of installation to reduce the likelihood of the software being deployed with weak security settings, putting it at greater risk of compromise.

<br>

To satisfy SSDF PW.9 in a post-deployment context using open-source tools, the focus shifts to:

- Check deployed software and infrastructure against the organization’s secure configuration baseline (e.g., NIST 800-53, CIS Benchmarks, DISA STIGs).

- Use policy-as-code and configuration management tools to keep deployed systems in compliance.

- Integrate configuration checks into runtime monitoring

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="9">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.9.1:</strong>
        <p>Define a secure baseline by determining how to configure each setting that has an effect on security or a security-related setting so that the default settings are secure and do not weaken the security functions provided by the platform, network infrastructure, or services.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.9.2:</strong>
        <p>Implement the default settings (or groups of default settings, if  applicable), and document each setting for software administrators.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://ortelius.io">Ortelius</a>
      <p>Continuously monitors drift in container configurations.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://community.chef.io/tools/chef-inspec">Inspec</a>
      <p>Compare deployed systems against secure configuration baselines (NIST, CIS, STIG)</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://www.open-scap.org/features/standards/">OpenSCAP</a>
      <p>Compare deployed systems against secure configuration baselines (NIST, CIS, STIG).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://falco.org/">Falco</a>
      <p>Continuously monitor config changes; alert or auto-remediate deviations.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://wazuh.com/">Wazuh</a>
      <p>Drift detection logs, remediation actions.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/ansible/ansible-examples">Ansible</a>
      <p>Policy-as-code and config management to ensure all deployments match baseline</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/saltstack/salt">Saltstack</a>
      <p>Config playbooks, enforcement logs, policy change history.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://git-scm.com/">Git</a>
      <p>Store signed scan results and drift detection records in tamper-evident systems.</p>
    </td>
  </tr>
</table>
    