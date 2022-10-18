import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  business: { type: String  },
  tipAccountId: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, ref: "TipAccount"},
  isJobPublic: { type: Boolean, index: true }
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('TipJob', schema)