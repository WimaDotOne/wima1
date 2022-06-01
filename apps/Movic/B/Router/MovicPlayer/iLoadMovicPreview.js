import ImageFile from "../../Model/ImageFile.js"
import Movic from "../../Model/Movic.js"
import { asyGetMovicAccount, asyGetMovicProject } from "../H/GetMovicAccount.js"
import { ParseMovicScript } from "../H/ParseMovicScript.js"

export async function iLoadMovicPreview(req, res) {
  try{
    const projectId = (req.query.projectId || "").toString()
    const movicAccount = await asyGetMovicAccount(req.user._id)

    const project = await asyGetMovicProject(projectId, movicAccount._id)

    const movic = await Movic.findById(project.movicId)

    if(!movic) {
      return res.json({ ok: false, error: "Cannot find movic" })
    }
    const script = movic.script1
    const imageFiles = await ImageFile.find({
      movicId: movic._id
    })
    let imageDict = {}
    for(const image of imageFiles) {
      const name = image.name
      if(!name) continue
      if(!imageDict[name]) {
        imageDict[name]=image.url
      }
    }

    const scenes = ParseMovicScript(script, imageDict)

    return res.json({ok: true, scenes})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}