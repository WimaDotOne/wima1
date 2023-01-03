import QuizQuiz from "../../../Model/QuizQuiz.js"
import { asyGetMyQuizChapter } from "../../H/GetMyQuizChapter.js"

export async function iDeleteMyChapter(req, res) {
  try{
    const chapterId = (req.body.chapterId || "").toString()

    if(!chapterId) {
      return res.json({ok: false, error: "Chapter id is empty"})
    }

    //asyGetMyQuizChapter has login user check
    const chapter = await asyGetMyQuizChapter(req, chapterId)

    if(!chapter) {
      return res.json({ok: false, error: "Cannot find the chapter."})
    }

    const quiz = await QuizQuiz.findOne({
      quizChapterId: chapter._id
    })

    if(quiz) {
      return res.json({ok: false, error: "Please delete the quizzes in the chapter before deleting the chapter."})
    }

    await chapter.deleteOne()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}