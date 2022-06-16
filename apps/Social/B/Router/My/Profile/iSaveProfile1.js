import { GENERAL_INPUT_MAX } from "../../../../../../bConfig.js"
import { UniversityAffiliationSelectOptions } from "../../../../Enum/UniversityAffiliationEnum.js"
import { asyGetSocialProfile } from "../../H/GetSocialProfile.js"

export async function iSaveProfile1(req, res) {
  try{

    const givenName = (req.body.givenName || "").trim()
    const familyName = (req.body.familyName || "").trim()
    const universityAffiliation = req.body.universityAffiliation
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

    const profile = await asyGetSocialProfile(req.univAccount._id)

    if(!profile) {
      return res.json({ ok: false, error: "For some reason, profile cannot be found." })
    }

    profile.givenName = givenName
    profile.familyName = familyName
    profile.universityAffiliation = universityAffiliation
    profile.major = major

    await profile.save()

    return res.json({ ok: true })
    
  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}