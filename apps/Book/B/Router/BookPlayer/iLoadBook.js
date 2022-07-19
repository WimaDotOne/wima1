import BookBook from "../../Model/BookBook.js"
import BookChapter from "../../Model/BookChapter.js"
import BookProject from "../../Model/BookProject.js"

export async function iLoadBook(req, res) {
  try{
    const bookId = (req.query.bookId || "").toString()

    const bookBook = await BookBook.findById(bookId)

    if(!bookBook) {
      return res.json({ ok: false, error: "Cannot find the book" })
    }
    const project = await BookProject.findOne({
      bookId: bookBook._id
    })
    if(!project) {
      return res.json({ ok: false, error: "Cannot find the book project" })
    }
    if(!project.isBookPublic) {
      return res.json({ ok: false, error: "The book is not published" })
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