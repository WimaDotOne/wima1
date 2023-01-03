import { User } from "../../../../../libs/Core/Core1/bCore1.js"
import QuizProject from "../../Model/QuizProject.js"

export async function asyGetMyQuizProject(req, projectId) {

  if(!projectId) {
    throw new Error("Project id is empty")
  }

  const user = await User.findById(req.user._id)

  if(!user) {
    throw new Error("Cannot find login user")
  }

  if(!user.quizAccountId) {
    throw new Error("Cannot find quiz account.")
  }

  const project = await QuizProject.findById(projectId)
  if(!project) {
    throw new Error("Cannot find quiz project")
  }


  if(project.quizAccountId.toString() !== user.quizAccountId.toString()) {
    throw new Error("Project does not match quiz account")
  }
  return project
}