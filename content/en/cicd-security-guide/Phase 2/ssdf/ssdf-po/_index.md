---
title: "Protect the Organization (PO)"
linkTitle: "Protect the Organization (PO)"
weight: 5
description: >
 Protect the Organization (PO) CI/CD Steps
---


### Protect the Organization (PO)

**PO.3 Implement Supporting Toolchains**

Use automation to reduce human effort and improve the accuracy, reproducibility, usability, and comprehensiveness of security practices throughout the SDLC, as well as provide a way to document and demonstrate the use of these practices. Toolchains and tools may be used at different levels of the organization, such as organization-wide or project-specific, and may address a particular part of the SDLC, like a build pipeline.

&nbsp;

{{% table-popup table_name="Test Table" %}}
<table class="modal-table-content">
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Reproducible and Deterministic Builds</td>
            <td>Ensure that software artifacts can be independently verified and reproduced to prevent tampering.</td>
            <td><i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i></td>
        </tr>
        <tr>
            <td>Automated Threat Detection and Compliance Enforcement</td>
            <td>Integrate continuous security analysis to detect misconfigurations, vulnerabilities, and unauthorized dependencies before deployment.</td>
            <td><i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i></td>
        </tr>
        <tr>
            <td>Policy-Enforced Deployments</td>
            <td>Enforce verifiable security policies ensuring only compliant, attested software reaches production.</td>
            <td><i class="fa-solid fa-circle-check" style="color: #008000;"></i></td>
        </tr>
        <tr>
            <td>Trusted Execution Environments (TEEs)</td>
            <td>Secure build environments against tampering using hardware-backed execution environments.</td>
            <td><i class="fa-solid fa-circle-check" style="color: #008000;"></i></td>
        </tr>
        <tr>
            <td>Cryptographic Attestation</td>
        <td>Use digital signatures and cryptographic proofs to verify the authenticity and integrity of builds and deployments.</td>
            <td><i class="fa-solid fa-circle-check" style="color: #008000;"></i></td>
        </tr>
    </tbody>
</table>
{{% /table-popup %}}
