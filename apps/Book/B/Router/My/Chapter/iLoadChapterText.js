import BookChapter from "../../../Model/BookChapter.js"
import { asyGetMyBookProject } from "../../H/GetMyBookProject.js"

export async function iLoadChapterText(req, res) {
  try{
    const projectId = (req.query.projectId || "").toString()
    const chapterId = (req.query.chapterId || "").toString()

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
    const text = chapter.text
    const chapterNumber = chapter.chapterNumber
    const chapterName = chapter.name
    
    return res.json({ok: true, text, chapterName, chapterNumber })

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}