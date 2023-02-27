import ThankyJob from "../../Model/ThankyJob.js"
import { asyGetConnectedAccountStatus } from "../H/asyGetConnectedAccountStatus.js"

export async function iLoadJob(req, res) {
  try {

    const jobId = req.query.jobId || ""

    if(!jobId) {
      return res.json({ ok: false, error: "Job id is missing"})
    }

    const job = await ThankyJob.findById(jobId).populate("thankyAccountId")

    if(!job) {
      return res.json({ ok: false, error: "Cannot find the employee"})
    }
    const thankyAccount = job.thankyAccountId
    const stripeConnectedAccountId = thankyAccount?.stripeConnectedAccountId
    const connectedAccountStatus = await asyGetConnectedAccountStatus(stripeConnectedAccountId)

    return res.json({ ok: true , job, connectedAccountStatus})
  } catch(err) {
    return res.json({ ok: false, error: err.message})
  }
}