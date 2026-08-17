# ALMA BTL Landing Page

Sitio institucional responsive para ALMA BTL. Esta versión conserva la identidad visual, logos, iconos, favicon, contenidos e imágenes del proyecto original y moderniza la implementación sin requerir un backend propio.

## Arquitectura

Proyecto **frontend-only** con React + Vite. No requiere Express, Railway, servidor SMTP ni API propia para desplegarse.

El formulario de contacto utiliza Web3Forms directamente desde el navegador. El access key de Web3Forms está diseñado para uso client-side y no es una credencial secreta.

## Desarrollo

Requisitos: Node.js 20.19+.

```bash
npm install
npm run dev
```

## Configurar el formulario

1. Crear un Access Key de Web3Forms para el correo que debe recibir las consultas de ALMA.
2. Copiar `.env.example` a `.env.local`.
3. Completar:

```env
VITE_WEB3FORMS_ACCESS_KEY=TU_ACCESS_KEY
```

Para Vercel, crear la misma variable `VITE_WEB3FORMS_ACCESS_KEY` en **Project Settings → Environment Variables** y desplegar normalmente el frontend.

Si el servicio de formularios no está configurado o falla, la interfaz ofrece `info@almabtl.com` como alternativa directa.

## Build

```bash
npm run build
npm run preview
```

## Cambios principales

- Migración de Create React App a Vite.
- Eliminación de Bootstrap, MUI, React Router y dependencias no utilizadas.
- Navegación móvil real con menú desplegable.
- Carrusel simplificado y accesible.
- Layouts responsive para agencia, servicios, portfolio, clientes, partners, contacto y footer.
- Portfolio sin alturas rígidas dependientes de `vw`.
- Formulario con estados reales de envío, errores, honeypot y accesibilidad mejorada.
- Eliminación completa del backend Express/Nodemailer: el proyecto es desplegable como frontend estático.
- Sin Railway ni `VITE_CONTACT_API_URL`.
- Branding de ALMA, iconos y favicon preservados.

## Crédito

Desarrollo web © 2026 Juan Braian Hernández Morani.
