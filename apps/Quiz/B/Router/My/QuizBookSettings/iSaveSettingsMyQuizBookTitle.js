import { GENERAL_INPUT_MAX } from "../../../../../../bConfig.js"
import QuizBook from "../../../Model/QuizBook.js"
import { asyGetMyQuizProject } from "../../H/GetMyQuizProject.js"

export async function iSaveSettingsMyQuizBookTitle(req, res) {
  try{
    const projectId = (req.body.projectId || "").toString()
    const title = (req.body.title || "").trim()

    if(!title) {
      return res.json({ ok: false, error: "Quiz book title cannot be empty" })
      
    }
    if(title.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Title is too long" })
    }
    
    const project = await asyGetMyQuizProject(req, projectId)

    const quizBook = await QuizBook.findById(project.quizBookId)

    if(!quizBook) {
      return res.json({ ok: false, error: "Cannot find quiz book" })
    }

    quizBook.title = title
    await quizBook.save()
    
    return res.json({ok: true, quizBookTitle: quizBook.title})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}