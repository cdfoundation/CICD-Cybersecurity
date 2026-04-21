---
title: "3.1 Preparar la Organización (PO)"
linkTitle: "3.1 Preparar la Organización (PO)"
weight: 5
layout: docs
description: >
  3.1 Preparar la Organización (PO) Pasos Post Despliegue CI/CD
---

### 3.1 Preparar la Organización (PO) Tareas Post Despliegue

Las organizaciones deben asegurar que sus personas, procesos y tecnología estén preparadas para realizar desarrollo de software seguro a nivel organizacional. Muchas organizaciones encontrarán que algunas prácticas PO también son aplicables a subconjuntos de su desarrollo de software, como grupos de desarrollo individuales o proyectos.

<br>

**PO.1**
<strong>Definir Requisitos de Seguridad para el Desarrollo de Software</strong>: Asegurar que los requisitos de seguridad para el desarrollo de software sean conocidos en todo momento para que puedan ser considerados durante todo el SDLC y minimizar la duplicación de esfuerzos, ya que la información de los requisitos puede recopilarse una vez y compartirse. Esto incluye requisitos de fuentes internas (p. ej., políticas de la organización, objetivos de negocio y estrategia de gestión de riesgos) y fuentes externas (p. ej., leyes y regulaciones aplicables).

<br>

Para cumplir con SSDF PO.1 en un contexto post-despliegue usando herramientas de código abierto, el enfoque se desplaza de solo definir a:

- Mantener y aplicar las tareas PO en sistemas en producción.
- Hacer que los requisitos de las tareas sean visibles y trazables en todos los entornos desplegados.
- Auditar y actualizar métodos y procedimientos a medida que cambian las políticas internas y externas.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.1.1:</strong>
        <p>Identificar y documentar todos los requisitos de seguridad para las infraestructuras y procesos de desarrollo de software de la organización, y mantener dichos requisitos a lo largo del tiempo.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.1.2:</strong>
        <p>Identificar y documentar todos los requisitos de seguridad que el software desarrollado por la organización debe cumplir, y mantener dichos requisitos a lo largo del tiempo.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openpolicyagent.org/"> Open Policy Agent</a>
      <p>Soporta definiciones de políticas de seguridad como código y las aplica en pipelines, CI/CD y en tiempo de ejecución. Aplica políticas en tiempo de ejecución mediante integraciones con Kubernetes, Terraform y plataformas CI/CD.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.inspec.io">InspecLog</a>
      <p>Audita periódicamente los entornos desplegados contra estándares de seguridad internos y externos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://Ortelius.io">Ortelius Evidence Store</a>
      <p>Asocia y versiona metadatos de requisitos de seguridad por servicio y despliegue, habilitando visibilidad continua.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.defectdojo.org">DefectDojo</a>
      <p>Relaciona hallazgos de seguridad con controles de políticas específicas o marcos regulatorios.</p>
    </td>
  </tr>
</table>

**PO.2**
<strong>Implementar Roles y Responsabilidades:</strong> Asegurar que todos, dentro y fuera de la organización, involucrados en el SDLC estén preparados para desempeñar sus roles y responsabilidades relacionadas con el SDLC durante todo el ciclo de vida.

<br>

Para cumplir con SSDF PO.2 en un contexto post-despliegue usando herramientas de código abierto, el enfoque se desplaza a:

- Definir y asignar roles para quienes son responsables de la remediación y configuraciones en tiempo de ejecución.
- Mantener evidencia de qué se desplegó, quién lo desplegó y el impacto sobre todos los activos de software.
- Asegurar la seguridad y gestión de parches con acciones restringidas post-despliegue.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.2.1:</strong><p>Crear nuevos roles y modificar responsabilidades de roles existentes según sea necesario para abarcar todas las partes del SDLC. Revisar y mantener periódicamente los roles y responsabilidades definidos, actualizándolos según sea necesario.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.2.2:</strong>
        <p>Proporcionar capacitación basada en roles para todo el personal con responsabilidades que contribuyan al desarrollo seguro. Revisar periódicamente la competencia del personal y la capacitación basada en roles, y actualizar la formación según sea necesario.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.2.3:</strong>
        <p>Obtener el compromiso de la alta dirección o autoridad autorizante para el desarrollo seguro, y comunicar ese compromiso a todos los roles y responsabilidades relacionados con el desarrollo.</p>
      </div>
    </td>
  </tr>
  <tr> 
    <td>
      <a href="https://git-scm.com/">Git</a>
      <p>Rastrea autoría y revisores de código, etiqueta releases y documenta quién los disparó.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://Ortelius.io">Ortelius Evidence Store</a>
      <p>Asocia servicios desplegados con individuos o equipos responsables, manteniendo un historial de cambios, despliegues y roles.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.cncf.io/projects/backstage/">Backstage</a>
      <p>Lista propietarios de servicios, equipos on-call y rutas de escalamiento, haciendo transparente la responsabilidad post-despliegue en toda la organización.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.defectdojo.org">DefectDojo</a>
      <p>Rastrea hallazgos de seguridad y asigna responsabilidades de resolución.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kubernetes.io/blog/2019/08/06/opa-gatekeeper-policy-and-governance-for-kubernetes/">Kubernetes RBAC / OPA Gatekeeper</a>
      <p>Aplica políticas de acceso y límites de roles en entornos de ejecución.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://argo-cd.readthedocs.io/en/stable/">ArgoCD</a>
      <p>Garantiza que solo los commits/despliegues autorizados afecten producción y registra cada promoción y rollback.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://falco.org/">Falco</a>
      <p>Detecta actividad no autorizada en tiempo de ejecución.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://prometheus.io/docs/alerting/latest/alertmanager/">Prometheus + Alertmanager</a>
      <p>Alertas basadas en propiedad/roles.</p>
    </td>
  </tr>
</table>

**PO.3**
<strong>Implementar Cadenas de Herramientas de Soporte:</strong> Usar automatización para reducir el esfuerzo humano y mejorar la precisión, reproducibilidad, usabilidad y cobertura de las prácticas de seguridad durante todo el SDLC, así como proporcionar una forma de documentar y demostrar el uso de estas prácticas. Las cadenas de herramientas y herramientas pueden usarse en distintos niveles de la organización, como a nivel organizacional o por proyecto, y pueden abordar partes específicas del SDLC, como un pipeline de compilación.

<br>

Para cumplir con SSDF PO.3 en un contexto post-despliegue usando herramientas de código abierto, el enfoque se desplaza a:

- Asegurar que las cadenas de herramientas soporten detección de vulnerabilidades, seguimiento de SBOMs, cumplimiento y aplicación de políticas para funcionar después del despliegue.
- Mantener la seguridad, actualización e integración de las herramientas de automatización en el entorno en vivo.
- Mantener evidencia de que los outputs de la cadena de herramientas (e.g., SBOMs, reportes de escaneo) siguen siendo confiables y actuales.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.3.1:</strong>
        <p>Especificar qué herramientas o tipos de herramientas deben incluirse en cada cadena de herramientas para mitigar riesgos identificados, así como cómo se integrarán los componentes entre sí.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.3.2:</strong>
        <p>Seguir prácticas de seguridad recomendadas para desplegar, operar y mantener herramientas y cadenas de herramientas.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.3.3:</strong>
        <p>Configurar herramientas para generar artefactos que respalden las prácticas de desarrollo seguro definidas por la organización.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-track/">OWASP Dependency Track</a>
      <p>Monitorea continuamente SBOMs para CVEs recién divulgados en el software desplegado.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://Ortelius.io">Ortelius Evidence Store</a>
      <p>Mantiene un registro histórico de software desplegado, componentes y sus SBOMs; vincula con propietarios para responsabilidad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/syft/">Syft</a>
      <p>Genera SBOMs de imágenes de contenedores o sistemas de archivos desplegados bajo demanda.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Trivy</a>
      <p>Escaneo de vulnerabilidades post-despliegue en contenedores, sistemas de archivos y paquetes; también genera SBOMs.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/quay/clair/">Clair</a>
      <p>Escaneo continuo de registries de contenedores para vulnerabilidades.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Escáner rápido de vulnerabilidades para imágenes de contenedores y sistemas de archivos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://in-toto.io/">In-Toto</a>
      <p>Valida que los artefactos desplegados coincidan con las certificaciones criptográficas del proceso de construcción.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sigstore/cosign">Sigstore Cosign</a>
      <p>Verifica firmas de artefactos desplegados; asegura que coincidan con builds aprobados.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sigstore/rekor">Sigstore Rekor</a>
      <p>Proporciona un registro público e inmutable para firmas y datos de procedencia.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openpolicyagent.org/"> Open Policy Agent</a>
      <p>Aplica políticas de seguridad y cumplimiento en sistemas desplegados (e.g., clusters de Kubernetes).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.inspec.io">Inspec</a>
      <p>Audita la infraestructura y aplicaciones desplegadas contra líneas base de seguridad y requisitos de cumplimiento.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/TheHive-Project/TheHive">The Hive</a>
      <p>Plataforma de respuesta a incidentes para eventos de seguridad post-despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://konflux-ci.dev/">Konflux-ci software factory for Tekton</a>
      <p>Implementa el <a href="https://in-toto.io/docs/what-is-in-toto/">framework In-toto</a> usando pipelines-as-code para validación de seguridad de la cadena de suministro.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.defectdojo.org">DefectDojo</a>
      <p>Rastrea vulnerabilidades y asigna tareas de remediación; integra con escáneres para actualizaciones continuas.</p>
    </td>
  </tr>
</table>

**PO.4**
<strong>Definir y Usar Criterios para Revisiones de Seguridad del Software:</strong> Ayuda a garantizar que el software resultante del SDLC cumpla con las expectativas de la organización al definir y usar criterios para verificar la seguridad del software durante el desarrollo.

<br>

Para cumplir con SSDF PO.4 en un contexto post-despliegue usando herramientas de código abierto, el enfoque se desplaza a:

- Asegurarse de que los datos de seguridad continúen recopilándose después del lanzamiento.

- Que los logs, SBOMs y resultados de escaneos se conserven y sean resistentes a manipulaciones.

- Proteger los datos para evitar accesos o modificaciones no autorizadas.

- Que los datos sean recuperables para auditorías, investigaciones y verificaciones de cumplimiento.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.4.1:</strong>
        <p>Definir criterios para revisiones de seguridad del software y darles seguimiento durante todo el SDLC.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.4.2:</strong>
        <p>Implementar procesos, mecanismos, etc., para recopilar y proteger la información necesaria en apoyo de los criterios.</p><br>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://falco.org/">Falco</a>
      <p>Detección de seguridad en tiempo de ejecución para contenedores y hosts; genera logs de eventos para comportamientos sospechosos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/Neo23x0/auditd">AuditD</a>
      <p>Captura eventos de seguridad a nivel de sistema en Linux.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/osquery/osquery">OSQuery</a>
      <p>Telemetría de endpoints y monitoreo de configuración.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://grafana.com/docs/loki/latest/get-started/overview/">Prometheus y Loki</a>
      <p>Recopila y almacena métricas y logs en un formato consultable.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://Ortelius.io">Ortelius Evidence Store</a>
      <p>Mantiene SBOMs versionadas vinculadas a cada despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/syft/">Syft</a>
      <p>Genera SBOMs a partir de artefactos desplegados para monitoreo continuo.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.open-scap.org/features/standards/">OpenSCAP</a>
      <p>Recopila y almacena datos de escaneos de cumplimiento.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/wazuh/wazuh">Wazuh SIEM</a>
      <p>SIEM con registro de auditoría, detección de amenazas y monitoreo de cumplimiento.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Detecta vulnerabilidades CVE en imágenes y sistemas de archivos desplegados.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://in-toto.io/">In-Toto</a>
      <p>Valida que los artefactos desplegados coincidan con las certificaciones criptográficas del proceso de construcción.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sigstore/rekor">Sigstore Rekor</a>
      <p>Proporciona un registro público e inmutable para firmas y datos de procedencia.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.inspec.io">Inspec</a>
      <p>Audita infraestructura y aplicaciones desplegadas contra estándares de seguridad y cumplimiento.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Trivy</a>
      <p>Escaneo continuo de vulnerabilidades y generación de SBOM para sistemas en ejecución.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.defectdojo.org">DefectDojo</a>
      <p>Almacena y organiza resultados de escaneos de seguridad; integra con Trivy, Grype y Dependency-Track.</p>
    </td>
  </tr>
</table>

**PO.5**
<strong>Implementar y Mantener Entornos Seguros para el Desarrollo de Software:</strong> Asegurar que todos los componentes de los entornos de desarrollo estén fuertemente protegidos contra amenazas internas y externas para prevenir compromisos del entorno o del software desarrollado o mantenido en ellos. Ejemplos de entornos incluyen desarrollo, construcción, prueba y distribución.

<br>

Para cumplir con SSDF PO.5 en un contexto post-despliegue usando herramientas de código abierto, el enfoque se desplaza a:

- Los requisitos de seguridad de la infraestructura de desarrollo siguen siendo relevantes y aplicables después del lanzamiento del software.

- Los entornos de construcción, despliegue y monitoreo permanecen endurecidos y conformes.

- Se valida continuamente que la infraestructura de desarrollo no se haya desviado de su línea base segura.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.5.1:</strong>
        <p>Separar y proteger cada entorno involucrado en el desarrollo de software.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.5.2:</strong>
        <p>Proteger y reforzar los endpoints de desarrollo (diseñadores, desarrolladores, testers, constructores, etc.) para realizar tareas relacionadas con el desarrollo usando un enfoque basado en riesgos.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.inspec.io">Inspec</a>
      <p>Ejecuta escaneos de cumplimiento continuos en servidores de desarrollo y construcción; aplica benchmarks CIS/NIST.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.open-scap.org/features/standards/">OpenSCAP</a>
      <p>Verifica la infraestructura contra estándares de seguridad definidos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/osquery/osquery">OSQuery</a>
      <p>Monitorea nodos de construcción y despliegue en busca de cambios no autorizados.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/aquasecurity/kube-bench">Kube-bench</a>
      <p>Valida que clusters de Kubernetes para construcción/pruebas cumplan benchmarks CIS.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/open-policy-agent/gatekeeper">Open Policy Agent - GateKeeper</a>
      <p>Aplica reglas para la configuración de infraestructura (Kubernetes, Terraform, CI/CD).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kyverno.io/">Kyverno</a>
      <p>Aplicación de políticas nativas de Kubernetes para la seguridad del cluster.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.jenkins.io/">Jenkins</a>
      <p>Endurece pipelines CI/CD con controles de acceso y logs de auditoría.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sonatype/nexus-public">Nexus Repository OSS</a>
      <p>Almacena artefactos de construcción de forma segura post-despliegue; aplica controles de acceso.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/goharbor/harbor">Harbor</a>
      <p>Registro de contenedores con escaneo de vulnerabilidades y RBAC incorporados.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/wazuh/wazuh">Wazuh SIEM</a>
      <p>Ingesta logs de seguridad de infraestructura y alerta sobre violaciones.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://falco.org/">Falco</a>
      <p>Detecta actividad no autorizada en clusters o nodos de construcción/despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/prometheus/alertmanager">Prometheus + Alertmanager</a>
      <p>Monitorea métricas de seguridad y genera notificaciones ante incidentes.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://in-toto.io/">In-Toto</a>
      <p>Valida que los artefactos desplegados coincidan con las certificaciones criptográficas del proceso de construcción.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sigstore/rekor">Sigstore Rekor</a>
      <p>Mantiene un registro inmutable y a prueba de manipulaciones de archivos de configuración firmados.</p>
    </td>
  </tr>
</table>
