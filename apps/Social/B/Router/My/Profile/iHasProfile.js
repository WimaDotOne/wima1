import { UniversityAccount } from "../../../../../../libs/Core/Core1/bCore1.js"
import SocialProfile from "../../../Model/SocialProfile.js"

export async function iHasProfile(req, res) {
  try{
    let hasProfile = false
    const univAccount = await UniversityAccount.findById(req.univAccount._id).populate("socialAccountId")
  
    if(!univAccount) {
      return res.json({ ok: false, error: "Cannot find university account" })
    }
  
    const socialAccount = univAccount.socialAccountId
    const socialAccountId = socialAccount._id.toString()

  
    if(!socialAccount || !socialAccount._id) {
      return res.json({ ok: true })
    }
  
    if(!socialAccount.socialProfileId) {
      return res.json({ ok: true })
    }
  
    const profile = await SocialProfile.findById(socialAccount.socialProfileId)
  
    if(profile && profile._id) {
      hasProfile = true
    }
    return res.json({ ok: true, hasProfile, socialAccountId})
    
  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}