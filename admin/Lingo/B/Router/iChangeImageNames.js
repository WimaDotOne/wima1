import Unit from "../../../../apps/Lingo/B/Model/LingoUnit.js"
import ImageFile from "../../../../apps/Lingo/B/Model/LingoImageFile.js"

export async function iChangeImageNames(req, res) {
  try{
    const imageFiles = req.body.imageFiles
    const unitId = (req.body.unitId || "").toString()


    const unit = await Unit.findById(unitId)

    if(!unit) {
      return res.json({ ok: false, error: "Cannot find unit" })
    }
    
    const imageFileIds = []
    const imageDict = {}
    for(const image of imageFiles) {
      if(!image.name || !image.name.trim()) {
        return res.json({ ok: false, error: "Image name cannot be empty" })
      }
      imageFileIds.push(image._id)
      imageDict[image._id.toString()] = image
    }
    const imageFiles2 = await ImageFile.find({
      _id: { $in: imageFileIds },
    })

    //Check images' unit id belongs to the user's unit
    for(const image of imageFiles2) {
      if(image.unitId.toString() !== unit._id.toString()) {
        return res.json({ ok: false, error: "Cannot update images that do not match the unit." })
      }
      const image2 = imageDict[image._id.toString()]
      const name2 = image2.name.trim()
      if(name2) {
        image.name = name2
      }
    }

    await ImageFile.bulkSave(imageFiles2)

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}