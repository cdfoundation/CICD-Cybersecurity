---
title: "3.4 Responder a Vulnerabilidades (RV)"
linkTitle: "3.4 Responder a Vulnerabilidades (RV)"
weight: 8
layout: docs
description: >
  3.4 Responder a Vulnerabilidades (RV) en los pasos CI/CD post-despliegue
---

### 3.4 Responder a Vulnerabilidades (RV) Tareas posteriores al despliegue

Responder a Vulnerabilidades (RV): Las organizaciones deben identificar vulnerabilidades residuales en sus versiones de software y responder de manera adecuada para abordarlas y prevenir que ocurran nuevamente en el futuro.

<br>

**RV.1**

<strong>Identificar y confirmar vulnerabilidades de forma continua: </strong> Ayudar a garantizar que las vulnerabilidades se identifiquen más rápidamente para que puedan ser remediadas con mayor rapidez de acuerdo con el riesgo, reduciendo la ventana de oportunidad para los atacantes.

<br>

Para cumplir con SSDF RV.1 en un contexto posterior al despliegue usando herramientas de código abierto, el enfoque cambia a:

- Escaneo continuo de entornos en vivo para detectar nuevas vulnerabilidades

- Correlación de vulnerabilidades detectadas con componentes desplegados y datos SBOM

- Validación de si las vulnerabilidades son explotables en el entorno específico

- Priorización de la remediación según severidad, explotabilidad e impacto operativo

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.1.1:</strong>
        <p>Recopilar información de adquirentes de software, usuarios y fuentes públicas sobre posibles vulnerabilidades en el software y componentes de terceros, e investigar todos los reportes creíbles.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.1.2:</strong>
        <p>Revisar, analizar y/o probar el código del software para identificar o confirmar la presencia de vulnerabilidades previamente no detectadas.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.1.3:</strong>
        <p>Contar con una política de divulgación y remediación de vulnerabilidades, e implementar los roles, responsabilidades y procesos necesarios para dar soporte a dicha política.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://dependencytrack.org">OWASP Dependency Track</a>
      <p>Se integra con SBOMs en vivo para detectar y alertar vulnerabilidades después del despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://ortelius.io">Ortelius</a>
      <p>Vincula las vulnerabilidades detectadas directamente con versiones desplegadas del servicio para trazabilidad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.defectdojo.org">DefectDojo</a>
      <p>Centro de gestión de vulnerabilidades con métricas y seguimiento.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://aquasecurity.github.io/trivy">Trivy</a>
      <p>Identifica vulnerabilidades en imágenes ya desplegadas en entornos Kubernetes o Docker.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Funciona con SBOMs generados por Syft para comprobar continuamente nuevos CVEs.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://www.open-scap.org/">OpenSCAP</a>
      <p>Proporciona escaneos programados de cumplimiento junto con escaneos de vulnerabilidades.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/openvex">VEX (Vulnerability Exploitability eXchange) + OpenVEX</a>
      <p>Ayuda a los equipos a priorizar la remediación filtrando vulnerabilidades no explotables.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Genera SBOMs en vivo para ser consumidos por herramientas como Dependency-Track o Grype.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://hoppr.dev/">Hoppr</a>
      <p>Kit de herramientas de cadena de suministro y SBOM que permite gestionar y mover artefactos de procedencia.</p>
    </td>
  </tr>
</table>

**RV.2**

<strong>Evaluar, priorizar y remediar vulnerabilidades:</strong> Ayudar a garantizar que las vulnerabilidades sean remediadas de acuerdo con el riesgo para reducir la ventana de oportunidad para los atacantes.

<br>

Para cumplir con SSDF RV.2 en un contexto posterior al despliegue usando herramientas de código abierto, el enfoque cambia a:

- Determinar qué vulnerabilidades son más relevantes en el entorno desplegado

- Usar explotabilidad, impacto de negocio y requisitos de cumplimiento para la priorización

- Ejecutar acciones de remediación o mitigación de manera oportuna en entornos en vivo

- Rastrear el estado de remediación hasta su cierre con registros auditables

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="8">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.2.1:</strong>
        <p>Analizar cada vulnerabilidad para obtener suficiente información de riesgo para planificar su remediación u otra respuesta de riesgo.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.2.2:</strong>
        <p>Planificar e implementar respuestas de riesgo para vulnerabilidades.</p>     
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.defectdojo.org">DefectDojo</a>
      <p>Centraliza la puntuación de riesgo, la gestión de flujos de trabajo y el seguimiento del progreso de remediación.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://dependencytrack.org">OWASP Dependency Track</a>
      <p>Proporciona priorización de vulnerabilidades en tiempo real e integración con sistemas de seguimiento de issues.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://ortelius.io">Ortelius</a>
      <p>Permite priorización y evaluación de impacto de vulnerabilidades según el entorno desplegado.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.jenkins.io">Jenkins</a> + <a href="https://www.openpolicyagent.org">OPA (Open Policy Agent)</a>
      <p>Aplicación de SLAs de remediación y automatización del despliegue de versiones corregidas.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/anchore/trivy">Trivy</a> + <a href="https://github.com/anchore/grype">Grype</a>
      <p>Escaneo continuo e integración con CI/CD para promover artefactos parcheados.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://www.github.com">GitHub/GitLab Issues + bots de automatización</a>
      <p>Asegura que ninguna vulnerabilidad quede sin una acción de remediación rastreada.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/aquasecurity/kube-bench">Kube-bench</a> + <a href="https://falco.org">Falco (seguridad en runtime)</a>
      <p>Proporciona señales en tiempo real para priorizar correcciones de seguridad operativa.</p>
    </td>
  </tr>
</table>

**RV.3**

<p><strong>Analizar vulnerabilidades para identificar sus causas raíz:</strong> Ayudar a reducir la frecuencia de vulnerabilidades en el futuro.</p><br>

<br>

Para cumplir con SSDF RV.3 en un contexto posterior al despliegue usando herramientas de código abierto, el enfoque cambia a:

- Determinar si la vulnerabilidad se originó en el código, dependencias, procesos de build o configuraciones de despliegue

- Documentar lecciones aprendidas para evitar recurrencias

- Retroalimentar los resultados hacia los requisitos de seguridad, pipelines y capacitación de desarrolladores

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="9">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.3.1:</strong>
        <p>Analizar las vulnerabilidades identificadas para determinar sus causas raíz.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.3.2:</strong>
        <p>Analizar las causas raíz a lo largo del tiempo para identificar patrones, como la falta de adopción consistente de prácticas seguras de codificación.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.3.3:</strong>
        <p>Revisar el software para vulnerabilidades similares y eliminar clases completas de vulnerabilidades de forma proactiva, en lugar de esperar reportes externos.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>RV.3.4:</strong>
        <p>Revisar el proceso SDLC y actualizarlo si es necesario para evitar la recurrencia de la causa raíz en futuras versiones del software o en nuevo desarrollo.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://ortelius.io">Ortelius</a>
      <p>Soporta análisis forense rastreando cuándo y dónde un componente vulnerable ingresó al sistema.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.defectdojo.org">DefectDojo</a>
      <p>Mantiene datos históricos para identificar tendencias en el origen de vulnerabilidades.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com">GitHub</a>
      <p>Soporta trazabilidad forense y análisis de responsabilidad en la causa raíz.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/syft">Syft</a> + <a href="https://dependencytrack.org">OWASP Dependency Track</a>
      <p>Permite análisis de diferencias de SBOM para investigaciones de causa raíz.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://semgrep.dev">Semgrep</a>
      <p>Ayuda a determinar si las vulnerabilidades provienen de problemas a nivel de código.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.open-scap.org">OpenSCAP</a>
      <p>Permite mapear la causa raíz hacia debilidades de configuración del sistema.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://aquasecurity.github.io/trivy">Trivy</a> + <a href="https://github.com/anchore/grype">Grype</a>
      <p>Proporciona contexto temporal para análisis de líneas de tiempo de la causa raíz.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://osquery.io">osquery</a>
      <p>Soporta inspección profunda durante análisis forense de vulnerabilidades.</p>
    </td>
  </tr>
</table>
