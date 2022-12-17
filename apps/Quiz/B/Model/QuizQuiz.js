import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String },
  quizChapterId: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, ref: "QuizChapter"},
  youTubeId: { type: String }
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('QuizQuiz', schema)