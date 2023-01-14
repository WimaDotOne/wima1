import TipJob from "../../Model/TipJob.js"

export async function iLoadEstablishmentJobs(req, res) {
  try{
    const placeId = (req.query.placeId || "").trim()

    if(!placeId) {
      return res.json({ok: false, error: "Place Id is missing"})
    }

    const jobs = await TipJob.find({
      placeId,
      isJobPublic: true
    })

    return res.json({ok: true, jobs})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}