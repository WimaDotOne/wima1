import QuizQuiz from "../../../Model/QuizQuiz.js"
import { asyGetMyQuizChapter } from "../../H/GetMyQuizChapter.js"

export async function iDeleteMyQuiz(req, res) {
  try{
    const quizId = (req.body.quizId || "").toString()

    if(!quizId) {
      return res.json({ok: false, error: "Quiz id is empty"})
    }

    const quiz = await QuizQuiz.findById(quizId)

    if(!quiz) {
      return res.json({ok: false, error: "Cannot find quiz"})
    }
     
    const chapterId = quiz.quizChapterId

    //asyGetMyQuizChapter has login user check
    await asyGetMyQuizChapter(req, chapterId)

    await quiz.deleteOne()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}