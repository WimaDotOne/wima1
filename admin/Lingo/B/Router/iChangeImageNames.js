import ImageFile from "../../../../apps/Lingo/B/Model/LingoImageFile.js"

export async function iChangeImageNames(req, res) {
  try{
    const imageFiles = req.body.imageFiles
    
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