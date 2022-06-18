import SocialNeed from "../../../Model/SocialNeed.js"
import { asyGetSocialAccountId } from "../../H/GetSocialAccountId.js"

export async function iDeleteNeed(req, res) {
  try{
    const needId = req.body.needId

    const need = await SocialNeed.findById(needId)

    if(!need) {
      return res.json({ ok: false, error: "Cannot find the need" })
    }
    const socialAccountId = await asyGetSocialAccountId(req.univAccount._id)
  
    if(
      !socialAccountId || !need.socialAccountId ||
      need.socialAccountId.toString() !== socialAccountId.toString()) {
      return res.json({ ok: false, error: "Need and Social Account do not match" })
    }

    await need.delete()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}