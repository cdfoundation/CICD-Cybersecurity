---
title: "Produce Well-Secured Software (PW)"
linkTitle: "Produce Well-Secured Software (PW)"
weight: 7
description: >
 Produce Well-Secured Software (PW) CI/CD Steps
---

## Produce Well-Secured Software (PW)
## Produce Well-Secured Software (PW)

### PW.1: Design Software to Meet Security Requirements and Mitigate Security Risks

Identify and evaluate the security requirements for the software; determine what security risks the software is likely to face during operation and how the software’s design and architecture should mitigate those risks; and justify any cases where risk-based analysis indicates that security requirements should be relaxed or waived. Addressing security requirements and risks during software design (secure by design) is key for improving software security and also helps improve development efficiency.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 50%">Tasks</th>
    <th style="width: 50%">Tools</th>
  </tr>
  <tr>
    <td rowspan="5">
      <strong>PW.1.1:</strong>
      <p>
        Use forms of risk modeling – such as threat modeling, attack modeling, or attack surface mapping – to help assess the security risk for the software.
      </p>
    </td>
    <td>
      <a href="https://owasp.org/www-project-threat-dragon/">OWASP Threat Dragon</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-amass/">OWASP Amass</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool">Microsoft Threat Modeling Tool</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://cairis.org/index.html">CAIRIS</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://threagile.io/">Threagile</a>
    </td>
  </tr>
  <tr>
    <td rowspan="4">
      <strong>PW.1.2:</strong>
      <p>
        Track and maintain the software’s security requirements, risks, and design decisions.
      </p>
    </td>
    <td>
      <a href="https://owasp.org/www-project-threat-dragon/">OWASP Threat Dragon</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://open-needs.org/">Open-Needs</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://rmtoo.florath.net/">rmtoo</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openrmf.io/">OpenRMF® OSS</a>
    </td>
  </tr>
  <tr>
    <td>
      <strong>PW.1.3:</strong>
      <p>
        Where appropriate, build in support for using standardized security features and services (e.g., enabling software to integrate with existing log management, identity management, access control, and vulnerability management systems) instead of creating proprietary implementations of security features and services.
      </p>
    </td>
    <td>
    </td>
  </tr>
</table>

<br>

### PW.2: Review the Software Design to Verify Compliance with Security Requirements and Risk Information

Help ensure that the software will meet the security requirements and satisfactorily address the identified risk information.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 50%">Tasks</th>
    <th style="width: 50%">Tools</th>
  </tr>
  <tr>
    <td rowspan="11">
      <strong>PW.2.1:</strong>
      <p>
        Have 1) a qualified person (or people) who were not involved with the design and/or 2) automated processes instantiated in the toolchain review the software design to confirm and enforce that it meets all of the security requirements and satisfactorily addresses the identified risk information.
      </p>
    </td>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/dependabot">Dependabot</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openrmf.io/">OpenRMF</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://eslint.org/">ESLint</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://bounty.github.com/targets/lgtm.html">LGTM</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/quay/clair">Clair</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/">Trivy</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.checkov.io/">Checkov</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://terrasolid.com/products/terrascan/">Terrascan</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.gerritcodereview.com/">Gerrit</a>
    </td>
  </tr>
</table>

<br>

### PW.4: Reuse Existing, Well-Secured Software When Feasible Instead of Duplicating Functionality

Lower the costs of software development, expedite software development, and decrease the likelihood of introducing additional security vulnerabilities into the software by reusing software modules and services that have already had their security posture checked. This is particularly important for software that implements security functionality, such as cryptographic modules and protocols.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 50%">Tasks</th>
    <th style="width: 50%">Tools</th>
  </tr>
  <tr>
    <td rowspan="14">
      <strong>PW.4.1:</strong>
      <p>
        Acquire and maintain well-secured software components (e.g., software libraries, modules, middleware, frameworks) from commercial, opensource, and other third-party developers for use by the organization’s software.
      </p>
    </td>
    <td>
      <a href="https://cyclonedx.org/">CycloneDX</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/opensbom-generator/spdx-sbom-generator">SPDX</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://artifacthub.io/">ArtifactHub</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://jfrog.com/community/download-artifactory-oss/">JFrog Artifactory OSS</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sonatype.com/products/nexus-community-edition-download">Sonartype Nexus OSS</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://goharbor.io/">Harbor</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits">GitHub Signing</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/ee/user/project/repository/signed_commits/">GitLab Signing</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://confluence.atlassian.com/bitbucketserver/using-gpg-keys-913477014.html">Bitbucket</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://codeql.github.com/">GitHub CodeQL</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.aquasec.com/products/trivy/">AquaSec Trivy</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/dependabot">Dependabot</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/jfrog/frogbot">FrogBot</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://openssf.org/projects/allstar/">Allstar</a>
    </td>
  </tr>
  <tr>
    <td rowspan="27">
      <strong>PW.4.2:</strong>
      <p>
        Create and maintain well-secured software components in-house following SDLC processes to meet common internal software development needs that cannot be better met by third-party software components.
      </p>
    </td>
    <td>
      <a href="https://owasp.org/www-project-samm/">OWASP SAMM</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-application-security-verification-standard/">OWASP ASVS</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-defectdojo/">OWASP Defectdojo</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://git-scm.com/">Git</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://about.gitea.com/">Gitea</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://about.gitlab.com/">GitLab (Community Edition)</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://code.visualstudio.com/">Visual Studio Code</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://eclipseide.org/">Eclipse</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.jetbrains.com/idea/">IntelliJ IDEA (Community Edition)</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://junit.org/">JUnit</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://nunit.org/">NUnit</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.pytest.org/en/stable/index.html">Pytest</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.selenium.dev/">Selenium</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://playwright.dev/">Playwright</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">OWASP ZAP</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://testng.org/">TestNG</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://cucumber.io/">Cucumber</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Aqua Trivy</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/quay/clair">Clair</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/PyCQA/bandit">Bandit for Python</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://semgrep.dev/">Semgrep</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://brakemanscanner.org/">Brakeman</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gitleaks.io/">Gitleaks</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trufflesecurity.com/">TruffleHog</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sigstore.dev/">Sigstore</a>
    </td>
  </tr>
  <tr>
    <td>
      <strong>PW.4.3:</strong>
      <p>
        Moved to PW.1.3
      </p>
    </td>
    <td> 
    </td>
  </tr>
  <tr>
    <td rowspan="6">
      <strong>PW.4.4:</strong>
      <p>
        Verify that acquired commercial, open-source, and all other third-party software components comply with the requirements, as defined by the organization, throughout their life cycles.
      </p>
    </td>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://oss-review-toolkit.github.io/ort/">OSS Review Toolkit (ORT)</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://fossa.com/">FOSSA (Community Edition)</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://scancode-toolkit.readthedocs.io/en/stable/">ScanCode Toolkit</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/tern-tools/tern">Tern</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://openpolicyagent.org/">Open Policy Agent (OPA)</a>
    </td>
  </tr>
  <tr>
    <td>
      <strong>PW.4.5:</strong>
      <p>
        Moved to PW.4.1 and PW.4.4
      </p>
    </td>
    <td> 
    </td>
  </tr>
</table>

### PW.5: Create Source Code by Adhering to Secure Coding Practices

Decrease the number of security vulnerabilities in the software, and reduce costs by minimizing vulnerabilities introduced during source code creation that meet or exceed organization-defined vulnerability severity criteria.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 50%">Tasks</th>
    <th style="width: 50%">Tools</th>
  </tr>
  <tr>
    <td rowspan="9">
      <strong>PW.5.1:</strong>
      <p>
        Follow all secure coding practices that are appropriate to the development languages and environment to meet the organization’s requirements.
      </p>
    </td>
    <td>
      <a href="https://semgrep.dev/">Semgrep</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/PyCQA/bandit">Bandit for Python</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://findbugs.sourceforge.net/">FindBugs</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://spotbugs.readthedocs.io/">SpotBugs</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sonarsource.com/open-source-editions/sonarqube-community-edition/">SonarQube</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">OWASP ZAP</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/Arachni/arachni">Arachni</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://snyk.io/">Snyk</a>
    </td>
  </tr>
  <tr>
    <td>
      <strong>PW.5.2:</strong>
      <p>
        Moved to PW.5.1
      </p>
    </td>
    <td> 
    </td>
  </tr>
</table>

<br>

### PW.7: Review and/or Analyze Human-Readable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements

Help identify vulnerabilities so that they can be corrected before the software is released to prevent exploitation. Using automated methods lowers the effort and resources needed to detect vulnerabilities. Human-readable code includes source code, scripts, and any other form of code that an organization deems humanreadable.
Help identify vulnerabilities so that they can be corrected before the software is released to prevent exploitation. Using automated methods lowers the effort and resources needed to detect vulnerabilities. Human-readable code includes source code, scripts, and any other form of code that an organization deems humanreadable.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 50%">Tasks</th>
    <th style="width: 50%">Tools</th>
  </tr>
  <tr>
    <td rowspan="11">
      <strong>PW.7.1:</strong>
      <p>
        Determine whether code review (a person looks directly at the code to find issues) and/or code analysis (tools are used to find issues in code, either in a fully automated way or in conjunction with a person) should be used, as defined by the organization.
      </p>
    </td>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">OWASP ZAP</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sonarsource.com/open-source-editions/sonarqube-community-edition/">SonarQube</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://retirejs.github.io/">Retire.js</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://fossa.com/product/open-source-vulnerability-management">Fossa</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.veracode.com/">Veracode</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/semgrep/semgrep">Semgrep</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/PyCQA/bandit">Bandit for Python</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/Checkmarx/kics">Checkmarx KICS</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/danmar/cppcheck">Cppcheck for C++</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/find-sec-bugs/find-sec-bugs">FindSecBugs</a>
    </td>
  </tr>
  <tr>
    <td rowspan="6">
      <strong>PW.7.2:</strong>
      <p>
        Perform the code review and/or code analysis based on the organization’s secure coding standards, and record and triage all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.
      </p>
    </td>
    <td>
      <a href="https://www.sonarsource.com/open-source-editions/sonarqube-community-edition/">SonarQube (Community Edition)</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://semgrep.dev/">Semgrep</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://codeql.github.com/">GitHub CodeQL</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://pmd.github.io/">PMD</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://spotbugs.github.io/">SpotBugs</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://danger.systems/js/">Danger JC</a>
    </td>
  </tr>
</table>

<br>
