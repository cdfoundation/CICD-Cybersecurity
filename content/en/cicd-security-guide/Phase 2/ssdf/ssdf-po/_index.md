---
title: "2.1 Prepare the Organization (PO)"
linkTitle: "2.1 Prepare the Organization (PO)"
weight: 5
description: >
 2.1 Prepare the Organization (PO) for the Build and Deploy CI/CD Steps
---


### 2.1 Prepare the Organization (PO) Build and Deploy Tasks
Organizations should ensure that their people, processes, and technology are prepared to perform secure software development at the organization level. Many organizations will find some PO practices to also be applicable to subsets of their software development, like individual development groups or projects.

<br>

**PO.1**
<strong>Define Security Requirements for Software Development</strong>: Ensure that security requirements for software development are known at all times so that they can be taken into account throughout the SDLC and duplication of effort can be minimized because the requirements information can be collected once and shared. This includes requirements from internal sources (e.g., the organization’s policies, business objectives, and risk  management strategy) and external sources (e.g., applicable laws and regulations).

<br>

To satisfy SSDF PO.1 in a Build and Deploy context using open-source tools, the focus shifts from just defining to:

- Enforcing security policies on dependencies, code, and configurations.

- Verifying compliance with established security baselines before deployment.

- Ensuring artifacts meet DoD, NIST, or organizational security requirements.



<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
      <p>PO.1.1: Identify and document all security requirements for the organization’s software development infrastructures and processes, and maintain the requirements over time.</p><br>
      <p>PO.1.2 Identify and document all security requirements for organization-developed  software to meet, and maintain the requirements over time. </p>
    </td>
    </tr>
   <tr>
    <td>
      <a href="https://www.openpolicyagent.org/"> Open Policy Agent</a>
      <p>General-purpose policy engine using Rego to enforce policies across services, CI/CD, and infrastructure.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.conftest.dev/">Conftest</a>
      <p> Uses OPA’s Rego language to test Kubernetes manifests, Terraform, and Dockerfiles against predefined security requirements.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://www.chef.io/products/chef-inspec">InSpec</a>
      <p>Tests infrastructure and deployed applications against compliance frameworks (e.g., CIS Benchmarks, NIST 800-53).</p>
    </td>
  </tr>
     <tr>
    <td>
      <a href="https://kyverno.io/"> Kyverno</a>
      <p>Kubernetes-native policy engine to enforce secure configurations at deploy time.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.checkov.io/">Checkov</a>
      <p>Scans Infrastructure-as-Code (IaC) during build to ensure compliance with security requirements before deploy</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://aquasecurity.github.io/trivy/">Trivy</a>
      <p>Scans container images, IaC, and SBOMs for vulnerabilities and misconfigurations before deployment.</p>
    </td>
  </tr>
    </tr>
     <tr>
    <td>
      <a href="https://github.com/quay/clair">Clair</a>
      <p>Static analysis for container images to ensure they meet security requirements before push to registry.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Vulnerability scanning for container images and filesystems to validate artifacts against policy before deploy.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://sigstore.dev/">Sigstore Cosign</a>
      <p>Sign and verify container images and other build artifacts to ensure integrity and provenance.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://conforma.dev/">Conforma</a>
      <p>Securely verify supply chain artifacts and enforce policies about how they were built and tested. Built with Sigstore and Open Policy Agent, it can verify SLSA provenance compliance with extensible policies.</p>
    </td>
  </tr>
  </table>



**PO.2**

<strong>Implement Roles and Responsibilities: </strong> Ensure that everyone inside and outside of the organization involved in the SDLC is prepared to perform their SDLC-related roles and responsibilities throughout the SDLC. 

<br>

To satisfy SSDF PO.2 in a Build and Deploy context using open-source tools, the focus shifts to:

- Enforcing role-based access control (RBAC) to limit who can trigger builds, approve changes, and deploy.

- Providing audit logs and traceability of actions for accountability.

- Ensuring code changes and deployments are reviewed by authorized personnel.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50"
      <p>PO.2.1: Create new roles and alter responsibilities for  existing roles as needed to encompass all parts of the SDLC. Periodically review and maintain the defined roles and responsibilities, updating them as needed.</p><br>
      <p>PO.2.2: Provide role-based training for all personnel with responsibilities that contribute to secure development. Periodically review personnel proficiency and role-based training, and update the training as needed</p><br>
      <p>PO.2.3: Obtain upper management or authorizing official commitment to secure development, and convey that commitment to all with development related roles and responsibilities.</p>
    </td>
   </tr>
   <tr>
    <td>
      <a href="https://www.keycloak.org/">Keycloak</a>
      <p>Open-source identity and access management for enforcing RBAC in CI/CD pipelines and deployment tools.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://dexidp.io/">Dex</a>
      <p>Federated OpenID Connect provider to integrate developer identities into build and deploy systems for role-based access.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.vaultproject.io/">Vault by HashiCorp</a>
      <p>Securely manages and controls access to secrets based on defined roles during builds and deployments.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://argo-cd.readthedocs.io/">Argo CD</a>
      <p>GitOps deployment tool with RBAC to control who can sync, approve, or rollback deployments.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://plugins.jenkins.io/role-strategy/">Jenkins with Role Strategy Plugin</a>
      <p>Adds fine-grained RBAC to Jenkins pipelines, limiting build and deployment actions to authorized roles.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://tekton.dev/">Tekton Pipelines</a>
      <p>Kubernetes-native CI/CD with Kubernetes RBAC to control pipeline execution permissions.</p>
     </td>
  </tr> 
   <tr>
    <td>
      <a href="https://fluxcd.io/">Flux CD</a>
      <p>GitOps tool enforcing RBAC for deployment workflows and requiring approvals for changes.</p>
     </td>
  </tr>
  <tr>
     <td>
      <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">Kubernetes RBAC</a>
      <p>Built-in access control to restrict who can deploy, modify, or delete workloads.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://gitea.io/">Gitea</a>
      <p>Self-hosted Git service with user roles and repository permissions to enforce approval and review workflows.</p>
     </td>
  </tr>   
  <tr>
    <td>
      <a href="https://www.elastic.co/beats/auditbeat">Auditbeat</a>
      <p>Provides audit logging for build and deploy actions, helping track compliance with assigned responsibilities.</p>
     </td>
  </tr>     
 </table>


**PO.3**

<strong>Implement Supporting Toolchains</strong>: Use automation to reduce human effort and improve the accuracy, reproducibility, usability, and comprehensiveness of security practices throughout the SDLC, as well as provide a way to document and demonstrate the use of these
practices. Toolchains and tools may be used at different levels of the organization, such as organization-wide or project-specific, and may address a particular part of the SDLC, like a build pipeline.

<br>

To satisfy SSDF PO.3 in a Build and Deploy context using open-source tools, the focus shifts to:

- Ensuring build and deployment tools are configured securely and kept patched.

- Protecting against supply chain attacks targeting the CI/CD pipeline.

- Verifying the integrity of tools and artifacts before use.

- Controlling and monitoring access to toolchains.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50"
      <p>PO.3.1: Specify which tools or tool types must or should be included in each toolchain to mitigate identified risks, as well as how the toolchain components are to be integrated with each other.</p><br>
      <p>PO.3.2: Follow recommended security practices to deploy, operate, and maintain tools and toolchains.</p><br>
      <p>PO.3.3: Configure tools to generate artifacts6 of their support of secure software development practices as defined by the organization. </p>
    </td>
   </tr>
   <tr>
    <td>
      <a href="https://sigstore.dev/">Sigstore Cosign</a>
      <p>Signs and verifies build artifacts to prevent deploying tampered software.</p>
  </tr>
  <tr>
    <td>
      <a href="https://slsa.dev/">SLSA Framework + slsa-verifier</a>
      <p>Ensures build provenance and verifies the integrity of artifacts before deploy.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://gitleaks.io/">Gitleaks</a>
      <p>Scans repos and build pipelines for secrets before build execution.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://argo-cd.readthedocs.io/">Argo CD</a>
      <p>GitOps deployment tool with RBAC to control who can sync, approve, or rollback deployments.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://aquasecurity.github.io/trivy/">Trivy</a>
      <p>Scans CI/CD tool containers and dependencies for vulnerabilities.</p>
     </td>
  </tr>
  <tr>
   <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Generates SBOMs for build artifacts to track components used in the toolchain.</p>
     </td>
  </tr> 
  <tr>
    <td>
      <a href="https://konflux-ci.dev/docs/building/hermetic-builds/">Hermetic builds with Konflux-ci</a>
      <p>Build with pinned, pre-fetched dependencies in isolated environments to enable reproducible, verifiable builds.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://hermetoproject.github.io/hermeto/">Hermeto</a>
      <p>Pre-fetches dependencies for hermetic builds, generates SBOMs, and ensures reproducible, network-isolated container builds with verifiable checksums.</p>
     </td>
  </tr>
   <tr>
  <td>
     <a href="https://github.com/quay/clair">Clair</a>
      <p>Analyzes container images used in builds/deploys for vulnerabilities.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.vaultproject.io/">Vault by HashiCorp</a>
      <p>Protects secrets used by build/deploy tools, ensuring they’re not exposed in pipelines.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.defectdojo.org/">DefectDojo</a>
      <p>Centralizes and tracks security testing results for build and deploy toolchains.</p>
     </td>
  </tr>   
  <tr>
    <td>
      <a href="https://www.openpolicyagent.org/">Open Policy Agent (OPA)</a>
      <p>Enforce policy as code in CI/CD and deployment workflows using Rego to prevent unsafe actions.</p>
     </td>
  </tr> 
  <tr>
    <td>
      <a href="https://konflux-ci.dev/">Konflux-ci software factory for Tekton</a>
      <p>Implements the <a href="https://in-toto.io/docs/what-is-in-toto/">In-toto framework</a> using pipelines-as-code</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.elastic.co/beats/auditbeat">Auditbeat</a>
      <p>Monitors and logs CI/CD toolchain activity for integrity and compliance.</p>
     </td>
  </tr>
 </table>



**PO.4**
<strong>Define and Use Criteria for Software Security Checks:</strong> Help ensure that the software resulting from the SDLC meets the organization’s expectations by defining and using criteria for checking the software’s security during development.

<br>

To satisfy SSDF PO.4 in a Build and Deploy context using open-source tools, the focus shifts to:

- Applying consistent security testing and validation practices before release.

- Automating security checks in CI/CD pipelines.

- Using standardized processes for verifying, signing, and tracking artifacts.

- Integrating security gates so no insecure artifact is deployed.

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
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p>Automates open-source dependency scanning in builds to enforce consistent vulnerability detection.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://semgrep.dev/">Semgrep</a>
      <p>Static analysis integrated into builds to ensure consistent code security checks before deploy.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://bandit.readthedocs.io/">Bandit (for Python)</a>
      <p>Python security linting in build pipelines to maintain consistent language-specific checks.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://aquasecurity.github.io/trivy">Trivy</a>
      <p>Consistent vulnerability and IaC scanning before deployment.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Maintains consistent vulnerability scanning for all build artifacts.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://www.chef.io/products/chef-inspec">InSpec</a>
      <p>Automates compliance checks before deployment to ensure practices match organizational standards.</p>
    </td>
  </tr> 
 <tr>
    <td>
      <a href="https://sigstore.dev/">Sigstore Cosign</a>
      <p>Standardizes artifact signing and verification so only trusted builds are deployed.</p>
    </td>
  </tr>   
 <tr>
    <td>
      <a href="https://www.openpolicyagent.org/">Open Policy Agent (OPA)</a>
      <p>Enforces organization-wide deployment policies across all environments.</p>
    </td>
  </tr>   
 <tr>
    <td>
      <a href="https://www.defectdojo.org/">DefectDojo</a>
      <p>Centralizes and standardizes vulnerability tracking and remediation workflows across builds.</p>
    </td>
  </tr>         
 </table>
    


**PO.5**
<strong>Implement and Maintain Secure Environments for Software Development:</strong> Ensure that all components of the environments for software development are strongly protected from internal and external threats to prevent compromises of the
environments or the software being developed or maintained within them. Examples of environments for software development include development, build, test, and distribution environments.

<br>

To satisfy SSDF PO.5 in a Build and Deploy context using open-source tools, the focus shifts to:

- Protecting CI/CD infrastructure from internal and external threats.

- Hardening build servers, container registries, and deployment systems.

- Ensuring build and deploy environments are patched, monitored, and access-controlled.

- Preventing malicious code or tampering in the software supply chain.


<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="14"
      <p>PO.5.1: PO.5.1: Separate and protect each environment involved in software development.</p><br>
      <p>PO.5.2: Secure and harden development endpoints (i.e., endpoints for software designers, developers, testers, builders, etc.) to perform development-related tasks using a risk-based approach.</p><br>
    </td>
   </tr>
  <tr>
    <td>
      <a href="https://plugins.jenkins.io/configuration-as-code/">Jenkins Configuration as Code + Role Strategy Plugin</a>
      <p>Secures Jenkins build servers with codified configs and RBAC to limit access to critical build jobs.</p>
    </td>
  </tr>
    <tr>
    <td>
      <a href="https://tekton.dev/">Tekton Pipelines</a>
      <p>Kubernetes-native CI/CD framework with RBAC.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://argo-cd.readthedocs.io/">Argo CD</a>
      <p>GitOps deployment with RBAC and signed commit enforcement for production deploys.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://www.vaultproject.io/">Vault by HashiCorp</a>
      <p>Protects secrets in build and deploy environments, preventing leakage in pipelines.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://sigstore.dev/">Sigstore Cosign</a>
      <p>Signs build artifacts and verifies them before deployment to ensure no tampering occurred.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://in-toto.io/">In-toto</a>
      <p>Provides end-to-end software supply chain security, ensuring each step in build/deploy is signed and verified.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://www.chef.io/products/chef-inspec">InSpec</a>
      <p>Runs ongoing compliance scans against development and build servers; enforce CIS/NIST benchmarks.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://slsa.dev/">SLSA + slsa-verifier</a>
      <p>Verifies build provenance, ensuring artifacts come from a trusted, uncompromised build environment.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://aquasecurity.github.io/trivy/">Trivy</a>
      <p>Scans build/deploy infrastructure containers and images for vulnerabilities and misconfigurations.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://falco.org/">Falco</a>
      <p>Runtime security for build and deploy environments to detect malicious behavior or unauthorized activity.</p>
    </td>
  </tr> 
 <tr>
    <td>
      <a href="https://www.elastic.co/beats/auditbeat">Auditbeat</a>
      <p>Monitors build and deploy servers for file integrity changes, unauthorized access, and security events</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://kyverno.io/">Kyverno</a>
      <p>Enforces Kubernetes security policies in deployment environments (e.g., no privileged pods).</p>
    </td>
  </tr>           
  </table>
    


