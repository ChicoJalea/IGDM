import { Router } from "express";
import { dependencias } from "../models/BlogModel.js";

const router = Router();

router.get("/tables", dependencias.getTables);
router.get("/tables/:tableName", dependencias.getTableData);

export default router;
