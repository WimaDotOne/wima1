import { GENERAL_INPUT_MAX } from "../../../../../../bConfig.js"
import BookBook from "../../../Model/BookBook.js"
import { asyGetMyBookProject } from "../../H/GetMyBookProject.js"

export async function iSaveSettingsBookTitle(req, res) {
  try{
    const projectId = (req.body.projectId || "").toString()
    const title = (req.body.title || "").trim()
    const author = (req.body.author || "").trim()
    const dedication = (req.body.dedication || "").trim()

    if(!title) {
      return res.json({ ok: false, error: "Book title cannot be empty" })
      
    }
    if(title.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Title is too long" })
    }
    if(author.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Author is too long" })
    }
    if(dedication.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Dedication is too long" })
    }
    
    const project = await asyGetMyBookProject(req, projectId)

    const book = await BookBook.findById(project.bookId)

    if(!book) {
      return res.json({ ok: false, error: "Cannot find book" })
    }

    book.title = title
    book.author = author
    book.dedication = dedication
    await book.save()
    
    return res.json({
      ok: true, 
      bookTitle: book.title,
      author: book.author,
      dedication: book.dedication
    })

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}