import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  email: {type: String, index: true, unique: true},
  emailVerified: {type: Boolean, index: true},
  passcode: {type: String},
  numPasscodeFail: {type: Number, default: 0},
 
  googleId: {type: String, index: true, unique: true},
  gMail: {type: String, index: true},
  gName: {type: String},
  gGivenName: {type: String},
  gFamilyName: {type: String},
  gPictureUrl: {type: String},
  
  facebookId: {type: String, index: true, unique: true},
  fMail: {type: String, index: true},
  fName: {type: String},
  fIsPictureSilhouette: {type: Boolean},
  fPictureUrl: {type: String}

}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('Login', schema)