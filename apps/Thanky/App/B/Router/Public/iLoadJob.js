import ThankyJob from "../../Model/ThankyJob.js"

export async function iLoadJob(req, res) {
  try {

    const jobId = req.query.jobId || ""

    if(!jobId) {
      return res.json({ ok: false, error: "Job id is missing"})
    }

    const job = await ThankyJob.findById(jobId)

    return res.json({ ok: true , job})
  } catch(err) {
    return res.json({ ok: false, error: err.message})
  }
}