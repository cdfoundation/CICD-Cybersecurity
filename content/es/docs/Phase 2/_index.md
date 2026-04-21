---
title: "Fase 2: Compilar y Desplegar"
linkTitle: "Compilar y Desplegar"
weight: 40
layout: docs
description: >
  Cumplimiento de seguridad en las fases de compilación y despliegue
---

## Fase 2 - Compilar y Desplegar

A medida que el software avanza desde el desarrollo hasta producción, las etapas de compilación y despliegue juegan un papel crucial en mantener la integridad, seguridad y procedencia de tu aplicación. La Fase 2 cubre los controles y prácticas de seguridad aplicados durante las etapas de compilación y despliegue del pipeline de CI/CD. Estos controles aseguran que los artefactos de software sean creados, verificados y liberados de manera confiable, repetible y bajo políticas establecidas antes de llegar a los entornos de ejecución. La Fase 2 se enfoca en prevenir que artefactos comprometidos o no conformes sean desplegados, estableciendo confianza en la cadena de suministro de software antes de que este llegue a entornos en producción.

Específicamente, la Fase 2 incluye:

-- Asegurar los entornos de compilación y los runners de CI para prevenir manipulaciones

-- Compilaciones reproducibles y verificables

-- Integridad de los artefactos, firma y seguimiento de procedencia

-- Análisis de vulnerabilidades y configuraciones durante la compilación

-- Aplicación de políticas de seguridad y cumplimiento durante la compilación

-- Creación y validación segura de imágenes de contenedores

-- Flujos de despliegue controlados con puertas automáticas y aprobaciones

-- Registro de metadatos de despliegue necesarios para visibilidad post-despliegue

### Actividades clave de seguridad en la Fase 2

El cumplimiento en los pasos de Compilación y Despliegue incluye:

[//]: # "- Compilaciones Reproducibles y Determinísticas - Garantizar que los artefactos de software puedan ser verificados y reproducidos de forma independiente para prevenir manipulaciones."
[//]: # "- Detección Automática de Amenazas y Aplicación de Cumplimiento - Integrar análisis de seguridad continuo para detectar configuraciones incorrectas, vulnerabilidades y dependencias no autorizadas antes del despliegue."
[//]: # "- Despliegues con Políticas Enforzadas - Aplicar políticas de seguridad verificables asegurando que solo software conforme y certificado llegue a producción."
[//]: # "- Atestación Criptográfica - Utilizar firmas digitales y pruebas criptográficas para verificar la autenticidad e integridad de compilaciones y despliegues."

|                                                               |                                                                                                                                                         |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Compilaciones Reproducibles y Determinísticas                 | Garantizar que los artefactos de software puedan ser verificados y reproducidos de forma independiente para prevenir manipulaciones.                    |
| Detección Automática de Amenazas y Aplicación de Cumplimiento | Integrar análisis de seguridad continuo para detectar configuraciones incorrectas, vulnerabilidades y dependencias no autorizadas antes del despliegue. |
| Despliegues con Políticas Enforzadas                          | Aplicar políticas de seguridad verificables asegurando que solo software conforme y certificado llegue a producción.                                    |
| Entornos de Ejecución Confiables (TEEs)                       | Asegurar los entornos de compilación contra manipulaciones usando entornos de ejecución respaldados por hardware.                                       |
| Atestación Criptográfica                                      | Utilizar firmas digitales y pruebas criptográficas para verificar la autenticidad e integridad de compilaciones y despliegues.                          |

A continuación, se presentan las directrices de marcos de referencia de la industria con herramientas open source sugeridas necesarias para lograr los objetivos de cumplimiento.
