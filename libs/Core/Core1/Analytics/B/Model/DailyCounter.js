import mongoose from 'mongoose'

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  numDay: {type: Number, index: true, required: true, unique: true},

  numPasscodeSend: {type: Number, default: 0},
  numVisit: {type: Number, default: 0}

}, {
  timestamps: { currentTime: () => Date.now() }
})

export default mongoose.model('DailyCounter', schema)