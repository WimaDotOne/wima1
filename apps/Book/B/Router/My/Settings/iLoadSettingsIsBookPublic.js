import { asyGetMyBookProject } from "../../H/GetMyBookProject.js"

export async function iLoadSettingsIsBookPublic(req, res) {
  try{
    const projectId = (req.query.projectId || "").toString()

    const project = await asyGetMyBookProject(req, projectId)
    
    return res.json({ok: true, isBookPublic: project.isBookPublic})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}