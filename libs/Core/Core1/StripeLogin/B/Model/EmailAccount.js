import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  email: {type: String, index: true, unique: true, required: true},
  emailVerified: {type: Boolean, index: true},
  oneTimePasscode: {type: String},
  numOneTimePasscodeFail: {type: Number, default: 0},
 
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('EmailAccount', schema)