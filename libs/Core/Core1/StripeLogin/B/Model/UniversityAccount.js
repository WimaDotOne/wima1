import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  domain: {type: String, index: true, required: true},
  email: {type: String, index: true, unique: true, required: true},
  emailVerified: {type: Boolean, index: true},
  oneTimePasscode: {type: String},
  numOneTimePasscodeFail: {type: Number, default: 0},

  givenName: {type: String},
  familyName: {type: String}
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('UniversityAccount', schema)