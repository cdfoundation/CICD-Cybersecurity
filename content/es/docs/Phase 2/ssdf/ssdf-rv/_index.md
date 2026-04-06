---
title: "2.4 Responder a Vulnerabilidades (RV)"
linkTitle: "2.4 Responder a Vulnerabilidades (RV)"
weight: 8
layout: docs
description: >
  2.4 Responder a Vulnerabilidades (RV) en los pasos de Build y Deploy CI/CD
---

### 2.4 Responder a Vulnerabilidades (RV) para Tareas de Build y Deploy

Responder a Vulnerabilidades (RV): Las organizaciones deben identificar las vulnerabilidades residuales en sus versiones de software y responder adecuadamente para abordar dichas vulnerabilidades y prevenir que ocurran vulnerabilidades similares en el futuro.

<br>

**RV.1**

<strong>Identificar y Confirmar Vulnerabilidades de Forma Continua:</strong> Ayuda a garantizar que las vulnerabilidades se identifiquen más rápidamente para que puedan ser remediadas de manera más ágil de acuerdo con el riesgo, reduciendo la ventana de oportunidad para los atacantes.

<br>

Para cumplir con SSDF RV.1 en un contexto de compilación y despliegue utilizando herramientas de código abierto, el enfoque se centra en recopilar continuamente información sobre vulnerabilidades (VDP + fuentes públicas), monitorear componentes y confirmar problemas en todas las versiones compatibles.

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.1.1:</strong>
        <p>Recopilar información de adquirentes de software, usuarios y fuentes públicas sobre posibles vulnerabilidades en el software y componentes de terceros que utiliza, e investigar todos los reportes creíbles.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.1.2:</strong> 
        <p>Revisar, analizar y/o probar el código del software para identificar o confirmar la presencia de vulnerabilidades previamente no detectadas.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.1.3:</strong>
        <p>Tener una política que aborde la divulgación y remediación de vulnerabilidades, e implementar los roles, responsabilidades y procesos necesarios para respaldar esa política.</p>
      </div>
    </td>
  </tr>
   <tr>
      <td>
      <a href="https://github.com/google/osv-scanner">OSV-Scanner</a>
      <p>Escanea continuamente manifiestos/locks contra OSV; excelente para confirmar nuevas divulgaciones en todas las versiones soportadas.</p>
    </td> 
  </tr>
   <tr>
      <td>
      <a href="https://oretlius.io">Ortelius</a>
      <p>Sincroniza continuamente las versiones del Software Bill of Material de los artefactos construidos con OSV.dev, reportando vulnerabilidades descubiertas después de la compilación.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://osv.dev">Base de Datos de Vulnerabilidades OSV</a>
      <p>Consulta la base de datos de vulnerabilidades OSV.dev para CVEs de paquetes de código abierto.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Escanea imágenes de contenedores y SBOMs en busca de vulnerabilidades conocidas.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://vulners.com">Vulners CLI/API</a>
      <p>Agrega múltiples fuentes públicas de vulnerabilidades.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://github.com/intel/cve-bin-tool">cve-bin-tool</a>
      <p>Verifica binarios instalados en busca de CVEs conocidos.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://github.com/semgrep/semgrep">Semgrep</a>
      <p>SAST para múltiples lenguajes; reglas personalizables. Ejecutar al hacer merge en la rama principal.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://github.com/PyCQA/bandit">Bandit</a>
      <p>Lint de seguridad para Python. Agregar a la etapa de construcción de proyectos Python.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://www.sonarsource.com/products/sonarqube/">SonarQube Community Edition</a>
      <p>SAST y controles de calidad. Ejecutar en el paso de construcción; bloquear despliegue si se encuentran problemas de alta severidad.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://www.zaproxy.org">OWASP ZAP</a>
      <p>DAST; escaneo pasivo rápido en la aplicación de staging desplegada.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://docs.github.com/en/code-security/">Política de Seguridad GitHub</a>
      <p>Ubicación pública para reporteros.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://disclose.io">Plantillas Disclose.io</a>
      <p>Programa de Divulgación de Vulnerabilidades.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://github.com/ossf/oss-vulnerability-guide">Guía de Divulgación de Vulnerabilidades OpenSSF</a>
      <p>Manual para implementar la divulgación.</p>
    </td> 
  </tr>

</table>

**RV.2**

<strong>Evaluar, Priorizar y Remediar Vulnerabilidades:</strong> Ayuda a garantizar que las vulnerabilidades se remedien de acuerdo con el riesgo, reduciendo la ventana de oportunidad para los atacantes.

<br>

Para cumplir con SSDF RV.2 en un contexto de compilación y despliegue usando herramientas de código abierto, el enfoque se centra en:

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
      <p>Agrega SBOMs, certificaciones y vulnerabilidades para entender el alcance y priorizar correcciones.</p>
    </td>
     <tr>
      <td>
      <a href="https://github.com/renovatebot/renovate">Renovate</a>
      <p>Automatiza actualizaciones de dependencias/PRs de parches con políticas conscientes del riesgo.</p>
    </td> 
  </tr>
   <tr>
      <td>
      <a href="https://oretlius.io">Ortelius</a>
      <p>Muestra el alcance de cada vulnerabilidad en los entornos en vivo.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://github.com/DefectDojo/django-DefectDojo">DefectDojo</a>
      <p>Centraliza vulnerabilidades de herramientas SAST/DAST/SCA; agrega puntuación de riesgo.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://github.com/DependencyTrack/dependency-track">OWASP Dependency-Track</a>
      <p>Seguimiento de vulnerabilidades basado en SBOM, incluye puntuación CVSS y metadatos.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://www.first.org/epss/">EPSS (Exploit Prediction Scoring System)</a>
      <p>Evalúa la probabilidad de explotación para CVEs (priorización basada en riesgo).</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://vulners.com">Vulners API</a>
      <p>Proporciona enlaces de explotación, PoCs y contexto adicional por CVE.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://www.first.org/cvss/calculator/">Calculadora CVSS (FIRST)</a>
      <p>Puntuación de impacto estandarizada para respaldar decisiones de triaje.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://sigstore.dev">Sigstore / Cosign</a>
      <p>Firma builds remediadas antes de desplegar (mecanismo de entrega confiable).</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://coreruleset.org">OWASP ModSecurity CRS</a>
      <p>Reglas WAF temporales para mitigar vulnerabilidades web sin parchear.</p>
    </td> 
  </tr>
<tr>
      <td>
      <a href="https://github.com/falcosecurity/falco">Falco</a>
      <p>Detección y mitigación en tiempo de ejecución para problemas de contenedores/Kubernetes sin parchear.</p>
    </td> 
  </tr>
</table>

<br>

**RV.3**

<p><strong>Analizar Vulnerabilidades para Identificar sus Causas Raíz: </strong> Ayuda a reducir la frecuencia de vulnerabilidades en el futuro.</p><br>

Para cumplir con SSDF RV.3 en un contexto de construcción y despliegue usando herramientas de código abierto, el enfoque se centra en:

- Capturar causas raíz y lecciones aprendidas

- Detectar patrones recurrentes a lo largo del tiempo

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
        <p>Analizar las causas raíz a lo largo del tiempo para identificar patrones, como la falta de seguimiento consistente de una práctica de codificación segura específica.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.3.3:</strong>
        <p>Revisar el software para detectar vulnerabilidades similares, eliminar una clase de vulnerabilidades y corregirlas proactivamente en lugar de esperar informes externos.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.3.4:</strong>
        <p>Revisar el proceso SDLC y actualizarlo si es apropiado para prevenir (o reducir la probabilidad de) que la causa raíz se repita en actualizaciones del software o en nuevo software creado.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/semgrep/semgrep">Semgreps</a>
      <p>Escribir reglas específicas de la organización para detectar patrones de causa raíz; escanear repositorios para eliminar clases de errores.</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://codeql.github.com">CodeQL</a>
      <p>Consultas profundas de código para identificar los constructos de codificación precisos que conducen a vulnerabilidades.</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://www.sonarsource.com/products/sonarqube/downloads/">SonarQube CE</a>
      <p>Proporciona trazas de problemas, violaciones de reglas y puntos críticos, incluidos indicadores de causa raíz.</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://github.com/DefectDojo/django-DefectDojo">DefectDojo</a>
      <p>Realiza seguimiento de vulnerabilidades y metadatos, permite adjuntar notas de causa raíz por cada problema.</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://github.com/DependencyTrack/dependency-track">Dependency-Track</a>
      <p>Seguimiento a largo plazo de componentes vulnerables para identificar problemas recurrentes de dependencias.</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://github.com/grafeas/grafeas">Grafeas</a>
      <p>API de metadatos para seguimiento de eventos de seguridad a través de builds/lanzamientos.</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://github.com/fkie-cad/cwe_checker">cwe-checker</a>
      <p>Detecta patrones de debilidad (CWEs) en binarios, útil para artefactos compilados.</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://github.com/joernio/joern">Joern</a>
      <p>Plataforma de análisis de código de código abierto para buscar patrones de errores a gran escala.</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://owaspsamm.org">OpenSAMM (Modelo de Madurez de Aseguramiento de Software OWASP)</a>
      <p>Marco para mejorar las prácticas de ciclo de vida de desarrollo seguro.</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://github.com/ossf/scorecard">OpenSSF Scorecards</a>
      <p>Automatiza revisiones de seguridad de repositorios (protección de ramas, fijación de dependencias, endurecimiento de CI).</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://github.com/usnistgov/OSCAL">OSCAL (NIST)</a>
      <p>Estándar para documentar cumplimiento y mejoras de seguridad en el SDLC.</p>
    </td>
  </tr>
<tr>
      <td>
      <a href="https://github.com/ossf/allstar">Allstar (por OpenSSF)</a>
      <p>Aplica políticas de seguridad en organizaciones/repositorios de GitHub.</p>
    </td>
  </tr>
</table>
