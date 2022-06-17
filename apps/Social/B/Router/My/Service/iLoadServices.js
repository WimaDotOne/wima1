import { GENERAL_INPUT_MAX, GENERAL_TEXTAREA_MAX } from "../../../../../../bConfig.js"
import SocialService from "../../../Model/SocialService.js"
import { asyGetSocialAccountId } from "../../H/GetSocialAccountId.js"

export async function iLoadServices(req, res) {
  try{
    const socialAccountId = await asyGetSocialAccountId(req.univAccount._id)

    const services = await SocialService.find({
      socialAccountId
    })

    return res.json({ok: true, services})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}