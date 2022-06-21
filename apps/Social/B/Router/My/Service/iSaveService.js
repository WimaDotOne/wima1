import { GENERAL_INPUT_MAX, GENERAL_TEXTAREA_MAX } from "../../../../../../bConfig.js"
import SocialService from "../../../Model/SocialService.js"
import { asyGetUnivAccountInfo } from "../../H/GetUnivAccountInfo.js"

export async function iSaveService(req, res) {
  try{
    const serviceId = req.body.serviceId
    const name = (req.body.name || "").trim()
    const shortDescription = (req.body.shortDescription || "").trim()
    const price = (req.body.price || "").trim()
    const description = req.body.description || ""

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
    const service = await SocialService.findById(serviceId)

    if(!service) {
      return res.json({ ok: false, error: "Cannot find the service" })
    }

    const univAccountInfo = await asyGetUnivAccountInfo(req)
    const socialAccountId = univAccountInfo.socialAccountId
  
    if(
      !socialAccountId || !service.socialAccountId ||
      service.socialAccountId.toString() !== socialAccountId.toString()) {
      return res.json({ ok: false, error: "Service and Social Account do not match" })
    }

    service.name = name
    service.shortDescription = shortDescription
    service.price = price
    service.description = description

    await service.save()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}