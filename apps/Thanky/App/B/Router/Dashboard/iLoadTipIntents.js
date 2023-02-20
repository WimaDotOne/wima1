import ThankyJob from "../../Model/ThankyJob.js"
import ThankyTipIntent from "../../Model/ThankyTipIntent.js"
import { asyGetOrCreateThankyJobIds } from "../H/asyGetOrCreateThankyJobIds.js"

export async function iLoadTipIntents(req, res) {
  try {

    const [job1Id, job2Id] = await asyGetOrCreateThankyJobIds(req)

    const job1 = await ThankyJob.findById(job1Id)
    const job2 = await ThankyJob.findById(job2Id)
 
    const tipIntents = await ThankyTipIntent.find({
      jobId: { $in : [job1._id, job2._id]},
      customerComment: { $nin: [null, "", undefined] }
    }).sort({createdAt: -1}).limit(100)

    return res.json({ ok: true, tipIntents })
  } catch(err) {
    return res.json({ ok: false, error: err.message})
  }
}