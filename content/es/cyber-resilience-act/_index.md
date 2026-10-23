---
title: "Reglamento de Ciberresiliencia de la UE"
linkTitle: "Reglamento de Ciberresiliencia"
description: "Cómo se relaciona el Reglamento de Ciberresiliencia de la UE con la guía CI/CD de Raven, la gestión de vulnerabilidades de OpenSSF y la seguridad del ciclo de vida del producto."
type: docs
layout: docs
weight: 30
---

El [Reglamento de Ciberresiliencia (CRA)](https://digital-strategy.ec.europa.eu/es/policies/cyber-resilience-act) es el Reglamento (UE) 2024/2847. Establece requisitos horizontales de ciberseguridad para los productos con elementos digitales introducidos en el mercado de la UE: hardware y software que pueden conectarse, desde dispositivos de consumo hasta software de aplicación. Se espera que los fabricantes traten la seguridad como un deber a lo largo del ciclo de vida: diseño y desarrollo, gestión de vulnerabilidades tras la publicación y actualizaciones de seguridad durante la ventana de soporte que declaren.

El Reglamento entró en vigor el 10 de diciembre de 2024. Las obligaciones de notificación se aplican a partir del 11 de septiembre de 2026. Las obligaciones principales sobre los productos se aplican a partir del 11 de diciembre de 2027. Algunas clases de producto más relevantes para la ciberseguridad pueden requerir la evaluación de un organismo notificado. Los productos que cumplen las normas llevan el marcado CE, y las autoridades nacionales de vigilancia del mercado las hacen cumplir.

Esta página es una orientación para CI/CD y para administradores de software de código abierto. No es asesoramiento jurídico y no determina si un proyecto concreto está incluido en el ámbito de aplicación.

## Qué pide el CRA a un pipeline de entrega

- **Diseño y desarrollo seguros.** Los controles durante la codificación, la compilación y la publicación —acceso, integridad, higiene de dependencias y procedencia de artefactos— son la contraparte práctica de la [Fase 1](/es/docs/phase-1/) y la [Fase 2](/es/docs/phase-2/) de Raven, y de [Compilación y publicación de OpenSSF](/es/openssf-baseline/build-and-release/).
- **Gestión de vulnerabilidades.** Los fabricantes deben poder recibir informes, evaluar el impacto y actuar durante la vida de soporte del producto. Eso coincide con la [gestión de vulnerabilidades de OpenSSF](/es/openssf-baseline/vulnerability-management/) (OSPS-VM-01 a VM-06) y con las páginas Responder a Vulnerabilidades de la [Fase 1](/es/docs/phase-1/ssdf/ssdf-rv/), la [Fase 2](/es/docs/phase-2/ssdf/ssdf-rv/) y la [Fase 3](/es/docs/phase-3/ssdf/ssdf-rv/).
- **Actualizaciones de seguridad.** Los usuarios necesitan una vía soportada hacia versiones parcheadas. La [Fase 3](/es/docs/phase-3/) cubre el ciclo posterior al despliegue que detecta problemas recién divulgados en sistemas en ejecución y devuelve las correcciones al pipeline.
- **Documentación y visibilidad de componentes.** Las expectativas sobre documentación y listas de materiales de software se sitúan junto a la generación temprana de SBOM en la [Fase 1](/es/docs/phase-1/) y a los metadatos de publicación en [OSPS-BR-02, BR-04 y BR-06](/es/openssf-baseline/build-and-release/).

## Administradores de software de código abierto

El CRA distingue a los fabricantes comerciales de ciertos administradores de software de código abierto (*open-source software stewards*) que dan soporte a proyectos de uso amplio sin introducir un producto en el mercado en el sentido de fabricante. Los deberes del administrador son más estrechos y se centran en la colaboración en torno a las vulnerabilidades, no en la conformidad plena del fabricante. Los proyectos deben leer el reglamento y la guía de aplicación de la Comisión para ver qué papel, si alguno, les corresponde. La página de [gestión de vulnerabilidades](/es/openssf-baseline/vulnerability-management/) de Raven es el acompañante técnico más cercano para cualquiera de los dos papeles.

## Cómo se conecta esta página con el resto del sitio

La guía existente ya menciona el CRA en la [portada de la documentación](/es/docs/) como un motor de política pública. Esta ruta reúne los temas orientados al pipeline y los enlaza con la OpenSSF Baseline y con el [NIST AI Risk Management Framework](/es/nist-ai-rmf/) para productos o pipelines que incluyen componentes de IA.

Puntos de partida oficiales: la [página de política del CRA de la Comisión](https://digital-strategy.ec.europa.eu/es/policies/cyber-resilience-act) y el [Reglamento (UE) 2024/2847](https://eur-lex.europa.eu/eli/reg/2024/2847/oj).

## Rutas relacionadas de Raven

- [Guía de seguridad CI/CD](/es/docs/)
- [Fase 3: Post-despliegue](/es/docs/phase-3/)
- [Gestión de vulnerabilidades de OpenSSF](/es/openssf-baseline/vulnerability-management/)
- [Compilación y publicación de OpenSSF](/es/openssf-baseline/build-and-release/)
- [Marcos externos de OpenSSF](/es/openssf-baseline/external-frameworks/)
- [NIST AI Risk Management Framework](/es/nist-ai-rmf/)
