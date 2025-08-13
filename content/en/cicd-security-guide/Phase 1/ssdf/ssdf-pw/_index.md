---
title: "Produce Well-Secured Software (PW)"
linkTitle: "Produce Well-Secured Software (PW)"
weight: 7
description: >
 Produce Well-Secured Software (PW) during the code and pre-build CI/CD Steps
---

## Produce Well-Secured Software (PW)

Organizations should produce well-secured
software with minimal security vulnerabilities in its releases.

<br>

**PW.1**

<strong>Design Software to Meet Security Requirements and Mitigate Security Risks: </strong>Identify and evaluate the security requirements for the software; determine what security risks the software is likely to face during operation and how the software’s design and architecture should mitigate those risks; and justify any cases where risk-based analysis indicates that security requirements should be relaxed or waived. Addressing security requirements and risks during software design (secure by design) is key for improving software security and also helps improve development efficiency.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
       <p>
        PW.1.1: Use forms of risk modeling – such as threat modeling, attack modeling, or attack surface mapping – to help assess the security risk for the software.</p> </br>
        <p>PW.1.2: Track and maintain the software’s security requirements, risks, and design decisions.</p></br>
        <P>PW.1.3: Where appropriate, build in support for using standardized security features and services (e.g., enabling software to integrate with existing log management, identity management, access control, and vulnerability management systems) instead of creating proprietary implementations of security features and services.</p>
    </td>
    <td>
      <a href="https://owasp.org/www-project-threat-dragon/">OWASP Threat Dragon</a>
      <p>Used before coding to document system components, data flows, and trust boundaries, then enumerate threats and requirements.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-amass/">OWASP Amass</a>
      <p>Helps define security requirements by identifying known external dependencies, APIs, or services that code will interact with, which informs threat modeling and secure design.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://cairis.org/index.html">CAIRIS</a>
      <p>Helps security teams and developers capture, manage, and trace security requirements from initial design through development, ensuring prebuild security alignment.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://threagile.io/">Threagile</a>
      <p>Enables “threat modeling as code” in prebuild, so security requirements can be automated and version-controlled alongside application code.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://open-needs.org/">Open-Needs</a>
      <p>Centralizes and structures security requirements so they are available for threat modeling, design reviews, and early validation.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://rmtoo.florath.net/">rmtoo</a>
      <p>Useful at the design and planning phase to maintain a structured list of security requirements and link them to test cases, threat models, or code modules, ensuring security is addressed before coding.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openrmf.io/">OpenRMF® OSS</a>
      <p>In prebuild, it can define the exact RMF-derived security requirements the codebase must meet, including control baselines, and link them to design elements or development tasks.</p>
    </td>
  </tr>
 </table>

<br>

**PW.2**

<strong>Review the Software Design to Verify Compliance with Security Requirements and Risk Information</strong>: Help ensure that the software will meet the security requirements and satisfactorily address the identified risk information.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
        <p>
        PW.2.1: Have 1) a qualified person (or people) who were not involved with the design and/or 2) automated processes instantiated in the toolchain review the software design to confirm and enforce that it meets all of the security requirements and satisfactorily addresses the identified risk information.
      </p>
    </td>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p>Scans project dependencies (direct and transitive) against the National Vulnerability Database (NVD) and other sources to detect known vulnerabilities (CVEs). Helps confirm if a component meets security requirements before inclusion.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/dependabot">Dependabot</a>
      <p>Automated dependency monitoring and update tool integrated with GitHub. Detects vulnerable dependencies and creates pull requests to update them, ensuring only secure versions are used.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openrmf.io/">OpenRMF</a>
      <p>Manages Risk Management Framework (RMF) compliance artifacts, including NIST 800-53 controls. Can be used to confirm that selected software components meet mandated security control baselines before approval.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://eslint.org/">ESLint</a>
      <p>JavaScript/TypeScript linter that enforces secure coding standards and flags insecure coding patterns before they reach production. Helps validate that custom code components align with secure coding requirements.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://bounty.github.com/targets/lgtm.html">LGTM</a>
      <p>Automated code analysis platform for identifying vulnerabilities and code quality issues in multiple languages. Confirms code components meet security policies before integration.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Open-source vulnerability scanner for container images and file systems. Ensures that containerized components meet vulnerability and compliance requirements before deployment.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/quay/clair">Clair</a>
      <p>Static vulnerability analysis for container images. Integrates into CI/CD to detect vulnerabilities in base images and layered components before they’re promoted.</p>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/">Trivy</a>
      <p>Comprehensive vulnerability scanner for container images, file systems, and Git repositories. Validates that selected components have no known vulnerabilities or misconfigurations.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.checkov.io/">Checkov</a>
      <p>Static analysis for Infrastructure as Code (IaC) to detect security misconfigurations (Terraform, Kubernetes, CloudFormation). Ensures that IaC components meet defined security baselines before use.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://terrasolid.com/products/terrascan/">Terrascan</a>
      <p>Policy-as-code scanner for Terraform, Kubernetes, Docker, and other IaC frameworks. Confirms that infrastructure components comply with security and compliance requirements.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.gerritcodereview.com/">Gerrit</a>
      <p>Web-based code review tool. While not a vulnerability scanner, it enforces human review and approval workflows that can include security requirement validation checklists before component approval.</p>
    </td>
  </tr>
</table>

<br>

**PW.4** 

Reuse Existing, Well-Secured Software When Feasible Instead of Duplicating FunctionalityLower the costs of software development, expedite software development, and decrease the likelihood of introducing additional security vulnerabilities into the software by reusing software modules and services that have already had their security posture checked. This is particularly important for software that implements security functionality, such as cryptographic modules and protocols.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
      <p>
        PW.4.1: Acquire and maintain well-secured software components (e.g., software libraries, modules, middleware, frameworks) from commercial, opensource, and other third-party developers for use by the organization’s software.<p><br>     
        <p>PW.4.2: Create and maintain well-secured software components in-house following SDLC processes to meet common internal software development needs that cannot be better met by third-party software components.</p><br>
        <p>PW.4.3: Moved to PW.4.4</p><br>   
        <p>PW.4.4: Verify that acquired commercial, open-source, and all other third-party software components comply with the requirements, as defined by the organization, throughout their life cycles.</p>
    </td>
   </tr>
   <tr> 
     <td>
      <a href="https://cyclonedx.org/">CycloneDX</a>
      <p>Generated during build/prebuild to validate component data against defined acceptance criteria.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/opensbom-generator/spdx-sbom-generator">SPDX</a>
      <p>Used to verify that all components meet licensing and security requirements before integration.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://artifacthub.io/">ArtifactHub</a>
      <p>Ensures only vetted, signed, and policy-compliant packages are sourced for builds.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://jfrog.com/community/download-artifactory-oss/">JFrog Artifactory OSS</a>
      <p>Acts as a controlled source for components meeting defined security standards.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sonatype.com/products/nexus-community-edition-download">Sonatype Nexus OSS</a>
      <p>Prevents use of components that fail security requirements or policy checks.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://goharbor.io/">Harbor</a>
      <p>Enforces rules that only scanned, signed, and policy-compliant images are stored and used in builds.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/ee/user/project/repository/signed_commits/">GitLab Signing</a>
      <p>nforces signed commit policy in merge requests before code is accepted.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://codeql.github.com/">GitHub CodeQL</a>
      <p>Runs in CI to check code against predefined security queries before integration.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.aquasec.com/products/trivy/">AquaSec Trivy</a>
      <p>Enforces security acceptance criteria (e.g., no critical CVEs) before promoting components.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/dependabot">Dependabot</a>
      <p>Creates PRs to meet policy-defined security versions.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://openssf.org/projects/allstar/">Allstar</a>
      <p>Ensures repositories meet defined configuration criteria before allowing merges.</p>
    </td>
  </tr>
  <tr>  
    <td>
      <a href="https://owasp.org/www-project-samm/">OWASP SAMM</a>
      <p>Provides a framework to define security assurance practices and maturity targets. Helps establish criteria for secure development processes, including prebuild checks.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-application-security-verification-standard/">OWASP ASVS</a>
      <p>Defines detailed security verification requirements for applications. Can be used as a benchmark for automated and manual prebuild security tests.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-defectdojo/">OWASP Defectdojo</a>
      <p>Vulnerability management and security test orchestration platform. Centralizes results from scanners and ensures issues are tracked against acceptance criteria.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p>Scans project dependencies for known vulnerabilities (CVEs) and fails builds if they don’t meet criteria.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://git-scm.com/">Git</a>
      <p>VCS that supports commit signing and hooks to enforce prebuild checks (linting, security scans).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://about.gitea.com/">Gitea</a>
      <p>Lightweight, self-hosted Git service with repository policy enforcement (e.g., signed commits, review requirements).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://about.gitlab.com/">GitLab (Community Edition)</a>
      <p>Git platform with CI/CD integration for running security checks before merging.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://code.visualstudio.com/">Visual Studio Code</a>
      <p>Supports extensions for linting, vulnerability scanning, and code signing enforcement pre-commit.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://eclipseide.org/">Eclipse</a>
      <p>Java IDE with plugins for static analysis, dependency scanning, and secure coding rule enforcement.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.jetbrains.com/idea/">IntelliJ IDEA (Community Edition)</a>
      <p> Java IDE with plugins for static analysis, secure coding, and SBOM generation.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://junit.org/">JUnit</a>
      <p>Java unit testing framework; can integrate with security test suites.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://nunit.org/">NUnit</a>
      <p>NET testing framework; supports integration with security validation tests.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.pytest.org/en/stable/index.html">Pytest</a>
      <p>Python testing framework; can run security rule-based tests as part of CI.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.selenium.dev/">Selenium</a>
      <p> Automated browser testing tool; can validate secure behavior (e.g., auth flows).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://playwright.dev/">Playwright</a>
      <p>End-to-end browser testing with support for security-focused scenarios.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">OWASP ZAP</a>
      <p>Dynamic Application Security Testing (DAST) tool for finding security issues in running apps during testing stages.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://testng.org/">TestNG</a>
      <p>Testing framework for Java; integrates with security automation.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://cucumber.io/">Cucumber</a>
      <p>BDD testing framework; can define security acceptance tests in plain language.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Aqua Trivy</a>
      <p>Scans containers, file systems, and repos for vulnerabilities and misconfigurations.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/quay/clair">Clair</a>
      <p>Static vulnerability scanning for container images before deployment.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Vulnerability scanner for containers and filesystems.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/PyCQA/bandit">Bandit for Python</a>
      <p>Python-specific static analyzer for common security issues.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://semgrep.dev/">Semgrep</a>
      <p>Multi-language static analysis using custom or predefined security rules.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://brakemanscanner.org/">Brakeman</a>
      <p>Rails-specific static analyzer for security vulnerabilities.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gitleaks.io/">Gitleaks</a>
      <p>Detects hardcoded secrets in Git repositories pre-commit or in CI.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trufflesecurity.com/">TruffleHog</a>
      <p>Detects secrets and sensitive information in code history and commits.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sigstore.dev/">Sigstore</a>
      <p>Open-source framework for signing software artifacts (commits, containers) using cryptographic proofs.</p>
    </td>
  </tr>
  <tr> 
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p> Scans project dependencies (direct and transitive) for known CVEs using NVD and other sources. Can enforce “no critical/high vulnerabilities” criteria before the build passes.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://oss-review-toolkit.github.io/ort/">OSS Review Toolkit (ORT)</a>
      <p>Ensures that selected components meet license and security criteria before merging into mainline.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://fossa.com/">FOSSA (Community Edition)</a>
      <p>Can block merges or builds that violate licensing rules or contain known vulnerabilities.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://scancode-toolkit.readthedocs.io/en/stable/">ScanCode Toolkit</a>
      <p>Ensures licensing criteria are met before components are accepted into the build.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/tern-tools/tern">Tern</a>
      <p>Provides component inventory to validate against predefined acceptance criteria.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://openpolicyagent.org/">Open Policy Agent (OPA)</a>
      <p>Enforces security, compliance, and configuration policies during CI/CD gates before release.</p>
    </td>
  </tr>
 </table>

**PW.5**
<strong>Create Source Code by Adhering to Secure Coding Practices:</strong>
Decrease the number of security vulnerabilities in the software, and reduce costs by minimizing vulnerabilities introduced during source code creation that meet or exceed organization-defined vulnerability severity criteria.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
      <strong>PW.5.1:</strong>
      <p>
        PW.5.1 Follow all secure coding practices that are appropriate to the development languages and environment to meet the organization’s requirements.
      </p>
    </td>
    <td>
      <a href="https://semgrep.dev/">Semgrep</a>
      <p>egrated into CI to scan changed code and block merges if rules fail; can also run locally for pre-commit checks.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/PyCQA/bandit">Bandit for Python</a>
      <p>Runs in prebuild to fail pipelines when high-severity issues are found in Python code.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://findbugs.sourceforge.net/">FindBugs</a>
      <p>Scans Java code before packaging to find vulnerabilities and bad coding practices.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://spotbugs.readthedocs.io/">SpotBugs</a>
      <p>Integrated into CI to detect Java vulnerabilities pre-release.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sonarsource.com/open-source-editions/sonarqube-community-edition/">SonarQube</a>
      <p>Runs in CI to flag security issues before merges; supports quality gates for enforcement.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">OWASP ZAP</a>
      <p>Can run in test environments before production release to catch runtime security issues.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/Arachni/arachni">Arachni</a>
      <p>Runs against staging/test instances before deployment to catch exploitable issues.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p>Blocks builds that include components with vulnerabilities exceeding severity thresholds.</p>
    </td>
  </tr>
</table>

<br>

**PW.6**
<strong>Configure the Compilation, Interpreter, and Build Processes to Improve Executable
Security: </strong> Decrease the number of security vulnerabilities in the software and reduce costs by eliminating vulnerabilities before testing occurs.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
       <p>PW.6.1: Use compiler, interpreter, and build tools that offer features to improve executable security</p><br>
       <p>PW.6.2: Determine which compiler, interpreter, and build tool features should be used and how each should be configured, then implement and use the approved configurations.</p>
    </td>
    </tr>
    <tr>
    <td>
      <a href="https://sigstore.dev">Sigstore Cosign</a>
      <p>Signs and verifies the integrity/authenticity of source code and pre-built dependencies before compiling.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gnupg.org">GnuPG (GPG)</a>
      <p>Verifies cryptographic signatures of source tarballs and dependencies before build.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://oss-review-toolkit.org">OSS Review Toolkit (ORT)</a>
      <p>Scans and audits dependencies for licensing and security issues before they are included in a build.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://mesonbuild.com/">Meson</a>
      <p>Integrated into CI to detect Java vulnerabilities pre-release.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/tern-tools/tern">Tern</a>
      <p>Analyzes container image layers to identify open-source components and licensing before using as a base for builds.</p>
    </td>
  </tr>
 <tr>
    <td>
      <a href="https://scancode-toolkit.readthedocs.io">ScanCode Toolkit</a>
      <p>Detects licenses, copyrights, and packages in source code before build to ensure compliance and security.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Scans source code and container base images for known vulnerabilities before they are included in builds.</p>
    </td>
  </tr> 
   <tr>
    <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Generates SBOMs from source code and dependencies before build to document and verify components.</p>
    </td>
  </tr>
  </table>


**PW.7** 

<strong>Review and/or Analyze Human-Readable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements:</strong> Help identify vulnerabilities so that they can be corrected before the software is released to prevent exploitation. Using automated methods lowers the effort and resources needed to detect vulnerabilities. Human-readable code includes source code, scripts, and any other form of code that an organization deems humanreadable.


<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
       <p>PW.7.1 Determine whether code review (a person looks directly at the code to find issues) and/or code analysis (tools are used to find issues in code, either in a fully automated way or in conjunction with a person) should be used, as defined by the organization.</p><br>
       <p>PW.7.2: Perform the code review and/or code analysis based on the organization’s secure coding standards, and record and triage all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.</p>
    </td>
   </tr>
   <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p>Scans project dependencies (e.g., Maven, npm, Python) against the NVD for known CVEs before build, enabling early remediation of vulnerable libraries.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">OWASP ZAP</a>
      <p>Primarily a dynamic application security testing (DAST) tool, but in a pre-build sense, it’s not generally used — can be run against local development builds for early runtime flaw detection. Limited PW.7 pre-build applicability.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sonarsource.com/open-source-editions/sonarqube-community-edition/">SonarQube</a>
      <p>Performs SAST and code quality checks for many languages, detecting vulnerabilities, bugs, and code smells before compilation or integration.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://retirejs.github.io/">Retire.js</a>
      <p>Scans JavaScript code and package manifests for known vulnerable libraries before packaging.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://fossa.com/product/open-source-vulnerability-management">Fossa Community Edition</a>
      <p>Performs dependency scanning for license and vulnerability issues before build. Commercial SaaS version is proprietary.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/semgrep/semgrep">Semgrep</a>
      <p>Lightweight, customizable SAST tool. Uses rules to detect security issues and anti-patterns in source code before build.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/PyCQA/bandit">Bandit for Python</a>
      <p>Scans Python source for common security issues before build (e.g., insecure function usage, hardcoded passwords).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kics.io">Checkmarx KICS</a>
      <p>Static analysis tool for IaC (Terraform, Kubernetes YAML, etc.) to find misconfigurations before deployment.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/danmar/cppcheck">Cppcheck for C++</a>
      <p>Static analysis for C/C++ source to catch undefined behavior, memory issues, and common security flaws before compilation.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/find-sec-bugs/find-sec-bugs">FindSecBugs</a>
      <p>A plugin for SpotBugs to detect Java-specific security vulnerabilities before build.</p>
    </td>
   <tr> 
    <td>
      <a href="https://codeql.github.com/">GitHub CodeQL</a>
      <p>Performs deep semantic code analysis using a query language to detect vulnerabilities before build. Excellent for automated SAST in CI pipelines.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://pmd.github.io/">PMD</a>
      <p>Scans Java, Apex, JavaScript, XML, and other code for bugs, unused code, and potential security issues before compilation.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://spotbugs.github.io/">SpotBugs</a>
      <p>Static analysis for Java bytecode; detects bug patterns and potential vulnerabilities pre-build (when run on compiled class files in CI before packaging).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://danger.systems/js/">Danger JC</a>
      <p>Automates pull request checks — enforces security/contribution guidelines, prevents insecure patterns from merging into code before build.</p>
    </td>
  </tr>
</table>

<br>


**PW.8** 

<strong>Test Executable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements: </strong> Help identify vulnerabilities so that they can be corrected before the software is released in order to prevent exploitation. Using automated methods lowers the effort and resources needed to detect vulnerabilities and improves traceability and repeatability. Executable code includes binaries, directly executed bytecode and source code, and any other form of code that an organization deems executable.


<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
       <p>PW.8.1: Determine whether executable code testing should be performed to find vulnerabilities not identified by previous reviews, analysis, or testing and, if so, which types of testing should be used.</p><br>
       <p>PW.8.2: Scope the testing, design the tests, perform the testing, and document the results, including recording and triaging all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.</p>
    </td>
   </tr>
   <tr>
    <td>
      <a href="https://semgrep.dev">Semgrep</a>
      <p>	SAST engine that scans source code against security rules before build, catching vulnerabilities early.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://bandit.readthedocs.io">Bandit (Python)</a>
      <p>Static analysis for Python code to find common security issues before packaging.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://find-sec-bugs.github.io">FindSecBugs</a>
      <p>Security plugin for SpotBugs to detect vulnerabilities in Java/Scala/Groovy code pre-build.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="http://cppcheck.sourceforge.net">Cppcheck</a>
      <p>Static analysis for C/C++ to detect security flaws before compilation artifacts are built.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://pmd.github.io">PMD</a>
      <p>Rule-based static analysis for Java, Apex, JavaScript, and XML for vulnerabilities and coding issues.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://spotbugs.github.io">SpotBugs</a>
      <p>General bug and vulnerability detection in Java code before build output.</p>
    </td>
  </tr>
 <tr>
    <td>
      <a href="https://codeql.github.com">GitHub CodeQL</a>
      <p>Semantic code analysis to find vulnerabilities before build.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p>SCA tool that identifies vulnerable dependencies in manifests before packaging.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://retirejs.github.io/retire.js/">Retire.js</a>
      <p>Scans JavaScript and Node.js dependencies for known vulnerabilities before release.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>SSCA tool for scanning source code dependencies and base images pre-build for CVEs.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Generates SBOMs from source code before build to verify component inventory.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kics.io">Checkmarx KICS</a>
      <p>Scans Infrastructure-as-Code files for misconfigurations before deployment.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://gitleaks.io">Gitleaks</a>
      <p>Searches code and git history for secrets before build.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trufflesecurity.com">TruffleHog</a>
      <p>Searches code and git history for secrets before build.</p>
    </td>
  </tr>
  </table>

  **PW.9** 

<strong>Configure Software to Have Secure Settings by Default:</strong> Help improve the security of the software at the time of installation to reduce the likelihood of the software being deployed with weak security settings, putting it at greater risk of compromise.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
       <p>PW.9.1: Define a secure baseline by determining how to configure each setting that has an effect on security or a security-related setting so that the default  settings are secure and do not weaken the security functions provided by the platform, network infrastructure, or services.</p><br>
       <p>PW.9.2: Implement the default settings (or groups of default settings, if  applicable), and document each setting for software administrators.</p>
    </td>
   </tr>
   <tr>
    <td>
      <a href="https://kics.io">KICS (Checkmarx)</a>
      <p>Finds misconfigurations and insecure defaults in IaC files before build.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openpolicyagent.org">Open Policy Agent (OPA)</a>
      <p>Policy-as-code engine to enforce secure configuration rules in pre-build pipelines.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://yamllint.readthedocs.io">Yamllint</a>
      <p>Validates YAML configuration files, ensuring structure correctness before further security rule checks.</p>
    </td>
  </tr>
  </table>