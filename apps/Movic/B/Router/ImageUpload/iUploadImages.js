import { asyRemoveTempFolder, User } from "../../../../../libs/Core/Core1/bCore1.js"
import { asyShrinkImageFiles } from "../../../../../libs/Core/Core1/Up/B/ShrinkImageFiles.js"
import MovicProject from "../../Model/MovicProject.js"

async function iUploadImages(req, res) {
  try{
    const tempPath = req.tempPath
    const userId = req.user._id

    //just like req.files, req.body only becomes available after multer middleware has parsed the multi-part form data post
    const projectId = req.body.projectId

    if(!projectId) {
      await asyRemoveTempFolder(tempPath)
      return res.json({ok: false, error: "Cannot find project"})
    }

    const user = await User.findById(userId)
    const project = await MovicProject.findById(projectId)

    if(!project || user.movicAccountId.toString() !== project.movicAccountId.toString()) {
      await asyRemoveTempFolder(tempPath)
      return res.json({ok: false, error: "Cannot find matching project"})
    }

    const files = req.files

    const imageList = await asyShrinkImageFiles(files, tempPath, 320, 180, 96, 54)

    console.log(imageList)


    await asyRemoveTempFolder(tempPath)
    return res.json({ok: true, tempPath})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}

export {
  iUploadImages
}