import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  jobId: { type: mongoose.Schema.Types.ObjectId, required: true, index: true, ref: "ThankyJob" },
  customerName: { type: String },
  customerComment: { type: String },
  tipIndex: { type: Number}, 
  createdUTC: { type: Number }
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('ThankyTipIntent', schema)