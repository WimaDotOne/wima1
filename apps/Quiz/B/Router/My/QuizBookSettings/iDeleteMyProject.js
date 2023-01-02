import QuizBook from "../../../Model/QuizBook.js"
import QuizChapter from "../../../Model/QuizChapter.js"
import { asyGetMyQuizProject } from "../../H/GetMyQuizProject.js"

export async function iDeleteMyProject(req, res) {
  try{
    const projectId = (req.body.projectId || "").toString()

    if(!projectId) {
      return res.json({ok: false, error: "Project id is empty"})
    }

    const project = await asyGetMyQuizProject(req, projectId)

    if(!project) {
      return res.json({ok: false, error: "Cannot find the project."})
    }

    const book = await QuizBook.findById(project.quizBookId)

    if(!book) {
      return res.json({ok: false, error: "Cannot find the quiz book."})
    }

    const chapter = await QuizChapter.findOne({
      quizBookId: book._id
    })

    if(chapter) {
      return res.json({ok: false, error: "Please delete all the chapters before deleting the project."})
    }
 
    await book.deleteOne()
    await project.deleteOne()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}