import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  facebookId: {type: String, index: true, unique: true, required: true},
  email: {type: String, index: true},
  name: {type: String},
  isPictureSilhouette: {type: Boolean},
  pictureUrl: {type: String}

}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('FacebookAccount', schema)