import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
  evaluacionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Evaluaciones',
    required: true
  },
  comentarios: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);

export default Feedback;
