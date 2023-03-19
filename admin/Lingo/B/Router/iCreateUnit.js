import mongoose from "mongoose"
import LingoUnit from "../../../../apps/Lingo/B/Model/LingoUnit.js"
import { IsValidLanguageEnum } from "../../Enum/LanguageEnum.js"

export async function iCreateUnit(req, res) {
  try {
    
    const language = req.body.language
    let unitName = (req.body.unitName || "").trim()
    let unitNumber = +req.body.unitNumber

    if(!language) {
      return res.json({ ok:false, error: "Empty language" })
    }

    if(!IsValidLanguageEnum(language)) {
      return res.json({ ok:false, error: "Invalid language" })
    }
    if(!unitNumber) {
      //count existing units and add 1
      const count = await LingoUnit.countDocuments({
        language
      })
      
      unitNumber = count + 1
    }
    if(!unitName) {
      unitName = "Unit " + unitNumber 
    }

    const unit = new LingoUnit({
      _id: mongoose.Types.ObjectId(),
      language,
      name: unitName,
      number: unitNumber
    })

    await unit.save()

    return res.json({ok: true})
  } catch(err) {
    return res.json({ ok:false, error: err.message })
  }
}