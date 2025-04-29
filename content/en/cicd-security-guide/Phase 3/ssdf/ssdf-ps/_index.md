---
title: "Protect the Software (PS)"
linkTitle: "Protect the Software (PS)"
weight: 6
description: >
 Protect the Software (PS) CI/CD Steps
---


### Protect the Software (PS)

#### PS.1 Protect All Forms of Code from Unauthorized Access and Tampering

Help prevent unauthorized changes to code, both inadvertent and intentional, which could circumvent or negate the intended security characteristics of the software. For code that is not intended to be publicly accessible, this helps prevent theft of the software and may make it more difficult or time-consuming for attackers to find vulnerabilities in the software.

#### Open-Source Tools to Achieve:

<table style="width:100%">
    <tr>
        <th style="width: 30%">Tasks</th>
        <th style="width: 50%" colspan="2">Tools</th>
        <th style="width: 20%">Readiness</th>
    </tr>
    <tr>
        <td rowspan="12"><strong>PS.1.1</strong>: Store all forms of code – including source code, executable code, and configuration-as-code –  based on the principle of least privilege so that only authorized personnel, tools, services, etc. have access.</td>
        <th rowspan="4" style="width: 25%;">Post Build Software Bill of Material Tools</th>
        <td style="width: 25%"><a href="https://github.com/anchore/syft" target="_blank">Anchore Syft</a></td>
        <td style="text-align: center;"><i class="fa-solid fa-circle" style="color: #63E6BE;"></i></td>
    </tr>
    <tr>
        <td><a href="https://github.com/microsoft/sbom-tool" target="_blank">Microsoft SBOM Tool</a></td>
        <td style="text-align: center;"><i class="fa-solid fa-circle" style="color: #63E6BE;"></i></td>
    </tr>
    <tr>
        <td><a href="https://github.com/opensbom-generator/spdx-sbom-generator" target="_blank">OpenSSF SPDX</a></td>
        <td style="text-align: center;"><i class="fa-solid fa-circle-half-stroke" style="color: #FFD43B;"></i></td>
    </tr>
    <tr>
        <td><a href="https://openssf.org/projects/bomctl" target="_blank">bomctl</a></td>
        <td style="text-align: center;"><i class="fa-solid fa-circle-half-stroke" style="color: #FFD43B;"></i></td>
    </tr>
    <tr>
        <th rowspan="4">DAST</th>
        <td><a href="https://github.com/OWASP/www-project-zap" target="_blank">OWASP Zap</a></td>
        <td style="text-align: center;"><i class="fa-solid fa-circle" style="color: #63E6BE;"></i></td>
    </tr>
    <tr>
        <td><a href="https://github.com/andresriancho/w3af" target="_blank">W3AF</a></td>
        <td style="text-align: center;"><i class="fa-solid fa-circle" style="color: #63E6BE;"></i></td>
    </tr>
    <tr>
        <td><a href="https://github.com/Arachni/arachni" target="_blank">Arachni</a></td>
        <td style="text-align: center;"><i class="fa-solid fa-circle-half-stroke" style="color: #FFD43B;"></i></td>
    </tr>
    <tr>
        <td><a href="https://github.com/sullo/nikto" target="_blank">Nikto</a></td>
        <td style="text-align: center;"><i class="fa-solid fa-circle-half-stroke" style="color: #FFD43B;"></i></td>
    </tr>
    <tr>
        <th rowspan="1">Vulnerability Databases</th>
        <td><a href="https://osv.dev" target="_blank">OSV.dev</a></td>
        <td style="text-align: center;"><i class="fa-solid fa-circle" style="color: #63E6BE;"></i></td>
    </tr>
    <tr>
        <th rowspan="1">Continuous Vulnerability Patch Management</th>
        <td><a href="https://www.ortelius.io" target="_blank">Ortelius</a></td>
        <td style="text-align: center;"><i class="fa-solid fa-circle" style="color: #63E6BE;"></i></td>
    </tr>
    <tr>
        <th rowspan="1">Application Security Compliance Reporting</th>
        <td><a href="https://openssf.org/projects/scorecard" target="_blank">OpenSSF Scorecard</a></td>
        <td style="text-align: center;"><i class="fa-solid fa-circle" style="color: #63E6BE;"></i></td>
</table>

<br />

[//]: # (### Post Build Software Bill of Material Tools)

[//]: # (- [Anchore Syft]&#40;https://github.com/anchore/syft&#41;)

[//]: # (- [Microsoft SBOM Tool]&#40;https://github.com/microsoft/sbom-tool&#41;)

[//]: # (- [OpenSSF SPDX]&#40;https://github.com/opensbom-generator/spdx-sbom-generator&#41;)

[//]: # (- [bomctl]&#40;https://openssf.org/projects/bomctl&#41;)

[//]: # ()
[//]: # (### DAST)

[//]: # ()
[//]: # (- [OWASP Zap]&#40;https://github.com/OWASP/www-project-zap&#41;)

[//]: # (- [W3AF]&#40;https://github.com/andresriancho/w3af&#41;)

[//]: # (- [Arachni]&#40;https://github.com/Arachni/arachni&#41;)

[//]: # (- [Nikto]&#40;https://github.com/sullo/nikto&#41;)

[//]: # ()
[//]: # (### Vulnerability Databases)

[//]: # (- [OSV.dev]&#40;https://osv.dev&#41;)

[//]: # ()
[//]: # (### Continuous Vulnerability Patch Management)

[//]: # (- [Ortelius]&#40;https://www.ortelius.io&#41;)

[//]: # ()
[//]: # (### Application Security Compliance Reporting)

[//]: # (- [OpenSSF Scorecard]&#40;https://openssf.org/projects/scorecard&#41;)
