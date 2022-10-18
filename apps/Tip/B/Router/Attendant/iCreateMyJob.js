import mongoose from "mongoose"
import { GENERAL_INPUT_MAX, TipConfig } from "../../../../../bConfig.js"
import { User } from "../../../../../libs/Core/Core1/bCore1.js"
import TipAccount from "../../Model/TipAccount.js"
import TipJob from "../../Model/TipJob.js"

export async function iCreateMyJob(req, res) {
  try{
    
    const businessName = (req.body.businessName || "").trim()

    if(businessName.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Business title is too long" })
    }

    const user = await User.findById(req.user._id)

    if(!user) {
      return res.json({ ok: false, error: "Cannot find user" })
    }

    let tipAccount = null
    if(!user.tipAccountId) {
      tipAccount = new TipAccount({
        _id: mongoose.Types.ObjectId()
      })

      await tipAccount.save()
      user.tipAccountId = tipAccount._id
      user.save()
    } else {
      tipAccount = await TipAccount.findById(user.tipAccountId)
    }

    if(!tipAccount) {
      return res.json({ ok: false, error: "Cannot find Tip account" })
    }

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
      business: businessName
    })
    
    await job.save()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}