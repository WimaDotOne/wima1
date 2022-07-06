import Movic from "../../Model/Movic.js"
import ImageFile from "../../Model/MovicImageFile.js"
import { asyGetMovicAccount, asyGetMovicProject } from "../H/GetMovicAccount.js"

export async function iChangeImageNames(req, res) {
  try{
    const imageFiles = req.body.imageFiles
    const projectId = (req.body.projectId || "").toString()

    const movicAccount = await asyGetMovicAccount(req.user._id)

    const project = await asyGetMovicProject(projectId, movicAccount._id)

    const movic = await Movic.findById(project.movicId)

    if(!movic) {
      return res.json({ ok: false, error: "Cannot find movic" })
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

    //Check images' movic id belongs to the user's project
    for(const image of imageFiles2) {
      if(image.movicId.toString() !== movic._id.toString()) {
        return res.json({ ok: false, error: "Cannot update images that do not match the movic." })
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