---
title: "2.2 Proteger el Software (PS)"
linkTitle: "2.2 Proteger el Software (PS)"
weight: 6
layout: docs
description: >
  2.2 Proteger el Software (PS) para pasos de Build y Deploy CI/CD
---

### 2.2 Proteger el Software (PS) en Tareas de Build y Deploy

Proteger el Software (PS): Las organizaciones deben proteger todos los componentes de su software contra manipulaciones y accesos no autorizados.

<br>

**PS.1**

<strong>Proteger Todas las Formas de Código de Accesos y Manipulaciones No Autorizadas</strong>: Ayuda a prevenir cambios no autorizados en el código, tanto inadvertidos como intencionales, que podrían eludir o anular las características de seguridad previstas del software. Para el código que no está destinado a ser accesible públicamente, esto ayuda a prevenir el robo del software y puede dificultar o retrasar que los atacantes encuentren vulnerabilidades en el software.

<br>

Para cumplir con SSDF PS.1 en un contexto de build y deploy usando herramientas de código abierto, el enfoque se desplaza de solo definir a:

- Asegurar la propia pipeline CI/CD: garantizar que solo procesos confiables y autenticados puedan producir outputs de build.

- Proteger los inputs de código fuente y dependencias, bloquear versiones, usar checksums y prevenir la inyección de código malicioso en el proceso de build.

- Firmar artefactos y registrar su procedencia, generando metadatos criptográficamente verificables que prueben qué se construyó, desde qué fuente y por quién.

- Aplicar builds reproducibles para que cualquier manipulación genere una discrepancia en hash/firma.

- Restringir el acceso al sistema de build y aplicar permisos basados en roles, MFA y principio de menor privilegio para los servidores de build.

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PS.1.1:</strong>
        <p>Almacenar todas las formas de código, incluyendo código fuente, código ejecutable y configuración-como-código, basándose en el principio de menor privilegio para que solo el personal, herramientas, servicios, etc., autorizados tengan acceso.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.sigstore.dev/cosign/">cosign Sigstore</a>
      <p>Firmar los resultados de construcción (binarios, contenedores, SBOMs) y crear atestaciones; verificar en CI antes de la promoción.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://git-scm.com/">Git commits/tags firmados</a>
      <p>Requerir commits/tags firmados y rechazar los no firmados en CI para evitar que código no autorizado entre en las construcciones.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sigstore.dev/">Sigstore Fulcio + Rekor</a>
      <p>Emitir certificados de corta duración (Fulcio) y registrar firmas/atestaciones en un registro de transparencia (Rekor) para detectar/seguir manipulaciones.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://slsa.dev/">Procedencia SLSA (generadores + verificador)</a>
      <p>Emitir y firmar la procedencia de la construcción; verificar quién/qué/dónde se construyó el artefacto antes de enviarlo.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://in-toto.io//">In-toto</a>
      <p>Definir un diseño de cadena de suministro y verificar los materiales/productos de cada paso para asegurar que nada fue manipulado a lo largo de la canalización.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/tektoncd/chains">Tekton Chains</a>
      <p>Firmar automáticamente los resultados de tareas (imágenes, archivos) en pipelines de Tekton y almacenar atestaciones (por ejemplo, en Rekor).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/notaryproject/notation">Notation (CNCF Notary v2)</a>
      <p>Firmar artefactos OCI (imágenes, Helm charts) durante la construcción para verificación posterior en registros y clusters.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://nixos.org/">Nix</a>
      <p>Bloquear insumos y hacer las construcciones determinísticas para que los cambios no autorizados sean detectables mediante discrepancia de hash/procedencia.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://bazel.build/">Bazel</a>
      <p>Bloquear insumos y hacer las construcciones determinísticas para que los cambios no autorizados sean detectables mediante discrepancia de hash/procedencia.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://grafeas.io/">Grafeas</a>
      <p>Persistir firmas, SBOMs y metadatos de políticas para auditar la integridad de las construcciones a través de los servicios.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://goharbor.io/">Harbor</a>
      <p>Aplicar confianza de contenido, cuentas de robots y políticas sobre quién puede subir/descargar; requerir artefactos firmados antes de la liberación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sigstore/policy-controller">Sigstore Policy Controller</a>
      <p>Controlador de admisión que bloquea imágenes no firmadas o firmadas incorrectamente; aplica políticas de clave/issuer/sujeto.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://kyverno.io/">Kyverno</a>
      <p>Políticas de Kubernetes que requieren firmas de imágenes, fijan por digest y prohíben etiquetas mutables en despliegues.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/open-policy-agent/gatekeeper">OPA Gatekeeper</a>
      <p>Control de admisión para despliegues con políticas personalizadas (por ejemplo, “solo imágenes firmadas de registros/namespaces aprobados”).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/deislabs/ratify">Ratify</a>
      <p>Verifica firmas/atestaciones OCI (Cosign/Notation) en tiempo de admisión y bloquea todo lo que falle la verificación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sse-secure-systems/connaisseur">Connaisseur</a>
      <p>Controlador de admisión de Kubernetes dedicado a verificar las firmas de imágenes de contenedores antes de su programación.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.sigstore.dev/cosign/">Sigstore Cosign</a>
      <p>Verificar firmas/atestaciones como puerta de liberación en su pipeline de CD antes de aplicar los manifests.</p>
    </td>
  </tr>          
</table>

**PS.2**

<strong>Proporcionar un Mecanismo para Verificar la Integridad del Software:</strong> Ayuda a los adquirentes de software a asegurarse de que el software que reciben es legítimo y no ha sido manipulado. Hacer que la información de verificación de integridad esté disponible para los adquirentes de software.

<br>

Para cumplir con SSDF PS.2 en un contexto de build y deploy usando herramientas open-source, el enfoque se centra en:

- Generar artefactos de integridad para cada release

- Vincular artefactos con el código fuente versionado

- Publicar materiales de verificación

- Requerir chequeos de integridad como puerta de release

- Exponer datos de verificación a los consumidores

- Control de admisión basado en integridad

<br>

<table style="width:100%">
   <tr>
      <th style="width: 30%">Tasks</th>
      <th style="width: 70%">Tools</th>
   </tr>
   <tr>
      <td rowspan="16">
         <div style="padding-top: 8px; padding-bottom: 8px">
            <strong>PS.2.1:</strong> 
            <p>Poner la información de verificación de integridad del software a disposición de los adquirentes de software.</p>
         </div>
      </td>
   </tr>
   <tr>
      <td>
         <a href="https://docs.sigstore.dev/cosign/">Cosign Sigstore</a> 
         <p>Firmar binarios, imágenes de contenedores, SBOMs y atestaciones durante la construcción; soporta firmas sin clave.</p>
      </td>
   </tr>
   <tr>
      <td>
         <a href="https://git-scm.com/">Git signed commits/tags</a> 
         <p>Firmar etiquetas de liberación para vincular criptográficamente el código fuente con el artefacto construido.</p>
      </td>
   </tr>
   <tr>
      <td>
         <a href="https://www.sigstore.dev/">Sigstore Fulcio + Rekor</a> 
         <p>Fulcio emite certificados de firma efímeros; Rekor registra todas las firmas en un registro de transparencia a prueba de manipulaciones para verificación posterior.</p>
      </td>
   </tr>
   <tr>
      <td>
         <a href="https://slsa.dev/">SLSA provenance (generators + verifier)</a> 
         <p>Genera automáticamente metadatos de procedencia describiendo el origen, insumos y proceso de construcción. Valida los archivos de procedencia para asegurar la integridad del artefacto antes de su distribución.</p>
      </td>
   </tr>
   <tr>
      <td>
         <a href="https://in-toto.io/">In-toto</a> 
         <p>Define un diseño verificable de la cadena de suministro de software; crea metadatos de enlace que prueban cada paso de la construcción.</p>
      </td>
   </tr>
   <tr>
      <td>
         <a href="https://grafeas.io/">Grafeas</a> 
         <p>Almacena metadatos (firmas, checksums, SBOMs) para que puedan ser consultados para verificación.</p>
      </td>
   </tr>
   <tr>
      <td>
         <a href="https://www.gnu.org/software/coreutils/">GNU Coreutils / sha256sum</a> 
         <p>Crear y publicar checksums de artefactos de liberación para que los receptores puedan verificar manual o automáticamente la integridad.</p>
      </td>
   </tr>
   <tr>
      <td>
         <a href="https://goharbor.io/">Harbor</a> 
         <p>Aplicar confianza de contenido; asegurar que solo se almacenen y distribuyan imágenes firmadas, con políticas sobre quién puede subir/descargar; requerir artefactos firmados antes de la liberación.</p>
      </td>
   </tr>
   <tr>
      <td>
         <a href="https://github.com/sigstore/policy-controller">Sigstore Policy Controller</a> 
         <p>Controlador de admisión de Kubernetes que aplica políticas de firma/procedencia antes del despliegue. Bloquea imágenes no firmadas o firmadas incorrectamente; aplica políticas de clave/issuer/sujeto.</p>
      </td>
   </tr>
   <tr>
      <td>
         <a href="https://kyverno.io/">Kyverno</a> 
         <p>Políticas de Kubernetes que requieren firmas de imágenes, fijan por digest y prohíben etiquetas mutables en despliegues. Valida firmas y digests de imágenes de contenedor antes de desplegarlas.</p>
      </td>
   </tr>
   <tr>
      <td>
         <a href="https://github.com/open-policy-agent/gatekeeper">OPA Gatekeeper</a> 
         <p>Control de admisión personalizado para aplicar integridad de artefactos y políticas de firmantes confiables.</p>
      </td>
   </tr>
   <tr>
      <td>
         <a href="https://github.com/deislabs/ratify">Ratify</a> 
         <p>Framework de verificación plugable para registros/imágenes OCI; funciona con Cosign, Notation, in-toto.</p>
      </td>
   </tr>
   <tr>
      <td>
         <a href="https://github.com/sse-secure-systems/connaisseur">Connaisseur</a> 
         <p>Controlador de admisión de Kubernetes dedicado a la verificación de firmas y políticas de confianza de imágenes.</p>
      </td>
   </tr>
   <tr>
      <td>
         <a href="https://github.com/notaryproject/notation">Notation</a> 
         <p>Firma artefactos OCI (contenedores, Helm charts) y los verifica antes de instalar o desplegar.</p>
      </td>
   </tr>
   <tr>
      <td>
         <a href="https://github.com/sigstore/cosign">Sigstore Cosign </a> 
         <p>Se usa en pipelines de CD o hooks de admisión para verificar que firmas y atestaciones coincidan con claves/políticas confiables antes de la promoción.</p>
      </td>
   </tr>
</table>

**PS.3**

<strong>Archivar y Proteger Cada Versión de Software:</strong> Conservar las versiones de software para ayudar a identificar, analizar y eliminar vulnerabilidades descubiertas después de su liberación.

<br>

Para cumplir con SSDF PS.3 en un contexto de construcción y despliegue usando herramientas de código abierto, el enfoque se centra en:

- Construcción: El énfasis está en capturar, almacenar y asegurar cada versión oficial (código fuente, binarios, SBOM, firmas, procedencia) en un almacenamiento inmutable y versionado.

- Despliegue: El énfasis está en asegurar que solo se utilicen en producción aquellas versiones archivadas y protegidas, aplicando inmutabilidad, fijación por digest y verificación de firmas/procedencia como mecanismos de cumplimiento.

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="50">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PS.3.1:</strong>
        <p>Archivar de manera segura los archivos necesarios y los datos de soporte (por ejemplo, información de verificación de integridad, datos de procedencia) que se deben conservar para cada liberación de software.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PS.3.2:</strong>
        <p>Recopilar, proteger, mantener y compartir los datos de procedencia de todos los componentes de cada liberación de software (por ejemplo, en una lista de materiales de software [SBOM]).</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://git-scm.com/">Git (Etiquetado de Liberación)</a>
      <p>Crear etiquetas firmadas e inmutables para cada liberación; preserva el snapshot del código fuente para auditoría.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://git-lfs.github.com/">Git LFS</a>
      <p>Almacenar artefactos binarios grandes junto con el código fuente, asegurando la integridad.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.sonatype.com/products/sonatype-nexus-repository">Nexus Repository OSS</a>
      <p>Hospedar y versionar artefactos de liberación (JARs, binarios, contenedores) con control de acceso basado en roles y validación de checksums.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://jfrog.com/open-source/">JFrog Artifactory OSS</a>
      <p>Archivar resultados de construcción en un repositorio controlado y versionado; soporta checksums y políticas de retención.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://goharbor.io/">Harbor</a>
      <p>Almacenar imágenes de contenedores con escaneo de vulnerabilidades, RBAC y confianza de contenido firmado para preservar la integridad de la liberación. Aplicar etiquetas inmutables y evitar sobrescrituras para que los artefactos desplegados siempre se puedan rastrear hasta la copia archivada.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://oss-review-toolkit.org/">OSS Review Toolkit</a>
      <p>(ORT) Archivar SBOMs, archivos de licencia y reportes de vulnerabilidades junto con la liberación para cumplimiento y auditoría.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/sigstore/cosign">Sigstore Cosign</a>
      <p>Firmar artefactos de liberación antes de archivarlos para que la integridad pueda ser verificada posteriormente.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://kyverno.io/">Kyverno</a>
      <p>Aplicar imágenes con digest fijo para asegurar que los despliegues siempre coincidan con las versiones archivadas.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/open-policy-agent/gatekeeper">OPA Gatekeeper</a>
      <p>Aplicación de políticas para garantizar que solo se desplieguen artefactos archivados y aprobados.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/deislabs/ratify">Ratify</a>
      <p>Verifica firmas y atestaciones de artefactos contra los metadatos de liberaciones archivadas antes del despliegue.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/sse-secure-systems/connaisseur">Connaisseur</a>
      <p>Controlador de admisión que asegura que solo se desplieguen imágenes firmadas del conjunto archivado.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://rclone.org/">Backblaze B2 / Rclone (Integración OSS)</a>
      <p>Archivado a largo plazo de versiones de artefactos desplegados para recuperación o investigación.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://slsa.dev/">SLSA Provenance</a> <a href="https://www.sigstore.dev/">+ Rekor</a>
      <p>Conservar la procedencia de construcción en un registro de transparencia para que las liberaciones desplegadas puedan ser verificadas cruzadamente con los originales archivados.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/kpcyrd/rebuilderd">rebuilderd</a>
      <p>rebuilderd verifica de manera independiente que los paquetes binarios puedan reproducirse desde el código fuente, lo que es un mecanismo sólido para la integridad de componentes de terceros y para preservar/verificar la evidencia de integridad de la liberación.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/testifysec">TestifySec</a>
      <p>El enfoque de TestifySec es la verificación de evidencia, atestaciones y políticas en torno a las construcciones; su herramienta Witness se usa para crear y verificar atestaciones y aplicar políticas, es decir, generación de procedencia + verificación de políticas.</p>
    </td>
  </tr>  
</table>
