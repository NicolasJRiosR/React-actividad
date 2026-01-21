Clonar el repositorio y entra en la carpeta:
git clone https://github.com/NicolasJRiosR/React-actividad.git
cd React-actividad

Instalar dependecias:
npm install

Iniciar la aplicación:
npm run dev 

Carpetas y archivos
node_modules/librerías instaladas, no se toca.
public/ archivos estáticos como index.html o imágenes.
src/:
pages/  páginas de la app (Home.jsx, Login.jsx, Dashboard.jsx).
router/  rutas de la app (AppRouter.jsx, PrivateRoute.jsx).
services/ funciones para APIs (api.js).
store/ estado global, contexto de usuario (AuthContext.jsx).
package.json dependencias y scripts.
vite.config.js configuración de Vite.
