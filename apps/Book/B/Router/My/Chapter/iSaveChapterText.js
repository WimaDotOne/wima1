import { BookConfig } from "../../../../../../bConfig.js"
import BookChapter from "../../../Model/BookChapter.js"
import { asyGetMyBookProject } from "../../H/GetMyBookProject.js"

export async function iSaveChapterText(req, res) {
  try{
    const projectId = (req.body.projectId || "").toString()
    const chapterId = (req.body.chapterId || "").toString()
    const text = req.body.text || ""

    if(text.length > BookConfig.textMaxPerChapter) {
      return res.json({ ok: false, error: "The chapter is too long" })
    }

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

    chapter.text = text
    await chapter.save()
    
    return res.json({ok: true })

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}