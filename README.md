# El Lagartijo - Catálogo Web

Catálogo web responsivo para El Lagartijo, negocio artesanal dedicado a la elaboración de artículos ecuestres hechos a mano.

## 🚀 Características

- ✅ Diseño mobile-first y completamente responsivo
- ✅ Componentes reutilizables (ProductCard)
- ✅ Estilos basados en la identidad visual de El Lagartijo
- ✅ Navegación suave entre secciones
- ✅ Integración con WhatsApp para contacto
- ✅ Animaciones suaves y efectos hover elegantes

## 🛠️ Tecnologías

- **React** + **TypeScript**
- **Vite** - Build tool y dev server
- **CSS3** - Estilos personalizados con variables CSS

## 📦 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en `http://localhost:5173`

## 🏗️ Construcción para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 📝 Configuración

### Cambiar número de WhatsApp

Edita el archivo `src/data/constants.ts` y modifica `WHATSAPP_NUMBER`:

```typescript
export const WHATSAPP_NUMBER = '1234567890'; // Reemplaza con tu número real
```

**Formato:** código de país + número sin espacios ni guiones (ejemplo: 521234567890 para México). Ese número se usa en Contact, Footer y en el botón flotante de WhatsApp.

### Agregar imágenes de productos

Las imágenes se definen en `src/data/products.ts` con la propiedad `image`. Tienes dos opciones:

#### Opción A: Imágenes en `src/assets/` (recomendada)

1. Guarda tus fotos en `src/assets/` (ej: `bozales.jpg`, `riendas.jpg`).
2. En `src/data/products.ts`, importa cada imagen y asígnala:

```typescript
import bozalesImg from '../assets/bozales.jpg';
import riendasImg from '../assets/riendas.jpg';

export const products: Product[] = [
  {
    id: 1,
    name: 'Bozales',
    slug: 'bozales',
    category: 'cabezales',
    image: bozalesImg,  // usa la variable importada
    description: '...',
    // ...
  },
  {
    id: 2,
    name: 'Riendas',
    slug: 'riendas',
    category: 'riendas',
    image: riendasImg,
    // ...
  },
];
```

Vite optimiza y hashea las imágenes automáticamente.

#### Opción B: Imágenes en `public/`

1. Guarda las imágenes en la carpeta `public/` (ej: `public/productos/bozales.jpg`).
2. Usa la ruta absoluta en `products.ts`:

```typescript
{
  id: 1,
  name: 'Bozales',
  image: '/el-lagartijo/productos/bozales.jpg',  // con base path para GitHub Pages
  // ...
}
```

Si tu sitio está en la raíz (no en `/el-lagartijo/`), usa `/productos/bozales.jpg`.

**Consejos:** Formato recomendado JPG o WebP, resolución ~800x600 px para buena visualización en cards y modal.

## 📁 Estructura del Proyecto

```
el-lagartijo-catalogo/
├── src/
│   ├── assets/          # Imágenes y recursos
│   │   └── logo.png     # Logo de El Lagartijo
│   ├── components/      # Componentes React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductModal.tsx
│   │   ├── Catalog.tsx
│   │   ├── Personalization.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppFloating.tsx
│   ├── data/
│   │   ├── constants.ts   # WhatsApp y configuración
│   │   └── products.ts   # Listado de productos
│   ├── styles/          # Archivos CSS
│   │   ├── global.css
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── ProductCard.css
│   │   ├── Catalog.css
│   │   ├── Personalization.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Punto de entrada
├── index.html
├── package.json
└── vite.config.ts
```

## 🎨 Paleta de Colores (identidad del logo)

- **Grafito:** `#232323` (texto y fondos oscuros)
- **Miel / acento:** `#a8815b`, `#c4a574`
- **Crema / fondos:** `#faf8f5`, `#f0ebe3`
- **Blanco:** `#ffffff`

## 📱 Secciones

1. **Header** - Logo (del proyecto), menú (Inicio, Catálogo, Personaliza, Contacto)
2. **Hero** - Frase de marca y CTA “Ver catálogo”
3. **Catálogo** - Grid responsive de productos; clic abre modal con detalles y “Cotizar por WhatsApp”
4. **Personaliza tu pedido** - Texto de marca y CTA a WhatsApp
5. **Contacto** - CTA “Cotizar por WhatsApp”
6. **Footer** - Logo, redes (Facebook, Instagram, WhatsApp), copyright
7. **Botón flotante** - “Cotizar” por WhatsApp siempre visible (móvil: solo icono)

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Previsualiza la build de producción

## 📄 Licencia

Este proyecto es privado y pertenece a El Lagartijo.
