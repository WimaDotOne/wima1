import { GENERAL_INPUT_MAX } from "../../../../../../bConfig.js"
import ThankyJob from "../../Model/ThankyJob.js"
import { asyGetOrCreateThankyJobIds } from "../H/asyGetOrCreateThankyJobIds.js"

export async function iSaveJob(req, res) {
  try {

    const firstName = (req.body.firstName || "").trim()
    const jobName = (req.body.jobName || "").trim()
    const num = +(req.body.num || 0)
    const placeId = req.body.placeId || ""
    let placeName = req.body.placeName || ""

    if(!placeId) {
      placeName = ""
    }

    if(firstName.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "First name is too long"})
    }

    if(jobName.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Job name is too long"})
    }

    if(placeId.length > GENERAL_INPUT_MAX * 2) {
      return res.json({ ok: false, error: "Place id is too long"})
    }
    if(placeName.length > GENERAL_INPUT_MAX * 2) {
      return res.json({ ok: false, error: "Place name is too long"})
    }

    const [job1Id, job2Id] = await asyGetOrCreateThankyJobIds(req)
    
    const jobId = num === 2 ? job2Id : job1Id
    const job = await ThankyJob.findById(jobId)
    
    job.firstName = firstName
    job.jobName = jobName
    job.placeId = placeId
    job.placeName = placeName

    await job.save()

    return res.json({ ok: true })
  } catch(err) {
    return res.json({ ok: false, error: err.message})
  }   
}