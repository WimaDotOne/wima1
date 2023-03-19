import Unit from "../../../../apps/Lingo/B/Model/LingoUnit.js"
import ImageFile from "../../../../apps/Lingo/B/Model/LingoImageFile.js"

export async function iLoadImageFolder(req, res) {
  try{
    const unitId = (req.query.unitId || "").toString()

    const unit = await Unit.findById(unitId)

    if(!unit) {
      return res.json({ ok: false, error: "Cannot find unit" })
    }
    const imageFiles = await ImageFile.find({
      unitId: unit._id
    }).select("_id name urlSmall")

    return res.json({ok: true, imageFiles})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}
