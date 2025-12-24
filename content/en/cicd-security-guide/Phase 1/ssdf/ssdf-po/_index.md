---
title: "1.1 Prepare the Organization (PO)"
linkTitle: "1.1 Prepare the Organization (PO)"
weight: 5
description: >
  1.1 Prepare the Organization (PO) Phase 1 Tasks
---

## 1.1 Prepare the Organization (PO) for Code and Prebuild Tasks

Organizations should ensure that their people, processes, and technology are prepared to perform secure software development at the organization level. Many organizations will find some PO practices to also be applicable to subsets of their software development, like individual development groups or projects.

<br>

### PO.2 Implement Roles and Responsibilities

Ensure that everyone inside and outside of the organization involved in the SDLC is prepared to perform their SDLC-related roles and responsibilities throughout the SDLC.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="2">
      <strong>PO.2.1</strong>:
      <p>Create new roles and alter responsibilities for existing roles as needed to encompass all parts of the SDLC. Periodically review and maintain the defined roles and responsibilities, updating them as needed.</p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">Designate a group of individuals as the code owners for each project, and review the list annually.</p>
    </td>
    <td>
      <p><a href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners/">GitHub CODEOWNERS</a></p>
      <p>GitHub CODEOWNERS is a repository feature that lets teams formally define who owns which parts of the codebase and who must review changes before they’re merged.</p>
    </td>
  </tr>
  <tr>
    <td>
      <p><a href="https://docs.gitlab.com/user/project/codeowners/">GitLab CODEOWNERS</a></p>
      <p>GitLab CODEOWNERS is a repository feature that lets teams formally define who owns which parts of the codebase and who must review changes before they’re merged.</p>
    </td>
  </tr>
</table>

<br>

### PO.3 Implement Supporting Toolchains

Use automation to reduce human effort and improve the accuracy, reproducibility, usability, and comprehensiveness of security practices throughout the SDLC, as well as provide a way to document and demonstrate the use of these practices. Toolchains and tools may be used at different levels of the organization, such as organization-wide or project-specific, and may address a particular part of the SDLC, like a build pipeline.

<br>
<table style="width:100%">
<tr>
  <th style="width: 30%">Tasks</th>
  <th style="width: 70%">Tools</th>
</tr>
<tr>
  <td rowspan="3">
    <strong>PO.3.1</strong>:
    <p>Specify which tools or tool types must or should be included in each toolchain to mitigate identified risks, as well as how the toolchain components are to be integrated with each other.</p>
    <div style="height: 16px"></div>
    <p style="font-style: italic">Use software factories and/or software templates to standardize the toolchain.</p>
  </td>
  <td>
    <p><a href="https://backstage.io/docs/features/software-templates/">Backstage Software Templates</a></p>
    <p>Backstage Software Templates are a scaffolding and standardization mechanism that help teams create new services, pipelines, and infrastructure in a consistent, compliant way. Backstage Software Templates let platform teams define golden paths for creating software components. A template captures best practices, required tooling, and organizational standards, then generates repositories, configs, and documentation automatically.</p>
  </td>
</tr>
<tr>
  <td>
    <p><a href="https://konflux-ci.dev/">Konflux-ci software factory for Tekton</a></p>
    <p>The Konflux software factory for Tekton is a secure, standardized CI build system that sits on top of Tekton to turn raw pipelines into a trusted software supply-chain factory. Konflux is Tekton with guardrails. Tekton provides the pipeline engine (tasks, pipelines, Kubernetes execution). Konflux adds the factory layer that enforces how those pipelines are allowed to run so the outputs can be trusted. Implements the <a href="https://in-toto.io/docs/what-is-in-toto/">in-toto</a> framework.</p>
  </td>
</tr>
<tr>
  <td>
    <p><a href="https://cdevents.dev/">CDF CDEvents</a></p>
    <p>CDEvents is a common specification for Continuous Delivery events, enabling interoperability in the complete software production ecosystem.</p>
  </td>
</tr>
<tr>
  <td rowspan="10">
    <strong>PO.3.2</strong>:
    <p>Follow recommended security practices to deploy, operate, and maintain tools and toolchains.</p>
    <div style="height: 16px"></div>
    <p style="font-style: italic">Use code-based configuration for toolchains (e.g., pipelines-as-code, toolchains-as-code).</p>
  </td>
  <td>
    <p><a href="https://www.jenkins.io/solutions/pipeline/">Jenkins Jenkinsfile</a></p>
    <p>A Jenkins Jenkinsfile is a declarative or scripted definition of a CI/CD pipeline, written as code and stored directly in a source repository. A Jenkinsfile describes how software is built, tested, scanned, packaged, and deployed. Because it lives alongside the application code, it enables pipeline-as-code—versioned, reviewable, and auditable automation.</p>
  </td>
</tr>
<tr>
  <td>
    <p><a href="https://docs.github.com/en/actions/about-github-actions/understanding-github-actions">GitHub Actions (.github/workflows)</a></p>
    <p>The GitHub Actions .github/workflows directory is the central location where CI/CD automation is defined as code for a GitHub repository. The directory contains YAML files that define workflows. Each workflow describes when automation should run and what jobs and steps are executed in response to repository events.</p>
  </td>
</tr>
<tr>
  <td>
    <p><a href="https://docs.gitlab.com/ci/pipelines/">GitLab CI/CD (.gitlab-ci.yml)</a></p>
    <p>The GitLab CI/CD .gitlab-ci.yml file is the single, authoritative pipeline definition that tells GitLab how to build, test, secure, and deploy an application. .gitlab-ci.yml is a YAML-based, pipeline-as-code configuration file stored at the root of a repository. It defines what jobs run, in what order, and under which conditions whenever code changes occur.</p>
  </td>
</tr>
<tr>
  <td>
    <p><a href="https://github.com/armory/dinghy/">Spinnaker Dinghy</a></p>
    <p>Spinnaker Dinghy is a configuration-as-code service that lets teams define and manage Spinnaker deployment pipelines using Git, instead of clicking through the UI. Dinghy allows Spinnaker pipelines to be written as JSON or YAML files and stored in a source repository. When changes are committed, Dinghy automatically syncs those pipeline definitions into Spinnaker, keeping deployments consistent and versioned.</p>
  </td>
</tr>
<tr>
  <td>
    <p><a href="https://argo-cd.readthedocs.io/en/stable/user-guide/ci_automation/">Argo CD</a></p>
    <p>Argo CD is a GitOps-based continuous delivery tool for Kubernetes that automatically deploys and keeps applications in sync with what’s declared in Git. Argo CD treats Git as the single source of truth for Kubernetes applications. Instead of pushing deployments from a CI pipeline, Argo CD pulls desired state from Git and continuously reconciles running clusters to match it.</p>
  </td>
</tr>
<tr>
  <td>
    <p><a href="https://pipelinesascode.com/">Tekton Pipelines-as-Code</a></p>
    <p>Tekton Pipelines-as-Code is a Git-driven way to define and run Tekton CI/CD pipelines directly from pull requests—treating pipelines as first-class code artifacts.</p>
  </td>
</tr>
<tr>
  <td>
    <p><a href="https://opentofu.org/">OpenTofu</a></p>
    <p>OpenTofu is an open-source Infrastructure as Code (IaC) tool used to define, provision, and manage cloud and on-prem infrastructure using declarative configuration files.</p>
  </td>
</tr>
<tr>
  <td>
    <p><a href="https://konflux-ci.dev/docs/building/hermetic-builds/">Konflux-ci</a></p>
    <p>Konflux is an open-source, cloud-native CI platform designed to produce trusted, reproducible, and verifiable software artifacts for modern software supply chains. It prioritizes build integrity, provenance, and repeatability, making it well-suited for regulated, enterprise, and critical-infrastructure environments.</p>
    <p><strong>Python:</strong>
      <a href="https://packaging.python.org/en/latest/specifications/pylock-toml/#pylock-toml-spec">
        pylock.toml
      </a> (preferred, newest standard)
    </p>
    <ul>
      <li>
        <a href="https://docs.astral.sh/uv/pip/compile/">uv</a> — uses pylock.toml
      </li>
      <li>
        <a href="https://github.com/conda/conda-lock/">conda-lock</a> — reproducible, less standard
      </li>
      <li>
        <a href="https://pip.pypa.io/en/stable/cli/pip_freeze/">pip freeze</a> — not fully reproducible
      </li>
    </ul>
    <p><strong>JavaScript:</strong></p>
    <ul>
      <li>
        <a href="https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json">
          package-lock.json
        </a> — use with
        <a href="https://docs.npmjs.com/cli/v9/commands/npm-ci">npm ci</a>
      </li>
      <li>
        <a href="https://classic.yarnpkg.com/lang/en/docs/cli/install/">yarn.lock</a>
      </li>
    </ul>
    <p><strong>Java / Kotlin / Groovy:</strong>
      <a href="https://maven.apache.org/guides/mini/guide-reproducible-builds.html">Maven</a>,
      <a href="https://docs.gradle.org/current/userguide/working_with_files.html#sec:reproducible_archives">Gradle</a>
    </p>
    <p><strong>C# / .NET:</strong>
      <a href="https://learn.microsoft.com/en-us/nuget/consume-packages/package-references-in-project-files#locking-dependencies">
        NuGet lock files
      </a>,
      <a href="https://www.nuget.org/packages/DotNet.ReproducibleBuilds/">DotNet.ReproducibleBuilds</a>
    </p>
    <p><strong>C++:</strong> <a href="https://bazel.build/external/overview">Bazel</a></p>
    <p><strong>Rust:</strong> <a href="https://crates.io/">Cargo</a></p>
    <p><strong>Golang:</strong> <a href="https://go.dev/blog/rebuild">Go reproducible builds</a></p>
    </td>
</tr>
<tr>
  <td>
    <p><a href="https://getcomposer.org/">PHP Composer</a></p><p>Composer is the standard dependency manager for PHP, used to declare, install, and manage third-party libraries required by a PHP application. Composer lets developers define which PHP packages their project depends on and automatically resolves, downloads, and installs the correct versions. It ensures that every environment—developer laptops, CI systems, and production—uses the same dependency set.</p>
  </td>
</tr>
<tr>
<td>
  <p><a href="https://slsa.dev/">SLSA Framework</a></p><p>The SLSA Framework (Supply-chain Levels for Software Artifacts) is a security framework that defines how to build software in a way that is verifiable, tamper-resistant, and trustworthy.</p>
</td>
</tr>
<tr>
<td rowspan="7">
  <strong>PO.3.3</strong>:
  <p>Configure tools to generate artifacts of their support of secure software development practices as defined by the organization.</p>
  <div style="height: 16px"></div>
  <p style="font-style: italic">Use existing tooling (e.g., workflow tracking, issue tracking, value stream mapping) to create an audit trail of the secure development-related actions that are performed for continuous improvement purposes. Record security check approvals, rejections, and exception requests as part of the workflow and tracking system.</p>
</td>
<td>
  <p><a href="https://docs.github.com/en/issues/tracking-your-work-with-issues/">GitHub Issues</a></p><p>GitHub Issues is a built-in tracking system used to manage work, bugs, feature requests, and discussions directly within a GitHub repository.</p>
</td>
</tr>
<tr>
<td>
  <p><a href="https://docs.gitlab.com/topics/plan_and_track/">GitLab work tracking</a></p><p>GitLab Work Tracking is GitLab’s integrated system for planning, tracking, and managing work—from ideas and requirements to code, security fixes, and delivery. </p>
</td>
</tr>
<tr>
<td>
  <p><a href="https://www.bugzilla.org/">Bugzilla</a></p><p>Bugzilla is an open-source bug tracking and issue management system used to report, track, and manage software defects and enhancement requests throughout the development lifecycle.</p>
</td>
</tr>
<tr>
<td>
  <p><a href="https://www.redmine.org/">Redmine</a></p><p>Redmine is an open-source project management and issue-tracking tool used by software teams to plan work, track bugs and tasks, and manage projects over time.</p>
</td>
</tr>
<tr>
<td>
  <p><a href="https://mantisbt.org/">Mantis Bug Tracker</a></p><p>Mantis Bug Tracker (often called MantisBT) is an open-source, web-based bug and issue tracking system designed to be simple, fast, and lightweight.</p>
</td>
</tr>
<tr>
<td>
  <p><a href="https://trac.edgewall.org/">Trac</a></p><p>Trac is an open-source, web-based project management and issue-tracking system that tightly integrates tickets, a wiki, and source-code browsing. It’s known for being lightweight, text-centric, and developer-friendly.</p>
</td>
</tr>
<tr>
<td>
  <p><a href="https://in-toto.io/docs/what-is-in-toto/">in-toto framework</a></p><p>in-toto is an open-source framework for securing the software supply chain by cryptographically recording and verifying every step of how software is built, tested, and released.</p>
</td>
</tr>
</table>
<br>

### PO.4 Define and Use Criteria for Software Security Checks

Help ensure that the software resulting from the SDLC meets the organization’s expectations by defining and using criteria for checking the software’s security during development.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="2">
      <strong>PO.4.1:</strong>
      <p>Define criteria for software security checks and track throughout the SDLC.</p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">Add software security criteria to existing checks (e.g., the Definition of Done in agile SDLC methodologies).</p>
    </td>
    <td>
      <p><a href="https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository">GitHub Issue Templates</a></p><p>GitHub Issue Templates are predefined forms and guidelines that appear when someone opens a new issue in a repository. They help teams collect consistent, high-quality information for bugs, feature requests, security issues, or questions.</p>
    </td>
  </tr>
  <tr>
    <td>
      <p><a href="https://docs.gitlab.com/user/project/description_templates/">GitLab Description Templates</a></p><p>GitLab Description Templates are predefined Markdown templates that automatically populate the description field when someone creates a GitLab Issue, Merge Request (MR), or Epics.</p>
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
      <p><strong>GitHub</strong></p>
      <ul>
        <li><a href="https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization">Audit Logs</a></li>
      </ul>
    </td>
  </tr>

  <tr>
    <td>
      <p><strong>GitLab</strong></p>
      <p><a href="https://docs.gitlab.com/user/compliance/audit_events/">Audit Logs</a></p>
    </td>
  </tr>

  <tr>
    <td rowspan="2">
      <strong>PO.4.3:</strong>
      <p>Implement processes, mechanisms, etc. to gather and safeguard the necessary information in support of the criteria.</p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">Only allow authorized personnel to access the gathered information, and prevent any alteration or deletion of the information. Carefully manage the list of repository owners and organization owners who have the ability to view audit logs, delete organizations, and delete code repositories, and review the list annually.</p>
    </td>
    <td>
      <p><strong>GitHub</strong></p>
      <ul>
        <li><a href="https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization/">Roles in an Organization</a></li>
        <li><a href="https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization">GitHub Repository Roles</a></li>
      </ul>
    </td>
  </tr>

  <tr>
    <td>
      <p><strong>GitLab</strong></p>
      <ul>
        <li><a href="https://docs.gitlab.com/user/permissions/">Roles and Permissions</a></li>
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
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="2">
      <strong>PO.5.1:</strong>
      <p>Separate and protect each environment involved in software development.</p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">Require multifactor authentication, SSH keys, signed commits, and code change approvals for code repositories at the organization level.</p>
    </td>
    <td>
      <p><strong>GitHub Organization Settings</strong></p>
      <ul>
        <li><a href="https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization">Requiring multifactor authentication</a></li>
        <li><a href="https://docs.github.com/en/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization/">Requiring signed commits</a></li>
        <li><a href="https://docs.github.com/en/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization/">Requiring code change approvals and protecting the main branch</a></li>
      </ul>
    </td>
  </tr>

  <tr>
    <td>
      <p><strong>GitLab</strong></p>
      <ul>
        <li><a href="https://docs.gitlab.com/security/two_factor_authentication/">Requiring multifactor authentication</a></li>
        <li><a href="https://docs.gitlab.com/user/project/repository/push_rules/">Requiring signed commits via push rules</a></li>
        <li><a href="https://docs.gitlab.com/user/project/repository/branches/protected/">Requiring code change approvals by protecting the main branch</a></li>
      </ul>
    </td>
  </tr>
</table>

<br>

> Note: _Securely configure code repository and CI/CD servers_ - this is a complex topic, beyond the scope of this document. _Securely configure development endpoints (i.e., developer laptops)_ - this is a complex topic, beyond the scope of this document.
