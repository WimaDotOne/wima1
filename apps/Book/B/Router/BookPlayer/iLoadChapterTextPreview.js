import { asyGetBookChapter } from "../H/GetBookChapter.js"
import { asyGetMyBookProject } from "../H/GetMyBookProject.js"

export async function iLoadChapterTextPreview(req, res) {
  try{
    const projectId = (req.query.projectId || "").toString()
    const chapterId = (req.query.chapterId || "").toString()

    const project = await asyGetMyBookProject(req, projectId)

    const chapter = await asyGetBookChapter(chapterId, project.bookId)

    const chapterText = chapter.text
    const chapterName = chapter.name
    
    return res.json({ok: true, chapterText, chapterName })

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}