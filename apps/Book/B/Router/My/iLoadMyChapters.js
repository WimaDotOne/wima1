import BookChapter from "../../Model/BookChapter.js"
import { asyGetMyBookProject } from "../H/GetMyBookProject.js"

export async function iLoadMyChapters(req, res) {
  try{
    const projectId = (req.query.projectId || "").toString()

    const project = await asyGetMyBookProject(req, projectId)

    const bookId = project.bookId

    const bookChapters = await BookChapter.find({
      bookId
    })

    const chapters = []
    for(const chapter of bookChapters) {
      chapters.push({
        id: chapter._id.toString(),
        name: chapter.name,
        chapterNumber: chapter.chapterNumber
      })
    }

    return res.json({ok: true, chapters })

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}