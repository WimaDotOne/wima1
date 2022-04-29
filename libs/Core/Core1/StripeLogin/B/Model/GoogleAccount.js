import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  googleId: {type: String, index: true, unique: true, required: true},
  gmail: {type: String, index: true},
  name: {type: String},
  givenName: {type: String},
  familyName: {type: String},
  pictureUrl: {type: String},
  
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('GoogleAccount', schema)