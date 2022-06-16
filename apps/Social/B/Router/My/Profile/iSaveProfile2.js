import { ZodiacSignSelectOptions } from "../../../../Enum/ZodiacSignEnum.js"
import { Personality2SelectOptions } from "../../../../Enum/Personality2Enum.js"
import { Personality16SelectOptions } from "../../../../Enum/Personality16Enum.js"
import { asyGetSocialProfile } from "../../H/GetSocialProfile.js"
import { IsEnumExit } from "../../../../../../libs/Core/Core1/bCore1.js"

export async function iSaveProfile2(req, res) {
  try{

    const personality2 = req.body.personality2 || ""
    const personality16 = req.body.personality16 || ""
    const zodiacSign = req.body.zodiacSign || ""

    if(!personality2 && !IsEnumExit(personality2, Personality2SelectOptions)) {
      return res.json({ ok: false, error: "Personality is not valid" })
    }

    if(!personality16 && !IsEnumExit(personality16, Personality16SelectOptions)) {
      return res.json({ ok: false, error: "16 Personality is not valid" })
    }

    if(!zodiacSign && !IsEnumExit(zodiacSign, ZodiacSignSelectOptions)) {
      return res.json({ ok: false, error: "Sign is not valid" })
    }

    const profile = await asyGetSocialProfile(req.univAccount._id)

    if(!profile) {
      return res.json({ ok: false, error: "For some reason, profile cannot be found." })
    }

    profile.personality2 = personality2
    profile.personality16 = personality16
    profile.zodiacSign = zodiacSign

    await profile.save()

    return res.json({ ok: true })
    
  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}