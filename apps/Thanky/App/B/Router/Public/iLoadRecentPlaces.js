import ThankyJob from "../../Model/ThankyJob.js"

export async function iLoadRecentPlaces(req, res) {
  try {

    const jobs = await ThankyJob.find({
      placeId: { $nin:[null,""] }
    })
    .sort({ _id: -1 }).limit(200)

    const jobDict = {}
    const places = []

    //Remove duplicate places
    for(const job of jobs) {
      const placeId = job.placeId
      if(!placeId) continue
      if(jobDict[placeId]) continue;
      const placeName = job.placeName

      places.push({place_id: placeId, name: placeName})
      jobDict[placeId] = true
    }
    return res.json({ ok: true , places})
  } catch(err) {
    return res.json({ ok: false, error: err.message})
  }
}