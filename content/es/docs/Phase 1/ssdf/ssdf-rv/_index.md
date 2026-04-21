---
title: "1.4 Responder a Vulnerabilidades"
linkTitle: "1.4 Responder a Vulnerabilidades (RV)"
weight: 8
layout: docs
description: >
  1.4 Responder a Vulnerabilidades (RV) en Código y Pasos Prebuild de CI/CD
---

### 1.4 Responder a Vulnerabilidades (RV) para Tareas de Código y Prebuild

Responder a Vulnerabilidades (RV): Las organizaciones deben identificar vulnerabilidades residuales en sus lanzamientos de software y responder de manera adecuada para abordar esas vulnerabilidades y prevenir que ocurran similares en el futuro.

<br>

**RV.1**

<strong>Identificar y Confirmar Vulnerabilidades de Forma Continua: </strong> Ayuda a garantizar que las vulnerabilidades se identifiquen más rápido para poder remediarlas de acuerdo con el riesgo, reduciendo la ventana de oportunidad para los atacantes.

<br>

Para cumplir con SSDF RV.1 en un contexto de código y prebuild usando herramientas de código abierto, el enfoque se centra en detectar y remediar vulnerabilidades antes de que se construya cualquier artefacto, de modo que las correcciones ocurran en PRs de código/manifest, no después del empaquetado.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.1.1:</strong><p>Recopilar información de adquirientes de software, usuarios y fuentes públicas sobre posibles vulnerabilidades en el software y componentes de terceros que utiliza, e investigar todos los informes creíbles.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
      <p>RV.1.2: Revisar, analizar y/o probar el código del software para identificar o confirmar la presencia de vulnerabilidades previamente no detectadas.</p><br>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.1.3:</strong>
        <p>Definir una política que aborde la divulgación y remediación de vulnerabilidades, e implementar los roles, responsabilidades y procesos necesarios para respaldar dicha política.</p>
      </div>
</td>
  </tr>
   <tr>
      <td>
      <a href="https://github.com/google/osv-scanner">OSV-Scanner</a>
      <p>Escanea árboles de código y archivos manifest/lock contra OSV para detectar vulnerabilidades conocidas tempranamente en el desarrollo.</p>
    </td> 
  </tr>
   <tr>
      <td>
      <a href="https://ortelius.io">Ortelius Evidence Store</a>
      <p>Sincroniza continuamente versiones de Software Bill of Material de artefactos construidos a OSV.dev, reportando vulnerabilidades descubiertas después del build.</p>
    </td> 
  </tr>
  <tr>
      <td>
      <a href="https://semgrep.dev">Semgrep</a>
      <p>SAST basado en reglas en PRs/CI para vulnerabilidades previamente no detectadas. Herramienta de análisis estático usada para buscar en el código, encontrar errores y aplicar estándares de código en varias etapas del ciclo de desarrollo (editor, commit e integración continua - CI).</p>
    </td> 
  </tr>
  <tr>
      <td>
      <a href=" https://owasp.org/www-project-dependency-check/">OWASP Dependency Check</a>
      <p>SCA para múltiples ecosistemas; corre en CI, genera salida SARIF/HTML. Coincidencia de dependencias basada en CVE para retroalimentación en tiempo de código.</p>
    </td> 
  </tr>
  <tr>
      <td>
      <a href="https://github.com/aquasecurity/trivy">Trivy</a>
      <p>Escanea archivos fuente/lockfiles e IaC antes de construir. SCA todo-en-uno + comprobaciones de configuración incorrecta de IaC pre-build.</p>
    </td> 
  </tr>
  <tr>
      <td>
      <a href=" https://github.com/anchore/syft">Syft</a>
      <p>Genera SBOMs (CycloneDX/SPDX) directamente desde el código fuente. Datos de composición/procedencia para apoyar el descubrimiento de RV.1.</p>
    </td> 
  </tr> 
  <tr>
      <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Escanea directorios de código o Software Bill of Materials (de Syft) en busca de vulnerabilidades. Coincidencia precisa mediante SBOM + integración flexible en CI.</p>
    </td> 
  </tr>  
 <tr>
      <td>
      <a href="https://www.sonarsource.com/">SonarQube Community</a>
      <p>Los desarrolladores pueden inspeccionar continuamente la calidad del código para detectar errores, "code smells" y vulnerabilidades de seguridad sin ejecutar el código.</p>
    </td> 
  </tr>  
<tr>
      <td>
      <a href="https://codeql.github.com/">CodeQL</a>
      <p>Desarrollado por GitHub, permite a desarrolladores e investigadores de seguridad analizar bases de código para vulnerabilidades, errores y otros problemas de calidad de código.</p>
    </td> 
  </tr> 
<tr>
      <td>
      <a href="https://bandit.readthedocs.io/">Bandit (Python)</a>
      <p>Herramienta de análisis estático diseñada para identificar vulnerabilidades de seguridad comunes en código Python.</p>
    </td> 
  </tr> 
<tr>
      <td>
      <a href="https://brakemanscanner.org/">Brakeman (Rails)</a>
      <p>Escáner de vulnerabilidades específicamente diseñado para aplicaciones Ruby on Rails.</p>
    </td> 
  </tr> 
<tr>
      <td>
      <a href="https://find-sec-bugs.github.io/">FindSecBugs (Java)</a>
      <p>Herramienta de análisis estático para aplicaciones Java, usada para identificar posibles vulnerabilidades de seguridad en el código.</p>
    </td> 
  </tr> 
<tr>
      <td>
      <a href="https://gitleaks.io/">Gitleaks</a>
      <p>Previene secretos codificados directamente en el código y archivos de configuración.</p>
    </td> 
  </tr> 
<tr>
      <td>
      <a href="https://www.conftest.dev/">Conftest</a>
      <p>Utilidad para escribir pruebas sobre datos de configuración estructurados.</p>
    </td> 
  </tr> 
  <tr>
    <td>
      <a href="https://hoppr.dev/">Hoppr</a>
      <p>Kit de utilidades SBOM / cadena de suministro: procesamiento de SBOM y movimiento de “materiales” de la cadena de suministro alineados a la recopilación/mantenimiento/compartición de procedencia.</p>
     </td>
</table>


**RV.2**

<strong>Evaluar, Priorizar y Remediar Vulnerabilidades:</strong> Ayuda a garantizar que las vulnerabilidades se remediarán de acuerdo con el riesgo para reducir la ventana de oportunidad para los atacantes.

<br>

Para cumplir con SSDF RV.2 en un contexto de código y prebuild usando herramientas de código abierto, el enfoque se centra en:

- Registrar cada vulnerabilidad

- Analizar el riesgo (explotabilidad e impacto)

- Elegir respuestas, publicar avisos y entregar remediaciones mediante mecanismos confiables; incluir mitigaciones temporales cuando sea necesario.

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.2.1:</strong>
        <p>Analizar cada vulnerabilidad para recopilar información suficiente sobre el riesgo y planificar su remediación u otra respuesta al riesgo.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.2.2:</strong>
        <p>Planificar e implementar respuestas al riesgo para las vulnerabilidades.</p>     
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/guacsec/guac">GUAC</a>
      <p>Agrega SBOMs, atestaciones y vulnerabilidades para entender el impacto y priorizar correcciones.</p>
    </td>
     <tr>
      <td>
      <a href="https://github.com/renovatebot/renovate">Renovate</a>
      <p>Automatiza actualizaciones de dependencias y PRs de parches con políticas conscientes del riesgo.</p>
    </td> 
  </tr>
   <tr>
      <td>
      <a href="https://www.defectdojo.org/">OWASP DefectDojo</a>
      <p>Ingesta resultados de escáneres (Semgrep/Grype/Trivy/etc.) para deduplicación, severidad, propiedad y flujo de trabajo. Triage central de vulnerabilidades y seguimiento de riesgo vinculado a repos.</p>
    </td> 
  </tr>
  <tr>
      <td>
      <a href="https://ortelius.io">Ortelius Evidence Store</a>
      <p>Muestra el impacto de cada vulnerabilidad a través de entornos en vivo.</p>
    </td> 
  </tr> 
<tr>
      <td>
      <a href="https://vuls.io/">Vulns</a>
      <p>Escáner de vulnerabilidades sin agente que analiza paquetes instalados y los mapea a datos CVE con puntuación CVSS. Proporciona severidad, explotabilidad y recomendaciones de remediación; puede integrarse en flujos de parches.</p>
    </td> 
  </tr> 
  <tr>
    <td>
      <a href="https://dependencytrack.org/">Dependency-Track</a>
      <p>Plataforma de análisis de componentes basada en SBOM de forma continua. Enriquece vulnerabilidades con metadatos (severidad, explotabilidad, impacto de políticas).</p>
    </td> 
  </tr> 
  <tr>
    <td>
      <a href="https://cyclonedx.org/capabilities/vex/">VEX</a>
      <p>VEX cierra la brecha entre identificar vulnerabilidades potenciales (SBOM) y determinar su riesgo real en un entorno específico. Permite priorizar esfuerzos de remediación enfocándose en vulnerabilidades realmente explotables que requieren atención inmediata.</p>
    </td> 
  </tr> 
</table>
  
<br>

**RV.3**

<p><strong>Analizar Vulnerabilidades para Identificar Sus Causas Raíz: </strong> Ayuda a reducir la frecuencia de vulnerabilidades en el futuro.</p><br>

<br>

Para cumplir con SSDF RV.3 en un contexto de código y prebuild usando herramientas de código abierto, el enfoque se centra en:

- Identificar vulnerabilidades en código fuente y manifiestos de dependencias antes de construir, usando generación de SBOM, SCA y SAST

- Confirmar hallazgos eliminando falsos positivos y documentando evidencia mínima para remediación

- Aplicar barreras tempranas como fijación de versiones, listas de denegación y escaneo de secretos para bloquear riesgos conocidos

- Normalizar, deduplicar y priorizar hallazgos según severidad, explotabilidad y contexto de uso

- Aplicar controles basados en políticas en PRs para bloquear vulnerabilidades de alto riesgo y automatizar actualizaciones seguras de dependencias

- Asignar propiedad, exigir disposición para cada hallazgo y gobernar excepciones con exenciones temporales o registros VEX

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.3.1:</strong>
        <p>Analizar las vulnerabilidades identificadas para determinar sus causas raíz.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.3.2:</strong>
        <p>Analizar las causas raíz a lo largo del tiempo para identificar patrones, como prácticas de codificación segura que no se siguen de manera consistente.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.3.3:</strong>
        <p>Revisar el software para vulnerabilidades similares para erradicar una clase de vulnerabilidades y corregirlas proactivamente en lugar de esperar informes externos.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.3.4:</strong>
        <p>Revisar el proceso SDLC y actualizarlo si corresponde para prevenir (o reducir la probabilidad de) que la causa raíz reaparezca en actualizaciones del software o en nuevo software creado.</p>
      </div>
    </td>
  </tr>
<tr>
  <td>
    <a href=" https://spotbugs.github.io ">SpotBugs</a> + <a href=" https://spotbugs.github.io ">FindSecBugs</a>
    <p>Mantiene un conjunto de reglas de “barrera” para problemas históricos. Proporciona erradicación de patrones a través de módulos.</p>
  </td>
  </tr>
  <tr>
      <td>
      <a href="https://semgrep.dev">Semgrep</a>
      <p>Codifica RCAs como reglas (p. ej., prohibir APIs inseguras, aplicar sanitizadores) y ejecuta en PRs. Detecta la clase de error que causó el incidente.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://github.com/ossf/scorecard">OpenSSF Scorecard</a>
      <p>Monitorea señales de higiene de repositorio (protección de rama, fijación de dependencias, fuzzing, etc.) e incorpora mejoras en el SDLC. Controles preventivos alineados a temas de causas raíz.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://codeql.github.com/">Codeql</a>
      <p>Consulta bases de código para rastrear el origen de vulnerabilidades (p. ej., encontrar todos los puntos de inyección).</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://www.sonarsource.com/">SonarQube Community</a>
      <p>Identifica violaciones de reglas de calidad/seguridad del código que pueden indicar problemas sistémicos de codificación.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://www.defectdojo.org/">DefectDojo</a>
      <p>Agrega resultados de escáneres para que los patrones en tipos de vulnerabilidad sean más fáciles de detectar.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://dependencytrack.org/">Dependency-Track</a>
      <p>Rastrea componentes vulnerables y muestra problemas recurrentes relacionados con dependencias.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Escáner de vulnerabilidades para imágenes de contenedores y sistemas de archivos.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Correlaciona SBOMs a través de versiones para identificar problemas repetidos de dependencias.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://bandit.readthedocs.io/">Bandit (Python)</a>
      <p>Escáner de seguridad específico de lenguaje para identificar el mismo fallo en múltiples archivos.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://brakemanscanner.org/">Brakeman (Rails)</a>
      <p>Detecta prácticas de codificación insegura repetidas en aplicaciones Rails.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://pre-commit.com/">pre-commit</a>
      <p>Aplica hooks de calidad/seguridad de código antes de los commits.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://typicode.github.io/husky/">Husky</a>
      <p>Automatización de hooks Git para proyectos JavaScript/TypeScript para hacer cumplir comprobaciones.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://www.checkov.io/">Checkov</a>
      <p>Previene configuraciones incorrectas al integrarse en los flujos de trabajo existentes de los desarrolladores.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://aquasecurity.github.io/tfsec/">tfsec</a>
      <p>Agrega barreras en IaC para prevenir configuraciones inseguras en el momento del commit.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://kics.io/">kics</a>
      <p>Detecta vulnerabilidades de seguridad, problemas de cumplimiento y configuraciones incorrectas de infraestructura.</p>
    </td> 
  </tr>
</table>
