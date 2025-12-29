# 🚀 Proyecto React: Login + Dashboard

Implementación de una prueba técnica que evalúa habilidades en desarrollo frontend con React. La aplicación cuenta con dos vistas principales:

### ✨ Características principales:
- ✅ Sistema de login/logout con rutas protegidas
- ✅ Dashboard con datos dinámicos protegido por autenticación
- ✅ Gestión de estado del servidor con React Query
- ✅ Interfaz con Tailwind CSS
- ✅ Tipado estático con TypeScript
- ✅ Manejo de API con Axios e interceptores

## 🧩 Tecnologias

- ⚡Vite - Herramienta de construcción ultrarrápida
- ⚛️ React 18 - Biblioteca moderna de interfaces de usuario
- 🎨 Tailwind CSS - Framework CSS utility-first
- 🔄 TanStack Query (React Query) - Gestión de estado del servidor y caché
- 🌐 Axios - Cliente HTTP con instancia preconfigurada
- 🧠 TypeScript - Tipado estático
- 🧰 ESLint + Prettier - Linting y formateo de código

## 🏗️ Arquictura

```
src/
├── api/              # Configuración de la API, axios, interceptores
├── components/       # Componentes genéricos y reutilizables
├── pages/           # Páginas (Login y Dashboard)
├── hooks/           # Hooks personalizados (useAuth, etc.)
├── context/         # Contextos (AuthContext, ThemeContext, etc.)
├── routes/          # Configuración del router, rutas privadas/públicas
├── utils/           # Utilidades, helpers, validaciones
├── styles/          # Estilos globales, temas
├── App.tsx
└── main.tsx
```

## ⚙️ Instalación y Ejecución

```
# 1. Clonar el repositorio
git clone https://github.com/danieljacquin/logika-prueba.git
cd logika-prueba

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
# Crear archivo .env en la raíz del proyecto:
VITE_API_AUTH_URL=https://dev.apinetbo.bekindnetwork.com/api
VITE_API_ACTIONS_URL=https://dev.api.bekindnetwork.com/api

# 4. Ejecutar en modo desarrollo
npm run dev

# 5. Abrir en navegador
# La aplicación estará disponible en: http://localhost:5173


## ⚙️ Scripts

| Comando               | Descripción                                       | Ejemplo(opcional)
| ----------------      | ------------------------------------------------  | ---------------
| `npm run dev`         | Inicia el servidor de desarrollo                  |
| `npm run build`       | Compila para producción                           |
| `npm run preview`     | Previsualiza la compilación en local              |
| `npm run lint`        | Ejecuta ESLint                                    |
| `npm run lint:fix`    | Ejecuta ESLint y corrige errores automáticamente  |
| `npm run format`      | Formatea el código con Prettier                   |


## 🧑‍💻 Autor
- Creado por Daniel Jacquin