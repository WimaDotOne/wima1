import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  author: { type: String },
  dedication: { type: String},
  bookCover: {
    s3Key: { type: String },
    s3KeySmall: { type: String },
    url: { type: String },
    urlSmall: { type: String }
  }
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('BookBook', schema)