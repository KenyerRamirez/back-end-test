import { Router } from "express";
import { getQuestions } from "../../controllers/QuestionController/QuestionController.js";

const router = Router();

router.get("/", getQuestions);

export default router;
