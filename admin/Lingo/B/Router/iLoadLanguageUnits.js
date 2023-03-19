import LingoUnit from "../../../../apps/Lingo/B/Model/LingoUnit.js"
import { IsValidLanguageEnum } from "../../Enum/LanguageEnum.js"

export async function iLoadLanguageUnits(req, res) {
  try {
    
    const language = req.query.language

    if(!language) {
      return res.json({ ok:false, error: "Empty language" })
    }

    if(!IsValidLanguageEnum(language)) {
      return res.json({ ok:false, error: "Invalid language" })
    }

    const units = await LingoUnit.find({
      language
    })

    return res.json({ ok: true, units })

  } catch(err) {
    return res.json({ ok:false, error: err.message })
  }
}