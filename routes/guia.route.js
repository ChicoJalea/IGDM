import { Router } from "express";
import { fhirController } from "../controllers/fhir.controller.js";

const router = Router();

router.get('/', fhirController.getAll);

export default router;