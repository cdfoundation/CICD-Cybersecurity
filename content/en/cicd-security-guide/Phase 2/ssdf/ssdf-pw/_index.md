---
title: "Produce Well-Secured Software (PW)"
linkTitle: "Produce Well-Secured Software (PW)"
weight: 7
description: >
 Produce Well-Secured Software (PW) CI/CD Steps
---

### Produce Well-Secured Software (PW)

### PW.6: Configure the Compilation, Interpreter, and Build Processes to Improve Executable Security

Decrease the number of security vulnerabilities in the software and reduce costs by eliminating vulnerabilities before testing occurs.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 50%">Tasks</th>
    <th style="width: 50%">Tools</th>
  </tr>
  <tr>
    <td rowspan="18">
      <strong>PW.6.1:</strong>
      <p>
        Use compiler, interpreter, and build tools that offer features to improve executable security.
      </p>
    </td>
    <td>
      <a href="https://nixos.org/">Nix</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://guix.gnu.org/">Gnix</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://bazel.build/">Bazel</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://reproducible-builds.org/">Reproducible Builds</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sigstore.dev/">Sigstore</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://notaryproject.dev">Notary</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://in-toto.io/">in-toto</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.blog/changelog/2024-06-25-artifact-attestations-is-generally-available/">GitHub Artifact Attestations</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://theupdateframework.io/">The Update Framework (TUF)</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/microsoft/CCF">Microsoft CCF (Confidential Consortium Framework)</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.amd.com/en/developer/sev.html">AMD SEV</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.intel.com/content/www/us/en/developer/tools/trust-domain-extensions/overview.html">Intel TDX</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/confidential-containers/confidential-containers/">Confidential Containers</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openssl.org/">OpenSSL</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gnupg.org/">GnuPG (GPG)</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.bouncycastle.org/">Bouncy Castle</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://keylime.dev/">Keylime</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://attest.org/">Ethereum Attestation Service (EAS)</a>
    </td>
  </tr>
  <tr>
    <td>
      <strong>PW.6.2:</strong>
      <p>
        Determine which compiler, interpreter, and build tool features should be used and how each should be configured, then implement and use the approved configurations.
      </p>
    </td>
    <td> 
    </td>
  </tr>
</table>

<br>

### PW.8: Test Executable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements

Help identify vulnerabilities so that they can be corrected before the software is released in order to prevent exploitation. Using automated methods lowers the effort and resources needed to detect vulnerabilities and improves traceability and repeatability. Executable code includes binaries, directly executed bytecode and source code, and any other form of code that an organization deems executable.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 50%">Tasks</th>
    <th style="width: 50%">Tools</th>
  </tr>
  <tr>
    <td>
      <strong>PW.8.1:</strong>
      <p>
        Determine whether executable code testing should be performed to find vulnerabilities not identified by previous reviews, analysis, or testing and, if so, which types of testing should be used.
      </p>
    </td>
    <td>
    </td>
  </tr>
  <tr>
    <td rowspan="8">
      <strong>PW.8.2:</strong>
      <p>
        Scope the testing, design the tests, perform the testing, and document the results, including recording and triaging all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.
      </p>
    </td>
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
</table>

<br>

### PW.9: Configure Software to Have Secure Settings by Default

Help improve the security of the software at the time of installation to reduce the likelihood of the software being deployed with weak security settings, putting it at greater risk of compromise.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 50%">Tasks</th>
    <th style="width: 50%">Tools</th>
  </tr>
  <tr>
    <td rowspan="3">
      <strong>PW.9.1:</strong>
      <p>
        Define a secure baseline by determining how to configure each setting that has an effect on security or a security-related setting so that the default settings are secure and do not weaken the security functions provided by the platform, network infrastructure, or services.
      </p>
    </td>
    <td>
      <a href="https://kyverno.io">Kyverno</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openpolicyagent.org/">OPA (Open Policy Agent)</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://spiffe.io/">SPIFFE/SPIRE</a>
    </td>
  </tr>
  <tr>
    <td>
      <strong>PW.9.2:</strong>
      <p>
        Implement the default settings (or groups of default settings, if applicable), and document each setting for software administrators.
      </p>
    </td>
    <td> 
    </td>
  </tr>
</table>

<br>
