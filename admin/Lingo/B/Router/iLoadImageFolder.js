import LingoUnit from "../../../../apps/Lingo/B/Model/LingoUnit.js"
import LingoImageFile from "../../../../apps/Lingo/B/Model/LingoImageFile.js"

export async function iLoadImageFolder(req, res) {
  try{
    const unitId = (req.query.unitId || "").toString()

    const unit = await LingoUnit.findById(unitId)

    if(!unit) {
      return res.json({ ok: false, error: "Cannot find unit" })
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
    }).select("_id name urlSmall")

    return res.json({ok: true, imageFiles})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}
