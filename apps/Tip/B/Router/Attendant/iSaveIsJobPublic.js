import { GENERAL_INPUT_MAX } from "../../../../../bConfig.js"
import { asyGetMyTipJob } from "../H/GetMyTipJob.js"

export async function iSaveIsJobPublic(req, res) {
  try{
    
    const jobId = (req.body.jobId || "").trim()
    const isJobPublic = !!req.body.isJobPublic

    const job = await asyGetMyTipJob(req, jobId)

    if(!job) {
      return res.json({ ok: false, error: "Cannot find the job" })
    }

    job.isJobPublic = isJobPublic

    await job.save()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}