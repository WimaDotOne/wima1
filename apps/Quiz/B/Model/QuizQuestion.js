import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  quizQuizId: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, ref: "QuizQuiz"},
  question: { type: String },
  options: { type: [String]},
  correctOption: { type: Number, default: 0 }
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('QuizQuestion', schema)