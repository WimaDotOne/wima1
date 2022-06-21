import SocialNeed from "../../../Model/SocialNeed.js"
import { asyGetUnivAccountInfo } from "../../H/GetUnivAccountInfo.js"

export async function iLoadNeeds(req, res) {
  try{
    const univAccountInfo = await asyGetUnivAccountInfo(req)
    const socialAccountId = univAccountInfo.socialAccountId

    const needs = await SocialNeed.find({
      socialAccountId
    })

    return res.json({ok: true, needs})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}