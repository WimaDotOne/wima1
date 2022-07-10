import { GENERAL_INPUT_MAX } from "../../../../../../bConfig.js"
import BookChapter from "../../../Model/BookChapter.js"
import { asyGetMyBookProject } from "../../H/GetMyBookProject.js"

export async function iDeleteChapter(req, res) {
  try{
    const projectId = (req.body.projectId || "").toString()
    const chapterId = (req.body.chapterId || "").toString()

    const project = await asyGetMyBookProject(req, projectId)

    const bookId = project.bookId

    const chapter = await BookChapter.findById(chapterId)

    if(!chapter) {
      return res.json({ ok: false, error: "Cannot find the chapter" })
    }
    if(!chapter.bookId || !bookId || 
        chapter.bookId.toString() !== bookId.toString()) {
      return res.json({ ok: false, error: "Cannot find the matching chapter" })
    }

    await chapter.delete()
    
    return res.json({ok: true })

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}