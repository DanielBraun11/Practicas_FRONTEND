# Práctica 2 Frontend – REST Countries

Aplicación web desarrollada con **Next.js y TypeScript** que consume la API **REST Countries** para mostrar información de distintos países.  
La aplicación permite ver un listado de países y acceder a una página con información detallada de cada uno.

---

# Prerrequisitos

Para ejecutar el proyecto necesitas tener instalado:

- Node.js
- npm

Instalar las dependencias del proyecto:

```bash
npm install
```
Ejecutar el servidor de desarrollo:
```bash
npm run dev
``
Abrir en el navegador:
```bash
http://localhost:3000
```

## Estructura del proyecto
<img width="293" height="477" alt="imagen" src="https://github.com/user-attachments/assets/7ab8ee17-33bc-4eb4-999d-76a0f43b808d" />


## Descripción de las carpetas
### api-lib

Contiene las funciones encargadas de consumir la API REST Countries y obtener los datos de los países.

### app

Contiene las páginas y componentes de la aplicación.

- page.tsx
Página principal que muestra la lista de países.

- country/[name]
Ruta dinámica que muestra la información detallada de un país seleccionado.

- components/
Componentes reutilizables como la tarjeta de cada país.

### types

Define los tipos de TypeScript utilizados para estructurar los datos que devuelve la API.






