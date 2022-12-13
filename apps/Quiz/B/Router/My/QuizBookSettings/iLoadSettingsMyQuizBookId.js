import QuizBook from "../../../Model/QuizBook.js"
import { asyGetMyQuizProject } from "../../H/GetMyQuizProject.js"

export async function iLoadSettingsMyQuizBookId(req, res) {
  try{
    const projectId = (req.query.projectId || "").toString()

    const project = await asyGetMyQuizProject(req, projectId)

    const quizBook = await QuizBook.findById(project.quizBookId)

    if(!quizBook) {
      return res.json({ ok: false, error: "Cannot find quiz book" })
    }
    
    return res.json({ok: true, quizBookId: quizBook._id.toString()})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}