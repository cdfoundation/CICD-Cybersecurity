---
linkTitle: "Inicio"
weight: 1
layout: docs
---

## Implementación de herramientas de seguridad de código abierto en tu pipeline CI/CD

Asegurar tu pipeline de Integración Continua y Despliegue Continuo (CI/CD) ya no es opcional: es esencial. Esta guía es tu recurso de referencia para construir, implementar y optimizar flujos de trabajo de CI/CD seguros. Ya seas desarrollador, ingeniero DevOps o profesional de seguridad, proporcionamos información sobre las herramientas de código abierto y la orientación que necesitas para modelar la seguridad en cada etapa de tu pipeline. Desde proteger el código y las compilaciones hasta monitorear los entornos posteriores al despliegue, nuestro hub capacita a los equipos para integrar la seguridad de manera fluida en sus flujos de trabajo sin sacrificar velocidad ni agilidad. Explora, aprende y transforma tus procesos de CI/CD en una fortaleza de innovación y resiliencia.

## Por qué esta guía

Esta guía ayuda a los ingenieros DevOps a construir pipelines de CI/CD que cumplan con las normas de seguridad, mapeando nuevas herramientas de automatización de código abierto a los marcos de seguridad en evolución. A medida que los estándares de seguridad cambian, las actualizaciones en los pipelines son esenciales para garantizar un desarrollo de software más seguro. Esta guía explora la intersección entre las herramientas de seguridad y el pipeline CI/CD, identificando las principales prácticas de seguridad, herramientas y estrategias que se alinean con marcos aceptados, como el [Secure Software Development Framework](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf) y el [NIST Cybersecurity Framework](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf). Esta guía alinea las tareas definidas por los marcos con herramientas de código abierto para lograrlas.

Esta Guía de Ciberseguridad para CI/CD se ha segmentado en tres capítulos principales:

- **CI/CD Code and Prebuild** – esta sección incluye herramientas de seguridad para los primeros puntos del flujo de trabajo CI/CD.
- **CI/CD Build and Deploy** – esta sección cubre las herramientas de seguridad tanto para la etapa de compilación como para la de despliegue, sin importar dónde se realice el despliegue (pruebas o producción).
- **CI/CD Post Deploy** – la seguridad no termina después de que los binarios han sido desplegados. Esta sección cubre la gestión continua de vulnerabilidades y las pruebas de seguridad de aplicaciones dinámicas (DAST).

Para obtener más información sobre marcos de seguridad o políticas públicas de seguridad, visita las páginas de [OpenSSF Public Policy](https://openssf.org/public-policy/) o del [EU Cybersecurity Resilience Act](https://openssf.org/public-policy/eu-cyber-resilience-act/).

También puedes aprender sobre el [OpenSSF Open Source Manifesto](https://openssf.org/blog/2023/08/24/join-us-in-adopting-the-open-source-consumption-manifesto/) para ayudar en este recorrido.

## Objetivos de cumplimiento

Las políticas y prácticas de cumplimiento se están definiendo tanto en los sectores público como privado. Específicamente, la Orden Ejecutiva de EE. UU. (EO) sobre la mejora de la ciberseguridad nacional y el EU Cyber Resilience Act (CRA) buscan establecer cómo gestionar amenazas y vulnerabilidades mediante marcos estandarizados de requisitos de ciberseguridad. Estos marcos cubren todo el proceso de desarrollo de software, desde el diseño hasta la monitorización continua de los activos de software en producción.

La inclusión de herramientas de seguridad en el pipeline de Integración Continua y Despliegue Continuo (CI/CD) es un área crucial donde las políticas y prácticas pueden implementarse y automatizarse. Con el ritmo acelerado de desarrollo y despliegue en los entornos modernos de DevOps, la seguridad debe integrarse de manera fluida en cada fase del pipeline para proteger aplicaciones y datos de vulnerabilidades y ataques. Este es el nuevo rol del equipo DevOps. Esta guía está diseñada para ayudar a los equipos DevOps a navegar fácilmente por los nuevos marcos y comprender las herramientas necesarias para cumplir con los objetivos de cumplimiento establecidos.

## Aviso legal

Esta Guía de Ciberseguridad para CI/CD está destinada a servir como un punto de referencia. Se recomienda encarecidamente a los usuarios revisar estas recomendaciones para que se ajusten a los requisitos específicos de seguridad de su proyecto y a los estándares de su organización. Al usar esta guía, aceptas hacerlo bajo tu propio riesgo y criterio. La Continuous Delivery Foundation y la Linux Foundation no serán responsables de ningún daño directo, indirecto, incidental, especial, ejemplar o consecuente (incluyendo, pero no limitado a, la adquisición de bienes o servicios de reemplazo; pérdida de uso, datos o ganancias; o interrupción del negocio), sin importar la causa y bajo cualquier teoría de responsabilidad, ya sea contractual, responsabilidad estricta o por agravio (incluyendo negligencia u otra), que surja de cualquier forma del uso de esta guía, incluso si se ha advertido sobre la posibilidad de tales daños.
