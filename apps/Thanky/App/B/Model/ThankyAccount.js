import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  stripeConnectedAccountId: { 
    type: String, 
    index: {
      partialFilterExpression: {
        "stripeConnectedAccountId": { $exists: true, $ne: ""}
      }
    }
  },
  
  job1Id: { type: mongoose.Schema.Types.ObjectId, ref: "ThankyJob"},
  job2Id: { type: mongoose.Schema.Types.ObjectId, ref: "ThankyJob"}
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('ThankyAccount', schema)