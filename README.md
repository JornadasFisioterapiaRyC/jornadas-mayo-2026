# III Jornada Nacional de Fisioterapia en Atención Hospitalaria

Aplicación React + Vite para visualizar los pósters y comunicaciones presentados en las Jornadas de Fisioterapia 2026 del Hospital Universitario Ramón y Cajal.

**URL en producción:** `https://jornadasfisioterapiaryc.github.io/jornadas-mayo-2026/`

---

## Ramas del repositorio

| Rama | Propósito |
|------|-----------|
| `redesign-v3` | **Producción.** GitHub Pages sirve desde la raíz de esta rama. Contiene el build compilado. |
| `redesign-v3-dev` | **Desarrollo.** Misma base que `redesign-v3` pero con `index.html` apuntando a `src/main.jsx`. Usar para `npm run dev`. |
| `main` | Proyecto original estático (antes de React). No tocar. |
| `project_react` | Primera versión React. Referencia histórica. |
| `gh-pages` | Rama legacy de GitHub Pages. Ya no se usa. |

**Flujo de trabajo:**
1. Desarrollar y probar en `redesign-v3-dev` con `npm run dev`
2. Cuando los cambios estén listos, cambiar a `redesign-v3`, hacer el build y subir

---

## Desarrollo local

```bash
# Asegurarse de estar en la rama de desarrollo
git checkout redesign-v3-dev

# Instalar dependencias (solo la primera vez)
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La app estará en `http://localhost:5173/jornadas-mayo-2026/`

Para ver en modo móvil: DevTools del navegador → icono de móvil (`Ctrl+Shift+M` en Chrome/Firefox).

---

## Build y despliegue a producción

```bash
# 1. Cambiar a la rama de producción
git checkout redesign-v3

# 2. Asegurarse de tener los últimos cambios de dev
git merge redesign-v3-dev

# 3. Compilar — genera index.html y assets/ en la raíz del proyecto
npm run build

# 4. Commit del build
git add index.html assets/
git commit -m "build: actualizar compilado para producción"

# 5. Subir
git push origin redesign-v3
```

GitHub Pages publica automáticamente en 1-2 minutos.

### Por qué el build va a la raíz

`vite.config.js` tiene `outDir: '.'` y `base: '/jornadas-mayo-2026/'` porque GitHub Pages está configurado para servir desde la **raíz de la rama `redesign-v3`** (no desde `/docs`). Esto hace que `npm run build` sobreescriba `index.html` con la versión compilada. Por eso `redesign-v3-dev` existe: guarda el `index.html` de desarrollo (`<script src="/src/main.jsx">`) que Vite necesita para el servidor local.

### Configuración de GitHub Pages

- Repositorio: `JornadasFisioterapiaRyC/jornadas-mayo-2026`
- Settings → Pages → Source: **rama `redesign-v3`, carpeta `/` (raíz)**

---

## Estructura del proyecto

```
├── assets/                  # JS y CSS compilados (generados por el build)
├── img/                     # Logos (logo_jornadas.png, logo_huryc.jpg, logo_fibiohrc.jpg)
├── posters/                 # PDFs de los pósters
├── public/                  # Assets estáticos que Vite copia tal cual
├── src/
│   ├── components/
│   │   ├── CategoryNav/     # Filtros de área y tipo (píldoras clicables)
│   │   ├── Countdown/       # Cuenta atrás hasta el evento
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── PosterCard/      # Tarjeta individual de cada trabajo
│   │   ├── PosterGrid/      # Grid de tarjetas con subgrid
│   │   ├── SearchBar/       # Búsqueda por texto
│   │   └── Speakers/        # Sección de ponentes (desactivada en App.jsx)
│   ├── data/
│   │   ├── categories.js    # Áreas temáticas
│   │   ├── event.js         # Fecha del evento para el countdown
│   │   ├── posters.js       # Datos de todos los trabajos
│   │   └── speakers.js      # Datos de ponentes
│   ├── hooks/
│   │   ├── useCountdown.js
│   │   ├── useFilteredPosters.js
│   │   └── useReveal.js     # Animación de entrada al hacer scroll
│   ├── App.jsx
│   ├── App.css
│   ├── index.css            # Variables de diseño (tokens, tipografía, colores)
│   └── main.jsx
├── index.html               # En redesign-v3: compilado. En redesign-v3-dev: apunta a src/main.jsx
├── vite.config.js
└── load_data.json           # Datos originales de pósters (referencia, no usado directamente)
```

---

## Añadir o editar trabajos

Los datos están en `src/data/posters.js`. Cada entrada tiene esta forma:

```js
{
  id: 1,
  title: 'Título del trabajo',
  category: 'musculoesqueletica', // ver categories.js para las opciones
  tipo: 'poster',                 // 'poster' | 'comunicacion'
  tipo_estudio: 'Revisión sistemática',
  autor: 'García López, M.',
  file: '/jornadas-mayo-2026/posters/001_nombre.pdf', // null si no está disponible aún
  etiquetas: ['rodilla', 'dolor crónico'],
}
```

Los PDFs van en la carpeta `posters/` de la raíz del repo.

---

## Tecnologías

- **React 19** + **Vite 7**
- CSS puro con variables (`index.css`) — sin frameworks de estilos
- CSS Grid con `subgrid` para alinear tarjetas entre filas
- GitHub Pages para el hosting
