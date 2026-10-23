---
title: "NIST AI Risk Management Framework"
linkTitle: "NIST AI RMF"
description: "Cómo se aplican las funciones del NIST AI RMF al CI/CD y a la entrega de software asistida por IA."
type: docs
layout: docs
weight: 20
---

El [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) es una guía voluntaria para gestionar riesgos para las personas, las organizaciones y la sociedad que derivan de diseñar, desarrollar, usar y evaluar sistemas de IA. El NIST publicó el AI RMF 1.0 en enero de 2023 y, más tarde, un [perfil de IA generativa](https://www.nist.gov/itl/ai-risk-management-framework) (NIST-AI-600-1) para riesgos propios de los modelos generativos.

Raven trata la IA como un acelerador de los patrones de CI/CD ya existentes, no como una pila de entrega aparte. La programación asistida, la generación de pruebas, los bots de revisión y las decisiones de publicación apoyadas en modelos siguen pasando por los mismos puntos de integridad, procedencia, acceso y supervisión descritos en la [guía de seguridad CI/CD](/es/docs/).

## Las cuatro funciones en un pipeline

### Gobernar (*Govern*)

Defina roles, políticas y responsabilidades sobre dónde la IA puede cambiar el código fuente, la configuración del pipeline o el comportamiento en producción. Decida quién puede activar trabajos apoyados en modelos, qué datos pueden ver esos trabajos y cómo se registran las excepciones. Es la contraparte organizativa de [Preparar la Organización](/es/docs/phase-1/ssdf/ssdf-po/) en la Fase 1.

### Mapear (*Map*)

Inventaríe dónde entra la IA en el camino: parches generados, actualizaciones de dependencias sugeridas, revisores automatizados, chatops de despliegue o modelos enviados como funcionalidad del producto. Registre el uso previsto, la sensibilidad de los datos y a quién afecta un resultado erróneo u hostil. Mapear mantiene visible el trabajo de IA en la [Fase 1](/es/docs/phase-1/) y la [Fase 2](/es/docs/phase-2/), en lugar de tratarlo como un canal lateral sin seguimiento.

### Medir (*Measure*)

Sitúe la evaluación delante de la fusión y de la publicación. Eso incluye las puertas habituales de SAST, SCA y política, más comprobaciones propias de la salida del modelo: registros de indicaciones o de llamadas a herramientas, suites de evaluación, casos de equipo rojo y procedencia del modelo y de los datos de entrenamiento o recuperación. Medir es cómo [Compilar y desplegar](/es/docs/phase-2/) y [Compilación y publicación](/es/openssf-baseline/build-and-release/) siguen siendo de confianza cuando parte del cambio lo ha escrito una máquina.

### Gestionar (*Manage*)

Priorice los hallazgos, revierta las publicaciones defectuosas y devuelva las señales de producción al desarrollo. La [Fase 3: Post-despliegue](/es/docs/phase-3/) ya cubre la detección en tiempo de ejecución, el DAST y la respuesta a vulnerabilidades. En las funciones de IA, gestionar también significa vigilar la deriva, el abuso y el uso inesperado de herramientas después de que el artefacto esté en vivo.

## Qué tomar de la guía existente

- Mantenga el código generado y los cambios de pipeline bajo las mismas reglas de revisión, firma y manejo de secretos que los cambios humanos. Véase la [Fase 1](/es/docs/phase-1/) y [OSPS-BR-01 / BR-07](/es/openssf-baseline/build-and-release/).
- Registre qué modelo o agente produjo un cambio cuando esa información esté disponible, para que una revisión de incidente posterior pueda seguir el mismo rastro de commit a artefacto.
- Trate las clases nuevas de vulnerabilidad —inyección de indicaciones contra bots del pipeline, contexto recuperado envenenado, secretos filtrados en registros del modelo— como entradas de las prácticas [Responder a Vulnerabilidades](/es/docs/phase-1/ssdf/ssdf-rv/) y [Gestión de vulnerabilidades de OpenSSF](/es/openssf-baseline/vulnerability-management/).

Puntos de partida oficiales: la [página del NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework), la descarga del [AI RMF 1.0](https://www.nist.gov/itl/ai-risk-management-framework) y el Trustworthy and Responsible AI Resource Center enlazado desde ese sitio.

## Rutas relacionadas de Raven

- [Guía de seguridad CI/CD](/es/docs/)
- [Fase 1: Código y preconstrucción](/es/docs/phase-1/)
- [Fase 2: Compilar y desplegar](/es/docs/phase-2/)
- [Fase 3: Post-despliegue](/es/docs/phase-3/)
- [OpenSSF Baseline](/es/openssf-baseline/)
- [Reglamento de Ciberresiliencia de la UE](/es/cyber-resilience-act/)
