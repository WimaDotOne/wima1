import BookProject from "../../Model/BookProject.js"
import { asyGetBookChapter } from "../H/GetBookChapter.js"
import mongoose from "mongoose"

export async function iLoadChapterText(req, res) {
  try{
    const bookId = (req.query.bookId || "").toString()
    const chapterId = (req.query.chapterId || "").toString()

    const project = await BookProject.findOne({
      bookId: mongoose.Types.ObjectId(bookId)
    })

    if(!project) {
      return res.json({ok: false, error: "Cannot find the project"})
    }
    if(!project.isBookPublic) {
      return res.json({ok: false, error: "The book is not published."})
    }

    const chapter = await asyGetBookChapter(chapterId, bookId)

    const chapterText = chapter.text
    const chapterName = chapter.name
    
    return res.json({ok: true, chapterText, chapterName })

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}