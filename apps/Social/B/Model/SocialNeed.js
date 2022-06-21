import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  domain: {type: String, index: true, required: true},

  socialAccountId: { type: mongoose.Schema.Types.ObjectId, required: true, index: true, ref: "SocialAccount"},
  createUtcDay: { type: Number, required: true, index: true},

  name: { type: String, index: 'text', required: true},
  shortDescription: { type: String },
  description: { type: String },
  willPay: { type: Boolean }
}, {
  timestamps: { currentTime: () => Date.now() }
})


export default mongoose.model('SocialNeed', schema)