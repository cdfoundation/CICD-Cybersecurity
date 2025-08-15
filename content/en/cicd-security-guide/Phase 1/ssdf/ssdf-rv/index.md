---
title: "Respond to Vulnerabilites"
linkTitle: "Respond to Vulnerabilities (RV)"
weight: 8
description: >
 Respond to Vulnerabilities (RV) Code and Prebuild CI/CD Steps
---




### Respond to Vulnerabilities (RV)

Respond to Vulnerabilities (RV): Organizations should identify residual vulnerabilities
in their software releases and respond appropriately to address those vulnerabilities and prevent similar ones from occurring in the future.


<br>

**RV.1**

<strong>Identify and Confirm Vulnerabilities on an Ongoing Basis: </strong> Help ensure that vulnerabilities are identified more quickly so that they can be remediated more quickly in accordance with risk, reducing the window of opportunity for attackers.

<br>

To satisfy SSDF RV.1 in a code and prebuild context using open-source tools, the focus shifts to detecting and remediating vulnerabilities before any artifact is built, so fixes happen in code/manifest PRs, not after packaging.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
      <p>RV.1.1: Gather information from software acquirers, users, and public sources on potential vulnerabilities in the software and third-party components that the software uses, and investigate all credible reports.</p><br>
      <p>RV.1.2: Review, analyze, and/or test the software’s code to identify or  confirm the presence of previously undetected vulnerabilities.</p><br>
      <p>RV.1.3: Have a policy that addresses vulnerability disclosure and remediation, and implement the roles, responsibilities, and processes needed to support that policy.</p>
    </td>
  </tr>
   <tr>
      <td>
      <a href="https://github.com/google/osv-scanner">OSV-Scanner</a>
      <p>Scans source trees and manifest/lock files against OSV for known vulnerabilities for discovery early in development.</p>
    </td> 
  </tr>
   <tr>
      <td>
      <a href="https://ortelius.io">Ortelius Evidence Store</a>
      <p>Continuously synchronizes Software Bill of Material versions of built artifacts to OSV.dev reporting on vulnerabilities discovered post-build.</p>
    </td> 
  </tr>
  <tr>
      <td>
      <a href="https://semgrep.dev">Semgrep</a>
      <p>Rule-based SAST in PRs/CI for previously undetected vulnerabilities. Static analysis tool used for searching code, finding bugs, and enforcing code standards at various stages of the development cycle (editor, commit, and continuous integration - CI). </p>
    </td> 
  </tr>
  <tr>
      <td>
      <a href=" https://owasp.org/www-project-dependency-check/">OWASP Dependency Check</a>
      <p>SCA for many ecosystems; runs in CI, outputs SARIF/HTML. CVE-based dependency matching for code-time feedback.</p>
    </td> 
  </tr>
  <tr>
      <td>
      <a href="https://github.com/aquasecurity/trivy">Trivy</a>
      <p>Can source/lockfiles and IaC before build. All-in-one SCA + IaC misconfig checks pre-build.</p>
    </td> 
  </tr>
  <tr>
      <td>
      <a href=" https://github.com/anchore/syft">Syft</a>
      <p>Generate SBOMs (CycloneDX/SPDX) directly from source. Composition/provenance data to power RV.1 discovery.</p>
    </td> 
  </tr> 
  <tr>
      <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Scan source directories or Software Bill of Materials (from Syft) for vulnerabilities. Accurate matching via SBOM + flexible CI integration.</p>
    </td> 
  </tr>  
 <tr>
      <td>
      <a href="https://www.sonarsource.com/">SonarQube Community</a>
      <p>Developers can continuously inspect code quality to detect bugs, code smells, and security vulnerabilities without executing the code.</p>
    </td> 
  </tr>  
<tr>
      <td>
      <a href="https://codeql.github.com/">CodeQL</a>
      <p>Developed by GitHub, developers and security researchers can analyze codebases for security vulnerabilities, bugs, and other code quality issues.</p>
    </td> 
  </tr> 
<tr>
      <td>
      <a href="https://bandit.readthedocs.io/">Bandit (Python)</a>
      <p>A static analysis tool designed to identify common security vulnerabilities in Python code.</p>
    </td> 
  </tr> 
<tr>
      <td>
      <a href="https://brakemanscanner.org/">Brakeman (Rails)</a>
      <p>Vulnerability scanner specifically designed for Ruby on Rails applications.</p>
    </td> 
  </tr> 
<tr>
      <td>
      <a href="https://find-sec-bugs.github.io/">FindSecBugs (Java)</a>
      <p>Static code analysis tool designed for Java applications, used to identify potential security vulnerabilities within the code.</p>
    </td> 
  </tr> 
<tr>
      <td>
      <a href="https://gitleaks.io/">Gitleaks</a>
      <p>Prevent hardcoded secrets in code and configs.</p>
    </td> 
  </tr> 
<tr>
      <td>
      <a href="https://www.conftest.dev/">Conftest</a>
      <p>Conftest is a utility to help you write tests against structured configuration data.</p>
    </td> 
  </tr> 
</table>
    

**RV.2**

<strong>Assess, Prioritize, and Remediate Vulnerabilities:</strong> Help ensure that
vulnerabilities are remediated in accordance with risk to reduce the window of  opportunity for attackers.

<br>

To satisfy SSDF RV.2 in a code and prebuild context using open-source tools, the focus shifts to:

- Recording each vulnerability

- Analyze risk (exploitability & impact)

- Choose responses, publish advisories, and deliver remediations via trusted mechanisms; include temporary mitigations where needed.



<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
      <p>RV.2.1: Analyze each vulnerability to gather sufficient information about risk to plan its remediation or other risk response.</p><br>
      <p>RV.2.2: Plan and implement risk responses for vulnerabilities.</p>     
    </td>
  </tr>
    <tr>
      <td>
      <a href="https://github.com/guacsec/guac">GUAC</a>
      <p>Aggregates SBOMs, attestations, and vulns to understand blast radius and prioritize fixes. </p>
    </td>
     <tr>
      <td>
      <a href="https://github.com/renovatebot/renovate">Renovate</a>
      <p>Automates dependency upgrades/patch PRs with risk-aware policies.</p>
    </td> 
  </tr>
   <tr>
      <td>
      <a href="https://www.defectdojo.org/">OWASP DefectDojo</a>
      <p>Ingest scanner results (Semgrep/Grype/Trivy/etc.) for de-dupe, severity, ownership, and workflow. Central vulnerability triage and risk tracking tied to repos.</p>
    </td> 
  </tr>
  <tr>
      <td>
      <a href="https://ortelius.io">Ortelius Evidence Store</a>
      <p>Exposes the blast radius of each vulnerability across live environments.</p>
    </td> 
  </tr> 
</table>
  
<br>

**RV.3**

<p><strong>Analyze Vulnerabilities to Identify Their Root Causes: </strong> Help reduce the frequency of vulnerabilities in the future.</p><br>

<br>

To satisfy SSDF RV.3 in a code and prebuild context using open-source tools, the focus shifts to:

- Identify vulnerabilities in source code and dependency manifests before building, using SBOM generation, SCA, and SAST

- Confirming findings by removing false positives and documenting minimal evidence for remediation

- Enforcing early guardrails such as version pinning, deny-lists, and secret scanning to block known risks

- Normalize, de-duplicate, and prioritize findings based on severity, exploitability, and usage context

- Apply policy-driven gates in PRs to block high-risk vulnerabilities and automate safe dependency updates

- Assign ownership, require disposition for each finding, and govern exceptions with time-bound waivers or VEX records




<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
      <p>RV.3.1: Analyze identified vulnerabilities to determine their root causes.</p><br>
      <p>RV.3.2: Analyze the root causes over time to identify patterns, such as a particular secure coding practice not being followed consistently.</p> <br>
      <p>RV.3.3: Review the software for similar vulnerabilities to eradicate a class of vulnerabilities, and proactively fix them rather than waiting for external reports.</p> <br>
      <p>RV.3.4: Review the SDLC process, and update it if appropriate to prevent (or reduce the likelihood of) the root cause recurring in updates to the software or in new software that is created.</p> <br>
    </td>
  </tr>
 <tr>
      <td>
      <a href=" https://spotbugs.github.io ">SpotBugs + <a href=" https://spotbugs.github.io ">FindSecBugs </a>
      <p>Maintains a “guardrail” ruleset for historical issues. Provides pattern-class eradication across modules.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://semgrep.dev">Semgrep</a>
      <p>Encode RCAs as rules (e.g., ban insecure APIs, enforce sanitizers) and run in PRs. Catches the class of bug that caused the incident.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://github.com/ossf/scorecard">OpenSSF Scorecard</a>
      <p>Monitor repo hygiene signals (Branch protection, dependency-pinning, fuzzing, etc.) and bake improvements into SDLC. Preventative controls aligned to root-cause themes.</p>
    </td> 
  </tr>
</table>

