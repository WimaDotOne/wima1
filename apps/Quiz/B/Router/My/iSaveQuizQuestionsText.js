import { asyGetMyQuizChapter } from "../H/GetMyQuizChapter.js"
import { asyGetMyQuizQuiz } from "../H/GetMyQuizQuiz.js"
import { QuizConfig } from "../../../../../bConfig.js"

export async function iSaveQuizQuestionsText(req, res) {
  try{
    const quizId = (req.body.quizId || "").toString()
    const chapterId = (req.body.chapterId || "").toString()
    const text = req.body.text || ""

    //front-end also limits to process.env.QUIZ_QUESTIONS_MAX_LENGTH if set.
    if(text.length > QuizConfig.quizQuestionsMaxLength) {
      return res.json({ ok: false, error: "The questions are too long." })
    }
    
    const chapter = await asyGetMyQuizChapter(req, chapterId)

    const quiz = await asyGetMyQuizQuiz(req, quizId, chapter._id)

    quiz.questionsText = text
    await quiz.save()
    
    return res.json({ok: true })

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}