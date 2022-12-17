import mongoose from "mongoose"
import { GENERAL_INPUT_MAX, QuizConfig } from "../../../../../bConfig.js"
import QuizQuiz from "../../Model/QuizQuiz.js"
import { asyGetMyQuizChapter } from "../H/GetMyQuizChapter.js"

export async function iCreateQuizQuiz(req, res) {
  try{
    const quizTitle = (req.body.quizTitle || "").trim()
    const chapterId = (req.body.chapterId || "").toString()
    
    if(!quizTitle) {
      return res.json({ ok: false, error: "Quiz title is required" })
    }

    if(quizTitle.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Quiz title is too long" })
    }

    const chapter = await asyGetMyQuizChapter(req, chapterId)

    //A chapter can only have 100 quizzes
    const quizCount = await QuizQuiz.count({
      quizChapterId: chapter._id
    })
    const quizMax = process.env.QUIZ_MAX_PER_QUIZCHAPTER || QuizConfig.quizMaxPerQuizChapter
    if(quizCount > quizMax) {
      return res.json({ ok: false, error: "Quiz creation reach limit" })
    }
    
    const quiz = new QuizQuiz({
      _id: mongoose.Types.ObjectId(),
      quizChapterId: chapter._id,
      title: quizTitle
    })
    
    await quiz.save()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}