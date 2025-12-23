---
title: "2.2 Protect the Software (PS)"
linkTitle: "2.2 Protect the Software (PS)"
weight: 6
description: >
 2.2 Protect the Software (PS) for Build and Deploy CI/CD Steps
---


### 2.2 Protect the Software (PS) for Build and Deploy Tasks
Protect the Software (PS): Organizations should protect all components of their
software from tampering and unauthorized access.

<br>

**PS.1**

<strong>Protect All Forms of Code from Unauthorized Access and Tampering </strong>: Help prevent unauthorized changes to code, both inadvertent and intentional, which could circumvent or negate the intended security characteristics of the software. For code that is not intended to be publicly accessible, this helps prevent theft of the software and may make it more difficult or time-consuming for attackers to find vulnerabilities in the software.

<br>

To satisfy SSDF PS.1 in a build and deploy context using open-source tools, the focus shifts from just defining to:

- Secure the CI/CD pipeline itself – ensure only trusted, authenticated processes can produce build outputs.

- Protect source inputs and dependencies, lock versions, use checksums, and prevent injection of malicious code into the build process.

- Sign artifacts and record provenance, generate cryptographically verifiable metadata proving what was built, from which source, and by whom.

- Enforce reproducible builds so that any tampering results in a hash/signature mismatch.

- Restrict build system access and enforce role-based permissions, MFA, and least privilege for build servers



<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
      <p>PS.1.1: Store all forms of code including source code, executable code, and configuration-as-code based on the principle of least privilege so that only authorized personnel, tools, services, etc. have access.</p>
    </td>
    </tr>
    <tr>
    <td>
      <a href="https://docs.sigstore.dev/cosign/"> cosign Sigstore</a>
      </a>
      <p>Sign build outputs (binaries, containers, SBOMs) and create attestations; verify in CI before promotion.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://git-scm.com/">Git signed commits/tags</a>
      <p>Require signed commits/tags and reject unsigned in CI to prevent unauthorized code from entering builds.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sigstore.dev/">Sigstore Fulcio + Rekor</a>
      <p>Issue short-lived certs (Fulcio) and record signatures/attestations in a transparency log (Rekor) to detect/trace tampering.</p>
    </td>
  </tr>
    <tr>
    <td>
      <a href="https://slsa.dev/">SLSA provenance (generators + verifier)</a>
      <p>Emit and sign build provenance; verify who/what/where built the artifact before it can ship.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://in-toto.io//">In-toto</a>
      <p>Define a supply-chain layout and verify each step’s materials/products to ensure nothing was tampered across the pipeline.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/tektoncd/chains">Tekton Chains</a>
      <p>Automatically sign task results (images, files) in Tekton pipelines and store attestations (e.g., in Rekor).</p>
    </td>
  </tr>
 <tr>
      <td>
      <a href="https://github.com/notaryproject/notation">Notation (CNCF Notary v2)</a>
      <p>Sign OCI artifacts (images, Helm charts) during build for later verification in registries and clusters.</p>
    </td>
  </tr>
 <tr>
      <td>
      <a href="https://nixos.org/ ">Nix</a>
      <p>Lock inputs and make builds deterministic so unauthorized changes are detectable by hash/provenance mismatch.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://bazel.build/ ">Bazel</a>
      <p>Lock inputs and make builds deterministic so unauthorized changes are detectable by hash/provenance mismatch.</p>
    </td>
  </tr> 
 <tr>
      <td>
      <a href="https://grafeas.io/">Grafeas</a>
      <p>Persist signatures, SBOMs, and policy metadata to audit build integrity across services..</p>
    </td>
  </tr>
 <tr>
      <td>
      <a href="https://goharbor.io/">Harbor</a>
      <p>Enforce content trust, robot accounts, and policy on who can push/pull; require signed artifacts before release..</p>
    </td>
  </tr>
 <tr>
      <td>
      <a href="https://github.com/sigstore/policy-controller">Sigstore Policy Controller</a>
      <p>Admission controller that blocks unsigned/incorrectly signed images; enforces key/issuer/subject policies.</p>
    </td>
  </tr>
 <tr>
      <td>
      <a href="https://kyverno.io/">Kyverno </a>
      <p>Kubernetes policies that require image signatures, pin by digest, and forbid mutable tags in deployments.</p>
    </td>
  </tr>
 <tr>
      <td>
      <a href="https://github.com/open-policy-agent/gatekeeper">OPA Gatekeeper</a>
      <p>Gate deployments with custom policies (e.g., “only signed images from approved registries/namespaces”).</p>
    </td>
  </tr>
 <tr>
      <td>
      <a href="https://github.com/deislabs/ratify">Ratify</a>
      <p>Verifies OCI signatures/attestations (Cosign/Notation) at admission time and blocks anything that fails verification.</p>
    </td>
  </tr>
 <tr>
      <td>
      <a href="https://github.com/sse-secure-systems/connaisseur">Connaisseur</a>
      <p>Kubernetes admission controller dedicated to verifying container image signatures before scheduling.</p>
    </td>
  </tr>
 <tr>
      <td>
      <a href="https://docs.sigstore.dev/cosign/">Sigstore Cosign </a>
      <p>Verify signatures/attestations as a release gate in your CD pipeline prior to applying manifests.</p>
    </td>
  </tr>          
  </table>
    


**PS.2**

<strong>Provide a Mechanism for Verifying Software Release Integrity:</strong> Help software acquirers ensure that the software they acquire is legitimate and has not been tampered with. Make software integrity verification information available to software acquirers.

<br>


To satisfy SSDF PS.2 in a build and deploy context using open-source tools, the focus shifts to:

- Generate integrity artifacts for every release

- Bind artifacts to versioned source

- Publish verification materials

- Require integrity checks as a release gate

- Expose verification data to consumers

- Admission control based on integrity


<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="16">
      PS.2.1: Make software integrity verification information available to software acquirers.
    </td>
    </tr>
    <tr>
    <td>
      <a href="https://docs.sigstore.dev/cosign/"> cosign Sigstore</a>
      </a>
      <p>Sign binaries, container images, SBOMs, and attestations during build; supports keyless signing.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://git-scm.com/">Git signed commits/tags</a>
      <p>Sign release tags to cryptographically tie the source to the built artifact.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sigstore.dev/">Sigstore Fulcio + Rekor</a>
      <p>Fulcio issues ephemeral signing certs; Rekor logs all signatures in a tamper-evident transparency log for downstream verification.</p>
    </td>
  </tr>
    <tr>
    <td>
      <a href="https://slsa.dev/">SLSA provenance (generators + verifier)</a>
      <p>Automatically generate provenance metadata describing build origin, inputs, and process. Validates provenance files to ensure artifact integrity before distribution.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://in-toto.io/">In-toto</a>
      <p>Defines a verifiable software supply chain layout; creates link metadata proving each build step.</p>
    </td>
  </tr>
<tr>
    <td>
      <a href="https://grafeas.io/">Grafeas</a>
      <p>Stores metadata (signatures, checksums, SBOMs) so it can be queried for verification.</p>
    </td>
  </tr> 
  <tr>
      <td>
      <a href="https://www.gnu.org/software/coreutils/">GNU Coreutils / sha256sum</a>
      <p>Create and publish checksums for release artifacts so recipients can manually or automatically verify integrity.</p>
    </td>
  </tr>
 <tr>
      <td>
      <a href="https://goharbor.io/">Harbor</a>
      <p>Enforce content trust; ensure only signed images are stored and distributed with policy on who can push/pull; require signed artifacts before release.</p>
    </td>
  </tr>
 <tr>
      <td>
      <a href="https://github.com/sigstore/policy-controller">Sigstore Policy Controller</a>
      <p>Kubernetes admission controller enforcing signature/provenance policies before deployment. Admission controller that blocks unsigned/incorrectly signed images; enforces key/issuer/subject policies.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://kyverno.io/">Kyverno</a>
      <p>Kubernetes policies that require image signatures, pin by digest, and forbid mutable tags in deployments. Validates signatures and digests for container images before they are deployed.</p>
    </td>
  </tr> 
 <tr>
      <td>
      <a href="https://github.com/open-policy-agent/gatekeeper">OPA Gatekeeper</a>
      <p>	Custom admission control to enforce artifact integrity and trusted signer policies.</p>
    </td>
  </tr>
 <tr>
      <td>
      <a href="https://github.com/deislabs/ratify">Ratify</a>
      <p>Pluggable verification framework for OCI registries/images; works with Cosign, Notation, in-toto.</p>
    </td>
  </tr>
 <tr>
      <td>
      <a href="https://github.com/sse-secure-systems/connaisseur">Connaisseur</a>
      <p>Kubernetes admission controller dedicated to signature verification and image trust policies.</p>
    </td>
  </tr>
 <tr>
      <td>
      <a href="https://github.com/notaryproject/notation">Notation</a>
      <p>Signs OCI artifacts (containers, Helm charts) and verifies them prior to install or deployment.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/sigstore/cosign">Sigstore Cosign </a>
      <p>Used in CD pipelines or admission hooks to verify signatures and attestations match trusted keys/policies before promotion.</p>
    </td>
  </tr>                
  </table> 

    


**PS.3**

<strong> Archive and Protect Each Software Release:</strong> Preserve software releases in order to help identify, analyze, and eliminate vulnerabilities discovered in the software after release.

<br>


To satisfy SSDF PS.3 in a build and deploy context using open-source tools, the focus shifts to:

- Build: The emphasis is on capturing, storing, and securing every official release (source, binaries, SBOM, signatures, provenance) in immutable, versioned storage.

- Deploy: The emphasis is on ensuring only those archived, protected releases are used in production with immutability, digest pinning, and signature/provenance verification as enforcement mechanisms.



<table style="width:100%">
  <tr>
    <th style="width: 30%">Tasks</th>
    <th style="width: 70%">Tools</th>
  </tr>
  <tr>
    <td rowspan="50">
      <p>PS.3.1: Securely archive the necessary files and supporting data (e.g., integrity verification information, provenance data) to be retained for each software release.</p><br>
      <p> PS.3.2: Collect, safeguard, maintain, and share provenance data for all components of each software release (e.g., in a software bill of materials [SBOM]).</p>
    </td>
    </tr>
    <tr>
     <td>
     <a href="https://git-scm.com/">Git (Release Tagging)</a>
      </a>
      <p>Create immutable, signed tags for each release; preserves source snapshot for auditing</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://git-lfs.github.com/">Git LFS</a>
      <p>Store large binary release artifacts alongside source with integrity checks.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sonatype.com/products/sonatype-nexus-repository">Nexus Repository OSS</a>
      <p> OSS	Host and version control release artifacts (JARs, binaries, containers) with role-based access and checksum validation.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://jfrog.com/open-source/">JFrog Artifactory OSS</a>
      <p>Archive build outputs in a controlled, versioned repository; supports checksums and retention policies.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://goharbor.io/">Harbor</a>
      <p>Store container images with vulnerability scanning, RBAC, and signed content trust to preserve release integrity. Enforce immutable tags and prevent overwrites so deployed artifacts can always be traced back to the archived copy.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://oss-review-toolkit.org/">OSS Review Toolkit</a>
      <p> (ORT)	Archive SBOMs, license files, and vulnerability reports alongside the release for compliance/audit.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/sigstore/cosign">Sigstore Cosign</a>
      <p>Sign release artifacts before archiving so integrity can be checked later.</p>
    </td>
  </tr> 
 <tr>
    <td>
      <a href="https://kyverno.io/">Kyverno</a>
      <p>Enforce digest-pinned images to ensure deployments always match archived release versions.</p>
    </td>
  </tr> 
 <tr>
    <td>
      <a href="https://github.com/open-policy-agent/gatekeeper">OPA Gatekeeper</a>
      <p>Policy enforcement to ensure only archived, approved artifacts are deployed.</p>
    </td>
  </tr> 
 <tr>
    <td>
      <a href="https://github.com/deislabs/ratify">Ratify</a>
      <p>Verifies artifact signatures/attestations against archived release metadata before deployment..</p>
    </td>
  </tr> 
 <tr>
    <td>
      <a href="https://github.com/sse-secure-systems/connaisseur">Connaisseur</a>
      <p>Admission controller that enforces deployment of only signed images from the archived se</p>
    </td>
  </tr> 
 <tr>
    <td>
      <a href="https://rclone.org/">Backblaze B2 / Rclone (OSS integration)</a>
      <p>Long-term archival of deployed artifact versions for rollback or investigation.</p>
    </td>
  </tr> 
 <tr>
    <td>
      <a href="https://slsa.dev/">SLSA Provenance</a> <a href="https://www.sigstore.dev/">+ Rekor</a>
      <p>Retain build provenance in a transparency log so deployed releases can be cross-verified with archived originals</p>
    </td>
  </tr> 
 <tr>
    <td>
      <a href="https://github.com/kpcyrd/rebuilderd">rebuildered</a>
      <p>rebuilderd independently verifies binary packages can be reproduced from source, which is a strong mechanism for third-party component integrity/validation and for preserving/verifying release integrity evidence.</p>
     </td>
 </tr> 
<tr>
    <td>
      <a href="https://github.com/testifysec">TestifySec</a>
      <p>TestifySec’s approach is evidence/attestations/policy verification around builds; their Witness tool is used to create and verify attestations and enforce policies—i.e., provenance generation + policy verification.</p>
     </td>
  </tr>  
</table>



