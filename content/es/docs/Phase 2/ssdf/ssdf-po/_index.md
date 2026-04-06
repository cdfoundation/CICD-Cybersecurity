---
title: "2.1 Preparar la Organización (PO)"
linkTitle: "2.1 Preparar la Organización (PO)"
weight: 5
layout: docs
description: >
  2.1 Preparar la Organización (PO) para los pasos de CI/CD de Build y Deploy
---

### 2.1 Preparar la Organización (PO) - Tareas de Build y Deploy

Las organizaciones deben asegurarse de que su personal, procesos y tecnología estén preparados para realizar desarrollo de software seguro a nivel organizacional. Muchas organizaciones encontrarán que algunas prácticas de PO también son aplicables a subconjuntos de su desarrollo de software, como grupos de desarrollo individuales o proyectos.

<br>

**PO.1**
<strong>Definir Requisitos de Seguridad para el Desarrollo de Software</strong>: Asegurar que los requisitos de seguridad para el desarrollo de software sean conocidos en todo momento, de manera que puedan ser considerados a lo largo del SDLC y se minimice la duplicación de esfuerzos, ya que la información de los requisitos puede recopilarse una sola vez y compartirse. Esto incluye requisitos de fuentes internas (por ejemplo, las políticas de la organización, objetivos de negocio y estrategia de gestión de riesgos) y fuentes externas (por ejemplo, leyes y regulaciones aplicables).

<br>

Para cumplir con SSDF PO.1 en un contexto de Build y Deploy usando herramientas de código abierto, el enfoque se desplaza de solo definir a:

- Aplicar políticas de seguridad sobre dependencias, código y configuraciones.

- Verificar el cumplimiento con las bases de seguridad establecidas antes del despliegue.

- Asegurar que los artefactos cumplan con los requisitos de seguridad del DoD, NIST u organizacionales.

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
      <p>Motor de políticas de propósito general usando Rego para aplicar políticas en servicios, CI/CD e infraestructura.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.conftest.dev/">Conftest</a>
      <p>Usa el lenguaje Rego de OPA para probar manifests de Kubernetes, Terraform y Dockerfiles contra requisitos de seguridad predefinidos.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://www.chef.io/products/chef-inspec">InSpec</a>
      <p>Prueba infraestructuras y aplicaciones desplegadas contra frameworks de cumplimiento (por ejemplo, CIS Benchmarks, NIST 800-53).</p>
    </td>
  </tr>
     <tr>
    <td>
      <a href="https://kyverno.io/"> Kyverno</a>
      <p>Motor de políticas nativo de Kubernetes para aplicar configuraciones seguras en el momento del despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.checkov.io/">Checkov</a>
      <p>Escanea Infraestructura como Código (IaC) durante la compilación para asegurar el cumplimiento de los requisitos de seguridad antes del despliegue.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://aquasecurity.github.io/trivy/">Trivy</a>
      <p>Escanea imágenes de contenedores, IaC y SBOMs para vulnerabilidades y configuraciones incorrectas antes del despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/quay/clair">Clair</a>
      <p>Análisis estático de imágenes de contenedores para asegurar que cumplan con los requisitos de seguridad antes de enviarlas al registro.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Escaneo de vulnerabilidades en imágenes de contenedores y sistemas de archivos para validar artefactos contra políticas antes del despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://sigstore.dev/">Sigstore Cosign</a>
      <p>Firmar y verificar imágenes de contenedores y otros artefactos de compilación para asegurar su integridad y procedencia.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://conforma.dev/">Conforma</a>
      <p>Verifica de forma segura artefactos de la cadena de suministro y aplica políticas sobre cómo fueron construidos y probados. Construido con Sigstore y Open Policy Agent, puede verificar el cumplimiento de procedencia SLSA con políticas extensibles.</p>
    </td>
  </tr>
</table>

**PO.2**

<strong>Implementar Roles y Responsabilidades: </strong> Asegurar que todas las personas, dentro y fuera de la organización, involucradas en el SDLC estén preparadas para desempeñar sus roles y responsabilidades relacionadas con el SDLC durante todo el ciclo de vida del desarrollo de software.

<br>

Para cumplir con SSDF PO.2 en un contexto de Build y Deploy usando herramientas de código abierto, el enfoque se traslada a:

- Aplicar control de acceso basado en roles (RBAC) para limitar quién puede iniciar compilaciones, aprobar cambios y desplegar.

- Proporcionar registros de auditoría y trazabilidad de las acciones para garantizar responsabilidad.

- Asegurar que los cambios de código y despliegues sean revisados por personal autorizado.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.2.1:</strong>
        <p>Crear nuevos roles y modificar responsabilidades de los roles existentes según sea necesario para abarcar todas las partes del SDLC. Revisar y mantener periódicamente los roles y responsabilidades definidos, actualizándolos según se requiera.</p><br>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.2.2:</strong>
        <p>Proporcionar formación basada en roles para todo el personal con responsabilidades que contribuyan al desarrollo seguro. Revisar periódicamente la competencia del personal y la formación basada en roles, y actualizar la formación según sea necesario.</p><br>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.2.3:</strong>
        <p>Obtener el compromiso de la alta dirección o del funcionario autorizado con el desarrollo seguro y comunicar ese compromiso a todos los involucrados en roles y responsabilidades relacionadas con el desarrollo.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.keycloak.org/">Keycloak</a>
      <p>Gestión de identidad y acceso de código abierto para aplicar RBAC en pipelines de CI/CD y herramientas de despliegue.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://dexidp.io/">Dex</a>
      <p>Proveedor federado de OpenID Connect para integrar identidades de desarrolladores en sistemas de build y deploy con control de acceso basado en roles.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.vaultproject.io/">Vault by HashiCorp</a>
      <p>Gestiona y controla de manera segura el acceso a secretos según roles definidos durante builds y despliegues.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://argo-cd.readthedocs.io/">Argo CD</a>
      <p>Herramienta de despliegue GitOps con RBAC para controlar quién puede sincronizar, aprobar o revertir despliegues.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://plugins.jenkins.io/role-strategy/">Jenkins with Role Strategy Plugin</a>
      <p>Agrega RBAC detallado a pipelines de Jenkins, limitando acciones de build y deploy a roles autorizados.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://tekton.dev/">Tekton Pipelines</a>
      <p>CI/CD nativo de Kubernetes con RBAC de Kubernetes para controlar permisos de ejecución de pipelines.</p>
     </td>
  </tr> 
   <tr>
    <td>
      <a href="https://fluxcd.io/">Flux CD</a>
      <p>Herramienta GitOps que aplica RBAC para workflows de despliegue y requiere aprobaciones para cambios.</p>
     </td>
  </tr>
  <tr>
     <td>
      <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">Kubernetes RBAC</a>
      <p>Control de acceso incorporado para restringir quién puede desplegar, modificar o eliminar cargas de trabajo.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://gitea.io/">Gitea</a>
      <p>Servicio Git autoalojado con roles de usuario y permisos de repositorio para aplicar flujos de trabajo de aprobación y revisión.</p>
     </td>
  </tr>   
  <tr>
    <td>
      <a href="https://www.elastic.co/beats/auditbeat">Auditbeat</a>
      <p>Proporciona registro de auditoría para acciones de build y deploy, ayudando a rastrear el cumplimiento de las responsabilidades asignadas.</p>
     </td>
  </tr>     
 </table>

**PO.3**

<strong>Implementar Cadenas de Herramientas de Soporte</strong>: Utilizar automatización para reducir el esfuerzo humano y mejorar la precisión, reproducibilidad, usabilidad y exhaustividad de las prácticas de seguridad a lo largo del SDLC, así como proporcionar una forma de documentar y demostrar el uso de estas prácticas. Las cadenas de herramientas y herramientas pueden utilizarse en diferentes niveles de la organización, como a nivel organizacional o específico de proyecto, y pueden abordar una parte particular del SDLC, como un pipeline de build.

<br>

Para cumplir con SSDF PO.3 en un contexto de Build y Deploy usando herramientas de código abierto, el enfoque se centra en:

- Asegurar que las herramientas de build y despliegue estén configuradas de forma segura y se mantengan actualizadas.

- Proteger contra ataques a la cadena de suministro que apunten al pipeline de CI/CD.

- Verificar la integridad de herramientas y artefactos antes de su uso.

- Controlar y monitorear el acceso a las cadenas de herramientas.

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
        <p>Especificar qué herramientas o tipos de herramientas deben o deberían incluirse en cada cadena de herramientas para mitigar los riesgos identificados, así como cómo se deben integrar entre sí los componentes de la cadena de herramientas.</p><br>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.3.2:</strong>
        <p>Seguir las prácticas de seguridad recomendadas para desplegar, operar y mantener herramientas y cadenas de herramientas.</p><br>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.3.3:</strong>
        <p>Configurar las herramientas para generar artefactos que respalden las prácticas de desarrollo de software seguro definidas por la organización.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://sigstore.dev/">Sigstore Cosign</a>
      <p>Firma y verifica artefactos de build para evitar el despliegue de software manipulado.</p>
  </tr>
  <tr>
    <td>
      <a href="https://slsa.dev/">Marco SLSA + slsa-verifier</a>
      <p>Garantiza la procedencia del build y verifica la integridad de los artefactos antes del despliegue.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://gitleaks.io/">Gitleaks</a>
      <p>Escanea repositorios y pipelines de build en busca de secretos antes de la ejecución del build.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://argo-cd.readthedocs.io/">Argo CD</a>
      <p>Herramienta de despliegue GitOps con RBAC para controlar quién puede sincronizar, aprobar o revertir despliegues.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://aquasecurity.github.io/trivy/">Trivy</a>
      <p>Escanea contenedores de herramientas CI/CD y sus dependencias en busca de vulnerabilidades.</p>
     </td>
  </tr>
  <tr>
   <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Genera SBOMs de artefactos de build para rastrear los componentes usados en la cadena de herramientas.</p>
     </td>
  </tr> 
  <tr>
    <td>
      <a href="https://konflux-ci.dev/docs/building/hermetic-builds/">Builds herméticos con Konflux-ci</a>
      <p>Builds con dependencias fijadas y predescargadas en entornos aislados para habilitar builds reproducibles y verificables.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://hermetoproject.github.io/hermeto/">Hermeto</a>
      <p>Pre-descarga dependencias para builds herméticos, genera SBOMs y asegura builds de contenedores aislados de red con checksums verificables.</p>
     </td>
  </tr>
   <tr>
  <td>
     <a href="https://github.com/quay/clair">Clair</a>
      <p>Analiza imágenes de contenedores usados en builds/despliegues para detectar vulnerabilidades.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.vaultproject.io/">Vault de HashiCorp</a>
      <p>Protege secretos usados por herramientas de build/despliegue, asegurando que no se expongan en los pipelines.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openpolicyagent.org/">Open Policy Agent (OPA)</a>
      <p>Aplica políticas como código en workflows de CI/CD y despliegue usando Rego para prevenir acciones inseguras.</p>
     </td>
  </tr> 
  <tr>
    <td>
      <a href="https://konflux-ci.dev/">Fábrica de software Konflux-ci para Tekton</a>
      <p>Implementa el <a href="https://in-toto.io/docs/what-is-in-toto/">framework In-toto</a> usando pipelines como código.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.elastic.co/beats/auditbeat">Auditbeat</a>
      <p>Monitorea y registra la actividad de la cadena de herramientas CI/CD para garantizar integridad y cumplimiento.</p>
     </td>
  </tr>
 </table>
 
**PO.4**
<strong>Define and Use Criteria for Software Security Checks:</strong> Help ensure that the software resulting from the SDLC meets the organization’s expectations by defining and using criteria for checking the software’s security during development.

<br>

Para cumplir con SSDF PO.4 en un contexto de Build y Deploy usando herramientas de código abierto, el enfoque se centra en:

- Aplicar prácticas consistentes de pruebas y validación de seguridad antes del lanzamiento.

- Automatizar las verificaciones de seguridad en los pipelines de CI/CD.

- Utilizar procesos estandarizados para verificar, firmar y rastrear artefactos.

- Integrar controles de seguridad para que ningún artefacto inseguro sea desplegado.

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
        <p>Definir criterios para las verificaciones de seguridad del software y hacer seguimiento a lo largo del SDLC.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.4.2:</strong>
        <p>Implementar procesos, mecanismos, etc., para recopilar y proteger la información necesaria en apoyo de los criterios.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a>
      <p>Automatiza el escaneo de dependencias de código abierto en los builds para aplicar una detección consistente de vulnerabilidades.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://semgrep.dev/">Semgrep</a>
      <p>Análisis estático integrado en los builds para asegurar verificaciones consistentes de seguridad del código antes del despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://bandit.readthedocs.io/">Bandit (para Python)</a>
      <p>Linter de seguridad para Python en pipelines de build para mantener verificaciones consistentes por lenguaje.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://aquasecurity.github.io/trivy">Trivy</a>
      <p>Escaneo consistente de vulnerabilidades e IaC antes del despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype">Grype</a>
      <p>Mantiene escaneos de vulnerabilidades consistentes para todos los artefactos de build.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://www.chef.io/products/chef-inspec">InSpec</a>
      <p>Automatiza verificaciones de cumplimiento antes del despliegue para asegurar que las prácticas coincidan con los estándares organizacionales.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://sigstore.dev/">Sigstore Cosign</a>
      <p>Estandariza la firma y verificación de artefactos para que solo builds confiables sean desplegados.</p>
    </td>
  </tr>   
  <tr>
    <td>
      <a href="https://www.openpolicyagent.org/">Open Policy Agent (OPA)</a>
      <p>Aplica políticas de despliegue a nivel organizacional en todos los entornos.</p>
    </td>
  </tr>   
  <tr>
    <td>
      <a href="https://www.defectdojo.org/">DefectDojo</a>
      <p>Centraliza y estandariza el seguimiento de vulnerabilidades y flujos de remediación en todos los builds.</p>
    </td>
  </tr>         
</table>

**PO.5**
<strong>Implementar y Mantener Entornos Seguros para el Desarrollo de Software:</strong> Asegúrese de que todos los componentes de los entornos de desarrollo de software estén fuertemente protegidos contra amenazas internas y externas, para evitar compromisos de los entornos o del software que se desarrolla o mantiene en ellos. Ejemplos de entornos de desarrollo incluyen entornos de desarrollo, build, prueba y distribución.

<br>

Para cumplir con SSDF PO.5 en un contexto de Build y Deploy usando herramientas de código abierto, el enfoque se centra en:

Proteger la infraestructura de CI/CD contra amenazas internas y externas.
Endurecer servidores de build, registros de contenedores y sistemas de despliegue.
Asegurar que los entornos de build y despliegue estén parchados, monitoreados y con control de acceso.
Prevenir código malicioso o manipulación en la cadena de suministro de software.
<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="14">
      <div style="padding-top: 8px; padding-bottom: 8px">
      <strong>PO.5.1:</strong>
      <p>Separar y proteger cada entorno involucrado en el desarrollo de software.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.5.2:</strong>
        <p>Asegurar y reforzar los endpoints de desarrollo (i.e., endpoints para diseñadores de software, desarrolladores, testers, builders, etc.) para realizar tareas de desarrollo utilizando un enfoque basado en riesgos.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://plugins.jenkins.io/configuration-as-code/">Jenkins Configuration as Code + Role Strategy Plugin</a>
      <p>Protege los servidores de build de Jenkins con configuraciones codificadas y RBAC para limitar el acceso a trabajos críticos de build.</p>
    </td>
  </tr>
    <tr>
    <td>
      <a href="https://tekton.dev/">Tekton Pipelines</a>
      <p>Framework CI/CD nativo de Kubernetes con control de acceso basado en roles (RBAC).</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://argo-cd.readthedocs.io/">Argo CD</a>
      <p>Despliegue GitOps con RBAC y verificación de commits firmados para despliegues a producción.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://www.vaultproject.io/">Vault by HashiCorp</a>
      <p>Protege secretos en entornos de build y despliegue, previniendo fugas en los pipelines.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://sigstore.dev/">Sigstore Cosign</a>
      <p>Firma artefactos de build y los verifica antes del despliegue para asegurar que no fueron manipulados.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://in-toto.io/">In-toto</a>
      <p>Proporciona seguridad de extremo a extremo en la cadena de suministro de software, asegurando que cada paso del build/despliegue esté firmado y verificado.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://www.chef.io/products/chef-inspec">InSpec</a>
      <p>Ejecuta escaneos de cumplimiento continuo en servidores de desarrollo y build; aplica benchmarks CIS/NIST.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://slsa.dev/">SLSA + slsa-verifier</a>
      <p>Verifica la procedencia del build, asegurando que los artefactos provienen de un entorno de build confiable y no comprometido.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://aquasecurity.github.io/trivy/">Trivy</a>
      <p>Escanea contenedores e infraestructura de build/despliegue en busca de vulnerabilidades y configuraciones incorrectas.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://falco.org/">Falco</a>
      <p>Seguridad en tiempo de ejecución para entornos de build y despliegue, detectando comportamientos maliciosos o actividad no autorizada.</p>
    </td>
  </tr> 
 <tr>
    <td>
      <a href="https://www.elastic.co/beats/auditbeat">Auditbeat</a>
      <p>Monitorea servidores de build y despliegue para cambios en la integridad de archivos, accesos no autorizados y eventos de seguridad.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://kyverno.io/">Kyverno</a>
      <p>Aplica políticas de seguridad de Kubernetes en los entornos de despliegue (ej., no permitir pods privilegiados).</p>
    </td>
  </tr>           
</table>
