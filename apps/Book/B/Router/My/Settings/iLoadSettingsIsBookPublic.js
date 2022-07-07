import { asyGetMovicAccount, asyGetMovicProject } from "../../H/GetMovicAccount.js"

export async function iLoadSettingsIsMovicPublic(req, res) {
  try{
    const projectId = (req.query.projectId || "").toString()

    const movicAccount = await asyGetMovicAccount(req.user._id)

    const project = await asyGetMovicProject(projectId, movicAccount._id)

    
    return res.json({ok: true, isMovicPublic: project.isMovicPublic})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}