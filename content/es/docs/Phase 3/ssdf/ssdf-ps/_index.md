---
title: "3.2 Proteger el Software (PS)"
linkTitle: "3.2 Proteger el Software (PS)"
weight: 6
layout: docs
description: >
  3.2 Proteger el Software (PS) Pasos Post Deploy CI/CD
---

### 3.2 Proteger el Software (PS) para Tareas Post Deploy

Proteger el Software (PS): Las organizaciones deben proteger todos los componentes de su
software contra manipulaciones y accesos no autorizados.

<br>

**PS.1**

<strong>Proteger Todas las Formas de Código contra Accesos No Autorizados y Manipulación </strong>: Ayuda a prevenir cambios no autorizados en el código, tanto inadvertidos como intencionales, que podrían eludir o anular las características de seguridad previstas del software. Para el código que no está destinado a ser accesible públicamente, esto ayuda a prevenir el robo del software y puede dificultar o retrasar que los atacantes encuentren vulnerabilidades en el software.

<br>

Para cumplir con SSDF PS.1 en un contexto post-despliegue usando herramientas open-source, el enfoque se desplaza de solo definir a:

- Proteger los artefactos desplegados (binarios, contenedores, scripts, configuraciones) para que no sean alterados en producción

- Asegurar que la integridad del código post-despliegue sea verificable en cualquier momento

- Mantener almacenamiento, transporte y recuperación de código y artefactos seguros

- Mantener un registro de auditoría para todas las modificaciones y accesos

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="16">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PS.1.1:</strong>
        <p>Almacenar todas las formas de código incluyendo código fuente, código ejecutable y configuración como código según el principio de menor privilegio, de modo que solo personal, herramientas o servicios autorizados tengan acceso.</p>
      </div>
    </td>
    <td>
      <a href="https://docs.sigstore.dev/cosign/"> Cosign Sigstore</a>
      <p>Firmar y verificar imágenes de contenedores, binarios y otros artefactos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.sigstore.dev/logging/overview/">Rekor Sigstore</a>
      <p>Registro público inmutable para firmas y metadatos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://in-toto.io">In-Toto</a>
      <p>Verificación de cadena de suministro de extremo a extremo para asegurar que los artefactos desplegados provienen de fuentes confiables.</p>
    </td>
  </tr>
    <tr>
    <td>
      <a href="https://www.gnupg.org/">Gnu Privacy GuardG</a>
      <p>Firmar y verificar cualquier tipo de archivo, incluyendo tarballs y archivos de configuración.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://goharbor.io/">Harbor</a>
      <p>Registro de contenedores con escaneo de vulnerabilidades integrado, firma de contenido y RBAC.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/sonatype/nexus-public">Sonatype Nexus OSS</a>
      <p>Repositorio seguro de artefactos con controles de acceso.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/jfrog/charts/blob/master/stable/artifactory-oss/README.md">JFrog Artifactory OSS</a>
      <p>Gestión de repositorios binarios con permisos granulares.</p>
    </td>
  </tr>
  <tr>
      <td>
      <a href="https://github.com/Tripwire/tripwire-open-source">Tripwire OSS</a>
      <p>Monitorea el sistema de archivos para detectar cambios no autorizados.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://aide.github.io/">AIDE (Advanced Intrusion Detection Environment) </a>
      <p>Crea una línea base de archivos y detecta alteraciones.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://falco.org/">Falco</a>
      <p>Detecta actividad sospechosa en entornos de Kubernetes o contenedores, incluyendo cambios de archivos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://open-policy-agent.github.io/gatekeeper/website/docs/install/">Kubernetes RBAC + OPA Gatekeeper</a>
      <p>Aplica políticas basadas en roles para el despliegue de imágenes de contenedores.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/keycloak/keycloak">Keycloak</a>
      <p>Autenticación/autorización centralizada para registros de artefactos y sistemas CI/CD.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/wazuh/wazuh">Wazuh</a>
      <p>Plataforma SIEM que monitorea registros de acceso y alerta sobre anomalías.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://ortelius.io">Ortelius Evidence Store</a>
      <p>Rastrea qué versión de un servicio se despliega dónde y la vincula con su SBOM firmado.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Genera SBOMs para artefactos desplegados para verificación posterior.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-track/">OWASP Dependency-Track</a>
      <p>Monitorea componentes en artefactos desplegados frente a feeds de CVE.</p>
    </td>
  </tr>
</table>


**PS.2**

<strong>Proporcionar un Mecanismo para Verificar la Integridad del Software:</strong> Ayuda a los adquirentes de software a asegurarse de que el software que adquieren es legítimo y no ha sido manipulado. Hacer que la información de verificación de integridad del software esté disponible para los adquirentes.

<br>

Para cumplir con SSDF PS.2 en un contexto post-despliegue usando herramientas open-source, el enfoque se desplaza a:

- Mantener copias exactas de cada artefacto de lanzamiento (binarios, contenedores, configuraciones, SBOMs)

- Registrar y publicar datos de verificación criptográfica (firmas, hashes, certificaciones)

- Asegurar que los adquirentes puedan confirmar que lo que tienen coincide con la versión oficial y confiable

<br>

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="17">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PS.2.1:</strong>
        <p>Hacer que la información de verificación de integridad del software esté disponible para los adquirentes.</p>
      </div>
    </td>
    <td>
      <a href="https://goharbor.io/">Harbor</a>
      <p>Registro de contenedores con políticas de retención de imágenes, RBAC y confianza de contenido.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sonatype/nexus-public">Sonatype Nexus OSS</a>
      <p>Repositorio de artefactos para almacenar binarios y dependencias.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/jfrog/charts/blob/master/stable/artifactory-oss/README.md">JFrog Artifactory OSS</a>
      <p>Gestión de binarios con retención y control de acceso.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/">GitHub</a>
      <p>Etiquetar y almacenar binarios de lanzamiento, SBOMs y checksums.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sigstore/cosign">Sigstore cosign</a>
      <p>Firmar y verificar imágenes de contenedores, SBOMs y otros artefactos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sigstore/rekor">Sigstore Rekor</a>
      <p>Registro de transparencia inmutable para todos los artefactos y metadatos firmados.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.gnupg.org/">Gnu Privacy Guard</a>
      <p>Firmar y verificar tarballs, binarios o archivos SBOM.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://in-toto.io/">In-Toto</a>
      <p>Proporcionar verificación de procedencia de construcción de extremo a extremo.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://ortelius.io/">Ortelius</a>
      <p>Mapea servicios desplegados a versiones específicas y sus SBOMs.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/anchore/syft">Syft</a>
      <p>Genera SBOMs a partir de artefactos desplegados.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://hoppr.dev/">Hoppr</a>
      <p>Kit de utilidades SBOM / cadena de suministro: procesamiento de SBOM y movimiento de “materiales” de la cadena de suministro alineados a recolección/mantenimiento/compartición de procedencia.</p>
     </td>
  <tr>
    <td>
      <a href="https://owasp.org/www-project-dependency-track/">OWASP Dependency-Track</a>
      <p>Monitorea continuamente SBOMs para nuevos CVEs en versiones preservadas.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://aide.github.io/">AIDE (Advanced Intrusion Detection Environment)</a>
      <p>Comprobador de integridad del sistema de archivos para detectar cambios en artefactos almacenados.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://github.com/Tripwire/tripwire-open-source">Tripwire OSS</a>
      <p>Establecer línea base y monitorear directorios de lanzamiento almacenados para modificaciones.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/wazuh/wazuh">Wazuh</a>
      <p>SIEM que audita la actividad del repositorio de artefactos.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.redhat.com/en/blog/configure-linux-auditing-auditd">AuditD</a>
      <p>Auditoría a nivel Linux para accesos a archivos de lanzamiento preservados.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.keycloak.org/getting-started/getting-started-kube/">Kubernetes RBAC / Keycloak </a>
      <p>Restringir quién puede subir o modificar artefactos en los registros.</p>
    </td>
  </tr>
</table>

**PS.3**

<strong>Archivar y Proteger Cada Lanzamiento de Software:</strong> Preservar los lanzamientos de software para ayudar a identificar, analizar y eliminar vulnerabilidades descubiertas en el software después de su liberación.

<br>

Para cumplir con SSDF PS.3 en un contexto post-despliegue usando herramientas open-source, el enfoque se desplaza a:

- Mantener un registro a prueba de manipulaciones de cada componente de software en cada lanzamiento

- Asegurar que los datos de procedencia permanezcan accesibles para auditorías, investigaciones y respuesta a vulnerabilidades

- Permitir a adquirentes y usuarios finales verificar de manera independiente el origen e integridad de cada componente

<table style="width:100%">
  <tr>
    <th style="width: 30%">Tareas</th>
    <th style="width: 70%">Herramientas</th>
  </tr>
  <tr>
    <td rowspan="13">
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PS.3.1:</strong>
        <p>Archivar de manera segura los archivos y datos de soporte necesarios (por ejemplo, información de verificación de integridad, datos de procedencia) para retenerlos para cada lanzamiento de software.</p>
      </div>
      <div style="padding-top: 8px; padding-bottom: 8px">
        <strong>PS.3.2:</strong>
        <p>Recopilar, proteger, mantener y compartir los datos de procedencia de todos los componentes de cada lanzamiento de software (por ejemplo, en un bill of materials -SBOM).</p>
      </div>
    </td>
    <td>
      <a href="https://github.com/anchore/syft/"> Syft</a>
      <p>Genera SBOMs desde contenedores, VMs o sistemas de archivos desplegados (formatos SPDX & CycloneDX).</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://trivy.dev/latest/">Trivy </a>
      <p>Crear SBOMs y escanear vulnerabilidades en sistemas desplegados.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://in-toto.io/">In-Toto</a>
      <p>Registrar pasos de construcción y metadatos de la cadena de suministro como archivos “link” firmados.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sigstore/cosign/">Cosign Attest</a>
      <p>Capturar procedencia de construcción y despliegue como certificaciones firmadas.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.gnupg.org/">Gnu Privacy Guard</a>
      <p>Firmar SBOMs y metadatos para distribución offline o privada.</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/sigstore/rekor/">Rekor</a>
      <p>Almacenar firmas y certificaciones en un registro público e inmutable.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/Tripwire/tripwire-open-source">Tripwire OSS</a>
      <p>Detectar cambios no autorizados en archivos de procedencia almacenados localmente.</p>
    </td>
  </tr>  
  <tr>
    <td>
      <a href="https://aide.github.io/">AIDE (Advanced Intrusion Detection Environment)</a>
      <p>Detectar cambios no autorizados en archivos de procedencia almacenados localmente.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://ortelius.io/">Ortelius Evidence Store</a>
      <p>Versionar y rastrear servicios desplegados y sus SBOMs; vincularlos a entornos y lanzamientos. Acceso API/UI para compartir historial de SBOM y componentes de lanzamientos específicos.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://github.com/DependencyTrack/dependency-track">Dependency Track</a>
      <p>Monitorear continuamente SBOMs preservados para nuevos CVEs.</p>
    </td>
  </tr> 
  <tr>
    <td>
      <a href="https://goharbor.io/">Harbor</a>
      <p>Adjuntar SBOMs y firmas a imágenes de contenedores en un registro.</p>
    </td>
  </tr>
   <tr>
    <td>
      <a href="https://cyclonedx.org/capabilities/bomlink/">CycloneDX BOM Portal (OSS)</a>
      <p>Alojar y validar SBOMs en una interfaz web accesible.</p>
     </td>
  </tr>
  <tr>
    <td>
      <a href="https://hoppr.dev/">Hoppr</a>
      <p>Kit de utilidades SBOM / cadena de suministro—procesamiento de SBOM y movimiento de “materiales” de la cadena de suministro alineados a recolección/mantenimiento/compartición de procedencia.</p>
     </td>
  </tr>
</table>
