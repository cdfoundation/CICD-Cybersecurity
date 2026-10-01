---
title: "OpenSSF Project Security Baseline"
linkTitle: "OpenSSF Baseline"
description: "Controles de seguridad a nivel de proyecto de la Open Source Project Security Baseline, conectados con la guía CI/CD de Raven."
type: docs
layout: docs
cascade:
  type: docs
  layout: docs
weight: 10
---

La [Open Source Project Security (OSPS) Baseline](https://baseline.openssf.org/versions/2026-02-19.html) es un catálogo de criterios de seguridad que los proyectos de código abierto pueden usar para demostrar una postura de seguridad sólida. Los controles se agrupan por categoría y por tres niveles de madurez:

- **Nivel 1** se aplica a cualquier proyecto, incluidos los proyectos sin código.
- **Nivel 2** se aplica a proyectos de código con al menos dos mantenedores y un conjunto pequeño de usuarios habituales.
- **Nivel 3** se aplica a proyectos de código con una base amplia y estable de usuarios.

Esta sección de Raven Pipeline Security cubre tres categorías de la Baseline que están más cerca del trabajo de CI/CD: Compilación y publicación, Gestión de vulnerabilidades y Marcos externos. Las páginas resumen las familias de controles por identificador y remiten al texto oficial de la Baseline. Son un complemento de la [guía de seguridad CI/CD](/es/docs/) existente, no un sustituto.

Raven ya relaciona herramientas de código abierto con el NIST Secure Software Development Framework en [Código y preconstrucción](/es/docs/phase-1/), [Compilar y desplegar](/es/docs/phase-2/) y [Post-despliegue](/es/docs/phase-3/). La Baseline añade expectativas de gobernanza del proyecto: cómo se identifican y firman las publicaciones, cómo se reciben y publican las vulnerabilidades, y cómo esas prácticas se relacionan con otros marcos públicos.

## Páginas de esta sección

- [Compilación y publicación](/es/openssf-baseline/build-and-release/) — controles OSPS-BR para la entrada al pipeline, el versionado, el transporte, los registros de cambios, las dependencias, las firmas y los secretos.
- [Gestión de vulnerabilidades](/es/openssf-baseline/vulnerability-management/) — controles OSPS-VM para la divulgación, los contactos, el informe privado, la publicación, la remediación de dependencias y las pruebas de seguridad de aplicaciones.
- [Marcos externos](/es/openssf-baseline/external-frameworks/) — los catálogos que mapea la Baseline, incluidos SSDF, CSF, CRA, SLSA y otros.

Fuente oficial: [OSPS Baseline, versión 2026-02-19](https://baseline.openssf.org/versions/2026-02-19.html).

## Rutas relacionadas de Raven

- [Guía de seguridad CI/CD](/es/docs/)
- [NIST AI Risk Management Framework](/es/nist-ai-rmf/)
- [Reglamento de Ciberresiliencia de la UE](/es/cyber-resilience-act/)
