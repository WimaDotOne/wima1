import mongoose from "mongoose"
import { GENERAL_INPUT_MAX, GENERAL_TEXTAREA_MAX } from "../../../../../../bConfig.js"
import SocialNeed from "../../../Model/SocialNeed.js"
import { asyGetSocialAccountId } from "../../H/GetSocialAccountId.js"

export async function iCreateNeed(req, res) {
  try{
    const name = (req.body.name || "").trim()
    const shortDescription = (req.body.shortDescription || "").trim()
    const description = req.body.description || ""
    const willPay = !!req.body.willPay

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

    const socialAccountId = await asyGetSocialAccountId(req.univAccount._id)

    const need = new SocialNeed({
      _id: mongoose.Types.ObjectId(),
      name,
      shortDescription,
      willPay,
      description,
      socialAccountId
    })

    await need.save()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}