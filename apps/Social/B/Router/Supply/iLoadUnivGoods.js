import { SocialConfig } from "../../../../../bConfig.js"
import SocialService from "../../Model/SocialService.js"
import { asyGetUnivAccountInfo } from "../H/GetUnivAccountInfo.js"
import { PageBreak } from "../H/PageBreak.js"

export async function iLoadUnivGoods(req, res) {
  try{

    const univAccountInfo = await asyGetUnivAccountInfo(req)
    const domain = univAccountInfo.domain

    const goods = await SocialService.find({
      domain,
      isGoods: true
    }).sort({createUtcDay: -1}).limit(SocialConfig.needLoadMax)

    const pages = PageBreak(goods, SocialConfig.needPageSize)
    return res.json({ok: true, pages})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}