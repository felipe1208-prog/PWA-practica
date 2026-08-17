# Documentación de Arquitectura Frontend

**Proyecto:** PWA Gestión de Clientes DB

**Patrón de Diseño:** Feature-Driven (Orientado a Características)

**Gestor de Estado:** Pinia

**Autenticación:** JWT vía Cookies (`HttpOnly` / `withCredentials`)

## Estructura de la carpeta `src/`

La carpeta `src/` contiene el código fuente de la aplicación. Se ha dividido estratégicamente para separar la interfaz de usuario, la lógica de negocio y las configuraciones globales, garantizando la escalabilidad a largo plazo.

### 1. `src/assets/`

Almacena los recursos estáticos que son procesados y optimizados por Vite durante la compilación.

- **`logo-db.png`**: El logotipo institucional de Disbattery utilizado en barras de navegación o pantallas de inicio de sesión.
- **`global.css`**: Archivo de hojas de estilo globales para definir variables CSS (como los colores corporativos) y reiniciar los márgenes por defecto del navegador.

### 2. `src/api/`

Configuración de las conexiones externas y peticiones HTTP de la aplicación.

- **`axios.js`**: Instancia preconfigurada de Axios. Define la URL base del backend y activa la propiedad `withCredentials: true`, permitiendo que el navegador intercepte y envíe automáticamente las Cookies de sesión (JWT) de origen cruzado de forma segura, eliminando la necesidad de manejar tokens manualmente.

### 3. `src/components/`

Directorio exclusivo para componentes de interfaz de usuario genéricos y reutilizables. Estos componentes son "tontos" (_dumb components_): no contienen lógica de negocio ni peticiones al backend, comunicándose bidireccionalmente a través de _props_ y `defineModel`.

- **`BaseButton.vue`**: Componente de botón estandarizado (con colores de la marca) que maneja estados de carga interactivos.
- **`BaseInput.vue`**: Campo de texto estilizado, totalmente responsivo (Mobile-First), que incluye reseteo de estilos nativos de navegadores y lógica interna de UI (como alternar la visibilidad de contraseñas de forma aislada).

### 4. `src/composables/`

Contiene la lógica de JavaScript/Vue encapsulada en funciones reutilizables (Composables API).

- **`pwaInstall.js`**: Archivo que gestiona los eventos de instalación de la PWA (`beforeinstallprompt`) y exporta las variables reactivas para interactuar con la interfaz.
- **`useTheme.js`**: Función reservada para manejar configuraciones globales de interfaz, como un futuro cambio entre modo claro y oscuro.

### 5. `src/stores/`

Directorio para el manejo del estado global de la aplicación utilizando **Pinia**.

- **`auth.js`**: Centro de Control de Identidad. Almacena de forma global si el usuario está autenticado, los datos de su perfil, e incluye las acciones (`actions`) que se comunican con `api/axios.js` para procesar el inicio de sesión, verificar la vigencia de la Cookie al recargar la página, y cerrar la sesión.

### 6. `src/features/`

El núcleo del patrón modular. Agrupa los archivos por dominio de negocio en lugar de por tipo de archivo técnico.

- **`auth/` (Autenticación)**
- `components/LoginForm.vue`: Bloque visual con los campos de correo y contraseña.
- `views/LoginView.vue`: Pantalla completa que implementa el formulario de inicio de sesión y consume las acciones globales del `authStore`.

- **`customers/` (Clientes)**
- `components/CustomerCard.vue`: Tarjeta visual individual que expone el nombre y estado de un cliente.
- `views/CustomersView.vue`: Pantalla privada que consume la API e itera una lista de componentes `CustomerCard`.

- **`profile/` (Perfil)**
- `views/ProfileView.vue`: Pantalla dedicada a mostrar y editar la información de la sesión activa del usuario.

### 7. `src/layouts/`

Contiene los envoltorios o marcos estructurales donde se inyectan las distintas pantallas de la aplicación utilizando Vue Router (`<router-view />`).

- **`AuthLayout.vue`**: Estructura de pantalla completa diseñada mediante Flexbox fluido para centrar y aislar el proceso de inicio de sesión, empujando elementos como el _footer_ al final del documento.
- **`MainLayout.vue`**: Estructura principal que incluye la barra superior (cabecera con logo), el menú de navegación y un contenedor dinámico para las vistas internas.

### 8. `src/router/`

Maneja el enrutamiento y la navegación del usuario dentro de la aplicación (Single Page Application).

- **`index.js`**: Configura el árbol de rutas anidadas (_nested routes_), mapeando qué Vistas se inyectan en qué Layouts. Implementa "Guardián de Rutas" (_Navigation Guards_) que verifican el estado global en `auth.js` para bloquear el acceso a rutas con el metadato `requiresAuth` si no existe una sesión activa.
