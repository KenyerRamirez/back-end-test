import mongoose from "mongoose";
import "dotenv/config";

const { MONGODB_URI, DBNAME } = process.env;

mongoose
  .connect(MONGODB_URI + DBNAME, {})
  .then((db) => console.log("Database is connected"))
  .catch((err) => console.log(err));
