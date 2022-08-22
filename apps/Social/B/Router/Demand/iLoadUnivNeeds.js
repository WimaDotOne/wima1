import { SocialConfig } from "../../../../../bConfig.js"
import SocialNeed from "../../Model/SocialNeed.js"
import { asyGetUnivAccountInfo } from "../H/GetUnivAccountInfo.js"
import { PageBreak } from "../H/PageBreak.js"

export async function iLoadUnivNeeds(req, res) {
  try{

    const univAccountInfo = await asyGetUnivAccountInfo(req, true)
    const domain = univAccountInfo.domain

    const needs = await SocialNeed.find({
      domain
    }).sort({createUtcDay: -1}).limit(SocialConfig.needLoadMax)

    const pages = PageBreak(needs, SocialConfig.needPageSize)
    return res.json({ok: true, pages})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}