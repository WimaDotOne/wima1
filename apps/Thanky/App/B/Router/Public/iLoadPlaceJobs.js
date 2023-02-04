import ThankyJob from "../../Model/ThankyJob.js"

export async function iLoadPlaceJobs(req, res) {
  try {

    const placeId = req.query.placeId || ""

    if(!placeId) {
      return res.json({ ok: false, error: "Place id is missing"})
    }

    const jobs = await ThankyJob.find({
      placeId
    })

    return res.json({ ok: true , jobs})
  } catch(err) {
    return res.json({ ok: false, error: err.message})
  }
}