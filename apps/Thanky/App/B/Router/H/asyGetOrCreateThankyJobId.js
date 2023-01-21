import { asyGetOrCreateThankyAccountId } from "./asyGetOrCreateThankyAccountId.js"
import ThankyAccount from "../../Model/ThankyAccount.js"
import ThankyJob from "../../Model/ThankyJob.js"
import mongoose from "mongoose"

export async function asyGetOrCreateThankyJobId(req, jobNum) {
  
  const thankyAccountId = await asyGetOrCreateThankyAccountId(req)

  const thankyAccount = await ThankyAccount.findById(thankyAccountId)

  if(jobNum == 2) {
    if(!thankyAccount.job2Id) {
      const job2 = new ThankyJob({
        _id: mongoose.Types.ObjectId(),
        thankyAccountId: thankyAccount._id
      })

      await job2.save()
      thankyAccount.job2Id = job2._id

      await thankyAccount.save()
    }

    return thankyAccount.job2Id
  }

  if(!thankyAccount.job1Id) {
    const job1 = new ThankyJob({
      _id: mongoose.Types.ObjectId(),
      thankyAccountId: thankyAccount._id
    })

    await job1.save()
    thankyAccount.job1Id = job1._id

    await thankyAccount.save()
  }

  return thankyAccount.job1Id
  
}