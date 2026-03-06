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
src/
├── api-lib/
│   ├── api.ts
│   └── country.ts
│
├── app/
│   ├── components/
│   │   ├── countrycard.tsx
│   │   └── countrycard.css
│   │
│   ├── country/[name]/
│   │   ├── page.tsx
│   │   └── page.css
│   │
│   ├── page.tsx
│   ├── page.css
│   ├── layout.tsx
│   ├── globals.css
│   └── favicon.ico
│
├── types/
│   ├── country.ts
│   └── index.ts


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





