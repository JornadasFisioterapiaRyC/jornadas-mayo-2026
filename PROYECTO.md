# Jornadas de Fisioterapia 2026 — Documentación del proyecto

## Descripción

Página web estática desplegada en GitHub Pages para las Jornadas de Fisioterapia 2026 del **Hospital Universitario Ramón y Cajal** (Madrid). Sirve como repositorio público de los pósters presentados en las jornadas (21 mayo 2026), con cuenta atrás, sección de ponentes y buscador por temática.

URL de producción: `https://jornadasfisioterapiaryc.github.io/jornadas-mayo-2026/`

---

## Stack técnico

| Capa | Tecnología |
|------|-----------|
| UI | React 19 |
| Build | Vite 7 |
| Deploy | GitHub Pages (rama `gh-pages`) vía paquete `gh-pages` |
| Estilos | CSS puro con variables (design tokens) |
| Fuentes | Cormorant Garamond (serif) + Inter (sans) — Google Fonts |

No hay backend, base de datos ni dependencias en runtime más allá de React.

---

## Estructura de carpetas

```
jornadas-mayo-2026/
├── src/
│   ├── main.jsx               # Punto de entrada React
│   ├── App.jsx                # Componente raíz — orquesta estado global
│   ├── App.css                # Layout raíz (.app, main, .posters-section)
│   ├── index.css              # Design tokens + reset global
│   ├── components/
│   │   ├── Header/            # Tres logos institucionales (HURyC, Jornadas, FIBioHRC)
│   │   ├── Hero/              # Título principal y descripción del evento
│   │   ├── Countdown/         # Cuenta atrás en vivo hasta el 21-05-2026 09:00
│   │   ├── SearchBar/         # Buscador libre de texto
│   │   ├── CategoryNav/       # Filtros por categoría (botones)
│   │   ├── PosterGrid/        # Grid de tarjetas resultado del filtro
│   │   ├── PosterCard/        # Tarjeta individual con badge de categoría + link al PDF
│   │   ├── Speakers/          # Grid de ponentes con avatar de iniciales
│   │   ├── Copyright/         # Nota legal breve
│   │   └── Footer/            # Pie con nombre del evento y hospital
│   ├── data/
│   │   ├── posters.js         # Array de pósters (id, title, category, file, description)
│   │   ├── categories.js      # Categorías disponibles para el filtro
│   │   ├── speakers.js        # Array de ponentes (nombre, rol, institución, bio)
│   │   └── event.js           # Fecha objetivo del countdown: 2026-05-21T09:00:00
│   └── hooks/
│       ├── useFilteredPosters.js  # Filtrado memoizado por categoría + texto libre
│       ├── useCountdown.js        # Tick cada segundo hasta targetDate
│       └── useReveal.js           # IntersectionObserver para animar .reveal al hacer scroll
├── public/                    # (vacío, los assets van en raíz)
├── img/                       # Logos: logo_huryc.jpg, logo_jornadas.png, logo_fibiohrc.jpg
├── posters/                   # PDFs numerados: 001_*.pdf … 006_*.pdf
├── dist/                      # Build de producción (no se commitea en main, sí en gh-pages)
├── index.html                 # HTML con rutas pre-compiladas al bundle de dist/
├── vite.config.js             # base: '/jornadas-mayo-2026/', outDir: 'dist'
├── package.json               # Scripts: dev, build, deploy (gh-pages -d dist)
├── load_data.json             # Datos reales de los 20 pósters del evento (NO cargado aún en la app)
└── .nojekyll                  # Evita que GitHub Pages procese el repo con Jekyll
```

---

## Diseño visual

Inspirado en **Klur** (estética minimalista editorial). Paleta slate cálida + crema.

### Design tokens principales (`index.css`)

```css
--color-dark:    #2d3436   /* casi negro */
--color-cream:   #f5f0eb   /* fondo cálido */
--color-accent:  #8b7355   /* marrón dorado — énfasis */
--font-serif:    'Cormorant Garamond'
--font-sans:     'Inter'
--max-width:     1100px
```

### Categorías y colores de badge

| ID | Nombre | Color |
|----|--------|-------|
| `research` | Investigacion Clinica | azul `#5a7d9a` |
| `pelvic` | Uroginecologia | morado `#8a6b94` |
| `advanced` | Tecnicas Avanzadas | dorado `#b08650` |

---

## Flujo de datos

```
src/data/*.js  →  App.jsx  →  useFilteredPosters  →  PosterGrid  →  PosterCard
                          →  Countdown (useCountdown)
                          →  Speakers
```

- El estado de filtro (`category`, `query`) vive en `App.jsx`.
- `useFilteredPosters` devuelve el array filtrado memoizado.
- Cada `PosterCard` enlaza al PDF directamente (`target="_blank"`).

---

## Scripts disponibles

```bash
npm run dev       # Servidor de desarrollo en localhost:5173/jornadas-mayo-2026/
npm run build     # Genera dist/ (también lo ejecuta predeploy automáticamente)
npm run deploy    # Build + push de dist/ a rama gh-pages
npm run lint      # ESLint
```

---

## Flujo de deploy

1. `npm run deploy` ejecuta primero `npm run build` (predeploy hook).
2. El paquete `gh-pages` sube el contenido de `dist/` a la rama `gh-pages` del repo remoto.
3. GitHub Pages sirve esa rama desde la raíz.
4. Vite está configurado con `base: '/jornadas-mayo-2026/'` para que las rutas de assets funcionen correctamente bajo el subpath de GitHub Pages.

La rama de trabajo activa es `redesign-v3`. El flujo habitual es:
- Desarrollar en `redesign-v3`
- Hacer `npm run deploy` para publicar (sube a `gh-pages`, no a `main`)
- Mergear a `main` cuando el diseño está estable

---

## Historial de rediseños

| Rama / Commit | Descripción |
|---|---|
| `e94e087` | Primer commit — Jekyll simple |
| `020c5c5` | Backup de la versión Jekyll antes de migrar |
| `629ccbf` | Migración completa a React + Vite |
| `redesign-v2` | Primer rediseño tras la migración |
| `fb0fff4` | Redesign v3 — estilo Klur minimalista (rama actual) |
| `b27b67d` | Grid 3 columnas + badges de categoría con color |
| `cc7bf8a` | Añadir sección ponentes + cuenta atrás |
| `5d5f910` | Fix logos responsive en móvil |

---

## Contenido real de las jornadas (load_data.json)

El fichero `load_data.json` contiene los **20 pósters reales** del evento, con título, categoría, tipo de estudio y etiquetas. Este fichero **todavía no está integrado en la app** — los datos de `src/data/posters.js` son un placeholder con 6 pósters de ejemplo.

### Categorías reales (del JSON)

- Musculoesquelética / Traumatología
- Neurología
- Cardiorrespiratorio
- Geriatría
- Fisioterapia hospitalaria / procesos
- Suelo pélvico / Salud de la mujer
- Otros / Transversal

### Tipos de estudio presentes

caso clínico · estudio descriptivo · revisión · serie de casos · ensayo clínico (ECA) · estudio piloto

---

## Pendiente / próximos pasos evidentes

- [ ] Integrar `load_data.json` en `src/data/posters.js` con los 20 pósters reales
- [ ] Añadir los PDFs reales de los 20 pósters en `/posters/`
- [ ] Actualizar las categorías en `src/data/categories.js` para que coincidan con las reales
- [ ] Actualizar `src/data/speakers.js` con los ponentes reales del evento
- [ ] Revisar si el countdown debe ocultarse / cambiar mensaje tras el 21 de mayo
