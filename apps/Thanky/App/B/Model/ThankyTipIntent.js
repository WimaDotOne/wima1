import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  jobId: { type: mongoose.Schema.Types.ObjectId, required: true, index: true, ref: "ThankyJob" },
  stripeCheckoutSessionId: { 
    type: String, 
    index: {
      partialFilterExpression: {
        "stripeCheckoutSessionId": { $exists: true, $ne: ""}
      }
    }
  },
  stripeCheckoutCompleted: { type: Boolean, index: true },
  stripePaymentSucceeded: { type: Boolean, index: true },
  stripePaymentFailed: { type: Boolean, index: true },
  customerName: { type: String },
  customerComment: { type: String },
  tipIndex: { type: Number }, 
  createdUTC: { type: Number }
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('ThankyTipIntent', schema)