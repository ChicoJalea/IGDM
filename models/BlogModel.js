import { pool } from "../database/db.js";
import { relaciones } from "../database/relaciones.js";

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
  getTables,
  getTableData,
  getTablesRelation,
};
