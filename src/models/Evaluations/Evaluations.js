import mongoose from 'mongoose';

const PreguntaSchema = new mongoose.Schema({
  texto: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  puntaje: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  }
});

const PuntajePorCategoriaSchema = new mongoose.Schema({
  categoria: {
    type: String,
    required: true
  },
  puntajeTotal: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  }
});

const EvaluacionSchema = new mongoose.Schema({
  tipoEvaluación: {
    type: String,
    enum: ['Autoevaluación', 'Evaluación'],
    required: true
  },
  usuarioEvaluado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuarios',
    required: true
  },
  evaluador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuarios',
    required: true
  },
  preguntas: [PreguntaSchema],
  puntajeTotal: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  puntajePorCategoria: [PuntajePorCategoriaSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Evaluacion = mongoose.model('Evaluaciones', EvaluacionSchema);

export default Evaluacion;
