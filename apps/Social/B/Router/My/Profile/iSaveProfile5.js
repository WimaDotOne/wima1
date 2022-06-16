import { GENERAL_TEXTAREA_MAX } from "../../../../../../bConfig.js"
import { asyGetSocialProfile } from "../../H/GetSocialProfile.js"

export async function iSaveProfile5(req, res) {
  try{

    const skills = (req.body.skills || "").trim()

    if(skills.length > GENERAL_TEXTAREA_MAX) {
      return res.json({ ok: false, error: "About Me is too long" })
    }

    const profile = await asyGetSocialProfile(req.univAccount._id)

    if(!profile) {
      return res.json({ ok: false, error: "For some reason, profile cannot be found." })
    }

    profile.skills = skills

    await profile.save()

    return res.json({ ok: true })
    
  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}