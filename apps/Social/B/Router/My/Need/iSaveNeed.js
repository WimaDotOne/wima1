import { GENERAL_INPUT_MAX, GENERAL_TEXTAREA_MAX } from "../../../../../../bConfig.js"
import SocialNeed from "../../../Model/SocialNeed.js"
import { asyGetUnivAccountInfo } from "../../H/GetUnivAccountInfo.js"

export async function iSaveNeed(req, res) {
  try{
    const needId = req.body.needId
    const name = (req.body.name || "").trim()
    const shortDescription = (req.body.shortDescription || "").trim()
    const willPay = !!req.body.willPay
    const description = req.body.description || ""

    if(name.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Name is too long" })
    }
    if(shortDescription.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Short Description is too long" })
    }
    if(description.length > GENERAL_TEXTAREA_MAX) {
      return res.json({ ok: false, error: "Description is too long" })
    }

    if(!name) {
      return res.json({ ok: false, error: "Name is required" })
    }
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

    need.name = name
    need.shortDescription = shortDescription
    need.willPay = willPay
    need.description = description

    await need.save()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}