import { asyGetSocialProfile } from "../../H/GetSocialProfile.js"

export async function iLoadProfile(req, res) {
  try{

    const profile = await asyGetSocialProfile(req.univAccount._id)

    return res.json({ ok: true, profile})
    
  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}