---
title: "Protect the Organization (PO)"
linkTitle: "Protect the Organization (PO)"
weight: 5
description: >
 Protect the Organization (PO) CI/CD Steps
---


## Protect the Organization (PO)

Organizations should ensure that their people,
processes, and technology are prepared to perform secure software development at the
organization level. Many organizations will find some PO practices to also be applicable
to subsets of their software development, like individual development groups or projects.

<br>

### PO.2 Implement Roles and Responsibilities

Ensure that everyone inside and outside of the organization involved in the SDLC is prepared to perform their SDLC-related roles and responsibilities throughout the SDLC.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 50%">Tasks</th>
    <th style="width: 50%">Tools</th>
  </tr>
  <tr>
    <td rowspan="2">
      <strong>PO.2.1</strong>:
      <p>Create new roles and alter responsibilities for existing roles as needed to encompass all parts of the SDLC.Periodically review and maintain the defined roles and responsibilities, updating them as needed.</p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">Designate a group of individuals as the code owners for each project, and review the list annually.</p>
    </td>
    <td>
        <a href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners/">Github CODEOWNERS</a>
    </td>
  </tr>
  <tr>
    <td>
        <a href="https://docs.gitlab.com/user/project/codeowners/">Gitlab CODEOWNERS</a>
    </td>
  </tr>
</table>

<br>

### PO.3 Implement Supporting Toolchains

Use automation to reduce human effort and improve the accuracy, reproducibility, usability, and comprehensiveness of security practices throughout the SDLC, as well as provide a way to document and demonstrate the use of these practices. Toolchains and tools may be used at different levels of the organization, such as organization-wide or project-specific, and may address a particular part of the SDLC, like a build pipeline.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 50%">Tasks</th>
    <th style="width: 50%">Tools</th>
  </tr>
  <tr>
    <td rowspan="3">
      <strong>PO.3.1</strong>: 
      <p>Specify which tools or tool types must or should be included in each toolchain to mitigate identified risks, as well as how the toolchain components are to be integrated with each other.</p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">Use software factories and/or software templates to standardize the toolchain.</p>
    </td>
    <td>
      <a href="https://backstage.io/docs/features/software-templates/">Backstage Software Templates
      </a>
      <p>Can scaffold projects with pipelines-as-code and toolchains-as-code</p>
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
      <a href="https:/https://cdevents.dev/">CDF CDEvents</a>
      <p>CDEvents is a common specification for Continuous Delivery events, enabling interoperability in the complete software production ecosystem.</p>
    </td>
  </tr>
  <tr>
    <td rowspan="7">
      <strong>PO.3.2</strong>: 
      <p>Follow recommended security practices to deploy, operate, and maintain tools and toolchains.</p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">Use code-based configuration for toolchains (e.g., pipelines-as-code, toolchains-as-code).</p>
    </td>
    <td>
      <a href="https://www.jenkins.io/solutions/pipeline/">Jenkins Jenkinsfile</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.github.com/en/actions/about-github-actions/understanding-github-actions">Github Actions .github/workflows directory</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/ci/pipelines/">Gitlab CI/CD .gitlab-ci.yml file</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/armory/dinghy/">Spinnaker Dinghy</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://argo-cd.readthedocs.io/en/stable/user-guide/ci_automation/">Argo CD</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://pipelinesascode.com/">Tekton pipelines-as-code</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://opentofu.org/">OpenTofu</a>
    </td>
  </tr>
  <tr>
    <td rowspan="10">
      <strong>PO.3.2</strong>:
      <p>Follow recommended security practices to deploy, operate, and maintain tools and toolchains.</p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">Implement the technologies and processes needed for reproducible builds.</p>
    </td>
    <td>
      <a href="https://konflux-ci.dev/docs/building/hermetic-builds/">Hermetic builds with Konflux-ci</a>
    </td>
  </tr>
  <tr>
    <td>
      Python
        <ul>
          <li>
            <a href="https://packaging.python.org/en/latest/specifications/pylock-toml/#pylock-toml-spec/">
              pylock.toml
            </a>
            <p>(preferred, newest standard)</p>
          </li>
          <li>
            <a href="https://docs.astral.sh/uv/pip/compile/">
              uv
            </a>
            <p>(uses pylock.toml)</p>
          </li>
          <li>
            <a href="https://github.com/conda/conda-lock/">
                conda
            </a>
            <p>(reproducible but less standard than pylock-toml)</p>
          </li>
          <li>
            <a href="https://pip.pypa.io/en/stable/cli/pip_freeze/">pip freeze to requirements.txt</a>
            <p>(not fully reproducible)</p>
          </li>
        </ul>
    </td>
  </tr>
  <tr>
    <td>
      Javascript
      <ul>
        <li>
            <a href="https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json">
                npm package-lock.json
            </a>
            <p>created in the coding phase, combined with <a href="https://docs.npmjs.com/cli/v9/commands/npm-ci">npm ci</a> in the build phase</p>
            </li>
            <li>
            <a href="https://classic.yarnpkg.com/lang/en/docs/cli/install/">yarn yarn.lock</a>
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      Java/Kotlin/Groovy
      <ul>
        <li>
          <a href="https://maven.apache.org/guides/mini/guide-reproducible-builds.html">Maven</a>
        </li>
        <li>
          <a href="https://docs.gradle.org/current/userguide/working_with_files.html#sec:reproducible_archives">Gradle</a>
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      C#/.NET
      <ul>
        <li>
          <a href="https://learn.microsoft.com/en-us/nuget/consume-packages/package-references-in-project-files#locking-dependencies">NuGet lockfiles</a>
        </li>
        <li>
          <a href="https://www.nuget.org/packages/DotNet.ReproducibleBuilds/">DotNet.ReproducibleBuilds</a>
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      C++
      <ul>
        <li>
          <a href="https://bazel.build/external/overview">Bazel</a>
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      Rust
      <ul>
        <li>
          <a href="https://crates.io/">Cargo</a>
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      Golang
      <ul>
        <li>
          <a href="https://go.dev/blog/rebuild">Golang</a>
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://getcomposer.org/">PHP Composer</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://slsa.dev/">SLSA Framework</a>
    </td>
  </tr>
  <tr>
    <td rowspan="7">
      <strong>PO.3.3</strong>:
      <p>Configure tools to generate artifacts of their support of secure  software development practices as defined by the organization.</p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">Use existing tooling (e.g., workflow tracking, issue tracking, value stream mapping) to create an audit trail of the secure development-related actions that are performed for continuous improvement purposes. Record security check approvals, rejections, and exception requests as part of the workflow and tracking system.</p>
    </td>
    <td>
      <a href="https://docs.github.com/en/issues/tracking-your-work-with-issues/">Github Issues</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/topics/plan_and_track/">Gitlab work tracking</a>
    </td>
  </tr>
  <tr>
    <td>
    <a href="https://www.bugzilla.org/">Bugzilla</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.redmine.org/">Redmine</a>
    </td>
  </tr>
  <tr>
    <td>
    <a href="https://mantisbt.org/">Mantis Bug Tracker</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trac.edgewall.org/">Trac</a>
    </td>
  </tr>
  <tr>
    <td>
    <a href="https://in-toto.io/docs/what-is-in-toto/">In-toto framework</a>
    </td>
  </tr>
</table>

<br>

### PO.4 Define and Use Criteria for Software Security Checks

Help ensure that the software resulting from the SDLC meets the organization’s expectations by defining and using criteria for checking the software’s security during development.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 50%">Tasks</th>
    <th style="width: 50%">Tools</th>
  </tr>
  <tr>
    <td rowspan="2">
    <strong>PO.4.1:</strong> 
    <p>Define criteria for software security checks and track throughout the SDLC.</p>
    <div style="height: 16px"></div>
    <p style="font-style: italic">Add software security criteria to existing checks (e.g., the Definition of Done in agile SDLC methodologies).</p>
    </td>
    <td>
    <a href="https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository">Github Issue Templates</a>
    </td>
  </tr>
  <tr>
    <td>
    <a href="https://docs.gitlab.com/user/project/description_templates/">Gitlab Description Templates</a>
    </td>
  </tr>
  <tr>
    <td rowspan="2">
      <strong>PO.4.2:</strong> 
      <p>Implement processes, mechanisms, etc. to gather and safeguard the necessary information in support of the criteria.</p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">Collect audit logs for code repositories.</p>
    </td>
    <td>
      GitHub
      <ul>
        <li>
          <a href="https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization">Audit Logs</a>
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      GitLab
      <a href="https://docs.gitlab.com/user/compliance/audit_events/">Audit Logs</a>
    </td>
  </tr>
  <tr>
    <td rowspan="2">
      <strong>PO.4.2:</strong> 
      <p>Implement processes, mechanisms, etc. to gather and safeguard the necessary information in support of the criteria.</p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">Only allow authorized personnel to access the gathered information, and prevent any alteration or deletion of the information. Carefully manage the list of repository owners and organization owners who have the ability to view audit logs, delete organizations, and delete code repositories, and review the list annually.</p>
    </td>
    <td>
      GitHub
      <ul>
        <li>
          <a href="https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization/">Roles in an Organization</a>
        </li>
        <li>
            <a href="https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization">Github Repository Roles</a>
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      GitHub
      <ul>
        <li>
          <a href="https://docs.gitlab.com/user/permissions/">Roles and Permissions</a>
        </li>
      </ul>
    </td>
  </tr>
</table>

<br>

### PO.5 Implement and Maintain Secure Environments for Software Development 

Ensure that all components of the environments for software development are strongly protected from internal and external threats to prevent compromises of the environments or the software being developed or maintained within them. Examples of environments for software development include development, build, test, and distribution environments. 

<br>

<table style="width:100%">
  <tr>
    <th style="width: 50%">Tasks</th>
    <th style="width: 50%">Tools</th>
  </tr>
  <tr>
    <td rowspan="2">
      <strong>PO.5.1:</strong> 
      <p>Separate and protect each environment involved in software development.</p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">Require multifactor authentication, SSH keys, signed commits, and code change approvals for code repositories at the organization level.</p>
    </td>
    <td>
      GitHub Organization Settings
      <ul>
        <li>
          <a href="https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization">requiring multifactor authentication</a>
        </li>
        <li>
          <a href="https://docs.github.com/en/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization/">requiring signed commits</a>
        </li>
        <li>
          <a href="https://docs.github.com/en/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization/">requiring code change approvals and protecting the main branch</a>
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      GitLab
      <ul>
        <li>
          <a href="https://docs.gitlab.com/security/two_factor_authentication/">requiring multifactor authentication</a>
        </li>
        <li>
          <a href="https://docs.gitlab.com/user/project/repository/push_rules/">requiring signed commits via push rules</a>
        </li>
        <li>
          <a href="https://docs.gitlab.com/user/project/repository/branches/protected/">requiring code change approvals by protecting the main branch</a>
        </li>
      </ul>
    </td>
  </tr>
</table>

<br>

> Note: _Securely configure code repository and CI/CD servers_ -
This is a complex topic, beyond the scope of this document. _Securely configure development endpoints (i.e. developer laptops)_ -
This is a complex topic, beyond the scope of this document.
