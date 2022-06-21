import mongoose from "mongoose"
import { GENERAL_INPUT_MAX, GENERAL_TEXTAREA_MAX, SocialConfig } from "../../../../../../bConfig.js"
import { NowUtcDay } from "../../../../../../libs/Core/Core1/bCore1.js"
import SocialService from "../../../Model/SocialService.js"
import { asyGetUnivAccountInfo } from "../../H/GetUnivAccountInfo.js"

export async function iCreateService(req, res) {
  try{
    const name = (req.body.name || "").trim()
    const shortDescription = (req.body.shortDescription || "").trim()
    const price = (req.body.price || "").trim()
    const description = req.body.description || ""
    const isGoods = !!req.body.isGoods

    if(name.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Name is too long" })
    }
    if(shortDescription.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Short Description is too long" })
    }
    if(price.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Price is too long" })
    }
    if(description.length > GENERAL_TEXTAREA_MAX) {
      return res.json({ ok: false, error: "Description is too long" })
    }

    if(!name) {
      return res.json({ ok: false, error: "Name is required" })
    }

    const univAccountInfo = await asyGetUnivAccountInfo(req)
    const socialAccountId = univAccountInfo.socialAccountId
    const domain = univAccountInfo.domain
    const createUtcDay = NowUtcDay()

    const count = await SocialService.count({
      socialAccountId
    })
    const maxCount = SocialConfig.serviceMaxPerAccount
    if(count > maxCount) {
      return res.json({ ok: false, error: `One can create at most ${maxCount} goods or services` })
    }

    const service = new SocialService({
      _id: mongoose.Types.ObjectId(),
      domain,
      socialAccountId,
      createUtcDay,
      name,
      shortDescription,
      price,
      description,
      isGoods
    })

    await service.save()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}