---
title: "1.2 Proteger el Software (PS)"
linkTitle: "1.2 Proteger el Software (PS)"
weight: 6
layout: docs
description: >
  Fase 1 de tareas de 1.2 Proteger el Software (PS)
---

## 1.2 Tareas de Proteger el Software (PS) para Código y Precompilación

Las organizaciones deben proteger todos los componentes de su software contra la manipulación y el acceso no autorizado.

<br>

### PS.1: Proteger todas las formas de código contra el acceso no autorizado y la manipulación

Ayuda a prevenir cambios no autorizados en el código, tanto inadvertidos como intencionales, que podrían eludir o anular las características de seguridad previstas del software.
Para el código que no está destinado a ser accesible públicamente, esto ayuda a evitar el robo del software y puede dificultar o alargar el tiempo que los atacantes necesitan para encontrar vulnerabilidades en él.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="30">
      <strong>PS.1.1:</strong>
      <p>
        Almacenar todas las formas de código – incluyendo código fuente, código ejecutable y configuración-como-código – basándose en el principio de menor privilegio para que solo el personal, herramientas, servicios, etc. autorizados tengan acceso.
      </p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">
        Almacenar todo el código fuente y la configuración-como-código en un repositorio de código, y restringir el acceso según la naturaleza del código. Por ejemplo, el código abierto destinado al acceso público puede requerir protección de integridad y disponibilidad; otro código puede también necesitar protección de confidencialidad.
      </p>
    </td>
    <td>
      <a href="https://github.com/">GitHub</a><p>Proporciona un repositorio centralizado de código fuente con control de acceso, auditoría y cumplimiento de flujos de trabajo, apoyando prácticas SSDF para la gestión segura de código y control de cambios.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gitlab.com/">GitLab</a><p>Ofrece control de versiones integrado, CI/CD y flujos de trabajo de seguridad que permiten gobernanza, trazabilidad y procesos de desarrollo seguros alineados con SSDF.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://bitbucket.org/">Bitbucket</a><p>Apoya SSDF gestionando el código fuente con acceso basado en roles, opciones de integridad de commits y flujos de revisión obligatorios.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://sourceforge.net/">SourceForge</a><p>Aloja y distribuye proyectos de código abierto con control de versiones y gestión de releases, apoyando requisitos SSDF para procedencia y transparencia del código.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://subversion.apache.org/">Subversion</a><p>Proporciona control de versiones centralizado permitiendo prácticas SSDF para seguimiento de cambios, auditoría y acceso controlado al código fuente.</p>
    </td>
  </tr>
  <tr>
     <td>
      <a href="https://git-scm.com/">Git</a><p>Permite historial inmutable, trazabilidad y flujos de desarrollo distribuidos, fundamentales para la integridad y responsabilidad del código en SSDF.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gitbucket.github.io/">GitBucket</a><p>Ofrece hosting de repositorios Git con control de acceso y funciones de colaboración que apoyan la gobernanza segura de SSDF.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gitea.com/">Gitea</a><p>Proporciona repositorios Git ligeros y autoalojados que cumplen con los requisitos SSDF de gestión controlada del código y auditabilidad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://gittuf.dev/">gittuf</a><p>Refuerza el cumplimiento de SSDF aplicando políticas criptográficas y metadatos de confianza verificables sobre repositorios y flujos de trabajo Git.</p>
    </td>
  </tr>
  <tr>
  <td>
      <a href="https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits">GitHub Signing Commits</a><p>Garantiza la integridad del código alineada con SSDF verificando criptográficamente la identidad de los autores de los commits.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sigstore.dev/">Sigstore</a><p>Permite la verificación de artefactos y commits alineada con SSDF mediante firmas criptográficas auditable y registros de transparencia sin claves.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners/">Github CODEOWNERS</a><p>Aplica la separación de roles y responsabilidad SSDF exigiendo que los propietarios designados revisen y aprueben los cambios de código.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/features/code-review">GitHub Code Review</a><p>Apoya el desarrollo seguro SSDF haciendo cumplir revisiones por pares, comprobaciones de políticas y puertas de aprobación antes de integrar código.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/user/project/codeowners/">Gitlab CODEOWNERS</a><p>Implementa la asignación de responsabilidades SSDF enviando automáticamente los cambios a los revisores responsables.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/development/code_review/">Gitlab Code Review Guidelines</a><p>Establece estándares de revisión alineados con SSDF que reducen defectos y riesgos de seguridad antes de fusionar el código.</p>
    </td>
  </tr>
</table>

<br>

### PS.2 Proporcionar un Mecanismo para Verificar la Integridad del Software Lanzado

Ayuda a los adquirentes de software a asegurarse de que el software que adquieren sea legítimo y no haya sido manipulado.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="10">
      <strong>PS.2.1:</strong>
      <p>
        Hacer que la información de verificación de integridad del software esté disponible para los adquirentes de software.
      </p>
      <div style="height: 16px"></div>
      <p style="font-style: italic">
        Publicar hashes criptográficos de los archivos de lanzamiento en un sitio web seguro.
      </p>
    </td>
    <td>
      <a href="https://infra.apache.org/release-signing.html/">Apache Infrastructure Signing Releases</a><p>Apoya SSDF asegurando que los lanzamientos de software de Apache estén firmados criptográficamente y sean verificables, estableciendo un origen confiable y protegiendo contra artefactos de distribución manipulados.</p>
    </td>
  <tr>
    <td>
      <a href="https://www.openpgp.org/">OpenPGP</a><p>Proporciona mecanismos criptográficos alineados con SSDF para firmar y verificar código y artefactos, garantizando autenticidad, integridad y no repudio.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.gnupg.org/">The GNU Privacy Guard</a><p>Implementa los estándares OpenPGP para habilitar prácticas SSDF al firmar código fuente, commits y lanzamientos con identidad verificable del desarrollador.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://letsencrypt.org/">Let's Encrypt</a><p>Apoya la entrega segura alineada con SSDF al emitir certificados TLS gratuitos y automáticos que protegen los canales de distribución de software y los servicios del desarrollador contra interceptaciones y manipulaciones.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.ejbca.org/">EJBCA Community</a><p>Permite cumplir con SSDF proporcionando una PKI de código abierto para gestionar certificados usados para autenticar desarrolladores, sistemas y artefactos de software.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.dogtagpki.org/">Dogtag Certificate System</a><p>Apoya los requisitos de confianza e identidad de SSDF al emitir y gestionar certificados digitales para la firma segura de software y la autenticación de infraestructura.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.openxpki.org/">OpenXPKI</a><p>Proporciona gestión del ciclo de vida de certificados alineada con SSDF para establecer, auditar y aplicar confianza en las canalizaciones de desarrollo y liberación de software.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://smallstep.com/product/team/devops/index.html/">Step-CA</a><p>Habilita la automatización de identidad criptográfica según SSDF mediante la emisión de certificados de corta duración para desarrolladores, sistemas CI/CD y flujos de trabajo de firma de software.</p>
    </td>
  </tr>
</table>

<br>

### PS.3 Archivar y Proteger Cada Versión de Software

Conservar las versiones de software para ayudar a identificar, analizar y eliminar vulnerabilidades descubiertas en el software después de su lanzamiento.

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>

  <tr>
    <td rowspan="28">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PS.3.1:</strong>
        <p>
          Archivar de manera segura los archivos necesarios y los datos de soporte (por ejemplo, información de verificación de integridad, datos de procedencia) que se deben conservar para cada versión de software.
        </p>
        <div style="height: 16px"></div>
        <p style="font-style: italic">
          Almacenar los archivos de la versión, imágenes asociadas, etc., en repositorios siguiendo la política establecida por la organización. Permitir acceso de solo lectura al personal necesario y ningún acceso a otras personas.
        </p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PS.3.2:</strong>
        <p>
          Recopilar, proteger, mantener y compartir datos de procedencia de todos los componentes de cada versión de software (por ejemplo, en un Software Bill of Materials (SBOM)).
        </p>
        <div style="height: 16px"></div>
        <p style="font-style: italic">
          Hacer que los datos de procedencia estén disponibles para los adquirentes de software de acuerdo con las políticas de la organización, preferiblemente usando formatos estandarizados.
        </p>
      </div>
    </td>
    <td>
      <a href="https://docs.github.com/en/get-started/learning-about-github/access-permissions-on-github/">Permisos de Acceso en GitHub</a><p>Aplica control de acceso basado en roles según SSDF restringiendo quién puede ver, modificar o administrar los repositorios de código fuente.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/user/permissions/">Roles y Permisos de GitLab</a><p>Soporta la gobernanza SSDF definiendo roles granulares que aplican el principio de mínimo privilegio y separación de funciones a lo largo del SDLC.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization/">Roles de Repositorio en GitHub para una Organización</a><p>Implementa controles organizacionales SSDF estandarizando los niveles de permisos entre equipos y repositorios.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/user/permissions/">Roles y Permisos de GitLab</a><p>Implementa controles organizacionales SSDF estandarizando los niveles de permisos entre equipos y repositorios.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://ortelius.io/">Ortelius</a><p>Extiende los controles SSDF más allá del código fuente al aplicar acceso, trazabilidad y responsabilidad sobre software desplegado, SBOMs y metadatos del entorno en vivo mediante un gemelo digital centrado en despliegue.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/aetheris-ai/aibom-generator/">Generador AI SBOM</a><p>Soporta SSDF generando y manteniendo automáticamente SBOMs precisos que mejoran la visibilidad de componentes y la trazabilidad de vulnerabilidades en todo el SDLC.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://cyclonedx.org/">CycloneDX</a><p>Permite la transparencia de componentes alineada con SSDF proporcionando un formato de SBOM estandarizado optimizado para seguridad, integridad y análisis de riesgos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/usnistgov/swid-tools/">Herramientas y Utilidades de Etiquetado SWID</a><p>Apoyan las prácticas SSDF identificando de forma única los componentes de software instalados para permitir inventario de activos, rastreo de procedencia y correlación de vulnerabilidades.</p>
  </tr>
  <tr>
    <td>
      <a href="https://spdx.dev/">SPDX</a><p>Proporciona un estándar compatible con SSDF para documentar componentes de software, licencias y relaciones, apoyando la transparencia y cumplimiento en la cadena de suministro.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://openssf.org/projects/bomctl/">bomctl</a><p>Soporta el consumo de SBOMs SSDF validando, consultando y gestionando SBOMs a lo largo de los flujos de trabajo de construcción y liberación.</p>
    </td>  
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-check/">OWASP Dependency-Check</a><p>Permite la detección de vulnerabilidades SSDF identificando CVEs conocidos en dependencias de terceros durante el desarrollo y la construcción.</p>
    </td></tr>
  <tr>
    <td>
      <a href="https://dependencytrack.org/">Dependency-Track</a><p>Soporta la gestión de riesgos SSDF analizando continuamente SBOMs para monitorear vulnerabilidades de componentes y cumplimiento de políticas.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://clairproject.org/">Clair</a><p>Contribuye a SSDF escaneando imágenes de contenedores para detectar vulnerabilidades conocidas antes del despliegue.</p>
    </td>
  <tr>
    <td>
      <a href="https://github.com/anchore/grype/">Grype</a><p>Soporta prácticas de construcción segura SSDF detectando vulnerabilidades conocidas en imágenes de contenedores y sistemas de archivos usando datos de SBOM.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://ortelius.io/">Ortelius</a><p>Extiende SSDF más allá del tiempo de construcción correlacionando y agregando SBOMs, vulnerabilidades y metadatos de despliegue para identificar qué entornos en vivo están realmente en riesgo.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://openssf.org/projects/protobom/">Protobom</a><p>Soporta la interoperabilidad SSDF proporcionando bibliotecas y herramientas reutilizables para generar y transformar SBOMs entre formatos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/syft/">Syft</a><p>Permite el descubrimiento de componentes SSDF generando SBOMs a partir de código fuente, contenedores y artefactos en ejecución.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://hoppr.dev/">Hoppr</a><p>Soporta el intercambio y descubrimiento de SBOMs SSDF permitiendo la distribución segura y recuperación de artefactos SBOM.</p>
      </td>
  <tr>
    <td>
      <a href="https://github.com/tern-tools/tern/">Tern</a><p>Contribuye a la transparencia SSDF analizando imágenes de contenedores para producir inventarios detallados de componentes y SBOMs.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/">Trivy</a><p>Soporta el desarrollo seguro SSDF escaneando vulnerabilidades, configuraciones incorrectas y secretos expuestos en código y artefactos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/google/aoss-verifier/">aoss-verifier</a><p>Permite la validación de cumplimiento SSDF verificando la integridad y autenticidad de artefactos de código abierto.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://sigstore.dev/">Sigstore</a><p>Soporta la procedencia SSDF permitiendo la firma criptográficamente verificable de artefactos y SBOMs con registros de transparencia.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.tlsnotary.org/">Protocolo TLSNotary</a><p>Contribuye a la confianza SSDF proporcionando prueba criptográfica de integridad de datos para metadatos de seguridad y dependencias obtenidos externamente.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.github.com/en/actions/">GitHub Actions</a><p>Permite la automatización SSDF integrando controles de seguridad, generación de SBOMs y cumplimiento de políticas directamente en los flujos de trabajo de CI.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.gitlab.com/ci/">GitLab CI/CD</a><p>Soporta pipelines seguras SSDF integrando controles de construcción, prueba, escaneo y liberación dentro de un sistema CI/CD gobernado.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.jenkins.io/">Jenkins</a><p>Servidor de automatización totalmente open-source, bajo licencia MIT, con un ecosistema extensible de plugins, ampliamente usado para implementar controles de seguridad CI/CD alineados a SSDF.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.updatecli.io/">Updatecli</a><p>Soporta la remediación SSDF automatizando actualizaciones de dependencias, configuraciones y políticas de manera controlada y auditable.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.mend.io/renovate/">Renovate</a><p>Permite el mantenimiento seguro SSDF actualizando automáticamente dependencias vulnerables mientras se preservan los controles de revisión y aprobación.</p>
    </td>
  </tr>
 </table>

<br>
