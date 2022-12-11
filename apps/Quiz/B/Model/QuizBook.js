import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  quizAccountId: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, ref: "QuizAccount"},
  title: { type: String, required: true },
  isQuizBookPublic: { type: Boolean, index: true }
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('QuizBook', schema)