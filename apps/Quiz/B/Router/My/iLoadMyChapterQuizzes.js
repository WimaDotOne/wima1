import QuizQuiz from "../../Model/QuizQuiz.js"
import { asyGetMyQuizChapter } from "../H/GetMyQuizChapter.js"

export async function iLoadMyChapterQuizzes(req, res) {
  try{

    const chapterId = (req.query.chapterId || "").toString()

    const chapter = await asyGetMyQuizChapter(req, chapterId)

    const quizzes = await QuizQuiz.find({
      quizChapterId: chapter._id
    })

    return res.json({ok: true, quizzes})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}