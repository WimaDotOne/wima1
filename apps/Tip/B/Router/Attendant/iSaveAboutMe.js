import { GENERAL_INPUT_MAX, GENERAL_TEXTAREA_MAX } from "../../../../../bConfig.js"
import { asyGetMyTipJob } from "../H/GetMyTipJob.js"

export async function iSaveAboutMe(req, res) {
  try{
    
    const jobId = (req.body.jobId || "").trim()
    const firstName = (req.body.firstName || "").trim()
    const selfDescription = (req.body.selfDescription || "").trim()

    const job = await asyGetMyTipJob(req, jobId)

    if(!job) {
      return res.json({ ok: false, error: "Cannot find the job" })
    }

    if(!firstName) {
      return res.json({ ok: false, error: "First name cannot be empty" })
    }

    if(firstName.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "First name is too long" })
    }

    if(selfDescription.length > GENERAL_TEXTAREA_MAX) {
      return res.json({ ok: false, error: "Self description is too long" })
    }

    job.firstName = firstName
    job.selfDescription = selfDescription

    await job.save()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}