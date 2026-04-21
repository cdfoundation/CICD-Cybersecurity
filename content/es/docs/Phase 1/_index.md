---
title: "Fase 1: Código y Preconstrucción"
linkTitle: "Código y Preconstrucción"
weight: 20
layout: docs
description: >
  Cumplimiento de seguridad para Código y Preconstrucción
---

## Fase 1 - Código y Preconstrucción

Integrar la seguridad en cada etapa del Ciclo de Vida del Desarrollo de Software (SDLC) es más crítico que nunca. La fase de código y preconstrucción es fundamental para crear aplicaciones seguras, confiables y de alto rendimiento. No abordar las vulnerabilidades de manera temprana puede derivar en correcciones costosas, filtraciones de datos y daños a la reputación a largo plazo.

Esta sección proporciona una guía completa de las herramientas de seguridad esenciales que los desarrolladores y los equipos de DevOps deben usar durante la fase de código y preconstrucción para garantizar que las vulnerabilidades se identifiquen y mitiguen antes de que puedan causar daño. Desde Pruebas de Seguridad de Aplicaciones Estáticas (SAST) hasta el escaneo de dependencias y pipelines de CI/CD seguros, las herramientas adecuadas pueden ayudarte a adoptar un enfoque proactivo de la seguridad del software mientras se mantiene la velocidad de desarrollo. A continuación, se presentan las pautas de los frameworks de la industria con las herramientas open source sugeridas necesarias para alcanzar los objetivos de cumplimiento. Por ejemplo:

-- Garantizar la integridad y procedencia del código fuente

-- Prevenir el acceso no autorizado a repositorios y pipelines

-- Detectar patrones de código inseguro de manera temprana - shift left

-- Identificar dependencias open-source vulnerables

-- Generar SBOMs lo antes posible

-- Establecer trazabilidad desde commit → artifact → deployment

### Actividades Clave de Seguridad de la Fase 1

El cumplimiento en los pasos de Código y Preconstrucción incluye:

|                                  |                                               |
| -------------------------------- | --------------------------------------------- |
| **ACTIVIDAD**                    | **PROPÓSITO**                                 |
| Control de Acceso a Repositorios | Prevenir cambios de código no autorizados     |
| Firma de Commits                 | Establecer la procedencia del software        |
| Protección de Ramas              | Aplicar revisiones de pares y políticas       |
| SAST                             | Detectar patrones de código inseguro          |
| Escaneo de Dependencias          | Identificar librerías vulnerables             |
| Generación de SBOM               | Crear visibilidad temprana de los componentes |

A continuación, se presentan las pautas de los frameworks de la industria con las herramientas open source sugeridas para alcanzar los objetivos de cumplimiento.
