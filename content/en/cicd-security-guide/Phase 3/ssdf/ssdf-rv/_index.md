---
title: "Respond to Vulnerabilities (RV)"
linkTitle: "Respond to Vulnerabilities (RV)"
weight: 8
description: >
 Respond to Vulnerabilities (RV) in the Post-Deployment CI/CD Steps
---


### Respond to Vulnerabilities (RV)

Respond to Vulnerabilities (RV): Organizations should identify residual vulnerabilities
in their software releases and respond appropriately to address those vulnerabilities and prevent similar ones from occurring in the future.



<br>

**RV.1**

<strong>Identify and Confirm Vulnerabilities on an Ongoing Basis: </strong> Help ensure that vulnerabilities are identified more quickly so that they can be remediated more quickly in accordance with risk, reducing the window of opportunity for attackers.

<br>

To satisfy SSDF RV.1 in a post-deployment context using open-source tools, the focus shifts to:

- Continuously scanning live environments for new vulnerabilities

- Correlating detected vulnerabilities to deployed components and SBOM data

- Validating whether vulnerabilities are exploitable in the specific environment

- Prioritizing remediation based on severity, exploitability, and operational impact


<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="9">
      <p>RV.1.1: Gather information from software acquirers, users, and public sources on potential vulnerabilities in the software and third-party components that the software uses, and investigate all credible reports.</p><br>
      <p>RV.1.2: Review, analyze, and/or test the software’s code to identify or  confirm the presence of previously undetected vulnerabilities.</p><br>
      <p>RV.1.3: Have a policy that addresses vulnerability disclosure and remediation, and implement the roles, responsibilities, and processes needed to support that policy.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://dependencytrack.org">OWASP Dependency Track</a>
      <p> Integrates with live SBOMs to detect and alert on vulnerabilities after release.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://ortelius.io">Ortelius</a>
      <p>Links detected vulnerabilities directly to deployed service versions for traceability.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.defectdojo.org">DefectDojo</a>
      <p>Central vulnerability management hub with metrics and tracking.</p>
  </td>
  </tr>
  <tr>
    <td>
      <a href="https://aquasecurity.github.io/trivy">Trivy</a>
      <p>Identify vulnerabilities in images already deployed in Kubernetes or Docker environments.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Works with Syft-generated SBOMs to continuously check for new CVEs.</p>
   </td>
  </tr> 
  <tr>
    <td>
      <a href="https://www.open-scap.org/">OpenSCAP</a>
      <p>Provide scheduled compliance scans alongside vulnerability checks.</p>
    </td>
  </tr>
 <tr>
    <td>
      <a href="https://github.com/openvex">VEX (Vulnerability Exploitability eXchange) + OpenVEX</a>
      <p>Helps teams prioritize remediation by filtering out non-exploitable vulnerabilities.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>MFeed live SBOMs into scanners like Dependency-Track or Grype.</p>
    </td>
  </tr>
</table>
    

**RV.2**

<strong>Assess, Prioritize, and Remediate Vulnerabilities:</strong> Help ensure that
vulnerabilities are remediated in accordance with risk to reduce the window of  opportunity for attackers.

<br>

To satisfy SSDF RV.2 in a post-deployment context using open-source tools, the focus shifts to:

- Determining which vulnerabilities matter most in the deployed context

- Using exploitability, business impact, and compliance requirements for prioritization

- Executing timely remediation or mitigation actions in live environments

- Tracking remediation status to closure with audit-ready records


<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="8">
      <p>RV.2.1: Analyze each vulnerability to gather sufficient information about risk to plan its remediation or other risk response.</p><br>
      <p>RV.2.2: Plan and implement risk responses for vulnerabilities.</p>     
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.defectdojo.org">DefectDojo</a>
      <p>Centralizes risk scoring, workflow management, and reporting for remediation progress.</p>
  </td>
  </tr> 
  <tr>
      <td>
      <a href="https://dependencytrack.org">OWASP Dependency Track</a>
      <p>Provides real-time vulnerability prioritization and integrates with issue tracking systems.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://ortelius.io">Ortelius</a>
      <p>Enables environment-specific remediation prioritization and impact assessment.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.jenkins.io">Jenkins</a> + <a href="https://www.openpolicyagent.org">OPA (Open Policy Agent)</a>
      <p>Enforce remediation SLAs and automate rollouts of fixed versions.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Trivy + <a href="https://github.com/anchore/grype">Grype</a>
      <p>Continuous scanning plus integration with CI/CD to push patched artifacts.</p>
   </td>
  </tr> 
  <tr>
    <td>
      <a href="https://www.github.com">GitHub/GitLab Issues + Automation Bots</a>
      <p>Ensures no vulnerability is left without a tracked remediation action.</p>
    </td>
  </tr>
 <tr>
    <td>
      <a href="https://github.com/aquasecurity/kube-bench ">Kubebench + <a href="https://falco.org ">Falco (Runtime Security)</a>
      <p>Provides real-time signals to prioritize operational security fixes.</p>
    </td>
  </tr>
</table>
  
<br>

**RV.3**

<p><strong>Analyze Vulnerabilities to Identify Their Root Causes: </strong> Help reduce the frequency of vulnerabilities in the future.</p><br>

<br>

To satisfy SSDF RV.3 in a post-deployment context using open-source tools, the focus shifts to:

- Determining whether it originated in coding, dependencies, build processes, or deployment configurations

- Documenting lessons learned to prevent recurrence

- Feeding analysis results back into security requirements, pipelines, and developer training



<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="9">
      <p>RV.3.1: Analyze identified vulnerabilities to determine their root causes.</p><br>
      <p>RV.3.2: Analyze the root causes over time to identify patterns, such as a particular secure coding practice not being followed consistently</p> <br>
      <p>RV.3.3: Review the software for similar vulnerabilities to eradicate a class of vulnerabilities, and proactively fix them rather than waiting for external reports.</p> <br>
      <p>RV.3.4: Review the SDLC process, and update it if appropriate to prevent (or reduce the likelihood of) the root cause recurring in updates to the software or in new software that is created.</p> <br>
    </td>
  </tr>
 <tr>
      <td>
      <a href="https://ortelius.io">Ortelius</a>
      <p>Supports forensic analysis by tracking when and where a vulnerable component entered the system.</p>
    </td>
  </tr>
<tr>
    <td>
      <a href="https://www.defectdojo.org">DefectDojo</a>
      <p>Maintains historical data to identify trends in vulnerability origins.</p>
  </td>
  </tr> 
  <tr>
      <td>
      <a href="https://github.com">GitHub</a>
      <p>Supports forensic traceability and accountability in root cause analysis.</p>
    </td>
  </tr>
 <tr>
    <td>
      <a href="https://github.com/anchore/syft ">Syft</a> + <a href="https://dependencytrack.org">Dependency Track</a>
      <p>nables version-diff SBOM analysis for root cause investigations.</p>
    </td>
  </tr> 
 <tr>
    <td>
      <a href="https://semgrep.dev">Semgrep</a>
      <p>Assists in determining whether vulnerabilities stem from code-level issues.</p>
    </td>
  </tr>
<tr>
    <td>
      <a href="https://www.open-scap.org">OpenSCAP</a>
      <p>Enables root cause mapping to configuration weaknesses.</p>
    </td>
  </tr>
 <tr>
    <td>
      <a href="https://aquasecurity.github.io/trivy">Trivy</a> + <a href="https://github.com/anchore/grype">Grype</a>
      <p> Provides temporal context for root cause timelines.</p>
   </td>
  </tr> 
  <tr>
    <td>
      <a href=" https://osquery.io">OSQuery</a>
      <p>Supports deep inspection during vulnerability forensics.</p>
    </td>
  </tr>
</table>