import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  socialProfileId: { type: mongoose.Schema.Types.ObjectId, index: true, ref: "SocialProfile"},

}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('SocialAccount', schema)