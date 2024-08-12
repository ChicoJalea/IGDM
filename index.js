// este es el archivo final que configura y corre el servidor con Express

import "dotenv/config"; // Importa y configura las variables de entorno en un archivo .env este archivo
// se debe crear en la raiz del proyecto y contiene variables de entorno como la base de datos, claves, username, etc.
import express from "express"; // Importa el framework Express, que se usa para crear aplicaciones web y APIs en Node.js
import apiRoute from "./routes/api.route.js"; // Importa las rutas definidas en el archivo api.route.js.
// Estas rutas manejarán las solicitudeds HTTP a los endpoints de la API.
import cors from "cors"; // Importa el middleware cors, que permite configurar el intercambio
//de recursos de origen cruzado (CORS). CORS es necesario cuando una aplicación en un dominio
//necesita acceder a recursos en otro dominio.

const app = express(); // crea una instancia de la aplicación Express

// acá se configura el acceso con la app, en este caso se dejó
// abierto para que cualquier dominio acceda a la API
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json()); //convierte las solicitudes entrantes con cuerpo en formato JSON
//en objetos de JavaScript que se pueden manejar fácilmente dentro de la aplicación.

app.use("/api", apiRoute); //define que todas las rutas que empiecen con /api se manejarán
// a través de apiRoute. O sea, las solicituces que lleguen a /api se redigiran a las rutas
// definidas en api.route.js

const PORT = process.env.PORT || 4372; //define el puerto en el que se ejecutará el servidor

// inicia el servidor en el puerto estipulado
// La dirección 0.0.0.0 significa que el servidor aceptará conexiones de cualquier red.
app.listen(PORT, "0.0.0.0", () => {
  console.log(`server corriendo en puerto http://localhost:${PORT}`);
});
