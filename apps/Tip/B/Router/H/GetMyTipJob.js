import { User } from "../../../../../libs/Core/Core1/bCore1.js"
import TipJob from "../../Model/TipJob.js"

export async function asyGetMyTipJob(req, jobId) {

  if(!jobId) {
    throw new Error("Job id is empty")
  }

  const userId = req.user?._id

  if(!userId) {
    throw new Error("Cannot find user id")
  }

  const user = await User.findById(userId).populate("tipAccountId")

  if(!user) {
    throw new Error("Cannot find user")
  }

  const tipAccount = user.tipAccountId

  if(!tipAccount || !tipAccount._id) {
    throw new Error("Cannot find tip account")
  }

  const job = await TipJob.findById(jobId)
  if(!job) {
    throw new Error("Cannot find tip job")
  }


  if(job.tipAccountId.toString() !== tipAccount._id.toString()) {
    throw new Error("Job does not match tip account")
  }
  return job
}