---
title: "Protect the Software (PS)"
linkTitle: "Protect the Software (PS)"
weight: 6
description: >
 Protect the Software (PS) CI/CD Steps
---

## Protect the Software (PS)

Organizations should protect all components of their software from tampering and unauthorized access.

<br>

### PS.1: Protect All Forms of Code from Unauthorized Access and Tampering.

Help prevent unauthorized changes to code, both inadvertent and intentional, which could circumvent or negate the intended security characteristics of the software.
For code that is not intended to be publicly accessible, this helps prevent theft of the software and may make it more difficult or time-consuming for attackers to find vulnerabilities in the software.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 50%">Tasks</th>
    <th style="width: 50%">Tools</th>
  </tr>
  <tr>
    <td rowspan="5">
      <strong>PS.1.1:</strong>
      <p>
        Store all forms of code – including source code, executable code, and configuration-as-code –  based on the principle of least privilege so that only authorized personnel, tools, services, etc. have access.
      </p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">
        Store all source code and configuration-as-code in a code repository, and restrict access to it based on the nature of the code. For example, open source code intended for public access may need its integrity and availability protected; other code may also need its confidentiality protected.
      </p>
    </td>
    <td>
      <a href="https://github.com/">GitHub</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gitlab.com/">GitLab</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://bitbucket.org/">Bitbucket</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://sourceforge.net/">SourceForge</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://subversion.apache.org/">Subversion</a>
    </td>
  </tr>
  <tr>
    <td rowspan="9">
      <strong>PS.1.1:</strong>
      <p>
        Store all forms of code – including source code, executable code, and configuration-as-code –  based on the principle of least privilege so that only authorized personnel, tools, services, etc. have access.
      </p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">
        Use version control features of the repository to track all changes made to the code with accountability to the individual account.
      </p>
    </td>
    <td>
      <a href="https://git-scm.com/">Git</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/">GitHub</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gitlab.com/">GitLab</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://bitbucket.org/">Bitbucket</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://sourceforge.net/">SourceForge</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://subversion.apache.org/">Subversion</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gitbucket.github.io/">GitBucket</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gitea.com/">Gitea</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gittuf.dev/">gittuf</a>
    </td>
  </tr>
  <tr>
    <td rowspan="7">
      <strong>PS.1.1:</strong>
      <p>
        Store all forms of code – including source code, executable code, and configuration-as-code –  based on the principle of least privilege so that only authorized personnel, tools, services, etc. have access.
      </p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">
        Use commit signing for code repositories to sign code.
      </p>
    </td>
    <td>
      <a href="https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits">GitHub Signing Commits</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification">About commit signature verification</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/user/project/repository/signed_commits/">GitLab Signed Commits</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://confluence.atlassian.com/bitbucketserver/sign-commits-and-tags-with-ssh-keys-1305971205.html/">Bitbucket Sign Commits and Tags with SSH keys</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://confluence.atlassian.com/bitbucketserver/sign-commits-and-tags-with-x-509-certificates-1305971206.html/">Bitbucket Sign Commits and Tags with X.509 certificates</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://confluence.atlassian.com/bitbucketserver/using-gpg-keys-913477014.html/">Bitbucket Using GPG Keys</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sigstore.dev/">Sigstore</a>
    </td>
  </tr>
  <tr>
    <td rowspan="6">
      <strong>PS.1.1:</strong>
      <p>
        Store all forms of code – including source code, executable code, and configuration-as-code –  based on the principle of least privilege so that only authorized personnel, tools, services, etc. have access.
      </p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">
        Have the code owner review and approve all changes made to the code by others.
      </p>
    </td>
    <td>
      <a href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners/">Github CODEOWNERS</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/features/code-review">GitHub Code Review</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/user/project/codeowners/">Gitlab CODEOWNERS</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/development/code_review/">Gitlab Code Review Guidelines</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://support.atlassian.com/bitbucket-cloud/docs/set-up-and-use-code-owners/">Bitbucket Set Up and Use Code Owners</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.atlassian.com/software/bitbucket/features/code-review/">Bitbucket Code Review</a>
    </td>
  </tr>
  <tr>
    <td rowspan="1">
      <strong>PS.1.1:</strong>
      <p>
        Store all forms of code – including source code, executable code, and configuration-as-code –  based on the principle of least privilege so that only authorized personnel, tools, services, etc. have access.
      </p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">
        Use cryptography (e.g., cryptographic hashes) to help protect file integrity
      </p>
    </td>
    <td>
      <a href="https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/about-commits/">GitHub About Commits</a>
    </td>
  </tr>
</table>

<br>

### PS.2 Provide a Mechanism for Verifying Software Release Integrity:

Help software acquirers ensure that the software they acquire is legitimate and has not been tampered with. 

<br>

<table style="width:100%">
  <tr>
    <th style="width: 50%">Tasks</th>
    <th style="width: 50%">Tools</th>
  </tr>
  <tr>
    <td rowspan="3">
      <strong>PS.2.1:</strong>
      <p>
        Make software integrity verification information available to software acquirers. 
      </p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">
        Post cryptographic hashes for release files on a well-secured website.
      </p>
    </td>
    <td>
      <a href="https://infra.apache.org/release-signing.html/">Apache Infrastructure Signing Releases</a>
    </td>
  <tr>
    <td>
      <a href="https://www.openpgp.org/">OpenPGP</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.gnupg.org/">The GNU Privacy Guard</a>
    </td>
  </tr>
  <tr>
    <td rowspan="5">
      <strong>PS.2.1:</strong>
      <p>
        Make software integrity verification information available to software acquirers. 
      </p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">
        Use an established certificate authority for code signing so that consumers’ operating systems or other tools and services can confirm the validity of signatures before use. Periodically review the code signing processes, including certificate renewal, rotation, revocation, and protection.
      </p>
    </td>
    <td>
      <a href="https://letsencrypt.org/">Let's Encrypt</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.ejbca.org/">EJBCA Community</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.dogtagpki.org/">Dogtag Certificate System</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openxpki.org/">OpenXPKI</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://smallstep.com/product/team/devops/index.html/">Step-CA</a>
    </td>
  </tr>
</table>

<br>

### PS.3 Archive and Protect Each Software Release:

Preserve software releases in order to help identify, analyze, and eliminate vulnerabilities discovered in the software after release.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 50%">Tasks</th>
    <th style="width: 50%">Tools</th>
  </tr>

  <tr>
    <td rowspan="3">
      <strong>PS.3.1:</strong>
      <p>
        Securely archive the necessary files and supporting data (e.g., integrity verification information, provenance data) to be retained for each software release. 
      </p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">
        Store the release files, associated images, etc. in repositories following the organization’s established policy. Allow read-only access to them by necessary personnel and no access by anyone else.
      </p>
    </td>
    <td>
      <a href="https://docs.github.com/en/get-started/learning-about-github/access-permissions-on-github/">Access Permissions on GitHub</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/user/permissions/">GitLab Roles and Permissions</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://support.atlassian.com/bitbucket-cloud/docs/grant-repository-access-to-users-and-groups/">Bitbucket Grant Repository Access to Users and Groups</a>
    </td>
  </tr>
  <tr>
    <td rowspan="4">
      <strong>PS.3.1:</strong>
      <p>
        Securely archive the necessary files and supporting data (e.g., integrity verification information, provenance data) to be retained for each software release. 
      </p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">
        Store and protect release integrity verification information and provenance data, such as by keeping it in a separate location from the release files or by signing the data.
      </p>
    </td>
    <td>
      <a href="https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization/">GitHub Repository Roles for an Organization</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/user/permissions/">GitLab Roles and Permissions</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://support.atlassian.com/bitbucket-cloud/docs/grant-access-to-a-workspace/">Bitbucket Grant Access to a Workspace</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://ortelius.io/">Ortelius</a>
    </td>
  </tr>
  <tr>
    <td rowspan="4">
      <strong>PS.3.2:</strong>
      <p>
        Collect, safeguard, maintain, and share provenance data for all components of each software release (e.g., in a Software Bill of Materials (SBOM)).
      </p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">
        Make the provenance data available to software acquirers in accordance with the organization’s policies, preferably using standards-based formats.
      </p>
    </td>
    <td>
      <a href="https://github.com/aetheris-ai/aibom-generator/">AI SBOM Generator</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://cyclonedx.org/">CycloneDX</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/usnistgov/swid-tools/">Software Identification (SWID) Tagging Tools and Utilities</a>
  </tr>
  <tr>
    <td>
      <a href="https://spdx.dev/">SPDX</a>
    </td>
  </tr>
  <tr>
    <td rowspan="10">
      <strong>PS.3.2:</strong>
      <p>
        Collect, safeguard, maintain, and share provenance data for all components of each software release (e.g., in a Software Bill of Materials (SBOM)).
      </p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">
        Make the provenance data available to the organization’s operations and response teams to aid them in mitigating software vulnerabilities.
      </p>
    </td>
    <td>
      <a href="https://openssf.org/projects/bomctl/">bomctl</a>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
    </td></tr>
  <tr>
    <td>
      <a href="https://dependencytrack.org/">Dependency-Track</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://clairproject.org/">Clair</a>
    </td>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype/">Grype</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://ortelius.io/">Ortelius</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://openssf.org/projects/protobom/">Protobom</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/syft/">Syft</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/tern-tools/tern/">Tern</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/">Trivy</a>
    </td>
  </tr>
  <tr>
    <td rowspan="3">
      <strong>PS.3.2:</strong>
      <p>
        Collect, safeguard, maintain, and share provenance data for all components of each software release (e.g., in a Software Bill of Materials (SBOM)).
      </p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">
        Protect the integrity of provenance data, and provide a way for recipients to verify provenance data integrity.
      </p>
    </td>
    <td>
      <a href="https://github.com/google/aoss-verifier/">aoss-verifier</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://sigstore.dev/">Sigstore</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.tlsnotary.org/">TLSNotary Protocol</a>
    </td>
  </tr>
  <tr>
    <td rowspan="7">
      <strong>PS.3.2:</strong>
      <p>
        Collect, safeguard, maintain, and share provenance data for all components of each software release (e.g., in a Software Bill of Materials (SBOM)).
      </p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">
        Update the provenance data every time any of the software’s components are updated.
      </p>
    </td>
    <td>
      <a href="https://docs.github.com/en/actions/">GitHub Actions</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/ci/">GitLab CI/CD</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.atlassian.com/software/bitbucket/features/pipelines/">Bitbucket Pipelines</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://circleci.com/">CircleCI</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://travis-ci.org/">Travis CI</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.updatecli.io/">Updatecli</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.mend.io/renovate/">Renovate</a>
    </td>
  </tr>
</table>

<br>
