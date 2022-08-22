import { SocialConfig } from "../../../../../bConfig.js"
import SocialService from "../../Model/SocialService.js"
import { asyGetUnivAccountInfo } from "../H/GetUnivAccountInfo.js"
import { PageBreak } from "../H/PageBreak.js"

export async function iLoadUnivServices(req, res) {
  try{

    const univAccountInfo = await asyGetUnivAccountInfo(req, true)
    const domain = univAccountInfo.domain

    const services = await SocialService.find({
      domain,
      isGoods: false
    }).sort({createUtcDay: -1}).limit(SocialConfig.needLoadMax)

    const pages = PageBreak(services, SocialConfig.needPageSize)
    return res.json({ok: true, pages})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}