import { GENERAL_INPUT_MAX } from "../../../../../../bConfig.js"
import QuizQuiz from "../../../Model/QuizQuiz.js"
import { asyGetMyQuizChapter } from "../../H/GetMyQuizChapter.js"

export async function iSaveSettingsMyQuizTitle(req, res) {
  try{
    const quizId = (req.body.quizId || "").toString()
    const title = (req.body.title || "").trim()

    if(!title) {
      return res.json({ ok: false, error: "Quiz title cannot be empty" })
    }

    if(title.length > GENERAL_INPUT_MAX * 2) {
      return res.json({ ok: false, error: "Title is too long" })
    }

    const quiz = await QuizQuiz.findById(quizId)

    //Only get chapter to check the quiz belongs to the login user
    const chapterId = (quiz.quizChapterId || "").toString()
    const chapter = await asyGetMyQuizChapter(req, chapterId)

    quiz.title = title
    await quiz.save()
    
    return res.json({ok: true, quizTitle: quiz.title})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}