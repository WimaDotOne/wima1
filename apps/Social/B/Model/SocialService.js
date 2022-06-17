import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  socialAccountId: { type: mongoose.Schema.Types.ObjectId, required: true, index: true, ref: "SocialAccount"},

  name: { type: String, index: 'text', required: true},
  shortDescription: { type: String },
  description: { type: String },
  price: { type: String },
  isGoods: { type: Boolean, index: true, default: false}
}, {
  timestamps: { currentTime: () => Date.now() }
})


export default mongoose.model('SocialService', schema)