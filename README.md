<h1>Front End Aeroméxico</h1>

Este proyecto fue generado con **Vite** utilizando **React** versión *18.2.0* y **TypeScript**



<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" height="180" />
  <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" height="180" />
</p>



#### Prerequisites

- Tener instalado [Node.js](https://nodejs.org/es/) que incluye [Node Package Manager](https://www.npmjs.com/)

- Instalar [json-server](https://www.npmjs.com/package/json-server) **globalmente**



### Configuración del proyecto

Instale todas las dependencias del proyecto

```
npm install
```

Levantar el servidor de desarrollo de **Vite**, la aplicación se recargará automáticamente si cambia alguno de los archivos de origen

```
npm run dev
```

En otra terminal ubíquese en el mismo directorio del proyecto y ejecute

```
npm run server
```

*Esto permite levantar la API con* **json-server



### Review

**¿Qué es lo que más te gustó de tu desarrollo?**

*La utilización de **json-server** para levantar una API*, es mi primera vez utilizando esta herramienta.

**¿Qué hubiera mejorado?**

*Refactorizar algunos componentes en especial el modal que incluye el formulario, mejorar los estilos y añadir animaciones al aparecer los personajes.*

*También me falto la parte de filtros que es lo mas sencillo pero me enfoque mas en el formulario y agregar a favoritos.*

**¿Bugs encontrados y solución?**

*Al tratar de implementar la funcionalidad de añadir a favoritos desde el icono del marcador, intente que si lo vuelven a presionar y el personaje ya esta en la lista de favoritos lo que haría seria lo contraria que es eliminarse de favoritos y quitar el marcador, el problema fue que no lograba sincronizar bien los cambios de **Redux** con el **localStorage**.*

*Solución: No hay como revisar la documentación de **MDN** para modificar arreglos y también crear un middleware en **Redux** que me permitiera guardar los datos en el **localStorage** al lanzar el **dispatch()***



