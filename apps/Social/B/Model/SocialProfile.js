import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  givenName: { type: String, index: true, required: true},
  familyName: { type: String, index: true, required: true},
  universityAffiliation: { type: String, index: true, required: true},
  major: { type: String, required: true},
  personality2: { type: String },
  personality16: { type: String },
  zodiacSign: { type: String },
  aboutMe: { type: String },
  experiences: { type: String },
  skills: { type: String }
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('SocialProfile', schema)