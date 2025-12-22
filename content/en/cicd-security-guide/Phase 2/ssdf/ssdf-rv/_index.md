---
title: "2.4 Respond to Vulnerabilities (RV)"
linkTitle: "2.4 Respond to Vulnerabilities (RV)"
weight: 8
description: >
 2.4 Respond to Vulnerabilities (RV) for Build and Deploy CI/CD Steps
---



### 2.4 Respond to Vulnerabilities (RV) for Build and Deploy Tasks

Respond to Vulnerabilities (RV): Organizations should identify residual vulnerabilities
in their software releases and respond appropriately to address those vulnerabilities and prevent similar ones from occurring in the future.



<br>

**RV.1**

<strong>Identify and Confirm Vulnerabilities on an Ongoing Basis: </strong> Help ensure that vulnerabilities are identified more quickly so that they can be remediated more quickly in accordance with risk, reducing the window of opportunity for attackers.

<br>

To satisfy SSDF RV.1 in a build and deploy context using open-source tools, the focus shifts to continuously gathering vulnerability intel (VDP + public sources), monitor components, and confirm issues across supported releases. 

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
      <p>Continuously scans manifests/locks against OSV; great for confirming new disclosures across all supported releases..</p>
    </td> 
  </tr>
   <tr>
      <td>
      <a href="https://oretlius.io">Ortelius</a>
      <p>Continuously synchronizes Software Bill of Material versions of built artifacts to OSV.dev reporting on vulnerabilities discovered post-build.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://osv.dev">OSV Vulnerability Database</a>
      <p>Queries the OSV.dev vulnerability database for open-source package CVEs.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Scans container images and SBOMs for known vulnerabilities.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://vulners.com">Vulners CLI/API</a>
      <p>Aggregates multiple public vulnerability feeds.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://github.com/intel/cve-bin-tool">cve-bin-tool</a>
      <p>Checks installed binaries for known CVEs.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://github.com/semgrep/semgrep">Semgrep</a>
      <p>SAST for multiple languages; customizable rules. Run on merge to main branch.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://github.com/PyCQA/bandit">Bandit</a>
      <p>Python security linting. Add to Python project build stage.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://www.sonarsource.com/products/sonarqube/">SonarQube Community Edition</a>
      <p>SAST & quality checks. Run in build step; block deploy if high-severity issues found.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://www.zaproxy.org">OWASP ZAP</a>
      <p>DAST; quick passive scan on deployed staging app.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://docs.github.com/en/code-security/">GitHub Security Policy</a>
      <p>Public policy location for reporters.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://disclose.io">Disclose.io templates</a>
      <p>Vulnerability Disclosure Program.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://github.com/ossf/oss-vulnerability-guide">OpenSSF Vulnerability Disclosure Guide</a>
      <p>Playbook for implementing disclosure.</p>
    </td> 
  </tr>

</table>
    

**RV.2**

<strong>Assess, Prioritize, and Remediate Vulnerabilities:</strong> Help ensure that
vulnerabilities are remediated in accordance with risk to reduce the window of  opportunity for attackers.

<br>

To satisfy SSDF RV.2 in a build and deploy context using open-source tools, the focus shifts to:

- Recording each vulnerability

- Analyze risk (exploitability & impact)

- Choose responses, publish advisories, and deliver remediations via trusted mechanisms; include temporary mitigations where needed.\



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
      <a href="https://oretlius.io">Ortelius</a>
      <p>Exposes the blast radius of each vulnerability across live environments.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://github.com/DefectDojo/django-DefectDojo">DefectDojo</a>
      <p>Centralizes vulnerabilities from SAST/DAST/SCA tools; adds risk scoring.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://github.com/DependencyTrack/dependency-track">OWASP Dependency-Track</a>
      <p>SBOM-based vuln tracking, includes CVSS scoring and metadata.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://www.first.org/epss/">EPSS (Exploit Prediction Scoring System)</a>
      <p>Rates probability of exploitation for CVEs (risk-based prioritization).</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://vulners.com">Vulners API</a>
      <p>Provides exploit links, PoCs, and additional context per CVE.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://www.first.org/cvss/calculator/">CVSS Calculator (FIRST)</a>
      <p>Standardized impact scoring to support triage decisions.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://sigstore.dev">Sigstore / Cosign</a>
      <p>Sign remediated builds before deploying (trusted delivery mechanism).</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://coreruleset.org">OWASP ModSecurity CRS</a>
      <p>Temporary WAF rules to mitigate unpatched web vulns.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://github.com/falcosecurity/falco">Falco</a>
      <p>Runtime detection and mitigation for unpatched container/Kubernetes issues.</p>
    </td> 
  </tr>
</table>
  
<br>

**RV.3**

<p><strong>Analyze Vulnerabilities to Identify Their Root Causes: </strong> Help reduce the frequency of vulnerabilities in the future.</p><br>

<br>

To satisfy SSDF RV.3 in a build and deploy context using open-source tools, the focus shifts to:

- Capturing root causes & lessons learned

- Detecting recurring patterns over time




<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
      <p>RV.3.1: Analyze identified vulnerabilities to determine their root causes.</p><br>
      <p>RV.3.2: Analyze the root causes over time to identify patterns, such as a particular secure coding practice not being followed consistently</p> <br>
      <p>RV.3.3: Review the software for similar vulnerabilities to eradicate a class of vulnerabilities, and proactively fix them rather than waiting for external reports.</p> <br>
      <p>RV.3.4: Review the SDLC process, and update it if appropriate to prevent (or reduce the likelihood of) the root cause recurring in updates to the software or in new software that is created.</p> <br>
    </td>
  </tr>
 <tr>
      <td>
      <a href="https://github.com/semgrep/semgrep">Semgreps</a>
      <p>Write org-specific rules to detect the root-cause pattern; scan repos to eradicate classes of bugs.</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://codeql.github.com">CodeQL</a>
      <p>Deep code queries to identify the precise coding constructs leading to vulns.</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://www.sonarsource.com/products/sonarqube/downloads/">SonarQube CE</a>
      <p>Provides issue traces, rule violations, and hotspots including root cause indicators.</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://github.com/DefectDojo/django-DefectDojo">DefectDojo</a>
      <p>Tracks vulns + metadata, allows attaching root cause notes per issue.</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://github.com/DependencyTrack/dependency-track">Dependency-Track</a>
      <p>Long-term tracking of vulnerable components to see recurring dependency issues.</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://github.com/grafeas/grafeas">Grafeas</a>
      <p>Metadata API for tracking security events across builds/releases.</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://github.com/fkie-cad/cwe_checker">cwe-checker</a>
      <p>Detects weakness patterns (CWEs) in binaries, useful for compiled artifacts.</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://github.com/joernio/joern">Joern</a>
      <p>Open-source code analysis platform for hunting bug patterns at scale.</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://owaspsamm.org">OpenSAMM (OWASP Software Assurance Maturity Model)</a>
      <p>Framework to improve secure dev lifecycle practices.</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://github.com/ossf/scorecard">OpenSSF Scorecards</a>
      <p>Automates repo security health checks (branch protection, dependency pinning, CI hardening).</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://github.com/usnistgov/OSCAL">OSCAL (NIST)</a>
      <p>Standard for documenting compliance + SDLC security improvements.</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://github.com/ossf/allstar">Allstar (by OpenSSF)</a>
      <p>Enforces security policies across GitHub orgs/repos.</p>
    </td>
  </tr>
</table>

