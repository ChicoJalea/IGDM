import { pool } from "../database/db.js";

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
    const result = await pool.query(`SELECT 
      tc.table_schema, 
      tc.constraint_name, 
      tc.table_name, 
      kcu.column_name, 
      ccu.table_schema AS foreign_table_schema,
      ccu.table_name AS foreign_table_name,
      ccu.column_name AS foreign_column_name 
    FROM 
      information_schema.table_constraints AS tc 
      JOIN information_schema.key_column_usage AS kcu
        ON tc.constraint_name = kcu.constraint_name
        AND tc.table_schema = kcu.table_schema
      JOIN information_schema.constraint_column_usage AS ccu
        ON ccu.constraint_name = tc.constraint_name
        AND ccu.table_schema = tc.table_schema
    WHERE tc.constraint_type = 'FOREIGN KEY';
  `);
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query:", error.stack);
    res.status(500).send("Server Error");
  }
};

export const dependencias = {
  getTables,
  getTableData,
  getTablesRelation,
};
