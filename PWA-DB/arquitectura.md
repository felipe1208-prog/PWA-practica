# Documentación de Arquitectura Frontend

**Proyecto:** PWA Gestión de Clientes DB
**Patrón de Diseño:** Feature-Driven (Orientado a Características)

## Estructura de la carpeta `src/`

La carpeta `src/` contiene el código fuente de la aplicación. Se ha dividido estratégicamente para separar la interfaz de usuario, la lógica de negocio y las configuraciones globales, garantizando la escalabilidad a largo plazo.

### 1. `src/assets/`

Almacena los recursos estáticos que son procesados y optimizados por Vite durante la compilación.

- **`logo-db.png`**: El logotipo institucional de Disbattery utilizado en barras de navegación o pantallas de inicio de sesión.
- **`global.css`**: Archivo de hojas de estilo globales para definir variables CSS (como los colores corporativos) y reiniciar los márgenes por defecto del navegador.

### 2. `src/components/`

Directorio exclusivo para componentes de interfaz de usuario genéricos y reutilizables. Estos componentes son "tontos" (dumb components): no contienen lógica de negocio compleja ni llamadas a bases de datos.

- **`BaseButton.vue`**: Un componente de botón estandarizado (con el color y radio de borde de la marca) que recibe texto y acciones mediante _props_.
- **`BaseInput.vue`**: Un campo de texto estilizado para mantener la uniformidad en todos los formularios de la aplicación.

### 3. `src/composables/`

Contiene la lógica de JavaScript/Vue encapsulada en funciones reutilizables (Composables API).

- **`pwaInstall.js`**: Archivo que gestiona los eventos de instalación de la PWA (`beforeinstallprompt`) y exporta las variables reactivas para interactuar con la interfaz.
- **`useTheme.js`**: Función reservada para manejar configuraciones globales de interfaz, como un futuro cambio entre modo claro y oscuro.

### 4. `src/core/`

Alberga las configuraciones críticas que dictan el funcionamiento interno de la aplicación.

- **`api.js`**: Archivo de configuración de Axios. Define la URL base del backend y establece los interceptores encargados de adjuntar automáticamente los tokens de seguridad a cada petición.

### 5. `src/features/`

El núcleo del patrón modular. Agrupa los archivos por dominio de negocio en lugar de por tipo de archivo técnico.

- **`auth/` (Autenticación)**
- `components/LoginForm.vue`: Bloque visual con los campos de correo y contraseña.
- `views/LoginView.vue`: Pantalla completa que implementa el formulario de inicio de sesión.

- **`customers/` (Clientes)**
- `components/CustomerCard.vue`: Tarjeta visual individual que expone el nombre y estado de un cliente.
- `views/CustomersView.vue`: Pantalla que consume la API e itera una lista de componentes `CustomerCard`.

- **`profile/` (Perfil)**
- `views/ProfileView.vue`: Pantalla dedicada a mostrar y editar la información de la sesión activa del usuario.

### 6. `src/layouts/`

Contiene los envoltorios o marcos estructurales donde se inyectan las distintas pantallas de la aplicación.

- **`AuthLayout.vue`**: Estructura de pantalla completa sin barras de navegación, diseñada para aislar el proceso de inicio de sesión.
- **`MainLayout.vue`**: Estructura principal que incluye la barra superior (cabecera con logo), el menú de navegación y un contenedor dinámico para las vistas internas.

### 7. `src/router/`

Maneja el enrutamiento y la navegación del usuario dentro de la aplicación (Single Page Application).

- **`index.js`**: Configura el árbol de rutas, el mapeo de URLs a Vistas y asigna qué Layout debe envolver a cada pantalla dependiendo de si es una ruta pública (`/login`) o protegida (`/clientes`).
