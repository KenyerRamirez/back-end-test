import express from "express";
import cors from "cors"
import './database/database.js'
import AuthRoutes from './routes/auth/auth.routes.js'
import UsersRoutes from './routes/users/users.routes.js'
import EvaluationsRoutes from './routes/evaluations/evaluations.routes.js'
import FeedbackRoutes from './routes/feedback/feedback.routes.js'
import ReportsRoutes from './routes/reports/reports.routes.js'
import QuestionsRoutes from './routes/questions/questions.routes.js'
import { verifyAccessToken } from "./controllers/AuthController/AuthController.js";

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }));  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", AuthRoutes)
app.use("/api/employees", verifyAccessToken, UsersRoutes)
app.use("/api/evaluations", verifyAccessToken, EvaluationsRoutes)
app.use("/api/feedback", verifyAccessToken, FeedbackRoutes)
app.use("/api/reports", verifyAccessToken, ReportsRoutes)
app.use("/api/questions", verifyAccessToken, QuestionsRoutes)


export default app;
