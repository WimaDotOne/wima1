import Movic from "../Model/Movic.js"
import { asyGetMovicAccount, asyGetMovicProject } from "./H/GetMovicAccount.js"
import { ParseMovicScript } from "./H/ParseMovicScript.js"

async function iLoadMovicScript(req, res) {
  try{
    const projectId = (req.query.projectId || "").toString()
    const movicAccount = await asyGetMovicAccount(req.user._id)

    const project = await asyGetMovicProject(projectId, movicAccount._id)

    const movic = await Movic.findById(project.movicId)

    if(!movic) {
      return res.json({ ok: false, error: "Cannot find movic" })
    }

    //Delete later
    const scenes = ParseMovicScript(movic.script1)

    return res.json({ok: true, script: movic.script1, scenes})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}

export {
  iLoadMovicScript
}