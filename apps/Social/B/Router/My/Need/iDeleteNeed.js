import SocialNeed from "../../../Model/SocialNeed.js"
import { asyGetUnivAccountInfo } from "../../H/GetUnivAccountInfo.js"

export async function iDeleteNeed(req, res) {
  try{
    const needId = req.body.needId

    const need = await SocialNeed.findById(needId)

    if(!need) {
      return res.json({ ok: false, error: "Cannot find the need" })
    }

    const univAccountInfo = await asyGetUnivAccountInfo(req)
    const socialAccountId = univAccountInfo.socialAccountId
  
    if(
      !socialAccountId || !need.socialAccountId ||
      need.socialAccountId.toString() !== socialAccountId.toString()) {
      return res.json({ ok: false, error: "Need and Sociable Account do not match" })
    }

    await need.delete()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}