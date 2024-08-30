import app from "./App.js";
import "dotenv/config";
import mongoose from "mongoose";
import { addQuestionsToDatabase } from "./utils/questions.js";

const PORT = process.env.PORT;

mongoose.connection.once("open", async () => {
  app.listen(PORT, () => {
    addQuestionsToDatabase();
    console.log(`Running in ${PORT} port!`);
  });
});
