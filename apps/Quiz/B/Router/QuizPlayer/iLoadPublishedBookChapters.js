import QuizBook from "../../Model/QuizBook.js"
import QuizChapter from "../../Model/QuizChapter.js"
import QuizProject from "../../Model/QuizProject.js"

export async function iLoadPublishedBookChapters(req, res) {
  try{

    const bookId = (req.query.bookId || "").toString()

    if(!bookId) {
      return res.json({ ok: false, error: "Book id is empty"})
    }

    const book = await QuizBook.findById(bookId)

    if(!book) {
      return res.json({ ok: false, error: "Cannot find book"})
    }

    const project = await QuizProject.findOne({
      quizBookId: book._id
    })

    if(!project) {
      return res.json({ ok: false, error: "Cannot find quiz project"})
    }

    if(!project.isQuizBookPublic) {
      return res.json({ ok: false, error: "Book is not published"})
    }

    const bookName = book.title

    const chapters = await QuizChapter.find({
      quizBookId: book._id,
      isPublic: true
    })

    return res.json({ok: true, bookName, chapters})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}