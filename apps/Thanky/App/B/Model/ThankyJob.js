import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  thankyAccountId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "ThankyAccount"},
  jobName: { type: String },
  placeName: { type: String  },
  placeId: { 
    type: String, 
    index: {
      partialFilterExpression: {
        "placeId": { $exists: true, $ne: ""}
      }
    }
  },
  firstName: { type: String },
  selfPhoto: {
    s3Key: { type: String },
    s3KeySmall: { type: String },
    url: { type: String },
    urlSmall: { type: String }
  },
  aboutMe: { type: String }
}, {
  timestamps: { currentTime: () => Date.now() }
})

schema.index({ placeId: 1 }, );

export default mongoose.model('ThankyJob', schema)