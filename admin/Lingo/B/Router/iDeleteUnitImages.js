import Unit from "../../../../apps/Lingo/B/Model/LingoUnit.js"
import ImageFile from "../../../../apps/Lingo/B/Model/LingoImageFile.js"
import { asyDeleteMany } from "../../../../libs/Core/Core1/bCore1.js"

export async function iDeleteUnitImages(req, res) {
  try{
    const imageFileIds = req.body.imageFileIds
    const unitId = (req.body.unitId || "").toString()

    const unit = await Unit.findById(unitId)

    if(!unit) {
      return res.json({ ok: false, error: "Cannot find unit" })
    }

    const imageFiles = await ImageFile.find({
      _id: { $in: imageFileIds }
    })

    const keyArr = []
    for(const image of imageFiles) {
      if(image.unitId.toString() !== unit._id.toString()) {
        return res.json({ok: false, error: "Cannot delete images that do not match the unit"})
      }
      keyArr.push(image.s3Key)
      keyArr.push(image.s3KeySmall)
    }
    await asyDeleteMany(process.env.AWS_LINGO_ADMIN_BUCKET, keyArr)

    await ImageFile.deleteMany({
      _id: { $in: imageFileIds }
    })

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}