---
title: "1.3 Producir Software Bien Asegurado (PW)"
linkTitle: "1.3 Producir Software Bien Asegurado (PW)"
weight: 7
layout: docs
description: >
  1.3 Producir Software Bien Asegurado (PW) durante las tareas de código y precompilación
---

## 1.3 Producir Software Bien Asegurado (PW) — Tareas de Código y Precompilación

Las organizaciones deben producir software bien asegurado con vulnerabilidades de seguridad mínimas en sus versiones.

<br>

**PW.1**

<strong>Diseñar el Software para Cumplir con los Requisitos de Seguridad y Mitigar Riesgos de Seguridad: </strong>Identificar y evaluar los requisitos de seguridad del software; determinar qué riesgos de seguridad es probable que enfrente el software durante su operación y cómo el diseño y la arquitectura del software deben mitigar esos riesgos; y justificar cualquier caso en el que un análisis basado en riesgos indique que los requisitos de seguridad deben flexibilizarse o eximirse. Abordar los requisitos y riesgos de seguridad durante el diseño del software (secure by design) es clave para mejorar la seguridad del software y también ayuda a mejorar la eficiencia del desarrollo.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <strong>PW.1.1:</strong> 
      <p>Usar formas de modelado de riesgos —como modelado de amenazas, modelado de ataques o mapeo de superficie de ataque— para ayudar a evaluar el riesgo de seguridad del software.</p>
      <br>
      <strong>PW.1.2:</strong>
      <p>Rastrear y mantener los requisitos de seguridad, los riesgos y las decisiones de diseño del software.</p>
      <br>
      <strong>PW.1.3:</strong>
      <p>Cuando sea apropiado, incorporar soporte para el uso de funciones y servicios de seguridad estandarizados (por ejemplo, permitir que el software se integre con sistemas existentes de gestión de registros, gestión de identidades, control de acceso y gestión de vulnerabilidades) en lugar de crear implementaciones propietarias de funciones y servicios de seguridad.</p>
    </td>
    <td>
      <a href="https://owasp.org/www-project-threat-dragon/">OWASP Threat Dragon</a>
      <p>Se utiliza antes de programar para documentar los componentes del sistema, los flujos de datos y los límites de confianza, y luego enumerar amenazas y requisitos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-amass/">OWASP Amass</a>
      <p>Ayuda a definir los requisitos de seguridad al identificar dependencias externas conocidas, APIs o servicios con los que el código interactuará, lo que informa el modelado de amenazas y el diseño seguro.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://cairis.org/index.html">CAIRIS</a>
      <p>Ayuda a los equipos de seguridad y a los desarrolladores a capturar, gestionar y rastrear los requisitos de seguridad desde el diseño inicial hasta el desarrollo, asegurando la alineación de seguridad en la fase prebuild.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://threagile.io/">Threagile</a>
      <p>Permite el “modelado de amenazas como código” en la fase prebuild, de modo que los requisitos de seguridad puedan automatizarse y controlarse en versión junto con el código de la aplicación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://open-needs.org/">Open-Needs</a>
      <p>Centraliza y estructura los requisitos de seguridad para que estén disponibles para el modelado de amenazas, las revisiones de diseño y la validación temprana.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://rmtoo.florath.net/">rmtoo</a>
      <p>Útil en la fase de diseño y planificación para mantener una lista estructurada de requisitos de seguridad y vincularlos con casos de prueba, modelos de amenazas o módulos de código, asegurando que la seguridad se aborde antes de programar.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openrmf.io/">OpenRMF® OSS</a>
      <p>En la fase prebuild, puede definir los requisitos de seguridad exactos derivados del RMF que debe cumplir la base de código, incluyendo las líneas base de controles, y vincularlos con elementos de diseño o tareas de desarrollo.</p>
    </td>
  </tr>
 </table>

<br>

**PW.2**

<strong>Revisar el Diseño del Software para Verificar el Cumplimiento de los Requisitos de Seguridad y la Información de Riesgos</strong>: Ayuda a garantizar que el software cumpla con los requisitos de seguridad y aborde de manera satisfactoria la información de riesgos identificada.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
        <strong>PW.2.1:</strong>
        <p>Contar con (1) una persona calificada que no haya participado en el diseño y/o (2) procesos automatizados en la cadena de herramientas que revisen el diseño del software para confirmar y asegurar que cumple con todos los requisitos de seguridad y aborda satisfactoriamente la información de riesgos identificada.</p>
    </td>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p>Analiza las dependencias del proyecto (directas y transitivas) contra la National Vulnerability Database (NVD) y otras fuentes para detectar vulnerabilidades conocidas (CVEs). Ayuda a confirmar si un componente cumple con los requisitos de seguridad antes de su inclusión.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/dependabot">Dependabot</a>
      <p>Herramienta automatizada de monitoreo y actualización de dependencias integrada con GitHub. Detecta dependencias vulnerables y crea pull requests para actualizarlas, asegurando que solo se usen versiones seguras.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openrmf.io/">OpenRMF</a>
      <p>Gestiona artefactos de cumplimiento del Risk Management Framework (RMF), incluyendo controles NIST 800-53. Puede usarse para confirmar que los componentes de software seleccionados cumplen con las bases de control de seguridad antes de su aprobación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://eslint.org/">ESLint</a>
      <p>Linter de JavaScript/TypeScript que aplica estándares de codificación segura y señala patrones inseguros antes de que lleguen a producción. Ayuda a validar que los componentes de código personalizados cumplan con los requisitos de codificación segura.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://bounty.github.com/targets/lgtm.html">LGTM</a>
      <p>Plataforma de análisis automatizado de código para identificar vulnerabilidades y problemas de calidad en múltiples lenguajes. Confirma que los componentes de código cumplen con las políticas de seguridad antes de su integración.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Escáner de vulnerabilidades de código abierto para imágenes de contenedores y sistemas de archivos. Garantiza que los componentes containerizados cumplan con los requisitos de vulnerabilidad y cumplimiento antes del despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/quay/clair">Clair</a>
      <p>Análisis estático de vulnerabilidades para imágenes de contenedores. Se integra en CI/CD para detectar vulnerabilidades en imágenes base y capas antes de su promoción.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/">Trivy</a>
      <p>Escáner de vulnerabilidades integral para imágenes de contenedores, sistemas de archivos y repositorios Git. Valida que los componentes seleccionados no tengan vulnerabilidades conocidas ni configuraciones inseguras.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.checkov.io/">Checkov</a>
      <p>Análisis estático de Infrastructure as Code (IaC) para detectar configuraciones de seguridad incorrectas (Terraform, Kubernetes, CloudFormation). Garantiza que los componentes de IaC cumplan con las bases de seguridad definidas antes de su uso.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://terrasolid.com/products/terrascan/">Terrascan</a>
      <p>Escáner de políticas como código para Terraform, Kubernetes, Docker y otros frameworks IaC. Confirma que los componentes de infraestructura cumplan con los requisitos de seguridad y cumplimiento.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.gerritcodereview.com/">Gerrit</a>
      <p>Herramienta web de revisión de código. Aunque no es un escáner de vulnerabilidades, aplica revisiones humanas y flujos de aprobación que pueden incluir listas de verificación de validación de requisitos de seguridad antes de aprobar un componente.</p>
    </td>
  </tr>
</table>

<br>

**PW.4**

Reutilizar software existente y bien asegurado cuando sea factible en lugar de duplicar funcionalidades: Reducir los costos de desarrollo de software, acelerar el desarrollo y disminuir la probabilidad de introducir vulnerabilidades adicionales reutilizando módulos y servicios de software cuya seguridad ya ha sido verificada. Esto es especialmente importante para software que implementa funcionalidades de seguridad, como módulos y protocolos criptográficos.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.4.1:</strong>
        <p>Adquirir y mantener componentes de software bien asegurados (por ejemplo, bibliotecas, módulos, middleware, frameworks) de desarrolladores comerciales, de código abierto y de terceros para su uso en el software de la organización.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.4.2:</strong>
        <p>Crear y mantener componentes de software bien asegurados internamente siguiendo los procesos del SDLC para cubrir necesidades internas que no puedan ser satisfechas mejor mediante componentes de terceros.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.4.3:</strong>
        <p>Movido a PW.4.4</p>
      </div>  
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.4.4:</strong>
        <p>Verificar que los componentes de software adquiridos, ya sean comerciales, de código abierto o de otros terceros, cumplan con los requisitos definidos por la organización a lo largo de todo su ciclo de vida.</p>
      </div>
    </td>
  </tr>
  <tr> 
    <td>
      <a href="https://cyclonedx.org/">CycloneDX</a>
      <p>Generado durante build/prebuild para validar los datos de los componentes contra criterios de aceptación definidos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/opensbom-generator/spdx-sbom-generator">SPDX</a>
      <p>Usado para verificar que todos los componentes cumplen con los requisitos de licencias y seguridad antes de su integración.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://artifacthub.io/">ArtifactHub</a>
      <p>Garantiza que solo se obtengan paquetes verificados, firmados y conformes a políticas para los builds.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://jfrog.com/community/download-artifactory-oss/">JFrog Artifactory OSS</a>
      <p>Actúa como fuente controlada para componentes que cumplen con estándares de seguridad definidos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sonatype.com/products/nexus-community-edition-download">Sonatype Nexus OSS</a>
      <p>Evita el uso de componentes que no cumplen con los requisitos de seguridad o políticas.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://goharbor.io/">Harbor</a>
      <p>Aplica reglas para que solo imágenes escaneadas, firmadas y conformes a políticas sean almacenadas y utilizadas en builds.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/ee/user/project/repository/signed_commits/">GitLab Signing</a>
      <p>Aplica la política de commits firmados en merge requests antes de aceptar código.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://codeql.github.com/">GitHub CodeQL</a>
      <p>Ejecuta consultas de seguridad predefinidas en CI para verificar el código antes de su integración.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.aquasec.com/products/trivy/">AquaSec Trivy</a>
      <p>Aplica criterios de aceptación de seguridad (por ejemplo, sin CVEs críticas) antes de promover componentes.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/dependabot">Dependabot</a>
      <p>Crea PRs para garantizar que se usen versiones seguras definidas por política.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://openssf.org/projects/allstar/">Allstar</a>
      <p>Garantiza que los repositorios cumplan con criterios de configuración antes de permitir merges.</p>
    </td>
  </tr>
  <tr>  
    <td>
      <a href="https://owasp.org/www-project-samm/">OWASP SAMM</a>
      <p>Proporciona un marco para definir prácticas de aseguramiento de seguridad y objetivos de madurez. Ayuda a establecer criterios para procesos de desarrollo seguro, incluyendo prebuild.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-application-security-verification-standard/">OWASP ASVS</a>
      <p>Define requisitos detallados de verificación de seguridad para aplicaciones. Puede usarse como referencia para pruebas de seguridad automatizadas y manuales en prebuild.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-defectdojo/">OWASP Defectdojo</a>
      <p>Plataforma de gestión de vulnerabilidades y orquestación de pruebas de seguridad. Centraliza resultados de escáneres y asegura que los problemas se rastreen según criterios de aceptación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p>Escanea dependencias del proyecto buscando vulnerabilidades conocidas (CVEs) y falla builds si no cumplen criterios.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://git-scm.com/">Git</a>
      <p>VCS que soporta firma de commits y hooks para aplicar prebuild checks (linting, escaneos de seguridad).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://about.gitea.com/">Gitea</a>
      <p>Servicio Git ligero y autohospedado con aplicación de políticas de repositorio (p. ej., commits firmados, revisiones requeridas).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://about.gitlab.com/">GitLab (Community Edition)</a>
      <p>Plataforma Git con integración CI/CD para ejecutar controles de seguridad antes de mergear.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://code.visualstudio.com/">Visual Studio Code</a>
      <p>Soporta extensiones para linting, escaneo de vulnerabilidades y enforcement de firma de código pre-commit.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://eclipseide.org/">Eclipse</a>
      <p>IDE Java con plugins para análisis estático, escaneo de dependencias y enforcement de reglas de codificación segura.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.jetbrains.com/idea/">IntelliJ IDEA (Community Edition)</a>
      <p>IDE Java con plugins para análisis estático, codificación segura y generación de SBOM.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://junit.org/">JUnit</a>
      <p>Framework de pruebas unitarias Java; puede integrarse con suites de pruebas de seguridad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://nunit.org/">NUnit</a>
      <p>Framework de pruebas .NET; soporta integración con tests de validación de seguridad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.pytest.org/en/stable/index.html">Pytest</a>
      <p>Framework de pruebas Python; puede ejecutar tests basados en reglas de seguridad como parte de CI.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.selenium.dev/">Selenium</a>
      <p>Herramienta de pruebas automatizadas de navegador; puede validar comportamientos seguros (p. ej., flujos de autenticación).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://playwright.dev/">Playwright</a>
      <p>Pruebas end-to-end de navegador con soporte para escenarios centrados en seguridad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">OWASP ZAP</a>
      <p>Herramienta DAST para encontrar problemas de seguridad en aplicaciones en ejecución durante fases de prueba.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://testng.org/">TestNG</a>
      <p>Framework de pruebas para Java; se integra con automatización de seguridad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://cucumber.io/">Cucumber</a>
      <p>Framework de pruebas BDD; permite definir tests de aceptación de seguridad en lenguaje natural.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Aqua Trivy</a>
      <p>Escanea contenedores, sistemas de archivos y repositorios en busca de vulnerabilidades y errores de configuración.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/quay/clair">Clair</a>
      <p>Escaneo estático de vulnerabilidades en imágenes de contenedor antes del despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Escáner de vulnerabilidades para contenedores y sistemas de archivos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/PyCQA/bandit">Bandit for Python</a>
      <p>Analizador estático específico de Python para problemas de seguridad comunes.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://semgrep.dev/">Semgrep</a>
      <p>Análisis estático multi-lenguaje usando reglas de seguridad personalizadas o predefinidas.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://brakemanscanner.org/">Brakeman</a>
      <p>Analizador estático específico de Rails para vulnerabilidades de seguridad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gitleaks.io/">Gitleaks</a>
      <p>Detecta secretos hardcoded en repositorios Git antes del commit o en CI.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trufflesecurity.com/">TruffleHog</a>
      <p>Detecta secretos e información sensible en el historial y commits del código.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sigstore.dev/">Sigstore</a>
      <p>Framework open-source para firmar artefactos de software (commits, contenedores) usando pruebas criptográficas.</p>
    </td>
  </tr>
  <tr> 
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p>Escanea dependencias del proyecto (directas y transitivas) buscando CVEs conocidas usando NVD y otras fuentes. Puede aplicar criterios de “no vulnerabilidades críticas/altas” antes de aprobar el build.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://oss-review-toolkit.github.io/ort/">OSS Review Toolkit (ORT)</a>
      <p>Garantiza que los componentes seleccionados cumplan criterios de licencias y seguridad antes de integrarse a la línea principal.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://fossa.com/">FOSSA (Community Edition)</a>
      <p>Puede bloquear merges o builds que violen reglas de licencias o contengan vulnerabilidades conocidas.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://scancode-toolkit.readthedocs.io/en/stable/">ScanCode Toolkit</a>
      <p>Asegura que los criterios de licencias se cumplan antes de aceptar componentes en el build.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/tern-tools/tern">Tern</a>
      <p>Proporciona inventario de componentes para validar contra criterios de aceptación predefinidos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://openpolicyagent.org/">Open Policy Agent (OPA)</a>
      <p>Aplica políticas de seguridad, cumplimiento y configuración durante gates de CI/CD antes del release.</p>
    </td>
  </tr>
</table>

**PW.5**

<p><strong>Crear Código Fuente Siguiendo Prácticas de Codificación Segura:</strong> Reducir el número de vulnerabilidades de seguridad en el software y disminuir los costos de desarrollo asegurando que el código fuente se cree siguiendo prácticas de codificación segura, cumpliendo o superando los criterios de severidad de vulnerabilidades definidos por la organización.</p> <br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <strong>PW.5.1:</strong>
      <p>
        Seguir todas las prácticas de codificación segura apropiadas para los lenguajes de desarrollo y el entorno, a fin de cumplir con los requisitos de seguridad de la organización.
      </p>
    </td>
    <td>
      <a href="https://semgrep.dev/">Semgrep</a>
      <p>Integrado en CI para escanear el código modificado y bloquear merges si las reglas de seguridad fallan; también puede ejecutarse localmente para verificaciones previas al commit.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/PyCQA/bandit">Bandit para Python</a>
      <p>Se ejecuta en prebuild o pipelines de CI para detectar problemas de seguridad de alta severidad en código Python.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://findbugs.sourceforge.net/">FindBugs</a>
      <p>Analiza código Java antes del empaquetado para identificar vulnerabilidades y malas prácticas de codificación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://spotbugs.readthedocs.io/">SpotBugs</a>
      <p>Integrado en CI/CD para detectar vulnerabilidades en Java antes del lanzamiento.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sonarsource.com/open-source-editions/sonarqube-community-edition/">SonarQube</a>
      <p>Se ejecuta en pipelines CI/CD para señalar problemas de seguridad antes de los merges, aplicando quality gates.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">OWASP ZAP</a>
      <p>Se ejecuta en entornos de prueba antes de producción para identificar problemas de seguridad en tiempo de ejecución.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/Arachni/arachni">Arachni</a>
      <p>Escanea instancias de staging/test para detectar vulnerabilidades explotables antes del despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p>Previene builds que incluyan componentes con vulnerabilidades que superen los umbrales de severidad definidos.</p>
    </td>
  </tr>
</table>

<br>

**PW.6**

<p><strong>Configurar los Procesos de Compilación, Intérprete y Construcción para Mejorar la Seguridad de los Ejecutables:</strong> Reducir el número de vulnerabilidades de seguridad en el software y disminuir los costos de desarrollo al detectar y eliminar vulnerabilidades durante la compilación o construcción, antes de las pruebas y el despliegue.</p> <br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.6.1:</strong>
        <p>Usar compiladores, intérpretes y herramientas de construcción que incluyan funcionalidades para mejorar la seguridad de los ejecutables.</p>
      </div>       
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.6.2:</strong>
        <p>Definir qué funcionalidades de compilador, intérprete y herramientas de construcción se deben aplicar y configurarlas según los estándares de seguridad aprobados.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://sigstore.dev">Sigstore Cosign</a>
      <p>Firma y verifica la integridad y autenticidad del código fuente y las dependencias precompiladas antes de la compilación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gnupg.org">GnuPG (GPG)</a>
      <p>Verifica las firmas criptográficas de archivos fuente y dependencias antes de la construcción.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://oss-review-toolkit.org">OSS Review Toolkit (ORT)</a>
      <p>Audita y escanea las dependencias en busca de vulnerabilidades de seguridad y problemas de licencias antes de incluirlas en la construcción.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://mesonbuild.com/">Meson</a>
      <p>Sistema de construcción integrado en CI/CD para aplicar configuraciones de seguridad y cumplimiento durante la compilación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/tern-tools/tern">Tern</a>
      <p>Analiza capas de imágenes de contenedores para identificar componentes de código abierto, licencias y posibles vulnerabilidades antes de usarlas en las construcciones.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://scancode-toolkit.readthedocs.io">ScanCode Toolkit</a>
      <p>Detecta licencias, derechos de autor y paquetes en el código fuente antes de la construcción para garantizar cumplimiento y seguridad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Escanea código fuente e imágenes de contenedores en busca de vulnerabilidades conocidas antes de incluirlas en la construcción.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Genera SBOMs a partir del código fuente y dependencias antes de la construcción para documentar y verificar los componentes.</p>
    </td>
  </tr>
</table>

**PW.7**

<p><strong>Revisar y Analizar Código Legible por Humanos para Identificar Vulnerabilidades y Verificar el Cumplimiento de Seguridad:</strong> Identificar vulnerabilidades en el código para que puedan ser corregidas antes del lanzamiento, previniendo su explotación. Los métodos automatizados reducen el esfuerzo y los recursos necesarios para detectar problemas. El código legible por humanos incluye código fuente, scripts y cualquier otra forma que la organización reconozca como legible por humanos.</p> <br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.7.1:</strong>
        <p>Determinar si se debe utilizar revisión de código (una persona examina directamente el código para encontrar problemas) y/o análisis de código (se usan herramientas para encontrar problemas en el código, ya sea de forma totalmente automatizada o en conjunto con una persona), según lo defina la organización.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.7.2:</strong>
        <p>Realizar la revisión de código y/o el análisis de código de acuerdo con los estándares de codificación segura de la organización, registrando y clasificando todos los problemas detectados y las recomendaciones de remediación en el flujo de trabajo del equipo de desarrollo o en el sistema de seguimiento de incidencias.</p>
      </div>  
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p>Escanea las dependencias del proyecto (por ejemplo, Maven, npm, Python) contra la NVD para CVEs conocidas antes de la compilación, permitiendo la remediación temprana de librerías vulnerables.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">OWASP ZAP</a>
      <p>Principalmente una herramienta de pruebas de seguridad de aplicaciones dinámicas (DAST), pero en precompilación no se usa generalmente; puede ejecutarse contra compilaciones locales para detectar fallas tempranas en tiempo de ejecución. Aplicabilidad limitada a PW.7 precompilación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sonarsource.com/open-source-editions/sonarqube-community-edition/">SonarQube</a>
      <p>Realiza SAST y revisa la calidad del código para múltiples lenguajes, detectando vulnerabilidades, errores y malos olores en el código antes de la compilación o integración.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://retirejs.github.io/">Retire.js</a>
      <p>Escanea código JavaScript y manifiestos de paquetes en busca de librerías vulnerables conocidas antes del empaquetado.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://fossa.com/product/open-source-vulnerability-management">Fossa Community Edition</a>
      <p>Realiza escaneo de dependencias para problemas de licencias y vulnerabilidades antes de la compilación. La versión comercial SaaS es propietaria.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/semgrep/semgrep">Semgrep</a>
      <p>Herramienta SAST ligera y personalizable. Utiliza reglas para detectar problemas de seguridad y patrones inseguros en el código fuente antes de la compilación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/PyCQA/bandit">Bandit para Python</a>
      <p>Escanea código Python en busca de problemas de seguridad comunes antes de la compilación (por ejemplo, uso inseguro de funciones, contraseñas codificadas).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kics.io">Checkmarx KICS</a>
      <p>Herramienta de análisis estático para IaC (Terraform, YAML de Kubernetes, etc.) para encontrar configuraciones incorrectas antes del despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/danmar/cppcheck">Cppcheck para C++</a>
      <p>Análisis estático para código C/C++ para detectar comportamientos indefinidos, problemas de memoria y vulnerabilidades comunes antes de la compilación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/find-sec-bugs/find-sec-bugs">FindSecBugs</a>
      <p>Plugin para SpotBugs que detecta vulnerabilidades específicas de Java antes de la compilación.</p>
    </td>
   <tr> 
    <td>
      <a href="https://codeql.github.com/">GitHub CodeQL</a>
      <p>Realiza análisis profundo del código usando un lenguaje de consultas para detectar vulnerabilidades antes de la compilación. Excelente para SAST automatizado en pipelines de CI.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://pmd.github.io/">PMD</a>
      <p>Escanea Java, Apex, JavaScript, XML y otros códigos en busca de errores, código no utilizado y posibles problemas de seguridad antes de la compilación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://spotbugs.github.io/">SpotBugs</a>
      <p>Análisis estático para bytecode Java; detecta patrones de errores y posibles vulnerabilidades precompilación (cuando se ejecuta sobre archivos de clase compilados en CI antes del empaquetado).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://danger.systems/js/">Danger JC</a>
      <p>Automatiza las revisiones de pull requests — aplica las pautas de seguridad/contribución y previene que patrones inseguros se fusionen al código antes de la compilación.</p>
    </td>
  </tr>
</table>

<br>

**PW.8**

<p><strong>Probar el Código Ejecutable para Identificar Vulnerabilidades y Verificar el Cumplimiento de los Requisitos de Seguridad:</strong> Ayuda a identificar vulnerabilidades para que puedan corregirse antes de que el software sea liberado, previniendo su explotación. El uso de métodos automatizados reduce el esfuerzo y los recursos necesarios para detectar vulnerabilidades, y mejora la trazabilidad y la repetibilidad. El código ejecutable incluye binarios, bytecode ejecutable directamente, código fuente y cualquier otra forma de código que la organización considere ejecutable.</p>

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.8.1:</strong>
        <p>Determinar si se debe realizar pruebas de código ejecutable para encontrar vulnerabilidades no identificadas por revisiones, análisis o pruebas previas y, de ser así, qué tipos de pruebas deben utilizarse.</p>
      </div> 
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.8.2:</strong>
        <p>Delimitar el alcance de las pruebas, diseñarlas, ejecutarlas y documentar los resultados, incluyendo el registro y la clasificación de todos los problemas descubiertos y las recomendaciones de remediación en el flujo de trabajo del equipo de desarrollo o en el sistema de seguimiento de incidencias.</p>
      </div>    
    </td>
   </tr>
   <tr>
    <td>
      <a href="https://semgrep.dev">Semgrep</a>
      <p>Motor SAST que analiza el código fuente contra reglas de seguridad antes de la compilación, detectando vulnerabilidades tempranamente.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://bandit.readthedocs.io">Bandit (Python)</a>
      <p>Análisis estático para código Python para encontrar problemas de seguridad comunes antes del empaquetado.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://find-sec-bugs.github.io">FindSecBugs</a>
      <p>Plugin de seguridad para SpotBugs para detectar vulnerabilidades en código Java/Scala/Groovy antes de la compilación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="http://cppcheck.sourceforge.net">Cppcheck</a>
      <p>Análisis estático para C/C++ para detectar fallos de seguridad antes de generar los artefactos de compilación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://pmd.github.io">PMD</a>
      <p>Análisis estático basado en reglas para Java, Apex, JavaScript y XML para detectar vulnerabilidades y problemas de codificación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://spotbugs.github.io">SpotBugs</a>
      <p>Detección de errores y vulnerabilidades en código Java antes de generar la salida de compilación.</p>
    </td>
  </tr>
<tr>
  <td>
    <a href="https://codeql.github.com">GitHub CodeQL</a>
    <p>Análisis semántico de código para encontrar vulnerabilidades antes de la compilación.</p>
  </td>
</tr>
<tr>
  <td>
    <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
    <p>Herramienta SCA que identifica dependencias vulnerables en los manifiestos antes del empaquetado.</p>
  </td>
</tr> 
<tr>
  <td>
    <a href="https://retirejs.github.io/retire.js/">Retire.js</a>
    <p>Analiza dependencias de JavaScript y Node.js para detectar vulnerabilidades conocidas antes de la liberación.</p>
  </td>
</tr>
<tr>
  <td>
    <a href="https://github.com/anchore/grype">Grype</a>
    <p>Herramienta SSCA para escanear dependencias de código fuente y imágenes base antes de la compilación para detectar CVEs.</p>
  </td>
</tr> 
<tr>
  <td>
    <a href="https://github.com/anchore/syft">Syft</a>
    <p>Genera SBOMs desde código fuente antes de la compilación para verificar el inventario de componentes.</p>
  </td>
</tr>
<tr>
  <td>
    <a href="https://kics.io">Checkmarx KICS</a>
    <p>Analiza archivos de Infrastructure-as-Code (Terraform, Kubernetes YAML, etc.) para detectar configuraciones incorrectas antes del despliegue.</p>
  </td>
</tr>
 <tr>
  <td>
    <a href="https://gitleaks.io">Gitleaks</a>
    <p>Busca secretos en el código y en el historial de Git antes de la compilación.</p>
  </td>
</tr>
<tr>
  <td>
    <a href="https://trufflesecurity.com">TruffleHog</a>
    <p>Busca secretos e información sensible en el código y en el historial de Git antes de la compilación.</p>
  </td>
</tr>
</table>

**PW.9**

<p><strong>Configurar el Software para que Tenga Configuraciones Seguras por Defecto:</strong> Ayuda a mejorar la seguridad del software en el momento de la instalación para reducir la probabilidad de que se despliegue con configuraciones de seguridad débiles, lo que aumentaría el riesgo de compromiso.</p>
<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.9.1:</strong>
        <p>Definir una línea base segura determinando cómo configurar cada ajuste que tenga efecto en la seguridad o cualquier ajuste relacionado con la seguridad, de modo que la configuración predeterminada sea segura y no debilite las funciones de seguridad proporcionadas por la plataforma, la infraestructura de red o los servicios.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.9.2:</strong>
        <p>Implementar los ajustes predeterminados (o grupos de ajustes predeterminados, si es aplicable) y documentar cada configuración para los administradores de software.</p>
      </div>    
    </td>
   </tr>
   <tr>
    <td>
      <a href="https://kics.io">KICS (Checkmarx)</a>
      <p>Detecta configuraciones incorrectas y valores predeterminados inseguros en archivos de IaC antes de la compilación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openpolicyagent.org">Open Policy Agent (OPA)</a>
      <p>Motor de políticas como código para aplicar reglas de configuración segura en pipelines previos a la compilación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://yamllint.readthedocs.io">Yamllint</a>
      <p>Valida archivos de configuración YAML, asegurando la corrección de su estructura antes de realizar más verificaciones de seguridad.</p>
    </td>
  </tr>
</table>
