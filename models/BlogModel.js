import { pool } from "../database/db.js"; // importa la instancia de pool generada en el archivo db.js
import { relaciones } from "../database/relaciones.js"; // importa el arreglo de objetos de las relaciones
// entre las tablas de la base de datos

// lo siguiente son funciones asincrónicas que manejan las solicitudes, siendo todas GET
// la siguiente función permite obtener el nombre de las tablas, convertirlas en JSON y avisar si ocurre algún
// error en la ejecución de la función
// se conecta a la ruta /tables
const getTables = async (req, res) => {
  try {
    const result = await pool.query(`SELECT table_name
         FROM information_schema.tables 
         WHERE table_schema = 'public' `);
    const tableNames = result.rows.map((row) => row.table_name);
    res.json(tableNames);
  } catch (error) {
    console.error("Error fetching table names", error);
    res.status(500).json({ error: "Error fetching table names" });
  }
};
// la siguiente función muestra los datos de la tabla seleccionada, se convierte en JSON y avisa
// si ocurre algún error en la ejecución de la función
// esta función se conecta a rutas dinámicas como /tables/:tableName donde :tableName representa
// el nombre de una tabla específica
const getTableData = async (req, res) => {
  const tableName = req.params.tableName;
  try {
    const result = await pool.query(`SELECT * FROM ${tableName}`);
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
};
// esta función devuelve las relaciones entre las tablas, se convierte a JSON y avisa si
// ocurre algún error en la ejecución de la función
const getTablesRelation = async (req, res) => {
  try {
    const result = relaciones;
    res.json(result);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export const dependencias = {
  // se exportan las funciones
  getTables,
  getTableData,
  getTablesRelation,
};
