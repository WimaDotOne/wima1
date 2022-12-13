import { asyGetMyQuizProject } from "../../H/GetMyQuizProject.js"

export async function iSaveSettingsIsQuizBookPublic(req, res) {
  try{
    const projectId = (req.body.projectId || "").toString()
    const isQuizBookPublic = !!req.body.isQuizBookPublic

    const project = await asyGetMyQuizProject(req, projectId)

    project.isQuizBookPublic = isQuizBookPublic

    await project.save()

    return res.json({ok: true, isQuizBookPublic: project.isQuizBookPublic})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}