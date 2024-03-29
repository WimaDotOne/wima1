import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  language: {type: String, required: true, index: true},
  name: {type: String },
  number: { type: Number, required: true, index: true },
  script1: {type: String},
  isPublic: { type: Boolean}
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('LingoUnit', schema)