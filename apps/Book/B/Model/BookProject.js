import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  bookId: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, ref: "BookBook"},
  bookAccountId: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, ref: "BookAccount"},
  isBookPublic: { type: Boolean, index: true }
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('BookProject', schema)