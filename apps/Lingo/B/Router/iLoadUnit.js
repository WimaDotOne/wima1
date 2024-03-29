import { LanguageEnum } from "../../../../admin/Lingo/Enum/LanguageEnum.js"
import { ParseUnitText } from "./H/ParseUnitText.js"
import LingoUnit from "../Model/LingoUnit.js"
import LingoImageFile from "../Model/LingoImageFile.js"

export async function iLoadUnit(req, res) {
  try {
    const unitId = req.query.unitId

    if(!unitId) {
      return res.json({ ok:false, error: "Empty unit id"})
    }

    const unit = await LingoUnit.findById(unitId)

    if(!unit) {
      return res.json({ ok:false, error: "Cannot find unit"})
    }

    // The same unit # of different languages should share the images
    const unitNumber = unit.number

    const units = await LingoUnit.find({
      number: unitNumber
    })

    const unitIds = []

    for(const u of units) {
      unitIds.push(u._id)
    }

    const imageFiles = await LingoImageFile.find({
      unitId: { $in: unitIds }
    })

    let imageDict = {}
    for(const image of imageFiles) {
      const name = image.name
      if(!name) continue
      if(!imageDict[name]) {
        imageDict[name]=image.url
      }
    }

    const data = unit.script1
    const isChinese = unit.language === LanguageEnum.Chinese

    const pages = ParseUnitText(data, isChinese, imageDict)
    return res.json({
      ok: true,
      pages
    })

  } catch(err) {
    return res.json({ ok:false, error: err.message})
  }
} 