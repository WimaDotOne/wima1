export interface ISocialReceipt {
  _id: string,
  serviceName: { type: String, required: true},
  serviceShortDescription: { type: String },
  serviceDescription: { type: String },
  servicePrice: { type: String }
}