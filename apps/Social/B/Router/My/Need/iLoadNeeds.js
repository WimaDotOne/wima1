import SocialNeed from "../../../Model/SocialNeed.js"
import { asyGetSocialAccountId } from "../../H/GetSocialAccountId.js"

export async function iLoadNeeds(req, res) {
  try{
    const socialAccountId = await asyGetSocialAccountId(req.univAccount._id)

    const needs = await SocialNeed.find({
      socialAccountId
    })

    return res.json({ok: true, needs})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}