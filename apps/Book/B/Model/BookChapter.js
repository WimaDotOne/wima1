import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  bookId: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, ref: "BookBook"},
  name: { type: String, required: true },
  chapterNumber: { type: Number },
  text: { type: String }
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('BookChapter', schema)