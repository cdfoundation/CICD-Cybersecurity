---
title: "Fase 3: Post-Despliegue"
linkTitle: "Post-Despliegue"
weight: 45
layout: docs
description: >
  Cumplimiento de Seguridad para Post-Despliegue
---

## Fase 3 - Post-Despliegue

La Fase 3, Post-Despliegue, extiende la ciberseguridad de CI/CD más allá del despliegue hacia sistemas en producción activos. Mientras que las fases anteriores se enfocan en prevenir que las vulnerabilidades ingresen al pipeline, la Fase 3 asume que el riesgo continúa después del lanzamiento. Nuevas vulnerabilidades se divulgan diariamente, las configuraciones pueden desviarse y los actores maliciosos atacan directamente los entornos de producción.

El enfoque principal de la Fase 3 es la visibilidad continua, la detección y respuesta post-despliegue de vulnerabilidades en sistemas activos. Garantiza que las organizaciones puedan identificar qué sistemas en ejecución se ven afectados cuando surgen nuevas vulnerabilidades, detectar comportamientos maliciosos o anómalos en tiempo de ejecución y responder rápidamente para minimizar el impacto operativo y de seguridad. La Fase 3 establece un bucle de retroalimentación que conecta la realidad de producción con los equipos de desarrollo y seguridad, permitiendo la mejora continua a lo largo del ciclo de entrega de software. Dentro del alcance de esta fase se incluyen:

-- Detección continua de vulnerabilidades para aplicaciones, servicios, contenedores e infraestructura desplegada

-- Monitoreo de seguridad en tiempo de ejecución y post-despliegue

-- Pruebas de Seguridad Dinámica de Aplicaciones (DAST) sobre sistemas en ejecución

-- Integración de feeds de inteligencia de vulnerabilidades y alertas

-- Detección de incidentes, alertas y flujos de trabajo de respuesta

-- Medición del desempeño de seguridad (por ejemplo, MTTD, MTTR)

-- Mecanismos de retroalimentación que informan la remediación y el desarrollo futuro

### Actividades Clave de Seguridad en Fase 3

El cumplimiento de los pasos Post-Despliegue incluye:

|                                               |                                                   |
| --------------------------------------------- | ------------------------------------------------- |
| <strong>ACTIVIDAD</strong>                    | <strong>PROPÓSITO</strong>                        |
| Detección de anomalías en tiempo de ejecución | Detectar ataques en producción                    |
| Escaneo DAST                                  | Encontrar vulnerabilidades en tiempo de ejecución |
| Integración de feeds de vulnerabilidades      | Actualizar continuamente los datos CVE            |
| Alertas y Respuesta                           | Clasificar y responder                            |

A continuación, se presentan las directrices de marcos de referencia de la industria con herramientas de código abierto sugeridas para lograr los objetivos de cumplimiento.

### Marcos de Referencia de la Industria

Se presentan las directrices de marcos de referencia de la industria con herramientas de código abierto sugeridas para alcanzar los objetivos de cumplimiento.
