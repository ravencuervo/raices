# 🌿 Raíces Crujientes — Landing Page

**El Fruto de los Andes**

Landing page profesional para la marca peruana de snacks naturales **Raíces Crujientes**, desarrollada con React + Vite, lista para deploy en Vercel.

---

## 🚀 Instalación y desarrollo

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo (http://localhost:5173)
npm run dev
```

## 📦 Build de producción

```bash
# Generar build optimizado en /dist
npm run build

# Previsualizar el build localmente
npm run preview
```

---

## 🌐 Deploy en Vercel

### Opción 1: Desde GitHub (recomendado)

1. Sube el proyecto a un repositorio de GitHub:
   ```bash
   git init
   git add .
   git commit -m "Landing Raíces Crujientes"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/raices-crujientes.git
   git push -u origin main
   ```

2. Ve a [vercel.com](https://vercel.com) → **New Project**

3. Importa tu repositorio de GitHub

4. Configuración automática (Vite es detectado automáticamente):
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. Haz clic en **Deploy** ✅

### Opción 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

---

## 📁 Estructura del proyecto

```
frontend/
├── public/
│   └── images/
│       ├── logo_raices.png    ← Logo de la marca
│       ├── portada1.png       ← Imagen hero y productos
│       └── portada2.jpg       ← Imagen historia y productos
├── src/
│   ├── components/
│   │   ├── Navbar/            ← Navbar sticky con hamburguesa
│   │   ├── Hero/              ← Hero principal con imagen de fondo
│   │   ├── Historia/          ← Nuestra historia (2 columnas)
│   │   ├── Productos/         ← Cards de productos
│   │   ├── Atributos/         ← Sin preservantes / Fibra / Andino
│   │   ├── Esencia/           ← Cultivando lo nuestro
│   │   ├── Origen/            ← Huanimpampa, Paruro, Perú
│   │   ├── CTA/               ← Call to action / Contacto
│   │   └── Footer/            ← Footer con RRSS y navegación
│   ├── hooks/
│   │   └── useScrollAnimation.js  ← IntersectionObserver hook
│   ├── App.jsx
│   ├── App.css
│   ├── index.css              ← Design tokens globales
│   └── main.jsx
├── index.html                 ← SEO + OG + Bootstrap Icons + Google Fonts
├── vite.config.js
└── package.json
```

---

## 🎨 Paleta de colores

| Variable             | Color     | Uso                        |
|----------------------|-----------|----------------------------|
| `--color-crema`      | `#F5EDD6` | Fondo principal            |
| `--color-marron`     | `#5C3D1E` | Texto principal            |
| `--color-tierra`     | `#8B5A2B` | Acentos cálidos            |
| `--color-vino`       | `#7B2D42` | CTAs y destacados          |
| `--color-magenta`    | `#A8325A` | Acentos andinos            |
| `--color-dorado`     | `#C9972B` | Detalles premium           |
| `--color-verde`      | `#3D6B4F` | Badges naturales           |
| `--color-oscuro`     | `#2C1A0E` | Fondos oscuros / Navbar    |

---

## 🔗 Personalización pendiente

Busca los comentarios `TODO` en el código para agregar:

- **WhatsApp**: `src/components/CTA/CTA.jsx` y `src/components/Footer/Footer.jsx`
- **Instagram**: mismos archivos
- **Facebook**: mismo archivo Footer
- **Email de contacto**: `src/components/Footer/Footer.jsx`

---

## 🖼️ Agregar nuevas imágenes

Coloca las imágenes en `public/images/` y referéncialas con rutas absolutas:

```jsx
<img src="/images/mi-imagen.jpg" alt="..." />
```

---

## 📱 Compatibilidad

- ✅ Desktop
- ✅ Laptop
- ✅ Tablet
- ✅ iPhone / Android

---

## 🛠 Tecnologías

- **React 19** + **Vite 8**
- **CSS vanilla** (variables globales, sin Tailwind)
- **Bootstrap Icons** (CDN)
- **Google Fonts**: Outfit
- Sin backend · Completamente estático

---

*Hecho con ❤️ para Raíces Crujientes — Huanimpampa, Paruro, Perú 🇵🇪*
