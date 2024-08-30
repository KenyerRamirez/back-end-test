import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  tipoEvaluacion:{
    type: String,
    enum: ['Autoevaluación', 'Evaluación'],
    required: true
  },
  categoria: {
    type: String,
    required: true,
    trim: true,
  },
  pregunta: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Question = mongoose.model("Preguntas", questionSchema);

export default Question;
