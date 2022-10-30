import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  tipAccountId: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, ref: "TipAccount"},
  isJobPublic: { type: Boolean, index: true },
  jobName: { type: String },
  placeName: { type: String  },
  placeId: { type: String, index: true },
  firstName: { type: String },
  photoUrl: { type: String },
  selfDescription: { type: String }
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('TipJob', schema)