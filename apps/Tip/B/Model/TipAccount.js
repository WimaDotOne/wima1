import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('TipAccount', schema)