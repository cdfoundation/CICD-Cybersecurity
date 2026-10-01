---
title: "Compilación y publicación"
linkTitle: "Compilación y publicación"
description: "Controles de Compilación y publicación (OSPS-BR) de la OpenSSF Baseline y su relación con las Fases 1 y 2 de Raven."
weight: 20
---

Compilación y publicación (*Build and Release*) en la [OpenSSF Baseline](https://baseline.openssf.org/versions/2026-02-19.html) cubre cómo un proyecto compila, empaqueta y distribuye el software. La familia OSPS-BR pide a los equipos que mantengan la entrada no fiable lejos de los pasos privilegiados del pipeline, identifiquen cada publicación, protejan los canales de transporte, describan qué cambió, incorporen dependencias con herramientas estándar, adjunten firmas o hashes y mantengan los secretos fuera del control de versiones.

Esas expectativas coinciden con el trabajo de Raven en la [Fase 2: Compilar y desplegar](/es/docs/phase-2/) sobre integridad de la compilación, procedencia de artefactos y puertas de política, y con las prácticas de secretos y procedencia de la [Fase 1: Código y preconstrucción](/es/docs/phase-1/).

## Familias de control OSPS-BR

### OSPS-BR-01 — Entrada no fiable en los pipelines

Trate los nombres de rama, los mensajes de commit, las etiquetas, los títulos de las solicitudes de cambio y metadatos similares como no fiables. Valide o sanee esos valores antes de que un flujo de trabajo los use. Aísle las instantáneas de código no revisado de las credenciales privilegiadas, sobre todo en trabajos que se ejecutan antes de que un colaborador revise el cambio. En mayor madurez, aplique la misma higiene a las entradas que aportan colaboradores de confianza en ejecuciones manuales. Páginas relacionadas de Raven: [Fase 2](/es/docs/phase-2/) y [1.1 Preparar la Organización](/es/docs/phase-1/ssdf/ssdf-po/).

### OSPS-BR-02 — Identificadores de versión únicos

Asigne a cada publicación oficial una versión única, con un esquema que el proyecto pueda mantener de forma coherente (por ejemplo SemVer, CalVer o un identificador de commit). En el Nivel 3, asocie cada activo de la publicación con ese identificador o con un id propio para que los consumidores distingan los artefactos. Páginas relacionadas de Raven: [Fase 2](/es/docs/phase-2/) y [1.2 Proteger el Software](/es/docs/phase-1/ssdf/ssdf-ps/).

### OSPS-BR-03 — Canales cifrados

Las URL oficiales del proyecto y de distribución deben ser accesibles solo por canales autenticados y cifrados, como HTTPS o SSH. Las descargas deben resistir la sustitución por un atacante interpuesto (*adversary-in-the-middle*), ya sea mediante TLS, publicaciones firmadas o un registro de paquetes de confianza. Páginas relacionadas de Raven: [Fase 1](/es/docs/phase-1/) y [Fase 2](/es/docs/phase-2/).

### OSPS-BR-04 — Registro de cambios de la publicación

Cada publicación oficial debe incluir un registro legible de cambios funcionales y de seguridad, no solo los asuntos de los commits. Señale el impacto de seguridad y a quién le importa el cambio. Páginas relacionadas de Raven: [2.3 Producir Software Bien Asegurado](/es/docs/phase-2/ssdf/ssdf-pw/) y [1.2 Proteger el Software](/es/docs/phase-1/ssdf/ssdf-ps/).

### OSPS-BR-05 — Herramientas normalizadas de dependencias

Cuando el pipeline descarga dependencias, use los gestores de paquetes, archivos de bloqueo o manifiestos habituales del ecosistema, no copias improvisadas. Así las compilaciones son repetibles y los pasos posteriores de SCA y SBOM tienen una sola fuente de verdad. Páginas relacionadas de Raven: [análisis de dependencias de la Fase 1](/es/docs/phase-1/) y [Fase 2](/es/docs/phase-2/).

### OSPS-BR-06 — Firmas y hashes

Firme los activos publicados, o liste el hash criptográfico de cada activo en un manifiesto firmado. Opciones habituales son Sigstore, GPG, procedencia SLSA o atestaciones de resumen de verificación. Los consumidores pueden comprobar entonces que lo descargado coincide con lo que el proyecto publicó. Páginas relacionadas de Raven: [Fase 2](/es/docs/phase-2/) e [integridad de la publicación de software en PS.2](/es/docs/phase-1/ssdf/ssdf-ps/).

### OSPS-BR-07 — Secretos y credenciales

Mantenga los secretos sin cifrar fuera del sistema de control de versiones, con reglas de exclusión, comprobaciones previas al commit y análisis automático. En el Nivel 3, documente cómo el proyecto almacena, accede y rota las credenciales para que no queden incrustadas en el árbol de código. Páginas relacionadas de Raven: [1.1 Preparar la Organización](/es/docs/phase-1/ssdf/ssdf-po/) y [1.2 Proteger el Software](/es/docs/phase-1/ssdf/ssdf-ps/).

## Rutas relacionadas de Raven

- [Resumen de la OpenSSF Baseline](/es/openssf-baseline/)
- [Gestión de vulnerabilidades](/es/openssf-baseline/vulnerability-management/)
- [Marcos externos](/es/openssf-baseline/external-frameworks/)
- [Fase 1: Código y preconstrucción](/es/docs/phase-1/)
- [Fase 2: Compilar y desplegar](/es/docs/phase-2/)
- [NIST AI Risk Management Framework](/es/nist-ai-rmf/)
- [Reglamento de Ciberresiliencia de la UE](/es/cyber-resilience-act/)
