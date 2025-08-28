# Hostal Alicia Web

Sitio web para Hostal Alicia, ubicado en Morón, Cuba. Permite a los usuarios conocer el hostal, ver fotos, consultar disponibilidad y realizar reservas a través de un formulario de contacto.

## Características

- **Página principal** con información del hostal, fotos y eslogan.
- **Galería de fotos** de habitaciones y áreas comunes.
- **Formulario de reserva** con selección de fechas, habitaciones y datos de contacto.
- **Mapa interactivo** con la ubicación del hostal.
- **Sección de contacto** con enlaces a WhatsApp, email, TripAdvisor y Airbnb.
- **Política de privacidad** accesible desde el pie de página y el formulario.
- **Diseño responsive** para dispositivos móviles y escritorio.

## Tecnologías

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [EmailJS](https://www.emailjs.com/) para envío de formularios
- [@react-google-maps/api](https://github.com/JustFly1984/react-google-maps-api) para el mapa
- [React Router](https://reactrouter.com/) para navegación

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/tuusuario/hostal-alicia-web-project.git
   cd hostal-alicia-web-project
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Crea un archivo `.env` basado en `.env.example` y agrega tus claves de API de Google Maps y EmailJS.

4. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```

## Scripts

- `npm run dev` — Inicia el servidor de desarrollo.
- `npm run build` — Genera la versión de producción.
- `npm run preview` — Previsualiza la versión de producción.
- `npm run lint` — Ejecuta ESLint.

## Estructura del proyecto

- `src/components` — Componentes reutilizables (Navbar, Footer, Formulario, etc).
- `src/pages` — Páginas principales (HomePage, Política de Privacidad).
- `src/data.js` — Datos estáticos del sitio.
- `src/utils/config.js` — Configuración de claves de API.

## Licencia

- MIT