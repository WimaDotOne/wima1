import mongoose from "mongoose"
import { GENERAL_INPUT_MAX, TipConfig } from "../../../../../bConfig.js"
import { User } from "../../../../../libs/Core/Core1/bCore1.js"
import TipAccount from "../../Model/TipAccount.js"
import TipJob from "../../Model/TipJob.js"
import { asyGetTipAccount } from "../H/GetTipAccount.js"

export async function iCreateMyJob(req, res) {
  try{
    
    const jobName = (req.body.jobName || "").trim()

    if(jobName.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Business title is too long" })
    }

    const tipAccount = await asyGetTipAccount(req)
    

    //A Tip account can only have 10 jobs
    const jobCount = await TipJob.count({
      tipAccountId: tipAccount._id
    })
    const jobMax = TipConfig.jobMaxPerAccount
    if(jobCount > jobMax) {
      return res.json({ ok: false, error: "Job creation reach limit" })
    }
    
    const job = new TipJob({
      _id: mongoose.Types.ObjectId(),
      tipAccountId: tipAccount._id,
      jobName: jobName
    })
    
    await job.save()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}