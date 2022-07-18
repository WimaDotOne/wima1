import BookBook from "../../Model/BookBook.js"
import BookChapter from "../../Model/BookChapter.js"
import { asyGetMyBookProject } from "../H/GetMyBookProject.js"

export async function iLoadBookPreview(req, res) {
  try{
    const projectId = (req.query.projectId || "").toString()

    const project = await asyGetMyBookProject(req, projectId)

    const bookBook = await BookBook.findById(project.bookId)

    if(!bookBook) {
      return res.json({ ok: false, error: "Cannot find the book" })
    }

    const book = {
      title: bookBook.title,
      author: bookBook.author,
      dedication: bookBook.dedication,
      coverImgUrl: bookBook.bookCover?.url
    }

    const bookChapters = await BookChapter.find({
      bookId: bookBook._id
    }).sort("chapterNumber")

    const chapters = []
    for (const chapter of bookChapters) {
      chapters.push({
        id: chapter._id.toString(),
        name: chapter.name,
      })
    }

    return res.json({ok: true, chapters, book})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}