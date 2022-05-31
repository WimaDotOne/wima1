import Movic from "../../Model/Movic.js"
import { asyGetMovicAccount, asyGetMovicProject } from "../H/GetMovicAccount.js"

export async function iLoadMovicScript(req, res) {
  try{
    const projectId = (req.query.projectId || "").toString()
    const movicAccount = await asyGetMovicAccount(req.user._id)

    const project = await asyGetMovicProject(projectId, movicAccount._id)

    const movic = await Movic.findById(project.movicId)

    if(!movic) {
      return res.json({ ok: false, error: "Cannot find movic" })
    }

    return res.json({ok: true, script: movic.script1})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}