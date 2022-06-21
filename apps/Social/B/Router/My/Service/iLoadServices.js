import SocialService from "../../../Model/SocialService.js"
import { asyGetUnivAccountInfo } from "../../H/GetUnivAccountInfo.js"

export async function iLoadServices(req, res) {
  try{

    const univAccountInfo = await asyGetUnivAccountInfo(req)
    const socialAccountId = univAccountInfo.socialAccountId

    const services = await SocialService.find({
      socialAccountId
    })

    return res.json({ok: true, services})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}