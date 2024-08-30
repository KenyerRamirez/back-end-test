import { Router } from "express";
import { getEmployees } from "../../controllers/UsersController/UsersController.js";

const router = Router();

router.get("/", getEmployees);

export default router;
