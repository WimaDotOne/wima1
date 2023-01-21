import ThankyJob from "../../Model/ThankyJob.js"
import { asyGetOrCreateThankyJobIds } from "../H/asyGetOrCreateThankyJobIds.js"

export async function iLoadHome(req, res) {
  try {

    const [job1Id, job2Id] = await asyGetOrCreateThankyJobIds(req)

    const job1 = await ThankyJob.findById(job1Id)
    const job2 = await ThankyJob.findById(job2Id)


    return res.json({ ok: true, job1, job2 })
  } catch(err) {
    return res.json({ ok: false, error: err.message})
  }
}