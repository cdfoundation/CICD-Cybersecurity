---
title: "Protect the Organization (PO)"
linkTitle: "Protect the Organization (PO)"
weight: 5
description: >
 Protect the Organization (PO) CI/CD Steps
---


### Protect the Organization (PO)
Organizations should ensure that their people,
processes, and technology are prepared to perform secure software development at the
organization level. Many organizations will find some PO practices to also be applicable
to subsets of their software development, like individual development groups or projects.

**PO.2 Implement Roles and Responsibilities**
Ensure that everyone inside and outside of the
organization involved in the SDLC is prepared to
perform their SDLC-related roles and
responsibilities throughout the SDLC.

<br>

PO.2.1: Create new roles and alter responsibilities for
existing roles as needed to encompass all parts of the
SDLC. Periodically review and maintain the defined
roles and responsibilities, updating them as needed.

_Designate a group of individuals as the code owners for each project, and review the list annually._

<u>Open-Source Tools to Achieve:</u>

- [Github CODEOWNERS](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
- [Gitlab CODEOWNERS](https://docs.gitlab.com/user/project/codeowners/)

**PO.3 Implement Supporting Toolchains**

Use automation to reduce human effort and improve the accuracy, reproducibility, usability, and comprehensiveness of security practices throughout the SDLC, as well as provide a way to document and demonstrate the use of these practices. Toolchains and tools may be used at different levels of the organization, such as organization-wide or project-specific, and may address a particular part of the SDLC, like a build pipeline.

<br>

<u>Open-Source Tools to Achieve:</u>

_Workflow Framework_

- [In-toto framework](https://in-toto.io/docs/what-is-in-toto/)

<br>

PO.3.1: Specify which tools or tool types must or
should be included in each toolchain to mitigate
identified risks, as well as how the toolchain
components are to be integrated with each other.

<br>

_Use software factories and/or software templates to standardize the toolchain._

<u>Open-Source Tools to Achieve:</u>

- [Backstage Software Templates](https://backstage.io/docs/features/software-templates/) can scaffold projects with pipelines-as-code and toolchains-as-code
- [Konflux-ci software factory for Tekton](https://konflux-ci.dev/) implements the [In-toto framework](https://in-toto.io/docs/what-is-in-toto/) using pipelines-as-code

<br>

PO.3.2: Follow recommended security practices to
deploy, operate, and maintain tools and toolchains.

<br>

_Use code-based configuration for toolchains (e.g., pipelines-as-code, toolchains-as-code)._

<u>Open-Source Tools to Achieve:</u>

- [Jenkins Jenkinsfile](https://www.jenkins.io/solutions/pipeline/)
- [Github Actions .github/workflows directory](https://docs.github.com/en/actions/about-github-actions/understanding-github-actions)
- [Gitlab CI/CD .gitlab-ci.yml file](https://docs.gitlab.com/ci/pipelines/)
- [CircleCI .circleci/config.yml](https://circleci.com/docs/pipelines/)
- [Spinnaker Dinghy](https://github.com/armory/dinghy)
- [Argo CD](https://argo-cd.readthedocs.io/en/stable/user-guide/ci_automation/)
- [Tekton pipelines-as-code](https://pipelinesascode.com/)


<br>

_Implement the technologies and processes needed for reproducible builds._

<u>Open-Source Tools to Achieve:</u>

- [Hermetic builds with Konflux-ci](https://konflux-ci.dev/docs/building/hermetic-builds/)
- Python 
  - [pylock.toml](https://packaging.python.org/en/latest/specifications/pylock-toml/#pylock-toml-spec) (preferred, newest standard)
  - [uv](https://docs.astral.sh/uv/pip/compile/) (uses pylock.toml)
  - [conda](https://github.com/conda/conda-lock) (reproducible but less standard than pylock-toml)
  - [pip freeze to requirements.txt](https://pip.pypa.io/en/stable/cli/pip_freeze/) (not fully reproducible)
- Javascript
  - [npm package-lock.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json) created in the coding phase, combined with [npm ci](https://docs.npmjs.com/cli/v9/commands/npm-ci) in the build phase
  - [yarn yarn.lock](https://classic.yarnpkg.com/lang/en/docs/cli/install/)
- Java
  - [Maven](https://maven.apache.org/guides/mini/guide-reproducible-builds.html)
  - [Gradle](https://docs.gradle.org/current/userguide/working_with_files.html#sec:reproducible_archives)
- C# / .NET
  - [NuGet lockfiles](https://learn.microsoft.com/en-us/nuget/consume-packages/package-references-in-project-files#locking-dependencies)
  - [DotNet.ReproducibleBuilds](https://www.nuget.org/packages/DotNet.ReproducibleBuilds/)
- C++
  - [Bazel](https://bazel.build/external/overview)
- [Golang](https://go.dev/blog/rebuild)

<br>

PO.3.3: Configure tools to generate artifacts of their
support of secure software development practices as
defined by the organization.

<br>

_Use existing tooling (e.g., workflow tracking, issue tracking, value stream mapping) to create an audit trail of the secure development-related actions that are performed for continuous improvement purposes._
_Record security check approvals, rejections, and exception requests as part of the workflow and tracking system._

<u>Open-Source Tools to Achieve:</u>

- [Github Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues)
- [Gitlab work tracking](https://docs.gitlab.com/topics/plan_and_track/)

<br>

**PO.4 Define and Use Criteria for Software Security Checks**

Help ensure that the software resulting from the SDLC meets the organization’s 
expectations by defining and using criteria for checking the software’s security
during development.

<br>

PO.4.1: Define criteria for software security checks
and track throughout the SDLC.

<br>

_Add software security criteria to existing checks (e.g., the Definition of Done in agile SDLC methodologies). Include a checklist for security checks in issue templates as a reminder during code reviews._

<u>Open-Source Tools to Achieve:</u>

- [Github Issue Templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)
- [Gitlab Description Templates](https://docs.gitlab.com/user/project/description_templates/)

<br>


PO.4.2: Implement processes, mechanisms, etc. to gather and safeguard the necessary information in support of the criteria.


<br>

_Collect audit logs for code respositories._

<u>Open-Source Tools to Achieve:</u>

- Github
  - [Audit logs](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)
- Gitlab
  - [Audit logs](https://docs.gitlab.com/user/compliance/audit_events/)

<br>

_Only allow authorized personnel to access the gathered information, and prevent any alteration or deletion of the information. Carefully manage the list of repository owners and organization owners who have the ability to view audit logs, delete organizations, and delete code repositories, and review the list annually._

<u>Open-Source Tools to Achieve:</u>

- Github
  - [Roles in an Organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)
  - [Github Repository Roles](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)
- Gitlab
  - [Roles and Permissions](https://docs.gitlab.com/user/permissions/)

<br>

**PO.5 Implement and Maintain Secure Environments for Software Development **

Ensure that all components of the environments for software development are
strongly protected from internal and external threats to prevent compromises of the
environments or the software being developed or maintained within them. Examples of
environments for software development include development, build, test, and distribution
environments.

<br>

PO.5.1: Separate and protect each environment involved in software development.

<br>

_Require multi-factor authentication, SSH keys, signed commits, and code change approvals for code repositories at the organization level._

<u>Open-Source Tools to Achieve:</u>

- Github Organization Settings
  - [requiring multi-factor authentication](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)
  - [requiring signed commits](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization)
  - [requiring code change approvals and protecting the main branch](https://docs.github.com/en/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)
- Gitlab - TODO is it possible to enforce this at the organization level or only at the repo level?
  - [requiring multi-factor authentication](https://docs.gitlab.com/security/two_factor_authentication/)
  - [requiring signed commits via push rules](https://docs.gitlab.com/user/project/repository/push_rules/)
  - [requiring code change approvals by protecting the main branch](https://docs.gitlab.com/user/project/repository/branches/protected/)

<br>

_Securely configure code repository and CI/CD servers_
This is a complex topic, beyond the scope of this document.

<br>

_Securely configure development endpoints (i.e. developer laptops)_
This is a complex topic, beyond the scope of this document.

<br>