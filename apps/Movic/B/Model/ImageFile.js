import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  movicId: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, ref: "Movic"},
  name: { type: String, required: true },
  s3Key: { type: String },
  s3KeySmall: { type: String},
  url: { type: String },
  urlSmall: { type: String }
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('ImageFile', schema)