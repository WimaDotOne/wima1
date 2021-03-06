import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  domain: {type: String, index: true, required: true},

  givenName: { type: String, index: true, required: true},
  familyName: { type: String, index: true, required: true},
  universityAffiliation: { type: String, index: true, required: true},
  major: { type: String },
  personality2: { type: String },
  personality16: { type: String },
  zodiacSign: { type: String },
  aboutMe: { type: String },
  experiences2: { type: String }, //experience of being helped
  experiences: { type: String }, //experience of helping others
  skills: { type: String }
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('SocialProfile', schema)