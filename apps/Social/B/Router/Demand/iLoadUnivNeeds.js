import SocialNeed from "../../Model/SocialNeed.js"
import { asyGetUnivAccountInfo } from "../H/GetUnivAccountInfo.js"

export async function iLoadUnivNeeds(req, res) {
  try{

    const univAccountInfo = await asyGetUnivAccountInfo(req)
    const domain = univAccountInfo.domain

    const needs = await SocialNeed.find({
      domain
    })

    return res.json({ok: true, needs})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}