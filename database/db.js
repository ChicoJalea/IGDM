//este archivo conecta con la base de datos de las guías de implementación utilizando el paquete pg.
// pkg es un cliente de PostgreSQL para Node.js, además de conectar con la base de datos, permite realizar consultas SQL
// carga las variables de entorno del archivo .env donde se encuentran las credenciales para ingresar a la base de datos

import "dotenv/config";
import pkg from "pg";
const { Pool } = pkg; // Extrae la clase Pool del paquete pg. Pool es una clase que gestiona
// un grupo de conexiones reutilizables a la base de datos PostgreSQL.

export const pool = new Pool({
  //crea una instancia de pool con las opciones de
  // configuración proporcionadas y la exporta para que pueda ser utilizada en otras partes de la aplicación.
  allowExitOnIdle: true, // permite que Node.js termine cuando todas las conexiones en el Pool estén inactivas.
});
