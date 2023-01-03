import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  quizBookId: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, ref: "QuizBook"},
  quizAccountId: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, ref: "QuizAccount"},
  isQuizBookPublic: { type: Boolean, index: true }
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('QuizProject', schema)