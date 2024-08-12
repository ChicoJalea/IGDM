// este archivo converge todas las rutas de las funciones definidas en el archivo BlogModel.js

import { Router } from "express";
import { dependencias } from "../models/BlogModel.js";

const router = Router(); //instancia que define el conjunto de rutas para luego integrarlas y exportarlas
// en la aplicación pricipal

// aquí se definen 3 rutas GET que redirigen a las funciones creadas en el archivo de BlogModel.js
router.get("/tables", dependencias.getTables);
router.get("/tables/:tableName", dependencias.getTableData);
router.get("/mapa", dependencias.getTablesRelation);

export default router; //se exporta este módulo
