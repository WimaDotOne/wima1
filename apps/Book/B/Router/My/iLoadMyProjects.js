import { User } from "../../../../../libs/Core/Core1/bCore1.js"
import BookProject from "../../Model/BookProject.js"

export async function iLoadMyProjects(req, res) {
  try{
    const user = await User.findById(req.user._id)

    if(!user) {
      return res.json({ ok: false, error: "Cannot find user" })
    }

    if(!user.bookAccountId) {
      return res.json({ ok: true, projects: []})
    }

    const bookProjects = await BookProject.find({
      bookAccountId: user.bookAccountId
    }).populate("bookId")
    
    const projects = []
    for(const proj of bookProjects) {
      projects.push({
        id: proj._id.toString(),
        bookTitle: proj.bookId.title
      })
    }

    return res.json({ok: true, projects})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}