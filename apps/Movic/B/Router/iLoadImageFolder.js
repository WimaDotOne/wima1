import ImageFile from "../Model/ImageFile.js"
import Movic from "../Model/Movic.js"
import { asyGetMovicAccount, asyGetMovicProject } from "./H/GetMovicAccount.js"

export async function iLoadImageFolder(req, res) {
  try{
    console.log("hello")
    const projectId = (req.query.projectId || "").toString()
    const movicAccount = await asyGetMovicAccount(req.user._id)

    const project = await asyGetMovicProject(projectId, movicAccount._id)

    const movic = await Movic.findById(project.movicId)

    if(!movic) {
      return res.json({ ok: false, error: "Cannot find movic" })
    }
    const imageFiles = await ImageFile.find({
      movicId: movic._id
    })

    return res.json({ok: true, imageFiles})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}
