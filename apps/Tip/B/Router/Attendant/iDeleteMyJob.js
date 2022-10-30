import { asyGetMyTipJob } from "../H/GetMyTipJob.js"

export async function iDeleteMyJob(req, res) {
  try{
    
    const jobId = (req.body.jobId || "").trim()

    const job = await asyGetMyTipJob(req, jobId)

    await job.delete()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}