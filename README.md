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

Edita el archivo `src/components/Contact.tsx` y modifica la variable `phoneNumber`:

```typescript
const phoneNumber = '1234567890'; // Reemplaza con tu número real
```

**Formato:** código de país + número sin espacios ni guiones (ejemplo: 521234567890 para México)

### Agregar imágenes de productos

1. Coloca las imágenes en `src/assets/`
2. Edita `src/components/Catalog.tsx` y agrega la ruta de la imagen en cada producto:

```typescript
{
  id: 1,
  name: 'Bozales',
  description: '...',
  image: '/src/assets/bozales.jpg', // Agrega la ruta aquí
  handmade: true,
  customizable: true
}
```

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
│   │   ├── Catalog.tsx
│   │   ├── Personalization.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
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

## 🎨 Paleta de Colores

- **Negro/Café oscuro:** `#2c2416`, `#3d2f1f`
- **Beige/Cuero:** `#d4c4a8`, `#f5f0e6`
- **Acento (Vino):** `#5d4037`
- **Blanco:** `#ffffff`

## 📱 Secciones

1. **Header** - Logo, menú de navegación
2. **Hero** - Frase destacada y subtítulo
3. **Catálogo** - Grid de productos con cards
4. **Personalización** - Información sobre productos personalizados
5. **Contacto** - Botón de WhatsApp
6. **Footer** - Información del negocio y redes sociales

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Previsualiza la build de producción

## 📄 Licencia

Este proyecto es privado y pertenece a El Lagartijo.
