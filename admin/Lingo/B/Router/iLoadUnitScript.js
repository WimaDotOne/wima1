import Unit from "../../../../apps/Lingo/B/Model/LingoUnit.js"

export async function iLoadUnitScript(req, res) {
  try{
    const unitId = (req.query.unitId || "").toString()

    const unit = await Unit.findById(unitId)

    if(!unit) {
      return res.json({ ok: false, error: "Cannot find unit" })
    }

    return res.json({ok: true, script: unit.script1})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}