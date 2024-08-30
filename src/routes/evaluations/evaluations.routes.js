import { Router } from "express";
import { createEvaluation, getEmployeeEvaluations, getEvaluation, getEvaluations, updateEvaluation } from "../../controllers/EvaluationsController/EvaluationsController.js";

const router = Router();

router.post("/", createEvaluation);
router.get("/", getEvaluations);
router.get("/:id", getEvaluation);
router.put("/:id", updateEvaluation);
router.get("/employee/:id", getEmployeeEvaluations);

export default router;
