# CRISTIAN CASAMITJANA
## REVAMP WEB · DOCUMENTO UX, DISEÑO Y ESTRATEGIA SEO

*Versión 1.1 · Abril 2026 · Para implementación en WordPress + Elementor*

> ⚠️ **Versión actualizada con cambios del cliente** (imágenes de referencia + ajuste de programa)

---

## ÍNDICE DE CONTENIDOS

1. [Diagnóstico de la web actual](#1-diagnóstico-de-la-web-actual)
2. [Estrategia de arquitectura de información](#2-arquitectura-de-información--nueva-estructura)
3. [Sistema de diseño Figma — tokens y componentes](#3-sistema-de-diseño-figma--tokens-y-componentes)
4. [Paleta de color, tipografía e iconografía](#4-paleta-de-color-tipografía-e-iconografía)
5. [Especificaciones de assets](#5-especificaciones-de-assets--imágenes-iconos-e-ilustraciones)
6. [Página HOME — wireframe, copy y notas UX](#6-página-home--wireframe-copy-y-notas-ux)
7. [Página SOBRE MÍ](#7-página-sobre-mí)
8. [Página SESIONES ONLINE](#8-página-sesiones-hub-unificado)
9. [Página SESIONES PRESENCIALES](#8-página-sesiones-hub-unificado)
10. [Página PROGRAMA 7 SEMANAS — Transformación Personal ⚠️ actualizado](#9-página-programa--transformación-personal-1-a-1)
11. [Página CONTENIDOS (nueva estrategia)](#10-página-contenidos--nueva-estrategia-seo)
12. [Página CONTACTO (sin WhatsApp)](#11-página-contacto--sin-whatsapp)
13. [Estrategia SEO + Schema Markup](#12-estrategia-seo--schema-markup)
14. [Decisiones eliminadas y consolidadas](#13-decisiones-eliminadas-y-consolidadas)

---

## 1. DIAGNÓSTICO DE LA WEB ACTUAL

### 1.1 Problemas detectados

**ARQUITECTURA Y NAVEGACIÓN**

- La página de Testimonios existe como sección standalone, pero su contenido tiene más impacto embebido en las páginas de servicio donde el usuario ya está en modo de decisión.
- La página de 'Blog' no es un blog real: es un grid de links a YouTube. Sin contenido propio indexable, pierde todo el potencial SEO.
- El menú de 'Servicios' tiene un desplegable con tres subitems que genera fricción y carga cognitiva innecesaria en mobile.
- Las sesiones presenciales y online tienen páginas separadas con copy casi idéntico. Se pueden unificar en un solo hub de servicios con tabs.

**UX / CONVERSIÓN**

- El CTA de WhatsApp flotante está presente en toda la web. El cliente quiere eliminarlo y sustituirlo por un formulario que envíe email.
- El hero actual es genérico y no conecta emocionalmente con el problema del usuario. El copy de la nueva web es mucho más directo.
- Hay secciones con imágenes desactualizadas, inconsistencia de estilo visual entre páginas.
- No hay social proof inmediato en el hero ni en el fold inicial.
- Falta un micro-gancho emocional al inicio que el nuevo copy sí incluye.

**SEO Y CONTENIDO**

- Ausencia total de Schema Markup (Person, LocalBusiness, FAQPage, BreadcrumbList, Review).
- Las páginas de servicio no tienen estructura H1/H2/H3 coherente para bots de búsqueda.
- El blog sin contenido propio no genera autoridad de dominio ni captura tráfico orgánico de long tail.
- Metadescripciones y títulos SEO no están optimizados para las keywords target del cliente.
- No hay estrategia de contenido pillar + cluster para posicionar en temas de psicología integrativa.

### 1.2 Lo que funciona y se conserva

- **Credenciales y autoridad:** +147.000 suscriptores YouTube, podcast, 12+ años de experiencia — hay que amplificarlos, no esconderlos.
- **Copy emocional del brief:** es excelente. Se implementará casi literal en las nuevas páginas.
- **Testimonios reales:** son potentes. Se redistribuirán estratégicamente en cada página.
- **Marca personal** (nombre + foto): está bien establecida. Se refuerza con coherencia visual.
- **Reviews de Google:** el cliente dispone de reseñas reales de Google. Se integrarán en el Schema AggregateRating y como testimonios en páginas de servicio.

---

## 2. ARQUITECTURA DE INFORMACIÓN — NUEVA ESTRUCTURA

La nueva IA reduce páginas, elimina fricción y concentra las rutas de conversión en dos puntos clave: reserva de sesión y contacto por formulario.

### Sitemap propuesto

**NIVEL 0 — Inicio (Home)**
- Hero con CTA principal → Reservar sesión
- Sección problema / solución
- Mini bio + estadísticas de autoridad
- Cards de servicios (3 max)
- Testimonios seleccionados (3–4) — incluir reviews de Google con nombre y estrellas
- CTA final + acceso a contenido gratuito

**NIVEL 1 — Páginas principales**
- Sobre mí → historia + enfoque + valores
- Sesiones (hub único) → Presencial + Online con selector / tabs
- Programa 7 semanas (Transformación Personal 1 a 1) → landing específica
- Contenidos (rebrand del Blog) → hub YouTube + Podcast + recursos descargables
- Contacto → solo formulario → envío a email

**ELIMINADAS**
- ~~Página de Testimonios standalone~~ → contenido distribuido en cada página de servicio
- ~~CTA de WhatsApp flotante~~ → eliminado globalmente
- ~~Blog con solo links YouTube~~ → sustituido por hub de Contenidos con estrategia SEO

### 2.1 Menú de navegación propuesto

**Inicio | Sobre mí | Sesiones | Programa | Contenidos | Contacto**

> 📌 El ítem 'Sesiones' se abre como sub-menú horizontal: Presenciales · Online · Programa 7 semanas. El CTA 'Reservar sesión' se pinea en la barra superior derecha, siempre visible.

---

## 3. SISTEMA DE DISEÑO FIGMA — TOKENS Y COMPONENTES

### 3.1 Configuración de frames en Figma

| Frame | Dimensiones | Uso |
|---|---|---|
| Desktop HD | 1440 × 900 px | Vista principal de diseño |
| Tablet | 768 × 1024 px | Responsive check obligatorio |
| Mobile | 390 × 844 px | Prioridad: >60% del tráfico |
| Component | Variable | Cada componente aislado |

> 📌 Usar 'Breakpoint' plugin en Figma para previsualizar todos los frames juntos. Grid de 12 columnas en Desktop, 4 en Mobile, gutter de 24px.

### 3.2 Componentes base a crear en Figma

| Componente | Especificación |
|---|---|
| Button/Primary | Fondo `#C9A84C`, texto blanco, radius 4px, hover: opacidad 90% |
| Button/Secondary | Borde `#C9A84C`, texto `#C9A84C`, fondo transparente |
| Button/Ghost | Solo texto con subrayado `#C9A84C` |
| NavBar | Sticky, fondo blanco, logo izquierda, menú centro, CTA derecha |
| Hero | Full-width, imagen background con overlay `#1B2B4B` 60%, texto encima |
| SectionBlock | Padding 80px top/bottom desktop, 48px mobile |
| Card/Servicio | Sombra suave, border-left 4px `#C9A84C`, hover elevación |
| Card/Testimonio | Avatar circular, estrellas, cita en cursiva, nombre en bold |
| StatsBar | 3 métricas lado a lado, fondo `#1B2B4B`, texto blanco y dorado |
| BulletCheck | Icono SVG check `#C9A84C` + texto |
| BulletX | Icono SVG X rojo + texto, para sección 'No es para ti' |
| FormField | Label uppercase pequeño, input border-bottom solo, fondo crema |
| ProgramWeek | Card semana del programa, número grande dorado, icono + texto |
| Footer | 3 columnas, fondo `#1B2B4B`, links blancos, separador dorado |
| CookieBanner | Bottom fixed, fondo navy, botón aceptar dorado |

---

## 4. PALETA DE COLOR, TIPOGRAFÍA E ICONOGRAFÍA

### 4.1 Paleta de colores

| Token | Hex | Uso |
|---|---|---|
| Navy / Azul profundo | `#1B2B4B` | Fondos, nav, footer, titles |
| Gold / Dorado cálido | `#C9A84C` | CTAs, acentos, highlights |
| Cream / Crema | `#F9F6F0` | Fondos alternativos, cards |
| Dark / Casi negro | `#1A1A1A` | Texto body principal |
| Gray / Gris medio | `#666666` | Texto secundario, captions |

> 📌 Ratio de contraste: Navy + White = 12:1 (AAA). Gold + Navy = 4.8:1 (AA). Verificar siempre con Figma Plugin 'Contrast' antes de finalizar.

### 4.2 Tipografía

| Rol | Fuente | Peso / Tamaño Desktop | Uso |
|---|---|---|---|
| Display H1 | Playfair Display | Bold 48–56px | Hero headlines |
| H2 Section | Playfair Display | SemiBold 36px | Títulos de sección |
| H3 Sub | Inter | SemiBold 24px | Subtítulos, cards |
| Body | Inter | Regular 16–18px | Texto corrido |
| Caption | Inter | Regular 14px | Notas, labels, tags |
| CTA / Button | Inter | Bold 14–16px ALL CAPS | Botones, acciones |

> 📌 Playfair Display e Inter son Google Fonts gratuitas. Importar via `@import` en WordPress. Elementor permite asignar fuentes globales desde Tema > Tipografía.

### 4.3 Iconografía

- **Set recomendado:** Phosphor Icons (phosphoricons.com) — SVG outline, grosor 1.5px, color `#C9A84C` o `#1B2B4B` según contexto.
- **Alternativa:** Heroicons (heroicons.com) — misma filosofía, 100% open source.
- **Iconos a usar:** cerebro (mental), corazón (emocional), árbol (transgeneracional), personas (relaciones), estrella (testimonios), check, X, flecha derecha, flecha abajo, YouTube play, podcast mic, email.
- Nunca usar emojis como iconos en producción.

---

## 5. ESPECIFICACIONES DE ASSETS — IMÁGENES, ICONOS E ILUSTRACIONES

### 5.1 Fotografías de Cristian (assets de marca)

| Foto | Especificación |
|---|---|
| Hero principal | Horizontal 1440×900px mínimo, fondo neutro. Expresión cercana, mirada a cámara. Ropa: azul marino o gris marengo. Luz suave difusa. |
| Sobre mí hero | Foto diferente a la home, más casual, entorno natural o exterior. |
| Sobre mí — más allá del trabajo | Foto en entorno natural (montaña, campo, mar). Transmite autenticidad. |
| Sesiones | Posición de escucha / consulta, o frente a pantalla (sesión online). |
| YouTube / Podcast | Con micrófono o frente a cámara de grabación. |

> 📌 Si no hay sesión fotográfica inmediata, usar de forma temporal las fotos actuales de la web.

### 5.2 Imágenes de apoyo (banco de imágenes)

| Página / Sección | Imagen sugerida | Fuente gratuita |
|---|---|---|
| Home — problema | Persona pensativa, manos en la cabeza, luz suave | Unsplash / Pexels |
| Home — árbol | Árbol de raíces visibles, atardecer cálido | Unsplash (tree roots golden) |
| Sobre mí — sección texto | Banco de niebla en campo al amanecer | Unsplash (misty field sunrise) |
| Sesiones — sala consulta | Sala minimalista, sillón, planta, luz natural | Pexels (therapy room minimal) |
| Árbol genealógico | Ramas de árbol, bokeh de fondo, tono cálido | Unsplash (tree branches bokeh) |
| Contenidos hero | Escritorio limpio con micrófono y portátil | Pexels (podcast desk setup) |

### 5.3 Ilustraciones y gráficos a crear

- **Infografía 'Cómo funciona el proceso':** diagrama horizontal de 4 pasos (Contacto → Sesión diagnóstico → Proceso → Transformación). Estilo línea, colores navy + dorado. Formato SVG.
- **Infografía 'El enfoque integrador':** diagrama de Venn o esquema radial mostrando las 4 dimensiones (Emocional, Mental, Conductual, Transgeneracional). Formato SVG.
- **Cards del Programa 7 semanas:** 7 iconos únicos para cada semana. Formato SVG outline, 48×48px.
- **Avatar placeholder para testimonios sin foto:** silueta abstracta neutra, estilo trazo, color crema sobre navy.
- **Icono de marca personal:** versión simplificada/monolínea del árbol genealógico. Se vectoriza y se usa como separador de sección.

> 📌 Herramienta recomendada: Figma (con plugin Phosphor). Alternativa: Adobe Illustrator. Entregar en SVG + PNG @2x.

---

## 6. PÁGINA HOME — WIREFRAME, COPY Y NOTAS UX

### Sección 1 — HERO (full width)

**H1: Deja de repetir patrones en tus relaciones y en tu vida.**

Subtítulo: Si tu mente no para y sientes que estás atrapado en lo mismo, aquí vas a entender por qué.

*Tag: Psicología integrativa + trabajo emocional, mental y transgeneracional.*

**CTA principal: `[RESERVAR SESIÓN]` — solo este botón, sin WhatsApp.**

> 📌 UX: Fondo hero = foto de Cristian a la derecha + overlay navy 55% a la izquierda donde va el texto. Height: 100vh desktop, auto mobile. CTA sticky en navbar también visible.

---

### Sección 2 — PROBLEMA (fondo crema)

**H2: Si sientes que estás atrapado en lo mismo… no es casualidad**

- Repites relaciones que no te hacen bien
- Te cuesta poner límites sin culpa
- Sientes inseguridad o dependencia emocional
- Tu mente no para: le das vueltas a todo sin encontrar salida
- Sabes lo que te pasa… pero no consigues cambiarlo

**No es falta de fuerza de voluntad. Hay patrones más profundos operando.**

> 📌 UX: Layout 2 columnas. Izquierda: lista con iconos check dorados. Derecha: ilustración del árbol (SVG). En mobile: columna única, árbol debajo del texto.

---

### Sección 3 — PARA QUIÉN ES / NO ES (fondo blanco)

| ✓ ESTE ESPACIO ES PARA TI SI... | ✗ NO ES PARA TI SI... |
|---|---|
| Estás dispuesto a mirarte de verdad | Buscas soluciones rápidas o 'mágicas' |
| Quieres entender el origen de lo que te pasa | Esperas que alguien cambie tu vida por ti |
| Buscas un cambio profundo, no superficial | No quieres cuestionarte ni profundizar |

> 📌 UX: Columna izquierda fondo verde muy suave (`#F0FFF4`). Columna derecha fondo rojo suave (`#FFF5F5`). Check icon verde, X icon rojo.

---

### Sección 4 — AUTORIDAD / ESTADÍSTICAS (fondo navy)

**H2: También puedes empezar por aquí**

Llevo más de 12 años acompañando procesos personales y compartiendo contenido sobre autoconocimiento, relaciones y crecimiento personal.

| Estadística | Valor |
|---|---|
| Canal YouTube (Autoconocimiento 360°) | +147.000 personas |
| Podcast 'De tal árbol, tal astilla' | 4.500 suscriptores |
| Años de experiencia | 12+ |

**CTAs: `[VER CANAL YOUTUBE]`   `[ESCUCHAR PODCAST]`**

> 📌 UX: Fondo `#1B2B4B`. Estadísticas en cards blancas 3 columnas con número grande en dorado. Botones con borde blanco.

---

### Sección 5 — TESTIMONIOS (fondo crema)

**H2: Experiencias reales**

> *"He logrado dejar atrás relaciones tóxicas y comprender de dónde venían mis miedos. Ahora soy una persona más segura y capaz de poner límites."*
> — **Marcos Q. Jiménez** ★★★★★

> *"Ahora entiendo por qué durante años me enganchaba a relaciones dañinas. Dejar de repetir patrones me ha dado paz mental y libertad."*
> — **Clara Rodríguez Hernández** ★★★★★

> *"Cristian me ha ayudado a conectar conmigo misma y a entender la raíz de mis inseguridades. Hoy me siento más fuerte y con control de mi vida."*
> — **Manuela Gutiérrez** ★★★★★

> 📌 UX: Incluir también reviews reales de Google del cliente. Carrusel (Swiper.js). 3 testimonios visibles en desktop, 1 en mobile. Avatar circular + nombre + 5 estrellas doradas.

---

### Sección 6 — CTA FINAL (fondo navy)

**H2: Si has llegado hasta aquí, no es casualidad**

No necesitas hacerlo solo. Pero sí necesitas implicarte.

**CTA: `[RESERVAR SESIÓN]` — único botón, sin WhatsApp**

---

## 7. PÁGINA SOBRE MÍ

### Sección 1 — HERO

**H1: Si sientes que estás atrapado en patrones que no entiendes… no estás solo**

Yo también pasé por ese proceso. Y fue ahí donde empezó todo.

**CTA: `[CONOCER MI ENFOQUE]` — scroll suave a sección Enfoque**

---

### Sección 2 — HISTORIA PERSONAL

**H2: Durante mucho tiempo, no entendía por qué me pasaban ciertas cosas**

Me encontraba repitiendo patrones, emociones y situaciones que no sabía cómo cambiar. Sabía que algo no encajaba… pero no tenía las herramientas para comprenderlo.

**H3: Hasta que empecé a mirar más allá de lo evidente**

Lo que vivimos no empieza solo en nosotros. Empecé a explorar:
- Mi historia personal
- Mis emociones
- Mis patrones mentales
- Y también mi historia familiar

**No se trata solo de entender… sino de transformar.**

> 📌 UX: Layout alternado. Texto izquierda, foto naturaleza derecha. Siguiente subsección: texto derecha, foto árbol izquierda.

---

### Sección 3 — ENFOQUE

**H2: Hoy, ese camino es el que utilizo para acompañar a otras personas**

Trabajo desde una psicología integrativa que tiene en cuenta:

- 🧠 **Lo emocional** (lo que sientes)
- 💭 **Lo mental** (cómo piensas y por qué entras en bucles)
- 🔄 **Lo conductual** (lo que haces)
- 🌳 **Lo transgeneracional** (lo que has heredado sin darte cuenta)

> 📌 UX: Cards de 4 pilares con icono dorado en cada uno. Infografía del diagrama radial (ver sección Assets). Fondo crema.

---

### Sección 4 — MÁS ALLÁ DEL TRABAJO

**H2: Más allá del trabajo**

Vivo en un entorno natural donde encuentro calma, claridad y conexión. La naturaleza y la sencillez forman parte de mi forma de vivir… y también de acompañar.

> 📌 UX: Foto full-width de entorno natural. Texto encima con overlay suave. Humaniza la marca personal.

---

### Sección 5 — NO ES UN PROCESO PASIVO

**H2: Este no es un proceso pasivo**

No creo en soluciones rápidas ni en que alguien externo venga a 'arreglarte'. Creo en:
- Responsabilidad personal
- Consciencia
- Profundidad

---

### Sección 6 — CTA FINAL

Si sientes que este enfoque conecta contigo, da el primer paso.

**CTA: `[RESERVAR SESIÓN]` — fondo navy**

---

## 8. PÁGINA SESIONES (HUB UNIFICADO)

Se unifica Sesiones Presenciales y Online en una sola página con selector (tabs o toggle) para reducir duplicación de contenido y mejorar SEO. El Programa 7 semanas tiene su propio enlace desde el submenú y desde esta página.

### Sección 1 — HERO

**H1: Sesiones online para dejar de repetir lo mismo y entender qué te está pasando**

Si tu mente no para, repites patrones en tus relaciones o sientes que hay algo que no consigues cambiar… aquí vamos a trabajar en la raíz.

*Tag: Psicología integrativa + trabajo emocional, mental y transgeneracional*

**CTAs: `[RESERVAR SESIÓN ONLINE]`   `[RESERVAR SESIÓN PRESENCIAL]`**

---

### Sección 2 — PARA QUIÉN ES

**H2: Esto es para ti si…**

- Sientes que repites las mismas situaciones una y otra vez
- Tu mente no para y entras en bucles de pensamientos
- Te cuesta poner límites o sostener relaciones sanas
- Sabes lo que te pasa… pero no consigues cambiarlo
- Sientes inseguridad o dependencia emocional

**No es casualidad. Hay un patrón detrás de todo eso.**

---

### Sección 3 — CÓMO TRABAJAMOS

**H2: No vamos a quedarnos en la superficie**

En las sesiones no solo hablaremos de lo que te pasa. Vamos a ir a la raíz.

- ❤️ **Entender qué estás sintiendo realmente** (emocional)
- 🧠 **Lo mental:** cómo piensas y por qué entras en bucles
- 🌳 **Lo transgeneracional:** lo que has heredado sin darte cuenta

*Muchas veces, lo que vives hoy no empieza solo en ti.*

> 📌 UX: 3 cards con iconos (corazón, cerebro, árbol). Infografía de proceso: 4 pasos (ver Assets). Fondo blanco.

---

### Sección 4 — QUÉ PUEDES CAMBIAR

**H2: Qué puedes empezar a cambiar**

- Entender por qué te pasa lo que te pasa
- Salir del bucle mental y tener más claridad
- Relacionarte desde un lugar más sano
- Poner límites sin culpa
- Sentirte más seguro contigo mismo
- Vivir con más coherencia y libertad

> *"He dejado de repetir relaciones que me hacían daño y ahora entiendo por qué me pasaba. Ha sido un antes y un después."* ★★★★★ — Google

---

### Sección 5 — MODALIDADES (Tabs)

| ONLINE | PRESENCIAL |
|---|---|
| Sesiones por videollamada. Misma profundidad que la presencial. Desde donde estés. | Sesiones en consulta. Entorno íntimo y sin distracciones para un trabajo más profundo. |
| Duración: 50 min / Frecuencia: semanal recomendada | Duración: 50 min / Ubicación: consultar disponibilidad |
| `[RESERVAR ONLINE]` | `[RESERVAR PRESENCIAL]` |

> 📌 UX: Las dos cards una al lado de la otra (desktop), apiladas (mobile). Usar Elementor Toggle o Tabs. Ambas llevan a formulario de contacto.

---

### Sección 6 — CTA FINAL

**Si sientes que ha llegado tu momento**

No necesitas tenerlo todo claro para empezar. Pero sí necesitas dar un paso.

**CTA: `[RESERVAR SESIÓN]` — único botón, sin WhatsApp**

---

## 9. PÁGINA PROGRAMA — TRANSFORMACIÓN PERSONAL 1 A 1

> ⚠️ **ACTUALIZACIÓN v1.1** — Basada en imágenes de referencia del cliente
>
> - El nombre comercial es **'Transformación Personal Uno a Uno'** (no 'Árbol Genealógico' como figuraba en la v1.0)
> - El programa es de **7 semanas** (no 8 como figuraba en la v1.0)
> - El CTA principal es **'Reservar Sesión de Reconocimiento GRATIS'** (no 'Pedir información')

Esta página funciona como landing de conversión específica para el programa intensivo. Tiene su propia URL y se puede usar en campañas de tráfico pagado.

---

### Sección 1 — HERO

**H1: Deja de dar vueltas a lo mismo y empieza a entender qué te está pasando de verdad**

Un proceso de 7 semanas para romper patrones y volver a tu esencia.

*7 SEMANAS · PROCESO 1 A 1 CONTIGO*

**CTA: `[RESERVAR TU SESIÓN DE RECONOCIMIENTO GRATIS]`**

*Hablaremos de tu situación, te contaré cómo trabajo y veremos si este proceso es para ti.*

*Plazas limitadas cada mes.*

---

### Sección 2 — EL PROGRAMA (7 semanas)

**H2: El Programa — 7 semanas para transformarte desde adentro**

| Semana | Título | Descripción |
|---|---|---|
| **Semana 1** | Ver el patrón | Tomamos conciencia de los patrones automáticos que dirigen tu vida y cómo te afectan. |
| **Semana 2** | Entender su origen | Exploramos tu historia, tu familia y las raíces emocionales que siguen influyendo en ti. |
| **Semana 3** | Sanar la herida | Identificamos las heridas que se activan y te acompaño a sanarlas desde la compasión. |
| **Semana 4** | Salir del bucle mental | Aprendes a observar tu mente, cuestionar creencias y transformar tu diálogo interno. |
| **Semana 5** | Transformar relaciones | Comprendemos tus vínculos y cómo reflejan tu mundo interno para relacionarte diferente. |
| **Semana 6** | Romper el patrón | Diseñamos nuevas formas de actuar y reprogramamos tu respuesta para salir de la repetición. |
| **Semana 7** | Volver a ti | Reconectas con tu esencia, tus valores y creas una vida alineada contigo mismo. |

> 📌 UX: Grid 4×2 de cards con icono SVG único para cada semana. Número de semana grande en dorado como decorativo. Fondo crema.

---

### Sección 3 — QUÉ TRABAJAREMOS JUNTOS

**H2: ¿Qué trabajaremos juntos?**

- Entender tus patrones
- Sanar heridas emocionales
- Transformar tu mente
- Mejorar tus relaciones
- Reconectar con tu yo auténtico
- Crear una nueva forma de vivir

---

### Sección 4 — QUOTE DE CIERRE

> *"No se trata de cambiar quién eres… sino de dejar de repetir lo que aprendiste y empezar a vivir desde quien realmente eres."*

---

### Sección 5 — CTA FINAL

**CTA: `[RESERVAR TU SESIÓN DE RECONOCIMIENTO GRATIS CONMIGO]`**

*Hablaremos de tu situación, te contaré cómo trabajo y veremos si este proceso es para ti.*

*Confidencialidad · Plazas limitadas cada mes*

---

## 10. PÁGINA CONTENIDOS — NUEVA ESTRATEGIA SEO

La página de Blog actual no tiene contenido propio. Se reestructura como hub de contenidos con tres fuentes: artículos propios, vídeos de YouTube embebidos con transcripción, y episodios de podcast.

### 10.1 Estructura de la nueva página

- **Hero:** 'Contenido para entenderte mejor' + buscador por tema
- **Tabs:** Artículos / Vídeos / Podcast
- **TAB ARTÍCULOS:** Blog WordPress real con categorías (Patrones, Relaciones, Emociones, Transgeneracional, Autoconocimiento). Meta: 1 artículo/semana mínimo.
- **TAB VÍDEOS:** Grid de vídeos YouTube embebidos. Cada vídeo tiene: título SEO propio, extracto descriptivo de 100 palabras, transcripción.
- **TAB PODCAST:** Cards de episodios con Spotify embed + descripción propia de 80 palabras. Schema: PodcastEpisode.

### 10.2 Estrategia de contenido SEO

**PILAR 1: Patrones emocionales en relaciones**
- Cluster: por qué repito relaciones tóxicas
- Cluster: dependencia emocional en la pareja
- Cluster: cómo poner límites sin sentir culpa

**PILAR 2: Psicología transgeneracional**
- Cluster: qué es el árbol genealógico psicológico
- Cluster: herencias emocionales de la familia
- Cluster: sanar patrones familiares

**PILAR 3: Autoconocimiento y mente**
- Cluster: bucles mentales y rumiación
- Cluster: inseguridad y baja autoestima
- Cluster: meditación y autorregulación

> 📌 Usar SemRush o Ubersuggest para validar volumen de búsqueda de cada cluster antes de redactar. Objetivo: 3 artículos pilar (2.000+ palabras) + 6 cluster por pilar (800-1.200 palabras).

---

## 11. PÁGINA CONTACTO — SIN WHATSAPP

El cliente ha pedido eliminar el canal de WhatsApp. El único canal de contacto desde la web es un formulario que genera un email.

**H1: Hablemos**

Si crees que este trabajo puede ser para ti, escríbeme. Suelo responder en 24–48h hábiles.

**FORMULARIO — Campos:**

- Nombre completo *(obligatorio)*
- Email *(obligatorio, con validación formato)*
- Teléfono *(opcional)*
- ¿Cómo te puedo ayudar? — textarea libre *(obligatorio, mínimo 20 caracteres)*
- Checkbox: He leído y acepto la Política de Privacidad *(obligatorio RGPD)*
- Botón: `[ENVIAR MENSAJE]` → envío a email de Cristian via SMTP/WPForms/CF7

*Mensaje de confirmación tras envío: 'Tu mensaje ha sido enviado. Te responderé en las próximas 24–48 horas. Gracias por dar este paso.'*

> 📌 Plugin recomendado: WPForms Lite o Fluent Forms. Configurar antispam con honeypot. Email de destino configurable en el plugin. NO usar `mailto:` link directo.

> 📌 Eliminar el botón/widget de WhatsApp flotante en TODOS los temas/plugins instalados. Revisar si hay widget activo en Elementor, en un plugin específico (p.ej. WP Social Chat) o en un script añadido al footer.

---

## 12. ESTRATEGIA SEO + SCHEMA MARKUP

### 12.1 Keywords target por página

| Página | Keyword principal | Keywords secundarias |
|---|---|---|
| Home | psicólogo online España | psicología integrativa, psicólogo emocional, superar patrones |
| Sobre mí | psicólogo transgeneracional | árbol genealógico psicología, terapia integrativa |
| Sesiones | sesiones psicología online | terapia online precio, psicólogo sesión individual |
| Programa 7 semanas | transformación personal programa | sanar patrones, herencias emocionales, proceso 1 a 1 |
| Contenidos | autoconocimiento psicología | psicología relaciones, bucles mentales, dependencia emocional |

### 12.2 Schema Markup — implementación

Implementar via plugin **Rank Math** (recomendado) o Yoast SEO + Schema Pro. Los schemas se añaden como JSON-LD en el `<head>` de cada página.

**HOME + SOBRE MÍ → Schema: Person**
```json
{
  "name": "Cristian Casamitjana",
  "jobTitle": "Psicólogo | Psicología Integrativa",
  "url": "...",
  "sameAs": ["YouTube", "Spotify", "Instagram"]
}
```

**HOME → Schema: LocalBusiness / HealthAndBeautyBusiness**
- name, url, telephone, address, openingHours, priceRange: `$$`

**SESIONES + PROGRAMA → Schema: Service + Offer**
- serviceType, provider (link a Person schema), areaServed
- offers: `{ priceCurrency: "EUR", availability: InStock }`

**HOME + SESIONES → Schema: AggregateRating**
- ratingValue, reviewCount, bestRating
- Incluir datos reales de las Google Reviews del cliente
- ⭐ Activa las estrellas en los resultados de búsqueda — **alto impacto en CTR**

**CONTENIDOS → Schema: Article + VideoObject + PodcastEpisode**
- VideoObject: name, description, thumbnailUrl, uploadDate, duration, contentUrl
- Article: headline, author, datePublished, image, wordCount

**TODAS LAS PÁGINAS → Schema: BreadcrumbList**
- Mejora la navegación en SERPs. Ejemplo: Inicio > Sesiones > Online

**FAQ (recomendada) → Schema: FAQPage**
- Crear sección FAQ en Home y en Sesiones con 5–8 preguntas frecuentes
- Activa rich snippets de preguntas desplegables en Google — muy alto impacto

Preguntas sugeridas:
- ¿Cuánto dura una sesión?
- ¿Cuántas sesiones necesito?
- ¿Las sesiones online son igual de efectivas?
- ¿Qué diferencia hay con la terapia tradicional?
- ¿Qué es la psicología transgeneracional?

### 12.3 Configuración técnica SEO en WordPress

- **Plugin:** Rank Math SEO (versión gratuita suficiente para empezar)
- **Sitemap XML:** activar en Rank Math y enviar a Google Search Console
- **Velocidad:** WP Rocket o LiteSpeed Cache + Imagify o ShortPixel para imágenes
- **Core Web Vitals:** LCP < 2.5s, CLS < 0.1. Medir con PageSpeed Insights antes y después del revamp
- **SSL:** activo (HTTPS). Verificar no hay mixed content.
- **Canonical tags:** cada página tiene canonical propio. No duplicar URLs.
- **Robots.txt:** no bloquear CSS/JS (Google necesita renderizar para evaluar UX)

---

## 13. DECISIONES ELIMINADAS Y CONSOLIDADAS

| Elemento actual | Decisión | Razón |
|---|---|---|
| Página Testimonios standalone | **ELIMINAR** | Los testimonios tienen más impacto en contexto de decisión (dentro de páginas de servicio) |
| Widget WhatsApp flotante | **ELIMINAR** | Decisión del cliente. Sustituir por formulario que envía email |
| Blog solo con links YouTube | **TRANSFORMAR** | Crear hub de contenidos con artículos propios + embeds YT + podcast para SEO |
| Páginas Sesiones separadas | **UNIFICAR** | Reducir duplicación, mejorar UX y concentrar autoridad SEO en una URL |
| CTA WhatsApp en hero y CTA final | **ELIMINAR** | Coherente con la decisión del cliente |
| Menú con desplegable 3 ítems | **SIMPLIFICAR** | Nuevo menú: Inicio \| Sobre mí \| Sesiones \| Contenidos \| Contacto |
| Copy genérico del hero actual | **REEMPLAZAR** | El nuevo copy conecta directamente con el problema del usuario |
| Imágenes de marca antiguas | **REEMPLAZAR** | Actualizar con nuevas fotos según especificaciones de sección 5 |
| Programa 8 semanas 'Árbol Genealógico' *(v1.0)* | **ACTUALIZAR ⚠️** | Nombre real: Transformación Personal 1a1. Duración: 7 semanas. CTA: Sesión de reconocimiento gratis |

---

*Documento preparado para entrega al cliente y equipo de diseño/desarrollo*

**www.cristiancasamitjana.com · Revamp v1.1 · Abril 2026**
