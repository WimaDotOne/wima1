import { GENERAL_TEXTAREA_MAX } from "../../../../../../bConfig.js"
import { asyGetSocialProfile } from "../../H/GetSocialProfile.js"

export async function iSaveProfile6(req, res) {
  try{

    const experiences2 = (req.body.experiences2 || "").trim()

    if(experiences2.length > GENERAL_TEXTAREA_MAX) {
      return res.json({ ok: false, error: "Experience is too long" })
    }

    const profile = await asyGetSocialProfile(req.univAccount._id)

    if(!profile) {
      return res.json({ ok: false, error: "For some reason, profile cannot be found." })
    }

    profile.experiences2 = experiences2

    await profile.save()

    return res.json({ ok: true })
    
  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}