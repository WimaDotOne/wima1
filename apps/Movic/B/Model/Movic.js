import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  script1: { type: String }
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('Movic', schema)