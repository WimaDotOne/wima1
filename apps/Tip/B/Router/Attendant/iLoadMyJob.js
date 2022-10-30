import { asyGetMyTipJob } from "../H/GetMyTipJob.js"

export async function iLoadMyJob(req, res) {
  try{
    
    const jobId = (req.query.jobId || "").trim()

    const job = await asyGetMyTipJob(req, jobId)

    const job2 = {
      id: job._id,
      jobName: job.jobName,
      isJobPublic: job.isJobPublic,
      placeName: job.placeName,
      firstName: job.firstName,
      photoUrl: job.photoUrl,
      selfDescription: job.selfDescription
    }

    return res.json({ok: true, job: job2})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}