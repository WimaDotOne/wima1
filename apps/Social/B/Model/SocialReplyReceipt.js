import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  domain: {type: String, index: true, required: true},
  senderUnivAccountId:  { type: mongoose.Schema.Types.ObjectId, required: true, index: true, ref: "UniversityAccount"},
  receiverUnivAccountId:  { type: mongoose.Schema.Types.ObjectId, required: true, index: true, ref: "UniversityAccount"},
  createUtcDay: { type: Number, required: true, index: true},

  serviceName: { type: String, required: true},
  serviceShortDescription: { type: String },
  serviceDescription: { type: String },
  servicePrice: { type: String }
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('SocialReplyReceipt', schema)