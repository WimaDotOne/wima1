import { asyGetMyBookProject } from "../../H/GetMyBookProject.js"

export async function iSaveSettingsIsBookPublic(req, res) {
  try{
    const projectId = (req.body.projectId || "").toString()
    const isBookPublic = !!req.body.isBookPublic

    const project = await asyGetMyBookProject(req, projectId)

    project.isBookPublic = isBookPublic

    await project.save()

    return res.json({ok: true, isBookPublic: project.isBookPublic})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}