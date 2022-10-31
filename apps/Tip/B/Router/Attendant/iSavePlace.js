import { GENERAL_INPUT_MAX } from "../../../../../bConfig.js"
import { asyGetMyTipJob } from "../H/GetMyTipJob.js"

export async function iSavePlace(req, res) {
  try{
    
    const jobId = (req.body.jobId || "").trim()
    const placeName = (req.body.placeName || "").trim()
    const placeId = (req.body.placeId || "").trim()

    if(!placeId || !placeName) {
      return res.json({ ok: false, error: "Cannot find the place" })
    }

    const job = await asyGetMyTipJob(req, jobId)

    if(!job) {
      return res.json({ ok: false, error: "Cannot find the job" })
    }
    const PLACE_NAME_MAX = 500
    if(placeName.length > PLACE_NAME_MAX) {
      return res.json({ ok: false, error: "Place name is too long" })
    }

    job.placeName = placeName
    job.placeId = placeId

    await job.save()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}