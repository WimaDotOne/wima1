import { asyGetOrCreateThankyAccountId } from "./asyGetOrCreateThankyAccountId.js"
import ThankyAccount from "../../Model/ThankyAccount.js"
import ThankyJob from "../../Model/ThankyJob.js"
import mongoose from "mongoose"

export async function asyGetOrCreateThankyJobIds(req) {
  
  const thankyAccountId = await asyGetOrCreateThankyAccountId(req)

  const thankyAccount = await ThankyAccount.findById(thankyAccountId)

  let thankyAccountChanged = false

  if(!thankyAccount.job1Id) {
    const job1 = new ThankyJob({
      _id: mongoose.Types.ObjectId(),
      thankyAccountId: thankyAccount._id
    })

    await job1.save()
    thankyAccount.job1Id = job1._id
    thankyAccountChanged = true
  }

  if(!thankyAccount.job2Id) {
    const job2 = new ThankyJob({
      _id: mongoose.Types.ObjectId(),
      thankyAccountId: thankyAccount._id
    })

    await job2.save()
    thankyAccount.job2Id = job2._id

    thankyAccountChanged = true
  }

  if (thankyAccountChanged) {
    await thankyAccount.save()
  }

  return [thankyAccount.job1Id, thankyAccount.job2Id]
}