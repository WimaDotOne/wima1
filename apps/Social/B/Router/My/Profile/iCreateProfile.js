import mongoose from "mongoose"
import { GENERAL_INPUT_MAX } from "../../../../../../bConfig.js"
import { UniversityAffiliationSelectOptions } from "../../../../Enum/UniversityAffiliationEnum.js"
import { IsEnumExit, UniversityAccount } from "../../../../../../libs/Core/Core1/bCore1.js"
import SocialAccount from "../../../Model/SocialAccount.js"
import SocialProfile from "../../../Model/SocialProfile.js"

export async function iCreateProfile(req, res) {
  try{
    const givenName = (req.body.givenName || "").trim()
    const familyName = (req.body.familyName || "").trim()
    const universityAffiliation = req.body.universityAffiliation || ""
    const major = (req.body.major || "").trim()

    if(givenName.length > GENERAL_INPUT_MAX || 
      familyName.length > GENERAL_INPUT_MAX
    ) {
      return res.json({ ok: false, error: "Name is too long" })
    }

    if(!givenName || !familyName) {
      return res.json({ ok: false, error: "Full name is required" })
    }

    if(!universityAffiliation) {
      return res.json({ ok: false, error: "University affiliation is required" })
    }

    if(!IsEnumExit(universityAffiliation, UniversityAffiliationSelectOptions)) {
      return res.json({ ok: false, error: "University affiliation is not valid" })
    }

    if(major.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Major is too long" })
    }

    const univAccount = await UniversityAccount.findById(req.univAccount._id)

    if(!univAccount) {
      return res.json({ ok: false, error: "Cannot find university account" })
    }

    let socialAccount = null
    if(!univAccount.socialAccountId) {
      socialAccount = new SocialAccount({
        _id: mongoose.Types.ObjectId()
      })

      await socialAccount.save()
      univAccount.socialAccountId = socialAccount._id
      univAccount.save()
    } else {
      socialAccount = await SocialAccount.findById(univAccount.socialAccountId)
    }

    if(!socialAccount) {
      return res.json({ ok: false, error: "Cannot find Social account" })
    }

    if(socialAccount.socialProfileId) {
      return res.json({ ok: false, error: "The Social account already has a profile created." })
    }


    const profile = new SocialProfile({
      _id: mongoose.Types.ObjectId(),
      givenName,
      familyName,
      universityAffiliation,
      major
    })

    await profile.save()

    socialAccount.socialProfileId = profile._id

    await socialAccount.save()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}