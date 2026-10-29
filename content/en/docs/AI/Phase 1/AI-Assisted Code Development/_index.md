---
title: "AI-Assisted Code Development"
linkTitle: "AI-Assisted Code Development"
description: "Securing AI-generated code through secure development practices, automated security scanning, dependency validation, and human review."
weight: 100
type: docs
---

## AI-Assisted Code Development - Code and Prebuild

Securing AI-Generated Code During Software Development

Artificial intelligence is increasingly used to generate application code, recommend dependencies, create configuration files, and automate software development tasks. While AI-assisted development can accelerate delivery, generated code may introduce security vulnerabilities, insecure coding patterns, outdated dependencies, exposed credentials, or licensing concerns.

During Code and Prebuild, organizations should apply established secure development practices to all AI-generated code and changes. AI coding assistants and autonomous development agents should operate within defined security boundaries, and their output should be subject to the same security requirements as human-written code.

This activity focuses on identifying and preventing security vulnerabilities before AI-generated changes enter trusted source code repositories or proceed through the CI/CD build pipeline.

The following activities map NIST Secure Software Development Framework (SSDF), the AI SSDF Profile (NIST SP 800-218A), and OWASP security guidance to actionable CI/CD practices and suggested open-source tools. The tools are illustrative and are not mandated by these frameworks.

### AI-Assisted Code Development

**Objective:** Ensure AI-generated code is reviewed, tested, and validated for security vulnerabilities, unsafe dependencies, exposed secrets, and licensing risks before being incorporated into the software delivery pipeline.

The [NIST Secure Software Development Framework (SSDF)](https://csrc.nist.gov/pubs/sp/800/218/final) establishes secure coding, code review, vulnerability analysis, and software verification practices that apply to both human-written and AI-generated software.

[NIST SP 800-218A, the AI SSDF Profile](https://csrc.nist.gov/pubs/sp/800/218/a/final), extends these practices to address additional security considerations associated with AI development.

AI-generated code should not be treated as inherently secure or trusted simply because it was produced by an automated system. Development teams remain responsible for verifying that generated code meets their security requirements.

For DevOps teams, AI-generated changes should be incorporated into existing source code management, peer review, static analysis, dependency scanning, and vulnerability management workflows. Automated security checks should identify potential weaknesses before code is merged, while policies should prevent AI agents from bypassing required reviews or security gates.

Particular attention should be given to generated dependencies, insecure API usage, authentication and authorization logic, secrets handling, and changes to security-sensitive configurations.

AI-assisted development should accelerate coding activities without weakening established secure software development controls.

#### AI Security Requirements and Open-Source Tooling

| Framework Reference | Security Activity | CI/CD Implementation | Suggested Open-Source Tools |
|---|---|---|---|
| NIST SSDF PW.5 | Secure coding practices | Apply secure coding standards to AI-generated code and identify insecure coding patterns before changes are accepted. | [Semgrep](https://github.com/semgrep/semgrep), [Bandit](https://github.com/PyCQA/bandit) |
| NIST SSDF PW.7 | Code review and analysis | Require peer review and automated security analysis of AI-generated code before merging changes into protected branches. | [Semgrep](https://github.com/semgrep/semgrep), [SonarQube Community Build](https://www.sonarsource.com/open-source-editions/sonarqube-community-edition/) |
| NIST SSDF PW.8 | Security testing | Execute automated security tests and validate generated functionality against defined security requirements. | [OWASP ZAP](https://www.zaproxy.org/), [pytest](https://pytest.org/) |
| NIST SSDF PW.4, PW.7 | Third-party dependency review | Identify newly introduced dependencies, scan for known vulnerabilities, and review unapproved or outdated packages. | [OSV-Scanner](https://github.com/google/osv-scanner), [Trivy](https://github.com/aquasecurity/trivy) |
| NIST SSDF PW.5, PW.7 | Secrets detection | Detect hardcoded credentials, API keys, tokens, and sensitive information introduced by AI-generated code or configurations. | [Gitleaks](https://github.com/gitleaks/gitleaks), [detect-secrets](https://github.com/Yelp/detect-secrets) |
| NIST SSDF PO.1, PO.4 | Development security policies | Establish policies requiring security review, approval, and validation of AI-generated changes before integration. | [Open Policy Agent](https://www.openpolicyagent.org/), [Conftest](https://www.conftest.dev/) |
| NIST SSDF PS.3 | Software component inventory | Track dependencies introduced by AI-generated code and maintain component records for vulnerability analysis. | [Syft](https://github.com/anchore/syft), [CycloneDX](https://cyclonedx.org/) |
| NIST SSDF PW.4 | Licensing and dependency due diligence | Review third-party packages and license obligations associated with generated code and newly introduced dependencies. | [ScanCode Toolkit](https://github.com/aboutcode-org/scancode-toolkit), [ORT](https://github.com/oss-review-toolkit/ort) |
| NIST SP 800-218A; NIST SSDF PO.3, PW.7 | AI development accountability | Define responsibility for AI-generated changes and ensure automated contributions remain subject to established repository review and authorization policies. | [Open Policy Agent](https://www.openpolicyagent.org/), [Semgrep](https://github.com/semgrep/semgrep) |

*Framework references identify relevant security practices. Tool selection and implementation depend on the organization's development environment and security requirements.*

#### Expected Security Evidence

- Documented secure coding requirements applicable to AI-generated code.
- Records of code reviews and approvals for AI-generated changes.
- Static application security testing results.
- Dependency vulnerability scanning reports.
- Secrets detection results and remediation records.
- Automated test execution and validation results.
- Software component inventories identifying introduced dependencies.
- License analysis reports for applicable third-party software.
- Records of security policy enforcement and rejected changes.
- Traceable pull requests linking generated changes to review and validation outcomes.

These artifacts provide evidence that AI-assisted development follows established secure software development practices and that generated code is evaluated before entering the build and deployment process.

Security findings identified during Phase 1 should be resolved or appropriately documented before the affected changes proceed to Phase 2: Build and Deploy.

## Additional Resources

- [NIST Secure Software Development Framework (SP 800-218)](https://csrc.nist.gov/pubs/sp/800/218/final)
- [NIST AI SSDF Profile (SP 800-218A)](https://csrc.nist.gov/pubs/sp/800/218/a/final)
- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/)
- [OpenSSF Best Practices](https://bestpractices.coreinfrastructure.org/)
- [OpenSSF Security Tooling](https://openssf.org/)
