import { User } from "../../../../../libs/Core/Core1/bCore1.js"
import QuizChapter from "../../Model/QuizChapter.js"
import QuizProject from "../../Model/QuizProject.js"

export async function asyGetMyQuizChapter(req, chapterId) {

  if(!chapterId) {
    throw new Error("Chapter id is empty")
  }

  const user = await User.findById(req.user._id)

  if(!user) {
    throw new Error("Cannot find login user")
  }

  if(!user.quizAccountId) {
    throw new Error("Cannot find quiz account.")
  }

  const chapter = await QuizChapter.findById(chapterId)

  if(!chapter) {
    throw new Error("Cannot find quiz chapter")
  }

  const project = await QuizProject.findOne({
    quizBookId: chapter.quizBookId
  })

  if(!project) {
    throw new Error("Cannot find quiz project")
  }

  if(project.quizAccountId.toString() !== user.quizAccountId.toString()) {
    throw new Error("Chapter does not match quiz account")
  }
  return chapter
}