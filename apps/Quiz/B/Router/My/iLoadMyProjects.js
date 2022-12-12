import { User } from "../../../../../libs/Core/Core1/bCore1.js"
import QuizProject from "../../Model/QuizProject.js"

export async function iLoadMyProjects(req, res) {
  try{
    const user = await User.findById(req.user._id)

    if(!user) {
      return res.json({ ok: false, error: "Cannot find user" })
    }

    if(!user.quizAccountId) {
      return res.json({ ok: true, projects: []})
    }

    const quizProjects = await QuizProject.find({
      quizAccountId: user.quizAccountId
    }).populate("quizBookId")
    
    const projects = []
    for(const proj of quizProjects) {
      projects.push({
        id: proj._id.toString(),
        quizBookTitle: proj.quizBookId.title
      })
    }

    return res.json({ok: true, projects})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}