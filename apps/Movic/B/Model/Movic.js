import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  ownerAccountId: { type: mongoose.Schema.Types.ObjectId, index: true, required: true},
  title: { type: String, required: true }
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('Movic', schema)