# IA para Proceso Penal

Aplicación web académica que simula un **sistema de apoyo a la toma de decisiones (DSS)** aplicado al análisis de casos de derecho penal.

El proyecto permite ingresar diferentes características de un caso y genera una clasificación jurídica, una evaluación simulada del riesgo procesal y una recomendación estratégica utilizando reglas programadas en JavaScript.

> **Nota:** Este proyecto tiene fines exclusivamente académicos y demostrativos. No constituye una herramienta jurídica profesional ni debe utilizarse para tomar decisiones judiciales o legales reales.

## Características

* Formulario interactivo para registrar información de un caso.
* Selección de diferentes conductas investigadas.
* Registro de antecedentes judiciales.
* Selección del tipo de evidencia disponible.
* Campo para describir los hechos del caso.
* Generación automática de resultados.
* Clasificación jurídica sugerida.
* Evaluación simulada del riesgo procesal.
* Generación de una estrategia de análisis.
* Indicador visual durante el procesamiento.
* Diseño responsive para diferentes dispositivos.

## Tecnologías utilizadas

* **HTML5** — estructura de la aplicación.
* **CSS3** — diseño, estilos y adaptación responsive.
* **JavaScript** — lógica de procesamiento, eventos y manipulación del DOM.

## Funcionamiento

El usuario completa el formulario con información relacionada con el caso:

1. Selecciona la conducta investigada.
2. Indica los antecedentes judiciales.
3. Selecciona el tipo de evidencia principal.
4. Describe brevemente los hechos.
5. Envía el formulario.
6. El sistema procesa la información.
7. Se muestran los resultados del análisis.

Los resultados incluyen:

* Calificación jurídica sugerida.
* Nivel de riesgo procesal simulado.
* Recomendación estratégica.

## Sistema basado en reglas

El proyecto utiliza **reglas condicionales programadas en JavaScript** para generar los resultados.

Por ejemplo, dependiendo de la conducta seleccionada, el sistema aplica diferentes reglas para determinar la clasificación y el resultado mostrado.

Esto permite representar de manera sencilla el funcionamiento conceptual de un sistema de apoyo a decisiones basado en reglas.

El proyecto **no implementa un modelo de aprendizaje automático entrenado ni una API externa de inteligencia artificial**.

## Estructura del proyecto

```text
IA-para-proceso-penal/
│
├── index.html
├── script.js
├── styles.css
└── README.md
```

### `index.html`

Contiene la estructura principal de la aplicación, incluyendo:

* Encabezado.
* Descripción del problema.
* Formulario del caso.
* Área de resultados.
* Conclusiones.
* Pie de página.

### `script.js`

Contiene la lógica de la aplicación:

* Captura del formulario.
* Procesamiento de los datos.
* Reglas condicionales.
* Generación de resultados.
* Manipulación del DOM.
* Indicador de procesamiento.

### `styles.css`

Contiene los estilos visuales de la aplicación:

* Colores.
* Tarjetas.
* Formularios.
* Botones.
* Resultados.
* Diseño responsive.

## Objetivo académico

El objetivo del proyecto es explorar la aplicación de conceptos de **Inteligencia Artificial, sistemas basados en reglas y sistemas de apoyo a decisiones** dentro del área de tecnología jurídica.

También busca demostrar cómo una aplicación web puede utilizar información ingresada por el usuario y reglas programadas para generar resultados estructurados.

## Limitaciones

El sistema utiliza reglas predeterminadas y no consulta:

* Bases de datos jurídicas.
* Jurisprudencia en tiempo real.
* Legislación actualizada automáticamente.
* Modelos de Machine Learning.
* Servicios externos de Inteligencia Artificial.

Por esta razón, los resultados deben entenderse únicamente como una **simulación académica**.

## Ejecución

El proyecto es una aplicación web estática.

No requiere:

* Backend.
* Base de datos.
* Node.js.
* Servidor externo.

Para ejecutarlo localmente, basta con abrir:

```text
index.html
```

en un navegador web.

También puede publicarse mediante servicios de hosting estático como GitHub Pages o Netlify.

## Autor

**Luis Mesa**

Proyecto académico de desarrollo web e Inteligencia Artificial.
