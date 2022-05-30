import { asyGetMovicAccount, asyGetMovicProject } from "../../H/GetMovicAccount.js"

export async function iSaveSettingsIsMovicPublic(req, res) {
  try{
    const projectId = (req.body.projectId || "").toString()
    const isMovicPublic = !!req.body.isMovicPublic

    const movicAccount = await asyGetMovicAccount(req.user._id)

    const project = await asyGetMovicProject(projectId, movicAccount._id)

    project.isMovicPublic = isMovicPublic

    await project.save()

    return res.json({ok: true, isMovicPublic: project.isMovicPublic})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}