---
title: "1.1 Preparar la Organización (PO)"
linkTitle: "1.1 Preparar la Organización (PO)"
weight: 5
layout: docs
description: >
  1.1 Tareas de la Fase 1: Preparar la Organización (PO)
---

## 1.1 Preparar la Organización (PO) para las Tareas de Código y Preconstrucción

Las organizaciones deben asegurarse de que su personal, procesos y tecnología estén preparados para llevar a cabo un desarrollo de software seguro a nivel organizacional. Muchas organizaciones encontrarán que algunas prácticas de PO también son aplicables a subconjuntos de su desarrollo de software, como grupos de desarrollo individuales o proyectos.

<br>

### PO.2 Implementar Roles y Responsabilidades

Asegúrate de que todas las personas, tanto dentro como fuera de la organización, involucradas en el SDLC estén preparadas para desempeñar sus roles y responsabilidades relacionados con el SDLC a lo largo de todo el ciclo de vida.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="2">
      <strong>PO.2.1</strong>:
      <p>Crear nuevos roles y modificar las responsabilidades de los roles existentes según sea necesario para abarcar todas las partes del SDLC. Revisar y mantener periódicamente los roles y responsabilidades definidos, actualizándolos según se requiera.</p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">Designar un grupo de individuos como propietarios del código para cada proyecto y revisar la lista anualmente.</p>
    </td>
    <td>
      <p><a href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners/">GitHub CODEOWNERS</a></p>
      <p>GitHub CODEOWNERS es una función del repositorio que permite a los equipos definir formalmente quién es responsable de qué partes del código y quién debe revisar los cambios antes de que se fusionen.</p>
    </td>
  </tr>
  <tr>
    <td>
      <p><a href="https://docs.gitlab.com/user/project/codeowners/">GitLab CODEOWNERS</a></p>
      <p>GitLab CODEOWNERS es una función del repositorio que permite a los equipos definir formalmente quién es responsable de qué partes del código y quién debe revisar los cambios antes de que se fusionen.</p>
    </td>
  </tr>
</table>
<br>

### PO.3 Implementar Cadenas de Herramientas de Soporte

Usa la automatización para reducir el esfuerzo humano y mejorar la precisión, reproducibilidad, usabilidad y exhaustividad de las prácticas de seguridad a lo largo del SDLC, además de proporcionar una forma de documentar y demostrar el uso de estas prácticas. Las cadenas de herramientas y las herramientas pueden usarse en diferentes niveles de la organización, como a nivel organizacional o específico de un proyecto, y pueden abordar una parte particular del SDLC, como un pipeline de construcción.

<br>

<table style="width:100%">
<tr>
  <th style="width: 30%">Tareas</th>
  <th style="width: 70%">Herramientas</th>
</tr>
<tr>
  <td rowspan="20">
    <div style="padding-top: 8px; padding-bottom: 8px">
      <strong>PO.3.1</strong>:
      <p>Especificar qué herramientas o tipos de herramientas deben o deberían incluirse en cada cadena de herramientas para mitigar los riesgos identificados, así como cómo se deben integrar entre sí los componentes de la cadena de herramientas.</p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">Usar fábricas de software y/o plantillas de software para estandarizar la cadena de herramientas.</p>
    </div>
    <div style="padding-top: 8px; padding-bottom: 8px">
      <strong>PO.3.2</strong>:
      <p>Seguir las prácticas de seguridad recomendadas para desplegar, operar y mantener herramientas y cadenas de herramientas.</p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">Usar configuración basada en código para las cadenas de herramientas (por ejemplo, pipelines-as-code, toolchains-as-code).</p>
    </div>
    <div style="padding-top: 8px; padding-bottom: 8px">
      <strong>PO.3.3</strong>:
      <p>Configurar las herramientas para generar artefactos que evidencien su soporte a las prácticas de desarrollo de software seguro definidas por la organización.</p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">Usar herramientas existentes (por ejemplo, seguimiento de workflows, seguimiento de incidencias, mapeo de flujo de valor) para crear un historial de auditoría de las acciones relacionadas con el desarrollo seguro que se realizan con fines de mejora continua. Registrar aprobaciones, rechazos y solicitudes de excepciones de chequeos de seguridad como parte del sistema de workflow y seguimiento.</p>
    </div>
</td>
  <td>
    <p><a href="https://backstage.io/docs/features/software-templates/">Backstage Software Templates</a></p>
    <p>Backstage Software Templates es un mecanismo de scaffolding y estandarización que ayuda a los equipos a crear nuevos servicios, pipelines e infraestructura de manera consistente y conforme. Permite a los equipos de plataforma definir rutas óptimas para crear componentes de software. Una plantilla captura buenas prácticas, herramientas requeridas y estándares organizacionales, generando automáticamente repositorios, configuraciones y documentación.</p>
  </td>
</tr>
<tr>
  <td>
    <p><a href="https://konflux-ci.dev/">Konflux-ci software factory for Tekton</a></p>
    <p>La fábrica de software Konflux para Tekton es un sistema CI seguro y estandarizado que se apoya en Tekton para convertir pipelines en una fábrica confiable de la cadena de suministro de software. Konflux añade una capa que garantiza cómo deben ejecutarse los pipelines para que sus resultados sean confiables. Implementa el framework <a href="https://in-toto.io/docs/what-is-in-toto/">in-toto</a>.</p>
  </td>
</tr>
<tr>
  <td>
    <p><a href="https://cdevents.dev/">CDF CDEvents</a></p>
    <p>CDEvents es una especificación común para eventos de entrega continua, permitiendo interoperabilidad en todo el ecosistema de producción de software.</p>
  </td>
</tr>
<tr>
  <td>
    <p><a href="https://www.jenkins.io/solutions/pipeline/">Jenkins Jenkinsfile</a></p>
    <p>Un Jenkinsfile de Jenkins es una definición declarativa o scriptada de un pipeline CI/CD, escrita como código y almacenada en un repositorio de origen. Describe cómo se construye, prueba, escanea, empaqueta y despliega el software. Al residir junto al código de la aplicación, permite pipelines-as-code—automatización versionada, revisable y auditable.</p>
  </td>
</tr>
<tr>
  <td>
    <p><a href="https://docs.github.com/en/actions/about-github-actions/understanding-github-actions">GitHub Actions (.github/workflows)</a></p>
    <p>El directorio .github/workflows de GitHub Actions es el lugar central donde se define la automatización CI/CD como código para un repositorio GitHub. Contiene archivos YAML que describen workflows, cuándo deben ejecutarse y qué jobs y pasos se realizan ante eventos del repositorio.</p>
  </td>
</tr>
<tr>
  <td>
    <p><a href="https://docs.gitlab.com/ci/pipelines/">GitLab CI/CD (.gitlab-ci.yml)</a></p>
    <p>El archivo .gitlab-ci.yml de GitLab CI/CD es la definición única y autorizada de un pipeline que indica cómo GitLab debe construir, probar, asegurar y desplegar una aplicación. Es un archivo YAML basado en pipelines-as-code ubicado en la raíz del repositorio, definiendo jobs, orden y condiciones cuando hay cambios de código.</p>
  </td>
</tr>
<tr>
  <td>
    <p><a href="https://github.com/armory/dinghy/">Spinnaker Dinghy</a></p>
    <p>Spinnaker Dinghy es un servicio de configuración como código que permite a los equipos definir y gestionar pipelines de despliegue de Spinnaker usando Git en lugar de la interfaz. Los pipelines se escriben como JSON o YAML y se sincronizan automáticamente al hacer commit.</p>
  </td>
</tr>
<tr>
  <td>
    <p><a href="https://argo-cd.readthedocs.io/en/stable/user-guide/ci_automation/">Argo CD</a></p>
    <p>Argo CD es una herramienta GitOps de entrega continua para Kubernetes que despliega automáticamente y mantiene las aplicaciones sincronizadas con lo declarado en Git. Trata a Git como la única fuente de verdad.</p>
  </td>
</tr>
<tr>
  <td>
    <p><a href="https://pipelinesascode.com/">Tekton Pipelines-as-Code</a></p>
    <p>Tekton Pipelines-as-Code es una forma basada en Git de definir y ejecutar pipelines Tekton CI/CD directamente desde pull requests, tratando los pipelines como artefactos de código de primera clase.</p>
  </td>
</tr>
<tr>
  <td>
    <p><a href="https://opentofu.org/">OpenTofu</a></p>
    <p>OpenTofu es una herramienta open-source de Infrastructure as Code (IaC) usada para definir, provisionar y gestionar infraestructura cloud y on-prem mediante archivos de configuración declarativos.</p>
  </td>
</tr>
<tr>
  <td>
    <p><a href="https://konflux-ci.dev/docs/building/hermetic-builds/">Konflux-ci</a></p>
    <p>Konflux es una plataforma CI open-source y cloud-native diseñada para producir artefactos de software confiables, reproducibles y verificables, priorizando integridad, procedencia y repetibilidad, ideal para entornos regulados y críticos.</p>
    <p><strong>Python:</strong>
      <a href="https://packaging.python.org/en/latest/specifications/pylock-toml/#pylock-toml-spec">
        pylock.toml
      </a> (preferido, estándar más reciente)
    </p>
    <ul>
      <li>
        <a href="https://docs.astral.sh/uv/pip/compile/">uv</a> — usa pylock.toml
      </li>
      <li>
        <a href="https://github.com/conda/conda-lock/">conda-lock</a> — reproducible, menos estándar
      </li>
      <li>
        <a href="https://pip.pypa.io/en/stable/cli/pip_freeze/">pip freeze</a> — no completamente reproducible
      </li>
    </ul>
    <p><strong>JavaScript:</strong></p>
    <ul>
      <li>
        <a href="https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json">
          package-lock.json
        </a> — usar con
        <a href="https://docs.npmjs.com/cli/v9/commands/npm-ci">npm ci</a>
      </li>
      <li>
        <a href="https://classic.yarnpkg.com/lang/en/docs/cli/install/">yarn.lock</a>
      </li>
    </ul>
    <p><strong>Java / Kotlin / Groovy:</strong>
      <a href="https://maven.apache.org/guides/mini/guide-reproducible-builds.html">Maven</a>,
      <a href="https://docs.gradle.org/current/userguide/working_with_files.html#sec:reproducible_archives">Gradle</a>
    </p>
    <p><strong>C# / .NET:</strong>
      <a href="https://learn.microsoft.com/en-us/nuget/consume-packages/package-references-in-project-files#locking-dependencies">
        Archivos lock de NuGet
      </a>,
      <a href="https://www.nuget.org/packages/DotNet.ReproducibleBuilds/">DotNet.ReproducibleBuilds</a>
    </p>
    <p><strong>C++:</strong> <a href="https://bazel.build/external/overview">Bazel</a></p>
    <p><strong>Rust:</strong> <a href="https://crates.io/">Cargo</a></p>
    <p><strong>Golang:</strong> <a href="https://go.dev/blog/rebuild">Go reproducible builds</a></p>
  </td>
</tr>
<tr>
  <td>
    <p><a href="https://getcomposer.org/">PHP Composer</a></p>
    <p>Composer es el gestor de dependencias estándar para PHP, usado para declarar, instalar y gestionar librerías de terceros requeridas por una aplicación PHP. Permite definir qué paquetes requiere el proyecto y automáticamente resuelve, descarga e instala las versiones correctas, asegurando consistencia en todos los entornos.</p>
  </td>
</tr>
<tr>
<td>
  <p><a href="https://slsa.dev/">SLSA Framework</a></p>
  <p>El framework SLSA (Supply-chain Levels for Software Artifacts) es un marco de seguridad que define cómo construir software de forma verificable, resistente a manipulaciones y confiable.</p>
</td>
</tr>
<tr>
<td>
  <p><a href="https://docs.github.com/en/issues/tracking-your-work-with-issues/">GitHub Issues</a></p>
  <p>GitHub Issues es un sistema integrado de seguimiento usado para gestionar trabajo, errores, solicitudes de funcionalidades y discusiones directamente en un repositorio GitHub.</p>
</td>
</tr>
<tr>
<td>
  <p><a href="https://docs.gitlab.com/topics/plan_and_track/">GitLab work tracking</a></p>
  <p>GitLab Work Tracking es el sistema integrado de GitLab para planificar, rastrear y gestionar trabajo—desde ideas y requerimientos hasta código, correcciones de seguridad y entrega.</p>
</td>
</tr>
<tr>
<td>
  <p><a href="https://www.bugzilla.org/">Bugzilla</a></p>
  <p>Bugzilla es un sistema open-source de seguimiento de errores y gestión de incidencias usado para reportar, rastrear y gestionar defectos de software y solicitudes de mejora durante todo el ciclo de desarrollo.</p>
</td>
</tr>
<tr>
<td>
  <p><a href="https://www.redmine.org/">Redmine</a></p>
  <p>Redmine es una herramienta open-source de gestión de proyectos y seguimiento de incidencias usada por equipos de software para planificar trabajo, rastrear bugs y tareas, y gestionar proyectos en el tiempo.</p>
</td>
</tr>
<tr>
<td>
  <p><a href="https://mantisbt.org/">Mantis Bug Tracker</a></p>
  <p>Mantis Bug Tracker (o MantisBT) es un sistema open-source basado en web para seguimiento de errores e incidencias, diseñado para ser simple, rápido y ligero.</p>
</td>
</tr>
<tr>
<td>
  <p><a href="https://trac.edgewall.org/">Trac</a></p>
  <p>Trac es un sistema open-source basado en web de gestión de proyectos y seguimiento de incidencias que integra tickets, wiki y navegación de código. Es conocido por ser ligero, centrado en texto y amigable para desarrolladores.</p>
</td>
</tr>
<tr>
<td>
  <p><a href="https://in-toto.io/docs/what-is-in-toto/">in-toto framework</a></p>
  <p>in-toto es un framework open-source para asegurar la cadena de suministro de software registrando y verificando criptográficamente cada paso de cómo se construye, prueba y libera el software.</p>
</td>
</tr>
</table>
<br>

### PO.4 Definir y Usar Criterios para Chequeos de Seguridad del Software

Ayuda a asegurar que el software resultante del SDLC cumpla con las expectativas de la organización definiendo y utilizando criterios para verificar la seguridad del software durante el desarrollo.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="6">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.4.1:</strong>
        <p>Definir criterios para los chequeos de seguridad del software y darles seguimiento durante todo el SDLC.</p>
        <div style="height: 16px"></div>
        <p style="font-style: italic">Agregar criterios de seguridad del software a los chequeos existentes (por ejemplo, la Definición de Hecho en metodologías ágiles del SDLC).</p>
      </div>    
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.4.2:</strong>
        <p>Implementar procesos, mecanismos, etc., para recopilar y proteger la información necesaria en apoyo de los criterios.</p>
        <div style="height: 16px"></div>
        <p style="font-style: italic">Recopilar registros de auditoría de los repositorios de código.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PO.4.3:</strong>
        <p>Implementar procesos, mecanismos, etc., para recopilar y proteger la información necesaria en apoyo de los criterios.</p>
        <div style="height: 16px"></div>
        <p style="font-style: italic">Permitir solo a personal autorizado el acceso a la información recopilada, y prevenir cualquier alteración o eliminación de la información. Gestionar cuidadosamente la lista de propietarios de repositorios y de la organización que tienen la capacidad de ver registros de auditoría, eliminar organizaciones y eliminar repositorios de código, y revisar la lista anualmente.</p>
      </div>
    </td>
    <td>
      <p><a href="https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository">Plantillas de Issues de GitHub</a></p>
      <p>Las Plantillas de Issues de GitHub son formularios y guías predefinidos que aparecen cuando alguien crea un nuevo issue en un repositorio. Ayudan a los equipos a recopilar información consistente y de alta calidad para errores, solicitudes de funcionalidades, problemas de seguridad o preguntas.</p>
    </td>
  </tr>
  <tr>
    <td>
      <p><a href="https://docs.gitlab.com/user/project/description_templates/">Plantillas de Descripción de GitLab</a></p>
      <p>Las Plantillas de Descripción de GitLab son plantillas Markdown predefinidas que se completan automáticamente en el campo de descripción cuando alguien crea un Issue, Merge Request (MR) o Epic en GitLab.</p>
    </td>
  </tr>

  <tr>
    <td>
      <p><strong>GitHub</strong></p>
      <p><a href="https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization">Registros de Auditoría</a></p>
    </td>
  </tr>

  <tr>
    <td>
      <p><strong>GitLab</strong></p>
      <p><a href="https://docs.gitlab.com/user/compliance/audit_events/">Registros de Auditoría</a></p>
    </td>
  </tr>

  <tr>
    <td>
      <p><strong>GitHub</strong></p>
      <ul>
        <li><a href="https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization/">Roles en una Organización</a></li>
        <li><a href="https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization">Roles de Repositorio en GitHub</a></li>
      </ul>
    </td>
  </tr>

  <tr>
    <td>
      <p><strong>GitLab</strong></p>
      <ul>
        <li><a href="https://docs.gitlab.com/user/permissions/">Roles y Permisos</a></li>
      </ul>
    </td>
  </tr>
</table>
<br>

</table>

<br>

### PO.5 Implementar y Mantener Entornos Seguros para el Desarrollo de Software

Asegúrese de que todos los componentes de los entornos para el desarrollo de software estén fuertemente protegidos contra amenazas internas y externas para prevenir compromisos de los entornos o del software que se desarrolla o mantiene en ellos. Ejemplos de entornos para el desarrollo de software incluyen entornos de desarrollo, compilación, prueba y distribución.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="2">
      <strong>PO.5.1:</strong>
      <p>Separar y proteger cada entorno involucrado en el desarrollo de software.</p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">Requerir autenticación multifactor, claves SSH, commits firmados y aprobaciones de cambios de código para los repositorios de código a nivel de organización.</p>
    </td>
    <td>
      <p><strong>Configuraciones de Organización en GitHub</strong></p>
      <ul>
        <li><a href="https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization">Requerir autenticación multifactor</a></li>
        <li><a href="https://docs.github.com/en/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization/">Requerir commits firmados</a></li>
        <li><a href="https://docs.github.com/en/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization/">Requerir aprobaciones de cambios de código y proteger la rama principal</a></li>
      </ul>
    </td>
  </tr>
 <tr>
    <td>
      <p><strong>GitLab</strong></p>
      <ul>
        <li><a href="https://docs.gitlab.com/security/two_factor_authentication/">Requerir autenticación multifactor</a></li>
        <li><a href="https://docs.gitlab.com/user/project/repository/push_rules/">Requerir commits firmados mediante reglas de push</a></li>
        <li><a href="https://docs.gitlab.com/user/project/repository/branches/protected/">Requerir aprobaciones de cambios de código protegiendo la rama principal</a></li>
      </ul>
    </td>
  </tr>
</table>

<br>

> Nota: _Configurar de manera segura los repositorios de código y los servidores CI/CD_ – este es un tema complejo, fuera del alcance de este documento. _Configurar de manera segura los endpoints de desarrollo (por ejemplo, laptops de los desarrolladores)_ – este es un tema complejo, fuera del alcance de este documento.
