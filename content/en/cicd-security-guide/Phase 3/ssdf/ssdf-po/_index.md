---
title: "Protect the Organization (PO)"
linkTitle: "Protect the Organization (PO)"
weight: 5
description: >
 Protect the Organization (PO) Post Deployment CI/CD Steps
---


### Protect the Organization (PO)
Organizations should ensure that their people, processes, and technology are prepared to perform secure software development at the organization level. Many organizations will find some PO practices to also be applicable to subsets of their software development, like individual development groups or projects.

<br>

**PO.1**
<strong>Define Security Requirements for Software Development</strong>: Ensure that security requirements for software development are known at all times so that they can be taken into account throughout the SDLC and duplication of effort can be minimized because the requirements information can be collected once and shared. This includes requirements from internal sources (e.g., the organization’s policies, business objectives, and risk  management strategy) and external sources (e.g., applicable laws and regulations).

<br>

To satisfy SSDF PO.1 in a post-deployment context using open-source tools, the focus shifts from just defining to:

- Maintaining and enforcing PO tasks in live systems.

- Making task requirements visible and traceable across deployed environments.

- Auditing and updating methods and procedures as internal and external policies change.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
      <p>P.O.1.1: Identify and document all security requirements for the organization’s software development infrastructures and processes, and maintain the requirements over time.</p><br>
      <p>PO.1.2 Identify and document all security requirements for organization-developed  software to meet, and maintain the requirements over time. </p>
    </td>
    </tr>
    <tr>
    <td>
      <a href="https://www.openpolicyagent.org/"> Open Policy Agent</a>
      </a>
      <p>Supports definitions of security policies as code and enforce them in pipelines, CI/CD, and runtime.  Enforces runtime policies via integrations with Kubernetes, Terraform, and CI/CD platforms.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.inspec.io">InspecLog</a>
      <p> Periodically audits deployed environments against internal and external security standards.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://Ortelius.io">Ortelius Evidence Store</a>
      <p> Associate and version security requirement metadata per service and deployment, enabling continuous visibility.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.defectdojo.org">DefectDojo</a>
      <p> Maps security findings back to specific policy controls or regulatory frameworks.</p>
    </td>
  </tr>
  </table>


**PO.2**
<strong>Implement Roles and Responsibilities:</strong> Ensure that everyone inside and outside of the organization involved in the SDLC is prepared to perform their SDLC-related roles and responsibilities throughout the SDLC.

<br>

To satisfy SSDF PO.2 in a post-deployment context using open-source tools, the focus shifts to:

- Defining and assigning roles for who is responsible for remediation and runtime configurations. 

- Maintaining evidence of what was deployed, who deployed it, and impact across all software assets.

- Ensuring security and patch management with restricted post-deployment actions.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
      <p>PO.2.1: Create new roles and alter responsibilities for existing roles as needed to encompass all parts of the SDLC. Periodically review and maintain the defined roles and responsibilities, updating them as needed.</p><br>
      <p>PO.2.2: Provide role-based training for all personnel with responsibilities that contribute to secure development. Periodically review personnel proficiency and role-based training, and update the training as needed. </p><br>
      <p>PO.2.3: Obtain upper management or authorizing official commitment to secure development, and convey that commitment to all with development related roles and  responsibilities. </p>
    </td>
   </tr>
   <tr> 
    <td>
      <a href="https://git-scm.com/">Git</a>
      <p>Tracks authorship and code reviewers, and tags releases and documents who triggered them. </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://Ortelius.io">Ortelius Evidence Store</a>
      <p>Associates deployed services with responsible individuals or teams, with historical record of changes, deployments and roles. </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.cncf.io/projects/backstage/">Backstage</a>
      <p>Lists service owners, on-call teams and escalation paths making post-deployment responsibility transparent across the organization.</p>
    </td>
  </tr>
 <tr>
    <td>
      <a href="https://www.defectdojo.org">DefectDojo</a>
      <p>Track security findings and assign resolution responsibilities.</p>
    </td>
  </tr>
<tr>
    <td>
      <a href="https://kubernetes.io/blog/2019/08/06/opa-gatekeeper-policy-and-governance-for-kubernetes/">Kubernetes RBAC / OPA Gatekeepr</a>
      <p>Enforces access policies and role boundaries in runtime environments.</p>
    </td>
  </tr>
<tr>
    <td>
      <a href="https://argo-cd.readthedocs.io/en/stable/">ArgoCD</a>
      <p>Ensures only authorized commits/deployments affect production and logs every promotion and rollback.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://falco.org/">Falco</a>
      <p>Detects unauthorized activity at runtime.</p>
    </td>
  </tr>
    <tr>
    <td>
      <a href="https://prometheus.io/docs/alerting/latest/alertmanager/">Prometheus + Alertmanager</a>
      <p>Alerts based on ownership/roles</p>
    </td>
  </tr>
  </table>
    



**PO.3**
<strong>Implement Supporting Toolchains:</strong> Use automation to reduce human effort and improve the accuracy, reproducibility, usability, and comprehensiveness of security practices throughout the SDLC, as well as provide a way
to document and demonstrate the use of these practices. Toolchains and tools may be used at different levels of the organization, such as organization-wide or project-specific, and may address a particular part of the SDLC, like a
build pipeline.

<br>

To satisfy SSDF PO.3 in a post-deployment context using open-source tools, the focus shifts to:

- Ensuring toolchains support vulnerability detection, SBOM tracking, compliance, and policy enforcement to function after release.

- Keeping automation tooling secure, updated, and integrated with the live environment.

- Maintaining evidence that the toolchain’s outputs (e.g., SBOMs, scan reports) remain trustworthy and current.



<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50"
      <p>PO.3.1: Specify which tools or tool types must or should be included in each  toolchain to mitigate identified risks, as well as how the toolchain components are to be integrated with each other.</p><br>
      <p>PO.3.2: Follow recommended security practices to deploy, operate, and maintain tools and toolchains. </p><br>
      <p>PO.3.3: Configure tools to generate artifacts6 of their support of secure software development practices as defined by the organization. </p>
    </td>
    </tr>
    <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-track/">OWASP Dependency Track</a>
      <p>Continuously monitors SBOMs for newly disclosed CVEs in deployed software. </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://Ortelius.io">Ortelius Evidence Store</a>
      <p> Maintains a historical record of deployed software, components, and their SBOMs; links to owners for accountability. </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/syft/">Syft</a>
      <p>Generates SBOMs from deployed container images or filesystems on-demand.</p>
    </td>
  </tr>
 <tr>
    <td>
      <a href="https://trivy.dev/latest/">Trivy</a>
      <p> Post-deployment container, filesystem, and package vulnerability scanning; also generates SBOMs.</p>
    </td>
  </tr>
<tr>
    <td>
      <a href="https://github.com/quay/clair/">Clair</a>
      <p>Continuous scanning of container registries for vulnerabilities.</p>
    </td>
  </tr>
<tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Fast vulnerability scanner for container images and filesystems.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://in-toto.io/">In-Toto</a>
      <p>Validates that deployed artifacts match the cryptographic attestations from the build process.</p>
    </td>
  </tr>
    <tr>
    <td>
      <a href="https://github.com/sigstore/cosign">Sigstore cosign</a>
      <p>Verifies signatures of deployed artifacts; ensures they match approved builds.</p>
    </td>
  </tr>
      <tr>
    <td>
      <a href="https://github.com/sigstore/rekor">Sigstore Rekor</a>
      <p>Provides a public, immutable log for signatures and provenance data.</p>
    </td>
  </tr>
  <tr>
  <td>
      <a href="https://www.openpolicyagent.org/"> Open Policy Agent</a>
      </a>
      <p>Enforce security and compliance policies on deployed systems (e.g., Kubernetes clusters).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.inspec.io">Inspec</a>
      <p>Audit deployed infrastructure and applications against security baselines and compliance requirements.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/TheHive-Project/TheHive">The Hive</a> <p>Incident response platform for post-deployment security events. </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.defectdojo.org">DefectDojo</a>
      <p>Track vulnerabilities and assign remediation tasks; integrate with scanners for continuous updates.</p>
    </td>
  </tr>
  </table>



**PO.4**
<strong>Define and Use Criteria for Software Security Checks:</strong> Help ensure that the software resulting from the SDLC meets the organization’s expectations by defining and using criteria for checking the software’s security during development.

<br>

To satisfy SSDF PO.4 in a post-deployment context using open-source tools, the focus shifts to:

- Ensuring that security data continues to be collected after release.

- Logs, SBOMs, and scan results are preserved and tamper-resistant.

- Data is safeguarded to prevent unauthorized access or modification.

- Data is retrievable for audits, investigations, and compliance checks



<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50"
      <p>PO.4.1: Define criteria for software security checks and track throughout the SDLC.</p><br>
      <p>PO.4.2: Implement processes, mechanisms, etc. to gather and safeguard the necessary information in support of the criteria.</p><br>
   </td>
   </tr>
   <tr>
    <td>
      <a href="https://falco.org/">Falco</a>
      <p>Runtime security detection for containers and hosts; generates event logs for suspicious behavior.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/Neo23x0/auditd">AuditD</a>
      <p> Captures system-level security events for Linux. </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/osquery/osquery">OSQuery</a>
      <p> Endpoint telemetry and configuration monitoring. </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://grafana.com/docs/loki/latest/get-started/overview/">Prometheus and Loki</a>
      <p> Collect and store metrics and logs in a queryable format.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://Ortelius.io">Ortelius Evidence Store</a>
      <p>Maintains versioned SBOMs linked to each deployment. </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/syft/">Syft</a>
      <p>Generates SBOMs from deployed artifacts for ongoing monitoring./p>
    </td>
  </tr>
 <tr>
    <td>
      <a href="https://www.open-scap.org/features/standards/">OpenSCAP</a>
      <p>Collects and stores compliance scan data.</p>
    </td>
  </tr>
<tr>
    <td>
      <a href="https://github.com/wazuh/wazuh">Wazuh SIEM</a>
      <p>SIEM with audit logging, threat detection, and compliance monitoring.</p>
    </td>
  </tr>
<tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Detects CVEs in deployed images and file systems.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://in-toto.io/">In-Toto</a>
      <p>Validates that deployed artifacts match the cryptographic attestations from the build process.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sigstore/rekor">Sigstore Rekor</a>
      <p>Provides a public, immutable log for signatures and provenance data.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.inspec.io">Inspec</a>
      <p>Audit deployed infrastructure and applications against security baselines and compliance requirements.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://trivy.dev/latest/">Trivy</a>
      <p>Continuous vulnerability scanning + SBOM generation for running systems.</p>
    </td>
    </tr>
    <tr>
    <td>
      <a href="https://www.defectdojo.org">DefectDojo</a>
      <p>Stores and organizes security scan results; integrates with Trivy, Grype, and Dependency-Track.</p>
    </td>
  </tr>
  </table>
    


**PO.5**
<strong>Implement and Maintain Secure Environments for Software Development:</strong> Ensure that all components of the environments for software development are strongly protected from internal and external threats to prevent compromises of the
environments or the software being developed or maintained within them. Examples of environments for software development include development, build, test, and distribution environments.

<br>

To satisfy SSDF PO.5 in a post-deployment context using open-source tools, the focus shifts to:

- The security requirements for your development infrastructure are still relevant and enforced after software is released.

- Your build, deployment, and monitoring environments remain hardened and compliant.

- You continuously validate that your development infrastructure hasn’t drifted from its secure baseline.


<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50"
      <p>PO.5.1: Separate and protect each environment involved in software development.</p><br>
      <p>PO.5.2: Secure and harden development endpoints (i.e., endpoints for software designers, developers, testers, builders, etc.) to perform development-related tasks using a risk-based approach.</p><br>
   </td>
   </tr>
   <tr>
    <td>
      <a href="https://www.inspec.io">Inspec</a>
      <p>Runs ongoing compliance scans against development and build servers; enforce CIS/NIST benchmarks.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.open-scap.org/features/standards/">OpenSCAP</a>
      <p>Check infrastructure against defined security baselines.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/osquery/osquery">OSQuery</a>
      <p> Monitor build and deployment nodes for unauthorized changes.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/aquasecurity/kube-bench">Kube-bench</a>
      <p>Validates Kubernetes-based build/test clusters meet CIS benchmarks.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://github.com/open-policy-agent/gatekeeper">Open Policy Agent - GateKeeper</a>
      <p>Enforce rules for infrastructure configuration (Kubernetes, Terraform, CI/CD).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kyverno.io/">Kyverno</a>
      <p>Kubernetes-native policy enforcement for cluster security./p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.jenkins.io/">Jenkins</a>
      <p> Hardened CI/CD pipelines with access controls and audit logs. </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sonatype/nexus-public">Nexus Repository OSS </a>
      <p> Securely store build artifacts post-deployment; apply access controls.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/goharbor/harbor">Harbor </a>
      <p>Container registry with built-in vulnerability scanning and RBAC.</p>
    </td>
  </tr>
 <tr>
    <td>
      <a href="https://github.com/wazuh/wazuh">Wazuh SIEM</a>
      <p>Ingests infrastructure security logs and alerts on violations.</p>
    </td>
  </tr>
  </tr>
   <td>
      <a href="https://falco.org/">Falco</a>
      <p>Detect unauthorized activity in build/deployment clusters or runner nodes.</p>
    </td>
  </tr>
<tr>
    <td>
      <a href="https://github.com/prometheus/alertmanager">Prometheus + Alertmanager</a>
      <p>Monitor infrastructure security metrics and trigger notifications. </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://in-toto.io/">In-Toto</a>
      <p>Validates that deployed artifacts match the cryptographic attestations from the build process.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sigstore/rekor">Sigstore Rekor</a>
      <p>Maintain an immutable, tamper-evident log of signed infrastructure configuration files.</p>
    </td>
  </tr>
  </table>
    
