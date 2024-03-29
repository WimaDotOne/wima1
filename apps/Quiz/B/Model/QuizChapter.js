import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  quizBookId: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, ref: "QuizBook"},
  title: {type: String, required: true },
  isPublic: { type: Boolean, index: false }
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('QuizChapter', schema)