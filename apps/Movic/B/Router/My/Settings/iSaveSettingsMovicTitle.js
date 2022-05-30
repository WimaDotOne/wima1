import { GENERAL_INPUT_MAX } from "../../../../../../bConfig.js"
import Movic from "../../../Model/Movic.js"
import { asyGetMovicAccount, asyGetMovicProject } from "../../H/GetMovicAccount.js"

export async function iSaveSettingsMovicTitle(req, res) {
  try{
    const projectId = (req.body.projectId || "").toString()
    const title = (req.body.title || "").trim()

    if(!title) {
      return res.json({ ok: false, error: "Movic title cannot be empty" })
      
    }
    if(title.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Title is too long" })
    }
    
    const movicAccount = await asyGetMovicAccount(req.user._id)

    const project = await asyGetMovicProject(projectId, movicAccount._id)

    const movic = await Movic.findById(project.movicId)

    if(!movic) {
      return res.json({ ok: false, error: "Cannot find movic" })
    }

    movic.title = title
    await movic.save()
    
    return res.json({ok: true, movicTitle: movic.title})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}