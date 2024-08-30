import { Router } from "express";
import { createFeedback } from "../../controllers/Feedback/FeedbackController.js";

const router = Router();

router.post("/", createFeedback);

export default router;
