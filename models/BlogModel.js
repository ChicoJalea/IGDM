/* import pkg from 'pg';
const {Pool} = pkg; */
import { pool } from "../database/db.js";

const buscarTodo = async() =>{
    const {rows} = await pool.query("SELECT * FROM receta_medica");
    return rows;
};

export const fhirModel = {
    buscarTodo,
};