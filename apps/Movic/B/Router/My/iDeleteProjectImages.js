import Movic from "../../Model/Movic.js"
import ImageFile from "../../Model/ImageFile.js"
import { asyGetMovicAccount, asyGetMovicProject } from "../H/GetMovicAccount.js"
import { asyDeleteMany } from "../../../../../libs/Core/Core1/bCore1.js"

export async function iDeleteProjectImages(req, res) {
  try{
    const imageFileIds = req.body.imageFileIds
    const projectId = (req.body.projectId || "").toString()

    const movicAccount = await asyGetMovicAccount(req.user._id)

    const project = await asyGetMovicProject(projectId, movicAccount._id)

    const movic = await Movic.findById(project.movicId)

    if(!movic) {
      return res.json({ ok: false, error: "Cannot find movic" })
    }

    const imageFiles = await ImageFile.find({
      _id: { $in: imageFileIds }
    })

    const keyArr = []
    for(const image of imageFiles) {
      if(image.movicId.toString() !== movic._id.toString()) {
        return res.json({ok: false, error: "Cannot delete images that do not match the movic"})
      }
      keyArr.push(image.s3Key)
      keyArr.push(image.s3KeySmall)
    }
    await asyDeleteMany(process.env.AWS_MOVIC_BUCKET, keyArr)

    await ImageFile.deleteMany({
      _id: { $in: imageFileIds }
    })

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}