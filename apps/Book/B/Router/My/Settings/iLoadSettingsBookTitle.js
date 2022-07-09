import BookBook from "../../../Model/BookBook.js"
import { asyGetMyBookProject } from "../../H/GetMyBookProject.js"

export async function iLoadSettingsBookTitle(req, res) {
  try{
    const projectId = (req.query.projectId || "").toString()
    
    const project = await asyGetMyBookProject(req, projectId)

    const book = await BookBook.findById(project.bookId)

    if(!book) {
      return res.json({ ok: false, error: "Cannot find book" })
    }
    
    return res.json({ok: true, bookTitle: book.title})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}