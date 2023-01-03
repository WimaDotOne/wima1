import QuizBook from "../../Model/QuizBook.js"
import QuizChapter from "../../Model/QuizChapter.js"
import { asyGetMyQuizProject } from "../H/GetMyQuizProject.js"

export async function iLoadMyQuizBookChapters(req, res) {
  try{

    const projectId = (req.query.projectId || "").toString()

    const project = await asyGetMyQuizProject(req, projectId)

    const quizBook = await QuizBook.findById(project.quizBookId)

    if(!quizBook) {
      return res.json({ ok: false, error: "Cannot find project quiz book" })
    }

    const chapters = await QuizChapter.find({
      quizBookId: quizBook._id
    })

    return res.json({ok: true, chapters})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}