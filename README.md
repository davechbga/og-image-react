# 🖼️ Generador de Imágenes Open Graph Personalizadas

Proyecto de desarrollo frontend que permite crear imágenes OG personalizadas para redes sociales o sitios web, ideal para potenciar el branding y la presentación visual de tus enlaces.

---

## 📚 Índice

- [Descripción](#-descripción)
- [Objetivos logrados](#-objetivos-logrados)
- [Tecnologías utilizadas](#-tecnologías-utilizadas)
- [Vista general de la aplicación](#-vista-general-de-la-aplicación)
- [Instalación y ejecución](#-instalación-y-ejecución)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Mejoras futuras](#-mejoras-futuras)
- [Licencia](#-licencia)

---

## 🧠 Descripción

Esta herramienta web permite **crear imágenes OG** (Open Graph) personalizadas para compartir en redes sociales o insertar en metadatos de páginas web.

Cuenta con una interfaz moderna, intuitiva y altamente personalizable, donde se puede modificar el **título, subtítulo, tipografía, fondo, padding, formas y logos**. Las imágenes se generan y se descargan como **PNG de alta calidad** usando `html2canvas`.

---

## 🎯 Objetivos logrados

- ✅ **Creación dinámica de imágenes OG** personalizadas desde el navegador.
- ✅ **Editor visual completo** para títulos, estilos, colores y formas.
- ✅ **Soporte para logos o íconos personalizados**.
- ✅ **Descarga directa en PNG** con resolución optimizada.
- ✅ **Experiencia moderna** gracias a Shadcn/ui y una estructura robusta en React + TypeScript.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React**
- 🛡️ **TypeScript**
- ⚡ **Vite**
- 🎨 **TailwindCSS**
- 🖌️ **Shadcn/ui**
- 🧩 **html2canvas** (renderizado y exportación)
- 🎯 **Lucide-react** (iconografía)

---

## 📸 Vista general de la aplicación

La aplicación incluye:

- 🖍️ Campos editables para título, subtítulo, tamaño de fuente y color.
- 🎨 Selección de forma, padding, espaciado y estilo visual del fondo.
- 📁 Carga de logos personalizados.
- 📸 Captura de pantalla del área editable para **descarga instantánea** en PNG.
- 💾 Sistema de previsualización en tiempo real.

### 🛠 Estructura visual básica del editor (fragmento)

```tsx
<div className="space-y-4">
  <ImageEditor />
  <StyleControls />
  <UploadLogo />
  <DownloadButton />
</div>
```

---

## 🛠 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/og-image-forge.git
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar la aplicación

```bash
npm run dev
```

Accede a la app en 👉 **http://localhost:5173**

---

## 📂 Estructura del proyecto

```bash
src/
├── components/
│   ├── ImageEditor.tsx
│   ├── StyleControls.tsx
│   ├── UploadLogo.tsx
│   └── DownloadButton.tsx
├── utils/
│   └── capture.ts
├── types/
│   └── EditorConfig.ts
├── pages/
│   └── App.tsx
└── main.tsx
```

---

## ⚡ Mejoras futuras

- 🧠 Guardar presets personalizados para uso recurrente.
- 🌐 Exportación automática a diferentes tamaños para redes sociales específicas.
- 🔁 Sistema de historial o "deshacer".
- ☁️ Almacenamiento en la nube y modo colaborativo en tiempo real.

---

## 📜 Licencia

Este proyecto está disponible como código **abierto** para fines **educativos** y de **experimentación visual**.  
Desarrollado con enfoque en **usabilidad**, **estética moderna** y **reutilización de componentes**.
