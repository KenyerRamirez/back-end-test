import { Router } from "express";
import { getEmployeeEvaluation } from "../../controllers/ReportsController/ReportsController.js";

const router = Router();

router.get("/employee/:id", getEmployeeEvaluation);

export default router;
