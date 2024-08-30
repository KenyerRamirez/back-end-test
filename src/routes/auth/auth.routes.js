import { Router } from "express";
import { createUsers, loginUsers } from "../../controllers/AuthController/AuthController.js";

const router = Router();

router.post("/login", loginUsers);
router.post("/register", createUsers);

export default router;
