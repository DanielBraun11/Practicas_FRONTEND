# Práctica Frontend - API Star Wars (SWAPI)

## Descripción del proyecto
Este proyecto consiste en una aplicación web desarrollada con React y TypeScript que consume la API pública de Star Wars (SWAPI).  
La aplicación muestra una lista de personajes junto con sus características principales en formato de tarjetas, organizadas en varias columnas para mejorar la visualización.

## Instalación
Para instalar las dependencias del proyecto, ejecutar el siguiente comando:

```bash
npm install
```

## Ejecución del proyecto
Para iniciar la aplicación en modo desarrollo, ejecutar:

```bash
npm run dev
```

Después abrir en el navegador:

http://localhost:5173

## Explicación del proyecto
La aplicación está estructurada en varios componentes siguiendo una arquitectura modular:

- App: Componente principal que gestiona la lógica de la aplicación y realiza las llamadas a la API.
- Character: Componente encargado de mostrar la información de cada personaje.
- API: Configuración de axios para realizar las peticiones HTTP.
- Types: Definición de los tipos de datos utilizados en la aplicación.

Se utilizan hooks de React para la gestión del estado y efectos:

- useState: Para manejar los estados de personajes, carga y error.
- useEffect: Para realizar la llamada a la API al montar el componente.

## Funcionalidades implementadas

- Obtención de datos desde la API SWAPI
- Renderizado dinámico de los personajes
- Visualización de los datos en formato tabla
- Manejo de estado de carga
- Manejo de errores en la petición
- Paginación mediante un botón que carga más personajes
- Diseño responsive que muestra varios personajes por fila
- 
## Uso de Quicktype para tipar a partir de JSON
<img width="1057" height="617" alt="image" src="https://github.com/user-attachments/assets/33defd8a-1cf2-4b0c-bf30-e6d3ae8c7a9d" />

## API utilizada

https://swapi.dev/api/people/

## Autor

Daniel Braun Sandino
