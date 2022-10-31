import { GENERAL_INPUT_MAX } from "../../../../../bConfig.js"
import { asyGetMyTipJob } from "../H/GetMyTipJob.js"

export async function iSaveJobName(req, res) {
  try{
    
    const jobId = (req.body.jobId || "").trim()
    const jobName = (req.body.jobName || "").trim()

    const job = await asyGetMyTipJob(req, jobId)

    if(!job) {
      return res.json({ ok: false, error: "Cannot find the job" })
    }

    if(!jobName) {
      return res.json({ ok: false, error: "Job name cannot be empty" })
    }

    if(jobName.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Job name is too long" })
    }

    job.jobName = jobName

    await job.save()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}