import { GENERAL_TEXTAREA_MAX } from "../../../../../../bConfig.js"
import { asyGetSocialProfile } from "../../H/GetSocialProfile.js"

export async function iSaveProfile4(req, res) {
  try{

    const experiences = (req.body.experiences || "").trim()

    if(experiences.length > GENERAL_TEXTAREA_MAX) {
      return res.json({ ok: false, error: "Experience is too long" })
    }

    const profile = await asyGetSocialProfile(req.univAccount._id)

    if(!profile) {
      return res.json({ ok: false, error: "For some reason, profile cannot be found." })
    }

    profile.experiences = experiences

    await profile.save()

    return res.json({ ok: true })
    
  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}