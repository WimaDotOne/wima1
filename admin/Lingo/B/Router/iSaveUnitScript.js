import { LingoAdminConfig } from "../../../../bConfig.js"
import Unit from "../../../../apps/Lingo/B/Model/LingoUnit.js"

export async function iSaveUnitScript(req, res) {
  try{
    const script = (req.body.script || "").trim()
    const unitId = (req.body.unitId || "").toString()

    if(script.length > LingoAdminConfig.scritptFileMaxLength) {
      return res.json({ ok: false, error: "Lingo script is too long" })
    }

    const unit = await Unit.findById(unitId)

    if(!unit) {
      return res.json({ ok: false, error: "Cannot find unit" })
    }

    unit.script1 = script
    await unit.save()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}