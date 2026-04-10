---
title: "3.3 Producir Software Bien Asegurado (PW)"
linkTitle: "3.3 Producir Software Bien Asegurado (PW)"
weight: 7
layout: docs
description: >
  3.3 Producir Software Bien Asegurado (PW) en los pasos de CI/CD posteriores al despliegue
---

### 3.3 Producir Software Bien Asegurado (PW) para tareas posteriores al despliegue

Las organizaciones deben producir software bien asegurado con vulnerabilidades de seguridad mínimas en sus versiones.

<br>

**PW.1**

<strong>Diseñar el software para cumplir con los requisitos de seguridad y mitigar los riesgos de seguridad: </strong> Identificar y evaluar los requisitos de seguridad del software; determinar qué riesgos de seguridad es probable que enfrente el software durante su operación y cómo el diseño y la arquitectura del software deben mitigar esos riesgos; y justificar cualquier caso en el que el análisis basado en riesgos indique que los requisitos de seguridad deben relajarse o eximirse. Abordar los requisitos y riesgos de seguridad durante el diseño del software (seguro por diseño) es clave para mejorar la seguridad del software y también ayuda a mejorar la eficiencia del desarrollo.

<br>

Para cumplir con SSDF PW.1 en un contexto posterior al despliegue usando herramientas de código abierto, el enfoque cambia a:

- Mantener un registro a prueba de manipulaciones de cada componente de software en cada versión

- Garantizar que los datos de procedencia permanezcan accesibles para auditorías, investigaciones y respuesta a vulnerabilidades

- Permitir que adquirentes y usuarios posteriores verifiquen de manera independiente el origen y la integridad de cada componente

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="15">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.1.1:</strong>
        <p>Usar formas de modelado de riesgos, como modelado de amenazas, modelado de ataques o mapeo de superficie de ataque, para ayudar a evaluar el riesgo de seguridad del software.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.1.2:</strong>
        <p>Rastrear y mantener los requisitos de seguridad, riesgos y decisiones de diseño del software.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.1.3:</strong>
        <p>Cuando sea apropiado, incorporar soporte para usar funciones y servicios de seguridad estandarizados (por ejemplo, permitir que el software se integre con sistemas existentes de gestión de logs, gestión de identidad, control de acceso y gestión de vulnerabilidades) en lugar de crear implementaciones propietarias de funciones y servicios de seguridad.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/semgrep/semgrep">Semgrep</a>
      <p>Análisis estático y dinámico que puede ejecutarse contra bases de código desplegadas en entornos espejo de staging para detectar patrones inseguros.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/wapiti-scanner/wapiti">Wapiti</a>
      <p>Escáner de seguridad de aplicaciones web para aplicaciones desplegadas.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">Zap (Zed Attack Proxy)</a>
      <p>Pruebas activas y pasivas de aplicaciones en vivo para detectar vulnerabilidades.</p>
  </td>
  </tr>
  <tr>
    <td>
      <a href="https://community.chef.io/tools/chef-inspec">Inspec</a>
      <p>Valida que las aplicaciones desplegadas cumplan con estándares de codificación segura.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://ortelius.io">Ortelius</a>
      <p>Sincronización cada 10 minutos con OSV.dev para detectar nuevas vulnerabilidades en artefactos desplegados.</p>
   </td>
  </tr>   <tr>
    <td>
      <a href="https://www.open-scap.org/features/standards/">OpenSCAP</a>
      <p>Escanea sistemas para verificar cumplimiento con líneas base relacionadas con codificación segura.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://falco.org/">Falco</a>
      <p>Registro y monitoreo: detecta comportamiento inseguro en tiempo de ejecución (por ejemplo, llamadas al sistema inseguras).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://wazuh.com/">Wazuh</a>
      <p>Monitorea logs de la aplicación y del sistema operativo para eventos relacionados con seguridad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/Neo23x0/auditd">AuditD</a>
      <p>Captura llamadas de sistema de bajo nivel relacionadas con la ejecución de código.</p>
  </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Genera SBOMs para aplicaciones desplegadas con monitoreo continuo.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://hoppr.dev/">Hoppr</a>
      <p>Hoppr es un kit de utilidades de SBOM / cadena de suministro: el procesamiento y movimiento de “materiales” de la cadena de suministro se alinea con la recolección, mantenimiento y compartición de procedencia.</p>
     </td>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-track/">OWASP Dependency-Track</a>
      <p>Rastrea continuamente SBOMs para detectar nuevas vulnerabilidades</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Trivy</a>
      <p>Escanea contenedores/sistemas de archivos desplegados para CVEs conocidas en código y dependencias.</p>
   </td>
  </tr>
   <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Escaneo enfocado de vulnerabilidades para artefactos desplegados.</p>
   </td>
  </tr>
</table>

**PW.2**

<strong>Revisar el diseño del software para verificar el cumplimiento con los requisitos de seguridad y la información de riesgos:</strong> Ayudar a garantizar que el software cumpla con los requisitos de seguridad y aborde satisfactoriamente la información de riesgos identificada.

<br>

Para cumplir con SSDF PW.2 en un contexto posterior al despliegue usando herramientas de código abierto, el enfoque cambia a:

- Verificación continua de que el código desplegado (fuente o binario) no ha sido manipulado.

- Evaluación continua de vulnerabilidades en aplicaciones y componentes desplegados.

- Disparadores de revisión de código posteriores a la liberación cuando se detecta una vulnerabilidad o incidente.

- Evidencia auditable de que el software desplegado coincide con el código aprobado y revisado.

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="13">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.2.1:</strong> 
        <p>Tener (1) una persona calificada (o personas) que no hayan estado involucradas con el diseño y/o (2) procesos automatizados instanciados en la cadena de herramientas que revisen el diseño del software para confirmar y hacer cumplir que cumple con todos los requisitos de seguridad y aborda satisfactoriamente la información de riesgos identificada.</p>
      </div>    
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/sigstore/cosign">Sigstore Cosign</a>
      <p>Verifica que los contenedores y binarios desplegados hayan sido firmados en tiempo de compilación.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/sigstore/rekor">Rekor</a>
      <p>Almacena datos de verificación y attestations en un log evidente ante manipulaciones.</p>
  </td>
  </tr>
  <tr>
      <td>
      <a href="https://in-toto.io/">In-Toto</a>
      <p>Garantiza que el código desplegado coincida con los pasos revisados del pipeline de build.</p>
  </td>
  </tr>
    <tr>
      <td>
      <a href="https://github.com/Tripwire/tripwire-open-source">Tripwire OSS </a>
      <p>Monitorea archivos desplegados para detectar cambios no autorizados.</p>
  </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/semgrep/semgrep/">Semgrep</a>
      <p>Revisa código desplegado en espejo para detectar problemas de seguridad o violaciones de políticas.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://codeql.github.com/">GitHub CodeQL</a>
      <p>Consultas avanzadas de código para detectar patrones de vulnerabilidad.</p>
      </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/wapiti-scanner/wapiti">Wapiti</a>
      <p>Escaneo de vulnerabilidades web contra endpoints desplegados.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://ortelius.io">Ortelius</a>
      <p>Rastrea vulnerabilidades en endpoints en vivo para tiempos de remediación rápidos.</p>
   </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">Zap (Zed Attack Proxy)</a>
      <p>Pruebas DAST automatizadas y manuales para aplicaciones en vivo.</p>
  </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sullo/nikto/">Nikto</a>
      <p>Escaneo de vulnerabilidades enfocado en servidores.</p>
  </td>
  </tr> 
  <tr>
    <td>
      <a href="https://www.open-scap.org/features/standards/">OpenSCAP</a>
      <p>Mapea resultados a líneas base de cumplimiento.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://defectdojo.com/community">DefectDojo</a>
      <p>Rastrea vulnerabilidades encontradas durante revisiones posteriores al despliegue y las vincula con la remediación.</p>
    </td>
  </tr>
</table>

**PW.4**

<p><strong>Reutilizar software existente y bien asegurado cuando sea factible en lugar de duplicar funcionalidad:</strong> Reducir los costos del desarrollo de software, acelerar el desarrollo y disminuir la probabilidad de introducir vulnerabilidades de seguridad adicionales en el software reutilizando módulos y servicios de software cuya postura de seguridad ya haya sido verificada. Esto es particularmente importante para software que implementa funcionalidades de seguridad, como módulos y protocolos criptográficos.</p><br>
<p> Nota: PW.3 fue movido a PW.4 </p>

<br>

Para cumplir con SSDF PW.4 en un contexto posterior al despliegue usando herramientas de código abierto, el enfoque cambia a:

- La detección de vulnerabilidades se ejecuta continuamente en entornos de producción o equivalentes a producción.

- Los resultados se triagean y asignan rápidamente.

- Existe una ruta automatizada o semiautomatizada hacia la remediación (por ejemplo, parcheo, reconstrucción de imágenes o actualización de componentes).

- Toda la actividad es auditable y está vinculada a los artefactos de liberación.

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="18">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.4.1:</strong>
        <p>Adquirir y mantener componentes de software bien asegurados (por ejemplo, bibliotecas, módulos, middleware, frameworks) de proveedores comerciales, de código abierto y otros desarrolladores externos para ser utilizados por el software de la organización.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.4.2:</strong>
        <p>Crear y mantener componentes de software bien asegurados internamente siguiendo procesos SDLC para cubrir necesidades comunes de desarrollo interno que no puedan satisfacerse mejor con componentes de terceros.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.4.3:</strong>
        <p>Movido a PW.1.3</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.4.4:</strong>
        <p>Verificar que los componentes de software comerciales, de código abierto y todos los demás componentes de terceros adquiridos cumplan con los requisitos definidos por la organización durante todo su ciclo de vida.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://git-scm.com/">Git</a>
      <p>Almacena reportes de vulnerabilidades firmados y metadatos de commits de parches.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sigstore/rekor">Rekor</a>
      <p>Registra de forma inmutable resultados de escaneo, remediaciones y firmas.</p>
  </td>
  </tr>
  <tr>
    <td>
      <a href="https://ortelius.io">Ortelius</a>
      <p>La auditoría y retención de evidencia rastrea qué entornos están ejecutando qué versión, permitiendo el redespliegue dirigido de builds parchados.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Trivy</a>
      <p>Escanea contenedores en ejecución, sistemas de archivos y clústeres Kubernetes; también genera SBOMs.</p>
   </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Escaneo de vulnerabilidades impulsado por SBOM para imágenes y directorios.</p>
    </td>
  </tr>
    <tr>
      <td>
      <a href="https://github.com/quay/claircore">Clair </a>
      <p>Monitorea registros de contenedores para detectar imágenes vulnerables.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openvas.org/">OpenVAS / Greenbone</a>
      <p>Escaneo de vulnerabilidades de red y hosts.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Genera SBOMs desde entornos desplegados.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-track/">OWASP Dependency-Track</a>
      <p>Monitorea SBOMs para detectar nuevos CVEs y violaciones de políticas.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/nix-community/vulnix">Vulnix</a>
      <p>Escaneo de vulnerabilidades basado en Nix a partir de entradas SBOM.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kyverno.io/">Kyverno</a>
      <p>Controlador de admisión nativo de Kubernetes que aplica umbrales de vulnerabilidad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://falco.org/">Falco</a>
      <p>Detecta anomalías en tiempo de ejecución que pueden indicar explotación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sullo/nikto/">Nikto</a>
      <p>Escaneo de vulnerabilidades enfocado en servidores.</p>
  </td>
  </tr> 
  <tr>
    <td>
      <a href="https://keel.sh/">Keel</a>
      <p>Automatiza redespliegues de contenedores cuando se publica una nueva imagen.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kured.dev/">Kured</a>
      <p>Reinicios automatizados de nodos Kubernetes para parcheo del kernel.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://defectdojo.com/community">DefectDojo</a>
      <p>Centraliza datos de vulnerabilidades provenientes de escáneres; asigna tareas de remediación y rastrea SLAs.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/TheHive-Project/TheHive">The Hive</a>
      <p>Respuesta a incidentes y coordinación para eventos urgentes de vulnerabilidades.</p>
    </td>
  </tr>
</table>

**PW.5**

<strong>Crear código fuente adhiriéndose a prácticas de codificación segura:</strong> Disminuir la cantidad de vulnerabilidades de seguridad en el software y reducir costos minimizando las vulnerabilidades introducidas durante la creación del código fuente que cumplan o superen los criterios de severidad de vulnerabilidad definidos por la organización.

<br>

Para cumplir con SSDF PW.5 en un contexto posterior al despliegue usando herramientas de código abierto, el enfoque cambia a:

- Verificación continua de la integridad, el cumplimiento y la postura de seguridad del software desplegado.

- Validaciones continuas para asegurar que el software en ejecución siga cumpliendo los requisitos de seguridad que tenía al momento de la liberación.

- Detección de drift, nuevas vulnerabilidades introducidas y cambios de configuración.

- Mantenimiento de evidencia verificable de estas validaciones a lo largo del tiempo.

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="16">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.5.1:</strong>
        <p>Seguir todas las prácticas de codificación segura apropiadas para los lenguajes de desarrollo y el entorno, con el fin de cumplir los requisitos de la organización.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Trivy</a>
      <p>Escaneos continuos de contenedores desplegados, sistemas de archivos y clústeres Kubernetes.</p>
   </td>
  </tr>
   <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Detecta CVEs en SBOMs o imágenes desplegadas.</p>
   </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/quay/claircore">Clair </a>
      <p>Escaneo continuo de vulnerabilidades para imágenes en registros.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Genera SBOMs desde sistemas en ejecución para monitoreo continuo.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://community.chef.io/tools/chef-inspec">Inspec</a>
      <p>Define y ejecuta validaciones de cumplimiento (CIS, NIST, políticas específicas de la organización) contra entornos desplegados.</p>
  </td>
  </tr> 
  <tr>
    <td>
      <a href="https://www.open-scap.org/features/standards/">OpenSCAP</a>
      <p>Evalúa sistemas en ejecución contra líneas base de seguridad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/aquasecurity/kube-bench">Kube-bench </a>
      <p>Valida despliegues de Kubernetes contra benchmarks CIS.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/aquasecurity/kube-hunter/">Kube-hunter </a>
      <p>Identifica posibles rutas de ataque en clústeres Kubernetes desplegados.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://falco.org/">Falco</a>
      <p>Detecta cambios en tiempo de ejecución en archivos, procesos y comportamiento de red.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://aide.github.io/">AIDE</a>
      <p>Monitoreo de integridad de archivos para asegurar que binarios/configuraciones no sean alterados.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://osquery.io/">osquery</a>
      <p>Consulta el estado del sistema para detectar cambios de configuración no autorizados.</p>
      </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openpolicyagent.org/">Open Policy Agent</a>
      <p>Aplica políticas continuas de cumplimiento en tiempo de ejecución.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kyverno.io/">Kyverno</a>
      <p>Motor de políticas nativo de Kubernetes para prevenir actualizaciones inseguras.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://defectdojo.com/community">DefectDojo</a>
      <p>Centraliza resultados de verificación y rastrea problemas a lo largo del tiempo.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sigstore/rekor">Rekor</a>
      <p>Almacena reportes de verificación firmados en un registro a prueba de manipulaciones.</p>
    </td>
  </tr>
</table>

**PW.6**

<strong>Configurar los procesos de compilación, intérprete y build para mejorar la seguridad del ejecutable:</strong> Disminuir la cantidad de vulnerabilidades de seguridad en el software y reducir costos eliminando vulnerabilidades antes de que ocurran las pruebas.

<br>

Para cumplir con SSDF PW.6 en un contexto posterior al despliegue usando herramientas de código abierto, el enfoque cambia a:

- Ejecutar escaneos programados sobre contenedores en ejecución, máquinas virtuales y registros; integrarlos con monitoreo de SBOM

- Mantener SBOMs para el software desplegado; monitorear nuevos CVEs.

- Puntuar hallazgos (CVSS, EPSS); priorizar correcciones según severidad y explotabilidad.

- Reconstruir/redesplegar automáticamente cuando haya imágenes parchadas disponibles.

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="9">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.6.1:</strong>
        <p>Usar compiladores, intérpretes y herramientas de build que ofrezcan funcionalidades para mejorar la seguridad del ejecutable.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.6.2:</strong>
        <p>Determinar qué funcionalidades de compiladores, intérpretes y herramientas de build deben usarse y cómo debe configurarse cada una, luego implementar y usar las configuraciones aprobadas.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Trivy</a>
      <p>Trivy ejecuta escaneos semanales sobre todas las imágenes de contenedores y hosts de producción → los resultados son firmados y registrados en Rekor.</p>
   </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Regenera SBOMs para artefactos desplegados y marca nuevos CVEs.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://defectdojo.com/community">DefectDojo</a>
      <p>Puntuación CVSS + asignación de SLA a los responsables.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://keel.sh/">Keel</a>
      <p>Reconstrucción/redespliegue automático cuando haya imágenes parchadas disponibles.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kured.dev/">Kured</a>
      <p>Reinicios automatizados de nodos Kubernetes para parcheo del kernel.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://argoproj.github.io/rollouts/">Argo Rollouts</a>
      <p>Usa despliegues canary/escalonados para versiones parchadas.</p>
  </td>
  </tr> 
  <tr>
    <td>
      <a href="https://www.openvas.org/">OpenVAS</a>
      <p>Ejecuta escaneos programados en contenedores en ejecución, máquinas virtuales y registros; se integra con monitoreo de SBOM.</p>
    </td>
  <tr>
    <td>
      <a href="https://github.com/sigstore/rekor">Rekor</a>
      <p>Almacena registros firmados de detección, triage, corrección y verificación.</p>
  </td>
  </tr>
</table>

**PW.7**

<strong>Revisar y/o analizar código legible por humanos para identificar vulnerabilidades y verificar el cumplimiento con los requisitos de seguridad:</strong> Ayudar a identificar vulnerabilidades para que puedan corregirse antes de que el software sea liberado y así prevenir su explotación. El uso de métodos automatizados reduce el esfuerzo y los recursos necesarios para detectar vulnerabilidades. El código legible por humanos incluye código fuente, scripts y cualquier otra forma de código que la organización considere legible por humanos.

<br>

Para cumplir con SSDF PW.7 en un contexto posterior al despliegue usando herramientas de código abierto, el enfoque cambia a:

- Mantener un registro que demuestre que la versión desplegada pasó por el proceso requerido por la organización de revisión de código y/o análisis automatizado.

- Garantizar que todos los parches de emergencia/hotfix enviados después del despliegue también sean revisados o analizados, incluso si se hace después de la liberación.

- Mantener evidencia lista para auditoría.

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="5">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.7.1:</strong>
        <p>Determinar si debe utilizarse revisión de código (una persona observa directamente el código para encontrar problemas) y/o análisis de código (se usan herramientas para encontrar problemas en el código, ya sea de forma totalmente automatizada o en conjunto con una persona), según lo definido por la organización.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.7.2:</strong>
        <p>Realizar la revisión de código y/o el análisis de código con base en los estándares de codificación segura de la organización, y registrar y triagear todos los problemas descubiertos y las remediaciones recomendadas en el flujo de trabajo del equipo de desarrollo o en el sistema de seguimiento de issues.</p> 
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/semgrep/semgrep">Semgrep</a>
      <p>Ejecuta SAST contra el código exacto vinculado a los binarios desplegados; incluye escaneo de dependencias.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://codeql.github.com/">GitHub CodeQL</a>
      <p>Vuelve a ejecutar el análisis de código en espejos de producción.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://defectdojo.com/community">DefectDojo</a>
      <p>Mantiene registros inmutables de todas las revisiones, aprobaciones y ejecuciones de análisis automatizado.</p>
    </td>
  <tr>
    <td>
      <a href="https://github.com/sigstore/rekor">Rekor</a>
      <p>Commits firmados, historial de ramas protegidas y resultados de escaneo.</p>
    </td>
  </tr>
</table>

**PW.8**

<strong>Probar código ejecutable para identificar vulnerabilidades y verificar el cumplimiento con los requisitos de seguridad:</strong> Ayudar a identificar vulnerabilidades para que puedan ser corregidas antes de que el software sea liberado con el fin de prevenir su explotación. El uso de métodos automatizados reduce el esfuerzo y los recursos necesarios para detectar vulnerabilidades y mejora la trazabilidad y la repetibilidad. El código ejecutable incluye binarios, bytecode ejecutado directamente y código fuente,  
y cualquier otra forma de código que la organización considere ejecutable.

<br>

Para cumplir con SSDF PW.8 en un contexto posterior al despliegue usando herramientas de código abierto, el enfoque cambia a:

- Probar continuamente los ejecutables desplegados para detectar vulnerabilidades

- Verificar el cumplimiento con los requisitos de seguridad

- Retroalimentar los hallazgos al desarrollo

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="9">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.8.1:</strong>
        <p>Determinar si debe realizarse pruebas de código ejecutable para encontrar vulnerabilidades no identificadas por revisiones, análisis o pruebas previas y, de ser así, qué tipos de pruebas deben utilizarse.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.8.2:</strong>
        <p>Definir el alcance de las pruebas, diseñarlas, ejecutarlas y documentar los resultados, incluyendo el registro y triage de todos los problemas descubiertos y las remediaciones recomendadas en el flujo de trabajo del equipo de desarrollo o en el sistema de seguimiento de issues.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Trivy</a>
      <p>Escanea contenedores y sistemas de archivos desplegados para detectar CVEs conocidas en código y dependencias.</p>
   </td>
  </tr>
   <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Escaneo enfocado de vulnerabilidades para artefactos desplegados.</p>
   </td>
  </tr>
  <tr>
    <td>
      <a href="https://ortelius.io">Ortelius</a>
      <p>Sincronización cada 10 minutos con OSV.dev para detección de nuevas vulnerabilidades en artefactos desplegados.</p>
   </td>
  </tr>
  <tr>
      <td>
      <a href="https://www.openvas.org/">OpenVAS / Greenbone</a>
      <p>Escaneo de vulnerabilidades de red y hosts.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://community.chef.io/tools/chef-inspec">Inspec</a>
      <p>Mapea resultados de escaneo a estándares de seguridad (NIST, CIS, OWASP ASVS).</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://www.open-scap.org/features/standards/">OpenSCAP</a>
      <p>Resultados de escaneo de cumplimiento, perfiles base, documentación de excepciones.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/wapiti-scanner/wapiti">Wapiti</a>
      <p>DAST, fuzzing y monitoreo en tiempo de ejecución para detectar comportamiento inseguro.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.zaproxy.org/">Zap (Zed Attack Proxy)</a>
      <p>Reportes de DAST y fuzzing.</p>
    </td>
  </tr>
</table>

**PW.9**

<strong>Configurar el software para que tenga configuraciones seguras por defecto: </strong> Ayudar a mejorar la seguridad del software en el momento de la instalación para reducir la probabilidad de que el software sea desplegado con configuraciones de seguridad débiles, poniéndolo en mayor riesgo de compromiso.

<br>

Para cumplir con SSDF PW.9 en un contexto posterior al despliegue usando herramientas de código abierto, el enfoque cambia a:

- Verificar el software y la infraestructura desplegados contra la línea base de configuración segura de la organización (por ejemplo, NIST 800-53, CIS Benchmarks, DISA STIGs).

- Usar policy-as-code y herramientas de gestión de configuración para mantener los sistemas desplegados en cumplimiento.

- Integrar validaciones de configuración dentro del monitoreo en tiempo de ejecución

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="9">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.9.1:</strong>
        <p>Definir una línea base segura determinando cómo configurar cada ajuste que tenga efecto en la seguridad o que sea un ajuste relacionado con seguridad, de modo que la configuración por defecto sea segura y no debilite las funciones de seguridad proporcionadas por la plataforma, la infraestructura de red o los servicios.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PW.9.2:</strong>
        <p>Implementar las configuraciones por defecto (o grupos de configuraciones por defecto, si aplica) y documentar cada configuración para los administradores del software.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://ortelius.io">Ortelius</a>
      <p>Monitorea continuamente drift en configuraciones de contenedores.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://community.chef.io/tools/chef-inspec">Inspec</a>
      <p>Compara sistemas desplegados contra líneas base seguras de configuración (NIST, CIS, STIG).</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://www.open-scap.org/features/standards/">OpenSCAP</a>
      <p>Compara sistemas desplegados contra líneas base seguras de configuración (NIST, CIS, STIG).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://falco.org/">Falco</a>
      <p>Monitorea continuamente cambios de configuración; alerta o autorremedia desviaciones.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://wazuh.com/">Wazuh</a>
      <p>Logs de detección de drift y acciones de remediación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/ansible/ansible-examples">Ansible</a>
      <p>Policy-as-code y gestión de configuración para asegurar que todos los despliegues coincidan con la línea base.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/saltstack/salt">Saltstack</a>
      <p>Playbooks de configuración, logs de enforcement e historial de cambios de políticas.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://git-scm.com/">Git</a>
      <p>Almacena resultados de escaneo firmados y registros de detección de drift en sistemas evidentes ante manipulaciones.</p>
    </td>
  </tr>
</table>
