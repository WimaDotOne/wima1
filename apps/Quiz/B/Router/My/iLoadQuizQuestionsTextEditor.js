import { asyGetMyQuizChapter } from "../H/GetMyQuizChapter.js"
import { asyGetMyQuizQuiz } from "../H/GetMyQuizQuiz.js"

export async function iLoadQuizQuestionsTextEditor(req, res) {
  try{
    const quizId = (req.query.quizId || "").toString()
    const chapterId = (req.query.chapterId || "").toString()

    const chapter = await asyGetMyQuizChapter(req, chapterId)
    const quiz = await asyGetMyQuizQuiz(req, quizId, chapter._id)
    
    const questionsText = quiz.questionsText
    const quizTitle = quiz.title
    
    return res.json({ok: true, questionsText, quizTitle })

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}