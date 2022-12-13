import { asyGetMyQuizProject } from "../../H/GetMyQuizProject.js"

export async function iLoadSettingsIsQuizBookPublic(req, res) {
  try{
    const projectId = (req.query.projectId || "").toString()

    const project = await asyGetMyQuizProject(req, projectId)

    return res.json({ok: true, isQuizBookPublic: project.isQuizBookPublic})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}