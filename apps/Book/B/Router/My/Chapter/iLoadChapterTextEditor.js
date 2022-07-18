import BookChapter from "../../../Model/BookChapter.js"
import { asyGetBookChapter } from "../../H/GetBookChapter.js"
import { asyGetMyBookProject } from "../../H/GetMyBookProject.js"

export async function iLoadChapterTextEditor(req, res) {
  try{
    const projectId = (req.query.projectId || "").toString()
    const chapterId = (req.query.chapterId || "").toString()

    const project = await asyGetMyBookProject(req, projectId)

    const chapter = await asyGetBookChapter(chapterId, project.bookId)

    const text = chapter.text
    const chapterNumber = chapter.chapterNumber
    const chapterName = chapter.name
    
    return res.json({ok: true, text, chapterName, chapterNumber })

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}