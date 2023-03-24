import LingoUnit from "../Model/LingoUnit.js"
import { LanguageEnum } from "../../../../admin/Lingo/Enum/LanguageEnum.js"

export async function iLoadUnits(req, res) {
  try {

    const units = await LingoUnit.find({
      isPublic: true
    }).sort("number").select("_id language")

    const chineseUnits = []
    const spanishUnits = []
    const frenchUnits = []
    const germanUnits = []

    for(const unit of units) {
      switch(unit.language) {
        case LanguageEnum.Chinese:
          chineseUnits.push(unit)
          break
        case LanguageEnum.Spanish:
          spanishUnits.push(unit)
          break
        case LanguageEnum.French:
          frenchUnits.push(unit)
          break
        case LanguageEnum.German:
          germanUnits.push(unit)
          break
        default:
      }
    }

    return res.json({ 
      ok: true,
      chineseUnits,
      spanishUnits,
      frenchUnits,
      germanUnits
    })

  } catch(err) {
    return res.json({ ok:false, error: err.message})
  }
} 