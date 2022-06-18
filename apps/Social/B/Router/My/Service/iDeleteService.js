import SocialService from "../../../Model/SocialService.js"
import { asyGetSocialAccountId } from "../../H/GetSocialAccountId.js"

export async function iDeleteService(req, res) {
  try{
    const serviceId = req.body.serviceId

    const service = await SocialService.findById(serviceId)

    if(!service) {
      return res.json({ ok: false, error: "Cannot find the service" })
    }
    const socialAccountId = await asyGetSocialAccountId(req.univAccount._id)
  
    if(
      !socialAccountId || !service.socialAccountId ||
      service.socialAccountId.toString() !== socialAccountId.toString()) {
      return res.json({ ok: false, error: "Service and Social Account do not match" })
    }

    await service.delete()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}