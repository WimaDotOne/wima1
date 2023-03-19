import LingoUnit from "../../../../../apps/Lingo/B/Model/LingoUnit.js"

export async function iLoadSettingsUnitName(req, res) {
  try{
    const unitId = (req.query.unitId || "").toString()

    const unit = await LingoUnit.findById(unitId)

    if(!unit) {
      return res.json({ ok: false, error: "Cannot find unit" })
    }

    return res.json({ok: true, unitName: unit.name, unitNumber: unit.number})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}