import mongoose from "mongoose"

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  emailAccountId: {type: mongoose.Schema.Types.ObjectId, 
    index: true, sparse: true, unique: true, ref: "EmailAccount"}, //sparse means the field does not have to exist and Unique does not count null value
  googleAccountId: {type: mongoose.Schema.Types.ObjectId, 
    index: true, sparse: true, unique: true, ref: "GoogleAccount"},
  facebookAccountId: {type: mongoose.Schema.Types.ObjectId, 
    index: true, sparse: true, unique: true, ref: "FacebookAccount"},
  movicAccountId: {type: mongoose.Schema.Types.ObjectId, 
    index: true, sparse: true, unique: true, ref: "MovicAccount"},
  bookAccountId: {type: mongoose.Schema.Types.ObjectId, 
    index: true, sparse: true, unique: true, ref: "BookAccount"},
  quizAccountId: {type: mongoose.Schema.Types.ObjectId, 
    index: true, sparse: true, unique: true, ref: "QuizAccount"},
}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('User', schema)