import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  movicId: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, ref: "Movic"},
  movicAccountId: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, ref: "MovicAccount"}
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('MovicProject', schema)