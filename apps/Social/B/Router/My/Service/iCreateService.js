import mongoose from "mongoose"
import { GENERAL_INPUT_MAX, GENERAL_TEXTAREA_MAX } from "../../../../../../bConfig.js"
import SocialService from "../../../Model/SocialService.js"
import { asyGetSocialAccountId } from "../../H/GetSocialAccountId.js"

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

    const socialAccountId = await asyGetSocialAccountId(req.univAccount._id)

    const service = new SocialService({
      _id: mongoose.Types.ObjectId(),
      name,
      shortDescription,
      price,
      description,
      isGoods,
      socialAccountId
    })

    await service.save()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}