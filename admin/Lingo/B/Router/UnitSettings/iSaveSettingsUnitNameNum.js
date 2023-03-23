import { GENERAL_INPUT_MAX } from "../../../../../bConfig.js"
import LingoUnit from "../../../../../apps/Lingo/B/Model/LingoUnit.js"

export async function iSaveSettingsUnitNameNum(req, res) {
  try{
    const unitId = (req.body.unitId || "").toString()
    const unitName = (req.body.unitName || "").trim()
    const unitNumber = +(req.body.unitNumber || 0)

    if(!unitName) {
      return res.json({ ok: false, error: "Unit name cannot be empty" })
    }

    if(unitNumber < 1) {
      return res.json({ ok: false, error: "Unit number should be greater than 0" })
    }

    if(unitName.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Name is too long" })
    }
    
    const unit = await LingoUnit.findById(unitId)

    if(!unit) {
      return res.json({ ok: false, error: "Cannot find unit" })
    }

    unit.name = unitName
    unit.number = unitNumber
    await unit.save()
    
    return res.json({ok: true, unitName: unit.name, unitNumber: unit.number})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}
