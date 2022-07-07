import { MovicConfig } from "../../../../../bConfig.js"
import Movic from "../../Model/Movic.js"
import { asyGetMovicAccount, asyGetMovicProject } from "../H/GetMovicAccount.js"

async function iSaveMovicScript(req, res) {
  try{
    const script = (req.body.script || "").trim()
    const projectId = (req.body.projectId || "").toString()

    if(script.length > MovicConfig.scritptFileMaxLength) {
      return res.json({ ok: false, error: "Movic script is too long" })
    }

    const movicAccount = await asyGetMovicAccount(req.user._id)

    const project = await asyGetMovicProject(projectId, movicAccount._id)

    const movic = await Movic.findById(project.movicId)

    if(!movic) {
      return res.json({ ok: false, error: "Cannot find movic" })
    }

    movic.script1 = script
    await movic.save()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}

export {
  iSaveMovicScript
}