import { User } from "../../../../../libs/Core/Core1/bCore1.js"
import TipJob from "../../Model/TipJob.js"

export async function iLoadMyJobs(req, res) {
  try{
    const user = await User.findById(req.user._id)

    if(!user) {
      return res.json({ ok: false, error: "Cannot find user" })
    }

    if(!user.tipAccountId) {
      return res.json({ ok: true, jobs: []})
    }

    const tipJobs = await TipJob.find({
      tipAccountId: user.tipAccountId
    })
    
    const jobs = []
    for(const job of tipJobs) {
      jobs.push({
        id: job._id.toString(),
        jobName: job.jobName
      })
    }

    return res.json({ok: true, jobs})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}