import LingoUnit from "../../../../../apps/Lingo/B/Model/LingoUnit.js"

export async function iSaveSettingsIsUnitPublic(req, res) {
  try{
    const unitId = (req.body.unitId || "").toString()
    const isPublic = !!req.body.isPublic
    
    const unit = await LingoUnit.findById(unitId)

    if(!unit) {
      return res.json({ ok: false, error: "Cannot find unit" })
    }

    unit.isPublic = isPublic
    await unit.save()
    
    return res.json({ok: true, isPublic: unit.isPublic})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}