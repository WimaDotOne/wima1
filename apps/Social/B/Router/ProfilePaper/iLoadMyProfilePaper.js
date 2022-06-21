import SocialAccount from "../../Model/SocialAccount.js"
import SocialNeed from "../../Model/SocialNeed.js"
import SocialService from "../../Model/SocialService.js"
import { MarkFamilyName } from "../H/MarkFamilyName.js"
import { asyGetUnivAccountInfo } from "../H/GetUnivAccountInfo.js"

export async function iLoadMyProfilePaper(req, res) {
  try{
    
    const univAccountInfo = await asyGetUnivAccountInfo(req)
    const socialAccountId = univAccountInfo.socialAccountId
    
    const socialAccount = await SocialAccount.findById(socialAccountId)
      .populate("socialProfileId")

    if(!socialAccount) {
      return res.json({ ok: false, error: "Cannnot find social account"})
    }

    const profile2 = socialAccount.socialProfileId

    if(!profile2) {
      return res.json({ ok: false, error: "Cannnot find profile"})
    }

    const profile = MarkFamilyName(profile2)

    const services = await SocialService.find({
      socialAccountId: socialAccount._id
    })
    const needs = await SocialNeed.find({
      socialAccountId: socialAccount._id
    })

    return res.json({ ok: true, profile, services, needs})
    
  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}