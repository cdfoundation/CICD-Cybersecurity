---
title: "2.3 Producir Software Bien Asegurado (PW)"
linkTitle: "2.3 Producir Software Bien Asegurado (PW)"
weight: 7
layout: docs
description: >
  2.3 Producir Software Bien Asegurado (PW) en los pasos de Build y Deploy de CI/CD
---

### 2.3 Producir Software Bien Asegurado (PW) para las Tareas de Build y Deploy

Las organizaciones deben producir software bien asegurado con mínimas vulnerabilidades de seguridad en sus versiones.

<br>

**PW.1**

<strong>Diseñar Software para Cumplir Requisitos de Seguridad y Mitigar Riesgos de Seguridad:</strong> Identificar y evaluar los requisitos de seguridad del software; determinar qué riesgos de seguridad es probable que enfrente el software durante su operación y cómo el diseño y la arquitectura del software deberían mitigar esos riesgos; y justificar cualquier caso en el que el análisis basado en riesgos indique que los requisitos de seguridad deberían relajarse o omitirse. Abordar los requisitos y riesgos de seguridad durante el diseño del software (seguro por diseño) es clave para mejorar la seguridad del software y también contribuye a aumentar la eficiencia del desarrollo.

<br>

Para cumplir con SSDF PW.1 en un contexto de construcción y despliegue usando herramientas de código abierto, el enfoque se centra en:

- Incrustar controles de seguridad directamente en el proceso de construcción

- Validar que los resultados de la construcción (binarios, contenedores, paquetes) estén reforzados y libres de debilidades conocidas a nivel de diseño

- Preservar la trazabilidad desde los requisitos de diseño hasta los artefactos desplegados

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.1.1:</strong>
        <p>Usar formas de modelado de riesgos, como modelado de amenazas, modelado de ataques o mapeo de superficie de ataque para ayudar a evaluar el riesgo de seguridad del software.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.1.2:</strong><p>Rastrear y mantener los requisitos de seguridad, riesgos y decisiones de diseño del software.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.1.3:</strong>
        <p>Cuando sea apropiado, integrar soporte para el uso de funciones y servicios de seguridad estandarizados (por ejemplo, permitir que el software se integre con sistemas existentes de gestión de registros, gestión de identidades, control de acceso y gestión de vulnerabilidades) en lugar de crear implementaciones propietarias de funciones y servicios de seguridad.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/semgrep/semgrep">Semgrep</a>
      <p>Evita que código inseguro sea empaquetado y desplegado.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://aquasecurity.github.io/trivy">Trivy</a>
      <p>Asegura que los artefactos desplegados cumplan con configuraciones base seguras.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">Zap (Zed Attack Proxy)</a>
      <p>Aplica listas de componentes aprobados y configuraciones base de seguridad antes del despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Genera SBOMs para aplicaciones desplegadas para monitoreo continuo.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://dependencytrack.org">OWASP Dependency-Track</a>
      <p>Aplica listas de componentes aprobados y configuraciones base de seguridad antes del despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Escaneo de vulnerabilidades enfocado en artefactos desplegados.</p>
   </td>
  </tr>
  <tr>
    <td>
      <a href="https://nixos.org">Nix</a>
      <p>Garantiza que los artefactos de construcción coincidan exactamente con el diseño aprobado de seguridad, sin desviaciones ni diferencias ambientales.</p>
   </td>
  </tr>
  <tr>
    <td>
      <a href=" https://guix.gnu.org">GNU Guix</a>
      <p>Asegura que todos los artefactos desplegados se construyan desde un entorno trazable y verificable que cumpla con las bases de seguridad del diseño.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href=" https://bazel.build">Bazel</a>
      <p>Aplica reglas de construcción seguras, evita cambios no autorizados y produce resultados idénticos en todos los agentes de construcción.</p>
    </td>
  <tr>
    <td>
      <a href="https://reproducible-builds.org">Reproducible Builds Framework</a>
      <p>Fortalece la seguridad de la cadena de suministro al detectar modificaciones no autorizadas entre el código fuente y el despliegue.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/chainguard-dev/apko">Apko (Chainguard)</a>
      <p>Implementa principios de diseño seguro como superficie de ataque mínima y selección verificada de dependencias.</p>
   </td> 
 </tr>
  <tr>
    <td>
      <a href="https://www.sigstore.dev">Sigstore(Cosign,Fulcio, Rekor)</a>
      <p>Asegura que los artefactos provengan de un proceso de construcción confiable y verificado y que no hayan sido alterados.</p>
    </td> 
  </tr>
  <tr>
    <td>
      <a href="https://notaryproject.dev">Notary</a>
      <p>Proporciona garantía criptográfica de que los artefactos desplegados son auténticos y no han sido manipulados.</p>
    </td> 
  </tr>
  <tr>
    <td>
      <a href="https://in-toto.io">In-Toto</a>
      <p>Aplica integridad y responsabilidad en toda la canalización de construcción y despliegue.</p>
   </td> 
 </tr>
  <tr>
    <td>
      <a href="https://theupdateframework.io">The Update Framework (TUF)</a>
      <p>Protege la integridad de los canales de despliegue y distribución de actualizaciones.</p>
   </td> 
 </tr>
  <tr>
    <td>
      <a href="https://www.openssl.org">OpenSSL</a>
      <p>Genera y gestiona claves para firmar artefactos de construcción. Implementa TLS/SSL para comunicación segura entre agentes de construcción y repositorios de artefactos.</p>
   </td> 
 </tr>
  <tr>
    <td>
      <a href="https://gnupg.org/">GnuPG</a>
      <p>Firma el código fuente, commits y resultados de construcción y verifica las firmas antes de desplegar artefactos.</p>
    </td> 
  </tr> 
  <tr>
    <td>
      <a href="https://www.bouncycastle.org/">Bouncy Castle</a>
      <p>Incorpora firma y verificación criptográfica en pipelines de construcción Java/.NET.</p>
   </td> 
 </tr> 
  <tr>
    <td>
      <a href="https://keylime.dev/">Keylime</a>
      <p>Valida que los entornos de despliegue cumplan los requisitos de integridad basados en hardware antes del despliegue.</p>
   </td> 
  </tr> 
  <tr>
    <td>
      <a href="https://attest.org/">Ethereum Attestation Service (EAS)</a>
      <p>Publica atestaciones criptográficas de procedencia de construcción o aprobaciones de despliegue y proporciona un registro de auditoría descentralizado e inalterable de los datos de confianza de los artefactos.</p>
   </td> 
  </tr> 
  <tr>
    <td>
      <a href="https://kyverno.io/">Kyverno</a>
      <p>Aplica políticas de diseño de despliegue seguro (por ejemplo, imágenes base aprobadas, configuraciones no permitidas).</p>
    </td> 
  </tr> 
  <tr>
    <td>
      <a href="https://www.openpolicyagent.org/">OPA</a>
      <p>Aplica los requisitos de diseño de seguridad en tiempo de construcción (por ejemplo, aprobación de dependencias, umbrales de CVE). Aplica políticas consistentes desde la construcción hasta el tiempo de ejecución.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href=" https://spiffe.io/">SPIFFE/SPIRE</a>
      <p>Asegura que las cargas de trabajo desplegadas cumplan con los requisitos de seguridad para autenticación mutua y confianza cero, y vincula la identidad de la carga de trabajo con la procedencia en tiempo de construcción para garantizar la integridad del despliegue.</p>
   </td>
  </tr>
  <tr>
    <td>
      <a href="https://hermetoproject.github.io/hermeto/">Hermeto</a>
      <p>Pre-descarga dependencias para construcciones herméticas, genera SBOMs y asegura construcciones reproducibles con seguimiento explícito de dependencias y checksums verificables.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://owasp.org/www-project-threat-dragon/">OWASP Threat Dragon</a>
       <p>Incorpora modelos de amenazas en CI/CD, asegurando que los requisitos de seguridad estén vinculados a los componentes arquitectónicos antes de la construcción. (Cumple PW.1.1 y PW.1.2) </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-amass/">OWASP Amass</a>
      <p>Ayuda a refinar los requisitos de seguridad relacionados con la exposición de la red y el inventario de activos. (Cumple PW.1.1) </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://cairis.org/index.html">CAIRIS</a>
       <p>Integra los requisitos de seguridad en los modelos del sistema, que luego pueden ser validados en la construcción y despliegue. (Cumple PW.1.1) </p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://threagile.io/">Threagile</a>
        <p>Incorpora modelos de amenazas en CI/CD, asegurando que los requisitos de seguridad estén vinculados a los componentes arquitectónicos antes de la construcción. (Cumple PW.1.1)</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://open-needs.org/">Open-Needs</a>
      <p>Herramienta de gestión de requisitos para definir, rastrear y validar requisitos de seguridad. Documenta los requisitos de seguridad y los vincula a commits y resultados de construcción. (Cumple PW.1.1 y PW.1.2)</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://rmtoo.florath.net/">rmtoo</a>
          <p>Herramienta de gestión de requisitos usando texto plano y control de versiones para trazabilidad. Soporta trazabilidad desde el diseño hasta la construcción, asegurando que los requisitos se reflejen en los artefactos finales. (Cumple PW.1.2)</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openrmf.io/">OpenRMF® OSS</a>
      <p>Herramienta de marco de trabajo de cumplimiento y gestión de riesgos de código abierto para rastrear controles RMF (NIST 800-37). Los requisitos de seguridad se mapean a controles de cumplimiento formales que pueden verificarse en artefactos de construcción y despliegue. (Cumple PW.1.2) </p>
    </td>
  </tr>
</table>

**PW.2**

<strong>Revisar el Diseño del Software para Verificar Cumplimiento con los Requisitos de Seguridad y la Información de Riesgos:</strong> Ayuda a garantizar que el software cumpla con los requisitos de seguridad y aborde satisfactoriamente la información de riesgos identificada.

<br>

Para satisfacer SSDF PW.2 en un contexto de construcción y despliegue usando herramientas de código abierto, se enfoca en:

- Validar las decisiones de arquitectura de seguridad antes del despliegue

- Revisar las configuraciones de IaC y CI/CD para asegurar que cumplan con las bases de seguridad

- Aplicar automáticamente reglas de diseño en los pipelines de construcción

- Detectar configuraciones incorrectas y brechas de seguridad antes del lanzamiento

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.2.1:</strong>
        <p>Contar con (1) una persona calificada (o personas) que no haya participado en el diseño y/o (2) procesos automatizados en la cadena de herramientas que revisen el diseño del software para confirmar y asegurar que cumple con todos los requisitos de seguridad y aborda satisfactoriamente la información de riesgos identificada.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openpolicyagent.org/">OPA</a>
      <p>Control automatizado de cumplimiento de diseño en CI/CD</p>
    </td> 
  </tr>
  <tr>
    <td>
      <a href="https://kyverno.io/">Kyverno</a>
      <p>Valida que las configuraciones de despliegue coincidan con la arquitectura de seguridad aprobada.</p>
    </td> 
  </tr>  
  <tr>
    <td>
      <a href="https://www.checkov.io">Checkov</a>
      <p>Aplica reglas de segmentación de red, requisitos de cifrado y configuraciones seguras por defecto.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kics.io">KICS (Keeping Infrastructure as Code Secure)</a>
      <p>Agrega automatización de revisión de IaC al proceso de construcción.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/semgrep/semgrep/">Semgrep</a>
      <p>Revisión automatizada de código para asegurar alineación con los requisitos de diseño de seguridad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://aquasecurity.github.io/trivy">Trivy (Escaneo de Configuración)</a>
      <p>Verificación de cumplimiento de configuraciones antes del despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://threatspec.org">ThreatSpec</a>
      <p>Garantiza que los requisitos de diseño impulsados por el modelo de amenazas estén implementados.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/lyft/cartography">Cartography</a>
      <p>Verificación de arquitectura post-construcción/pre-despliegue. Detecta desviaciones respecto a la arquitectura prevista.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kube-score.com">kube-score</a>
      <p>Revisa los manifiestos de Kubernetes para cumplimiento de diseño antes del despliegue. Asegura que la configuración de seguridad de los pods coincida con los diseños aprobados.</p>
    </td>
  </tr>   
  <tr>
    <td>
      <a href="https://github.com/dependabot">Dependabot</a>
      <p>PRs automatizados de actualización de dependencias con alertas de vulnerabilidades. Ayuda a verificar que las dependencias cumplan los requisitos de seguridad (p. ej., sin CVEs conocidos, versiones mínimas).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openrmf.io/">OpenRMF</a>
      <p>Herramienta de seguimiento del Marco de Gestión de Riesgos. Puede mapear los requisitos de seguridad a nivel de diseño a controles NIST 800-53 y verificar que dichos controles estén implementados en las configuraciones de construcción.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://eslint.org/">ESLint</a>
      <p>Se ejecuta en pipelines CI/CD o como pre-commit hook para bloquear merges si el código viola las reglas de seguridad o arquitectura aprobadas antes de la construcción.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Escáner de vulnerabilidades basado en SBOM para imágenes/sistemas de archivos. Verifica que las dependencias en la construcción cumplan con las bases de seguridad y estén libres de componentes no permitidos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/quay/clair">Clair</a>
      <p>Análisis estático de vulnerabilidades para imágenes de contenedor. Confirma que las imágenes finales cumplan con los requisitos de seguridad de diseño antes del despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://terrasolid.com/products/terrascan/">Terrascan</a>
      <p>Escaneo de IaC y aplicación de políticas (basado en OPA). Aplica el diseño de seguridad aprobado en configuraciones de Terraform, Kubernetes, Docker y AWS CloudFormation antes del despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.gerritcodereview.com/">Gerrit</a>
      <p>Herramienta de flujo de trabajo para revisión y aprobación de código. Garantiza revisión humana contra los requisitos de diseño y seguridad antes de fusionar a las ramas de lanzamiento.</p>
    </td>
  </tr>   
 </table>

<br>

**PW.4**

<p><strong>Reutilizar software existente, bien asegurado, cuando sea factible en lugar de duplicar funcionalidades:</strong> Reduce los costos de desarrollo de software, acelera el desarrollo y disminuye la probabilidad de introducir vulnerabilidades de seguridad adicionales al reutilizar módulos y servicios de software que ya han sido verificados en cuanto a su postura de seguridad. Esto es particularmente importante para software que implementa funcionalidades de seguridad, como módulos y protocolos criptográficos.</p><br>
<p> Nota: PW.3 se movió a PW.4 </p>

<br>

Para cumplir con SSDF PW.4 en un contexto de build y deploy usando herramientas de código abierto, el enfoque se desplaza a:

- Incorporar valores predeterminados seguros en el código de la aplicación, contenedores y manifiestos de despliegue

- Eliminar funciones inseguras, obsoletas o innecesarias de los artefactos de build

- Aplicar automáticamente configuraciones de seguridad base durante el despliegue

- Hacer cumplir estándares de hardening antes del lanzamiento

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.4.1:</strong>
        <p>Adquirir y mantener componentes de software bien asegurados (por ejemplo, bibliotecas de software, módulos, middleware, frameworks) de desarrolladores comerciales, de código abierto y otros terceros para su uso en el software de la organización.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.4.2:</strong>
        <p>Crear y mantener componentes de software bien asegurados internamente siguiendo procesos SDLC para satisfacer necesidades internas de desarrollo de software que no pueden ser mejor atendidas por componentes de software de terceros.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.4.3:</strong>
        <p>Movido a PW.1.3</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.4.4:</strong>
        <p>Verificar que los componentes de software comerciales, de código abierto y de terceros cumplan con los requisitos definidos por la organización durante todo su ciclo de vida.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kyverno.io">Kyverno</a>
      <p>Garantiza que los manifiestos cumplan con los valores predeterminados seguros antes del despliegue.</p>
   </td> 
  </tr> 
  <tr>
    <td>
      <a href="https://www.openpolicyagent.org/">OPA</a>
      <p>Valida que las configuraciones predeterminadas cumplan con los requisitos de seguridad.</p>
   </td> 
  </tr>
  <tr>
    <td>
      <a href="https://www.checkov.io">Checkovn</a>
      <p>Detecta y bloquea valores predeterminados inseguros en Terraform, Helm o CloudFormation antes del lanzamiento.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kics.io">KICS (Keeping Infrastructure as Code Secure)</a>
      <p>Valida los valores predeterminados fortalecidos en la provisión de infraestructura en la nube.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://aquasecurity.github.io/trivy">Trivy</a>
      <p>Verificación automatizada de cumplimiento de configuraciones durante CI/CD.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://cisecurity.org/cis-cat-lite"> CIS-CAT Lite</a>
      <p>Automatiza pruebas de cumplimiento para valores predeterminados seguros.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/dev-sec">DevSec Hardening Framework</a>
      <p>Incorpora valores predeterminados fortalecidos en imágenes de contenedor o VM antes del lanzamiento.</p>
   </td>
  </tr>
  <tr>
    <td>
      <a href="https://kube-score.com">kube-score</a>
      <p>Validación previa al despliegue de valores predeterminados seguros en manifiestos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.open-scap.org">OpenSCAP </a>
      <p>Garantiza que las imágenes del sistema operativo desplegadas cumplan con los valores predeterminados fortalecidos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://cyclonedx.org/">CycloneDX</a>
      <p>Formato SBOM para documentar componentes/configuraciones exactas en el build final; ayuda a verificar que los valores predeterminados seguros estén presentes.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/opensbom-generator/spdx-sbom-generator">SPDX</a>
      <p>Estándar SBOM para registrar todos los componentes, licencias y procedencia; puede confirmar la inclusión de dependencias fortalecidas.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://artifacthub.io/">ArtifactHub</a>
      <p>Catálogo de Helm charts, operadores OLM, etc., verificados; puede hacer cumplir el uso de paquetes seguros por defecto.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://jfrog.com/community/download-artifactory-oss/">JFrog Artifactory OSS</a>
      <p>Gestor de repositorios para almacenar artefactos firmados y verificados con controles de acceso.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sonatype.com/products/nexus-community-edition-download">Sonartype Nexus OSS</a>
      <p>Hospeda artefactos y hace cumplir comprobaciones de políticas antes de su promoción.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://goharbor.io/">Harbor</a>
      <p>Registro OCI con escaneo de vulnerabilidades, firma de contenido y aplicación de políticas para imágenes.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/ee/user/project/repository/signed_commits/">GitLab Signing</a>
      <p>Firma de commits/tags en GitLab CE para verificar procedencia.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://codeql.github.com/">GitHub CodeQL</a>
      <p>Detecta patrones de código que violan los requisitos de seguridad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.aquasec.com/products/trivy/">AquaSec Trivy</a>
      <p>Escanea imágenes de contenedores, IaC y configuraciones para valores predeterminados inseguros.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://openssf.org/projects/allstar/">Allstar</a>
      <p>App de GitHub que aplica políticas de seguridad en repositorios.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-samm/">OWASP SAMM</a>
      <p>Modelo de madurez de seguridad para guiar prácticas de valores predeterminados seguros.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-application-security-verification-standard/">OWASP ASVS</a>
      <p>Requisitos de seguridad de aplicaciones para verificar valores predeterminados seguros.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-defectdojo/">OWASP Defectdojo</a>
      <p>Rastreo central de vulnerabilidades; garantiza que los problemas encontrados en builds se solucionen antes del lanzamiento.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p>Detecta dependencias conocidas vulnerables en los builds.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://about.gitea.com/">Gitea</a>
      <p>Servicio Git autohospedado con soporte de firma y políticas.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://about.gitlab.com/">GitLab (Community Edition)</a>
      <p>Plataforma Git con firma, escaneo e integración de políticas CI/CD.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.pytest.org/en/stable/index.html">Pytest</a>
      <p>Pruebas automatizadas para confirmar que los valores predeterminados funcionen.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.selenium.dev/">Selenium</a>
      <p>Automatización de pruebas funcionales/UI para verificar configuraciones seguras.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://playwright.dev/">Playwright</a>
      <p>Automatización de pruebas funcionales/UI para verificar configuraciones seguras.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">OWASP ZAP</a>
      <p>Escáner DAST para verificar que los valores predeterminados de la aplicación no sean explotables.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://testng.org/">TestNG</a>
      <p>Framework de pruebas Java para comprobaciones de seguridad/funcionales.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://cucumber.io/">Cucumber</a>
      <p>Framework BDD para verificar requisitos funcionales y de seguridad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/quay/clair">Clair</a>
      <p>Escáner de vulnerabilidades de imágenes para registros OCI.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Escáner de vulnerabilidades basado en SBOM para builds e imágenes.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/PyCQA/bandit">Bandit para Python</a>
      <p>Detecta patrones de código y valores predeterminados inseguros en Python.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://semgrep.dev/">Semgrep</a>
      <p>Encuentra patrones que violan políticas en el código.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://brakemanscanner.org/">Brakeman</a>
      <p>Detecta problemas de seguridad y valores predeterminados específicos de Rails.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gitleaks.io/">Gitleaks</a>
      <p>Detecta secretos en el código (previene exposición de credenciales predeterminadas).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trufflesecurity.com/">TruffleHog</a>
      <p>Encuentra secretos en repositorios/historial para evitar valores predeterminados inseguros.</p>
     </td> 
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p>Detecta dependencias conocidas vulnerables en los builds.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://oss-review-toolkit.github.io/ort/">OSS Review Toolkit (ORT)</a>
      <p>Automatiza verificaciones de licencias/seguridad; bloquea componentes no conformes.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://fossa.com/">FOSSA (Community Edition)</a>
      <p>Escaneo de licencias/dependencias; garantiza cumplimiento con políticas predeterminadas.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://scancode-toolkit.readthedocs.io/en/stable/">ScanCode Toolkit</a>
      <p>Detecta licencias, derechos de autor y metadatos de seguridad en los artefactos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/tern-tools/tern">Tern</a>
      <p>Inspección de imágenes de contenedor para detalles de dependencias/componentes.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://openpolicyagent.org/">Open Policy Agent (OPA)</a>
      <p>Política como código para build & deploy; bloquea valores predeterminados inseguros en configuraciones/manifiestos.</p>
  </td>
  </tr>
 <tr>
    <td>
      <a href="https://github.com/kpcyrd/rebuilderd">rebuilderd</a>
      <p>rebuilderd verifica de manera independiente que los paquetes binarios puedan reproducirse desde la fuente, lo que es un mecanismo sólido para la integridad/validación de componentes de terceros y para preservar/verificar evidencia de integridad de lanzamientos.</p>
     </td>
     </tr>
</table>

</table>

**PW.5**

<strong>Crear Código Fuente Siguiendo Prácticas de Codificación Segura:</strong> Disminuir el número de vulnerabilidades de seguridad en el software y reducir costos minimizando las vulnerabilidades introducidas durante la creación del código fuente que cumplan o superen los criterios de severidad de vulnerabilidades definidos por la organización.

<br>

Para cumplir con SSDF PW.5 en un contexto de construcción y despliegue utilizando herramientas de código abierto, el enfoque se desplaza a:

- Los artefactos de software se almacenan en repositorios seguros y controlados.

- Solo se almacenan y despliegan compilaciones aprobadas y verificadas.

- El acceso a los repositorios está restringido y es auditable.

- Se aplican verificaciones de procedencia e integridad antes de que los artefactos sean aceptados o desplegados.

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.5.1:</strong>
        <p>Sigue todas las prácticas de codificación segura que sean apropiadas para los lenguajes de desarrollo y el entorno para cumplir con los requisitos de la organización.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://jfrog.com/community/download-artifactory-oss/">Artifactory Community Edition</a>
      <p>Funciona como el repositorio central de artefactos confiable.</p>
   </td>
  </tr>
   <tr>
    <td>
      <a href="https://www.sonatype.com/products/nexus-repository">Nexus Repository OSS</a>
      <p>Funciona como el repositorio central de artefactos confiable.</p>
   </td>
  </tr>
  <tr>
    <td>
      <a href="https://goharbor.io">Harbor</a>
      <p>Funciona como el repositorio central de artefactos confiable.</p>
   </td>
  </tr> 
  <tr>
    <td>
      <a href="https://www.sigstore.dev">Sigstore(Cosign,Fulcio, Rekor)</a>
      <p>Garantiza que el contenido del repositorio sea auténtico y no haya sido alterado.</p>
    </td> 
  </tr> 
    <tr>
      <td>
      <a href="https://quay.github.io/clair/">Clair </a>
      <p>Asegura que los artefactos almacenados cumplan los requisitos de vulnerabilidad antes del despliegue.</p>
  </td>
  </tr>
  <tr>
      <td>
      <a href="https://in-toto.io">In-Toto</a>
      <p>Aplica verificaciones de procedencia al ingresar artefactos al repositorio.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://theupdateframework.io">The Update Framework (TUF)</a>
      <p>Protege contra la manipulación del repositorio y de las actualizaciones.</p>
  </td>
  </tr> 
  <tr>
    <td>
      <a href="https://notaryproject.dev">Notary (v2)</a>
      <p>Controla la entrada en la cadena de suministro y el almacenamiento interno de artefactos.</p>
    </td>
  </tr>
    <tr>
    <td>
      <a href="https://tekton.dev/docs/chains">Tekton Chains </a>
      <p>Relaciona los artefactos del repositorio con pipelines de compilación seguros.</p>
    </td>
  </tr>

  <tr>
    <td>
      <a href="https://semgrep.dev/">Semgrep</a>
      <p>Se ejecuta como parte de la pipeline CI para escanear automáticamente el código en busca de fallas de seguridad, violaciones de políticas y patrones inseguros antes de construir los artefactos. Soporta reglas como código para aplicar políticas de compilación segura.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/PyCQA/bandit">Bandit para Python</a>
      <p>Analizador estático enfocado en Python que revisa funciones inseguras, criptografía débil y problemas de seguridad comunes antes del empaquetado o despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://findbugs.sourceforge.net/">FindBugs</a>
      <p>Análisis estático legado de Java; puede usarse para señalar patrones de código inseguros conocidos antes de la compilación. Ha sido reemplazado por SpotBugs.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://spotbugs.readthedocs.io/">SpotBugs</a>
      <p>Reemplazo moderno de FindBugs. Escáner de bytecode de Java para aplicar prácticas de código seguro antes de compilar los artefactos finales.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sonarsource.com/open-source-editions/sonarqube-community-edition/">SonarQube</a>
      <p>Plataforma SAST completa; puede integrarse en CI/CD para aplicar gates de calidad, deteniendo compilaciones que incumplan reglas de seguridad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">OWASP ZAP</a>
      <p>Se ejecuta contra aplicaciones construidas/etapas en entornos previos al despliegue para detectar vulnerabilidades explotables, asegurando que no se promueva ninguna versión insegura.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/Arachni/arachni">Arachni</a>
      <p>Escáner de vulnerabilidades de aplicaciones web que puede formar parte de la etapa de QA de la compilación para asegurar que el lanzamiento sea seguro.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p>Escanea dependencias conocidas como vulnerables en la compilación, bloqueando versiones inseguras para su despliegue.</p>
    </td>
  </tr>
 </table>

**PW.6**

<strong>Configurar los Procesos de Compilación, Intérprete y Construcción para Mejorar la Seguridad de los Ejecutables:</strong> Disminuir la cantidad de vulnerabilidades de seguridad en el software y reducir costos al eliminar vulnerabilidades antes de que ocurran las pruebas.

<br>

Para cumplir con SSDF PW.6 en un contexto de compilación y despliegue usando herramientas de código abierto, el enfoque se centra en hacer que las pruebas de seguridad sean continuas y automáticas, de modo que cada build y cada candidato a despliegue se evalúe frente a un estándar de seguridad, con evidencia capturada para auditoría y puertas de liberación:

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.6.1:</strong>
        <p>Usar compiladores, intérpretes y herramientas de construcción que ofrezcan funciones para mejorar la seguridad de los ejecutables.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.6.2:</strong>
        <p>Determinar qué funciones de compilador, intérprete y herramientas de construcción deben usarse y cómo deben configurarse, luego implementar y usar las configuraciones aprobadas.</p>
      </div>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/semgrep/semgrep">Semgrep</a>
      <p>SAST rápido basado en reglas con integración CI.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://www.sonarsource.com/open-source-editions/sonarqube-community-edition/">SonarQube Community</a>
      <p>Calidad general de código + reglas básicas de seguridad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://bandit.readthedocs.io/en/latest/">Bandit</a>
      <p>Linters SAST para Python.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/golangci/golangci-lint/">Gosec</a>
      <p>Linters SAST para Go.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/cookpad/brakeman-linter-action">Brakeman</a>
      <p>Linters SAST para Rails.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://find-sec-bugs.github.io/">FindSecBugs</a>
      <p>Linters SAST para Java.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Trivy</a>
      <p>Escaneo de vulnerabilidades en imágenes/sistemas de archivos contra SBOMs.</p>
   </td>
  </tr>
   <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Escaneo de vulnerabilidades en imágenes/sistemas de archivos contra SBOMs.</p>
   </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Genera SBOMs (SPDX/CycloneDX) durante la construcción.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-track/">OWASP Dependency Track</a>
      <p>Monitoreo continuo de SBOM y alertas post-build.</p>
    </td>
 </tr>
  <tr>
    <td>
      <a href="https://github.com/gitleaks/gitleaks">Gitleaks</a>
      <p>Bloquea commits/builds que contengan secretos; ejecutarse en CI y como pre-commit hooks.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://reproducible-builds.org">Reproducible Builds</a>
      <p>Proporciona métodos, guías y herramientas de apoyo para builds deterministas, asegurando integridad y verificabilidad de los outputs de fuente a binario.</p>
    </td>
  </tr> 
   <tr>
    <td>
      <a href="https://bazel.build">Bazel</a>
      <p>Sistema de construcción con ejecución hermética (sandbox) y seguimiento explícito de dependencias, previniendo dependencias ocultas o no verificadas.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://mesonbuild.com">Meson</a>
      <p>Sistema de construcción de alta velocidad y determinista que soporta reproducibilidad y configuración estricta como código.</p>
    </td>
  </tr>  
  <tr>
    <td>
      <a href="https://maven.apache.org">Apache Maven</a>
      <p>Aplica resolución controlada de dependencias y soporta builds reproducibles para proyectos Java y basados en JVM.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://www.yoctoproject.org">Yocto Project</a>
      <p>Crea entornos de build reproducibles y controlados para imágenes Linux embebidas, previniendo desviaciones ambientales.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://source.android.com">AOSP Build System</a>
      <p>Usa toolchains preconstruidos y entornos sandbox para builds Android seguros y reproducibles.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://hermetoproject.github.io/hermeto/">Hermeto</a>
      <p>Herramienta CLI para pre-descarga de dependencias, soporta builds herméticos, genera SBOMs y asegura builds de contenedores aislados de red con gestión reproducible de dependencias.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://hoppr.dev/">Hoppr</a>
      <p>Kit de utilidades SBOM / cadena de suministro—procesamiento de SBOM y movimiento de “materiales” de la cadena de suministro alineado a la recolección/mantenimiento/compartición de la procedencia.</p>
    </td>
  </tr>
</table>
 
**PW.7**

<strong>Revisar y/o Analizar Código Legible por Humanos para Identificar Vulnerabilidades y Verificar Cumplimiento con los Requisitos de Seguridad:</strong> Ayuda a identificar vulnerabilidades para que puedan corregirse antes de que el software sea liberado y evitar su explotación. Usar métodos automatizados reduce el esfuerzo y los recursos necesarios para detectar vulnerabilidades. El código legible por humanos incluye código fuente, scripts y cualquier otra forma de código que la organización considere legible por humanos.

<br>

Para cumplir con SSDF PW.7 en un contexto de build y deploy usando herramientas de código abierto, el enfoque se centra en:

- Ejecutar escaneos automatizados de código en CI

- Asegurar que los requisitos de revisión manual o por pares se cumplan antes de fusionar a las ramas de release

- Verificar que el código cumpla con las políticas de seguridad definidas anteriormente en PW.1 y validadas en PW.2, capturando evidencia de auditoría de que la revisión se completó antes de promover los artefactos de build

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.7.1:</strong>
        <p>Determinar si se debe utilizar revisión de código (una persona revisa directamente el código para encontrar problemas) y/o análisis de código (se utilizan herramientas para encontrar problemas en el código, ya sea de manera completamente automatizada o en conjunto con una persona), según lo definido por la organización.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.7.2:</strong>
        <p>Realizar la revisión y/o análisis de código basándose en los estándares de codificación segura de la organización, y registrar y clasificar todos los problemas detectados y las recomendaciones de corrección en el flujo de trabajo del equipo de desarrollo o en el sistema de seguimiento de incidencias.</p> 
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://semgrep.dev">Semgrep</a>
      <p>Se ejecuta automáticamente en CI antes de construir el artefacto de despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sonarqube.org">SonarQube Community Edition</a>
      <p>Se integra con CI/CD para garantizar código limpio antes del release.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://codeql.github.com">CodeQL</a>
      <p>Detecta inyecciones SQL, XSS o patrones de deserialización insegura en la base de código.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gitleaks.io">GitLeaks</a>
      <p>Protege contra la filtración de secretos en los artefactos desplegados.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com">GitHub</a> y <a href="https://gitlab.com">GitLab</a>
      <p>Requiere dos revisores para cualquier cambio en módulos críticos de seguridad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.defectdojo.org">DefectDojo</a> 
      <p>Proporciona un registro verificable de auditoría para la finalización de la revisión de seguridad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sigstore.dev">Sigstore Cosign</a> 
      <p>Proporciona un registro verificable de auditoría para la finalización de la revisión de seguridad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p>Escanea continuamente las dependencias en cada build para nuevos CVEs. Puede ejecutarse en cada commit o de forma nocturna en CI/CD.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">OWASP ZAP</a>
      <p>Puede automatizarse en CI/CD para re-probar entornos de staging en busca de vulnerabilidades a medida que se despliega nuevo código.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://retirejs.github.io/">Retire.js</a>
      <p>Enfocado en bibliotecas JavaScript; detecta vulnerabilidades recién divulgadas en paquetes frontend/back-end durante los builds.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://fossa.com/product/open-source-vulnerability-management">Fossa</a>
      <p>Escanea dependencias en busca de vulnerabilidades y problemas de licencias, integrándose con los builds para capturar nuevos hallazgos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/PyCQA/bandit">Bandit para Python</a>
      <p>Se ejecuta en CI/CD para proyectos Python para detectar problemas de seguridad recién introducidos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/Checkmarx/kics">Checkmarx KICS</a>
      <p>Detección de vulnerabilidades conocidas – Compara componentes y configuraciones de IaC contra buenas prácticas de seguridad y marcos de cumplimiento conocidos (CIS Benchmarks, NIST, PCI-DSS).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/danmar/cppcheck">Cppcheck para C++</a>
      <p>Re-escanea código C/C++ después de cada build para asegurar que no se introdujeron nuevos problemas.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/find-sec-bugs/find-sec-bugs">FindSecBugs</a>
      <p>Extensión de SpotBugs que detecta fallas de seguridad en bytecode Java continuamente durante el ciclo de build.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://codeql.github.com/">GitHub CodeQL</a>
      <p>Realiza consultas de seguridad continuas en el código con cada pull request o escaneo programado.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://pmd.github.io/">PMD</a>
      <p>Ejecuta revisiones de calidad de código y reglas de seguridad en cada commit/build.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://spotbugs.github.io/">SpotBugs</a>
      <p>Análisis estático de Java integrado en la pipeline de build para detección continua de vulnerabilidades.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://danger.systems/js/">Danger JS</a>
      <p>Automatiza reglas de revisión de PR relacionadas con seguridad, evitando que código inseguro se fusione.</p>
    </td>
  </tr>
</table>

<br>

**PW.8**

<strong>Probar Código Ejecutable para Identificar Vulnerabilidades y Verificar el Cumplimiento con los Requisitos de Seguridad:</strong> Ayuda a identificar vulnerabilidades para que puedan ser corregidas antes de que el software sea liberado, con el fin de prevenir su explotación. El uso de métodos automatizados reduce el esfuerzo y los recursos necesarios para detectar vulnerabilidades y mejora la trazabilidad y la repetibilidad. El código ejecutable incluye binarios, bytecode ejecutado directamente, código fuente y cualquier otra forma de código que la organización considere ejecutable.

<br>

Para cumplir con SSDF PW.8 en un contexto post-despliegue usando herramientas de código abierto, el enfoque se centra en:

- Ejecutar pruebas de seguridad contra el artefacto final en entornos de staging o pre-despliegue

- Validar la configuración en tiempo de ejecución, dependencias y permisos del artefacto

- Asegurar el cumplimiento con las bases de seguridad a nivel ejecutable

- Capturar evidencia de los resultados de las pruebas de los artefactos para los gates de cumplimiento

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="8">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.8.1:</strong>
        <p>Determinar si se debe realizar pruebas de código ejecutable para encontrar vulnerabilidades no identificadas por revisiones, análisis o pruebas previas y, de ser así, qué tipos de pruebas deben utilizarse.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.8.2:</strong>
        <p>Definir el alcance de las pruebas, diseñarlas, ejecutarlas y documentar los resultados, incluyendo el registro y la clasificación de todos los problemas encontrados y las remediaciones recomendadas en el flujo de trabajo del equipo de desarrollo o en el sistema de seguimiento de incidencias.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Trivy</a>
      <p>Ejecutar como un paso de CI después de construir la imagen, antes de subir al registro</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Confirma que el ejecutable final cumple con los umbrales de vulnerabilidad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Alimenta SBOM en herramientas SCA como Dependency-Track para monitoreo continuo</p> 
  </tr>
  <tr>
    <td>
      <a href="https://www.open-scap.org/features/standards/">OpenSCAP</a>
      <p>Asegura que el artefacto final cumpla con los requisitos de configuración segura.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://cisecurity.org/cis-cat-lite">CIS-CAT Lite</a>
      <p>Paso de aplicación de línea base antes de la promoción a producción.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">Zap (Zed Attack Proxy)</a>
      <p>Pruebas de seguridad en tiempo de ejecución antes del lanzamiento.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://in-toto.io">In-toto</a> + <a href="https://www.sigstore.dev">Sigstore Cosign Attestations</a>
      <p>Proporciona evidencia verificable para cumplimiento y auditorías.</p>
    </td>
  </tr> 
</table>

**PW.9**

<strong>Configurar el Software para Tener Configuraciones Seguras por Defecto:</strong> Ayuda a mejorar la seguridad del software en el momento de la instalación para reducir la probabilidad de que se despliegue con configuraciones de seguridad débiles, exponiéndolo a un mayor riesgo de compromiso.

<br>

Para cumplir con SSDF PW.9 en un contexto de compilación y despliegue usando herramientas de código abierto, el enfoque se centra en:

- Incrustar configuraciones seguras en imágenes de contenedor, binarios e IaC

- Eliminar funciones inseguras o no utilizadas antes de empaquetar

- Aplicar líneas base de seguridad (CIS, STIG, NIST) en el proceso de compilación

- Validar esos valores por defecto como parte de CI/CD

- Evitar que valores por defecto inseguros lleguen a los candidatos de lanzamiento

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="11">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.9.1:</strong>
        <p>Definir una línea base segura determinando cómo configurar cada ajuste que tenga un efecto sobre la seguridad o un ajuste relacionado con seguridad, de manera que los valores predeterminados sean seguros y no debiliten las funciones de seguridad proporcionadas por la plataforma, infraestructura de red o servicios.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.9.2:</strong>
        <p>Implementar los valores predeterminados (o grupos de valores predeterminados, si aplica), y documentar cada ajuste para los administradores de software.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/dev-sec">DevSec Hardening Framework</a>
      <p>Automatiza el endurecimiento de la línea base durante la creación de imágenes.</p>
   </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/chainguard-dev/apko">Chainguard Apko</a>
      <p>Produce imágenes de contenedor seguras por defecto.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href=" https://aquasecurity.github.io/trivy/">Trivy</a>
      <p>Punto de control en CI para bloquear valores predeterminados inseguros antes de ser compilados/desplegados.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.checkov.io">Checkov</a>
      <p>Evita que los valores predeterminados inseguros de IaC lleguen al despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kics.io">KICS</a>
      <p>Evita que los valores predeterminados inseguros de IaC lleguen al despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.open-scap.org/">OpenSCAP</a>
      <p>Genera evidencia de cumplimiento antes de la promoción de artefactos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sigstore.dev">Sigstore Cosign</a> + <a href="https://in-toto.io">In-Toto</a>
      <p>Asegura que solo se puedan desplegar artefactos endurecidos y verificados.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://cisecurity.org/cis-cat-lite/">CIS-CAT Lite</a>
      <p>Verifica que los valores predeterminados endurecidos cumplan con los requisitos de CIS antes del lanzamiento.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kyverno.io">Kyverno</a>
      <p>Aplicación de políticas para manifiestos y configuraciones durante la compilación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openpolicyagent.org/">OPA Conftest</a>
      <p>Codifica valores predeterminados seguros como políticas aplicables en CI/CD.</p>
    </td>
  </tr>  
</table>
