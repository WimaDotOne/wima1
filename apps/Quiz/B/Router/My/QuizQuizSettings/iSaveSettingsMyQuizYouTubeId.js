import { GENERAL_INPUT_MAX } from "../../../../../../bConfig.js"
import QuizQuiz from "../../../Model/QuizQuiz.js"
import { asyGetMyQuizChapter } from "../../H/GetMyQuizChapter.js"
import { GetYouTubeId } from "../../H/ParseYouTube.js"

export async function iSaveSettingsMyQuizYouTubeId(req, res) {
  try{
    const quizId = (req.body.quizId || "").toString()
    const youTubeLink = (req.body.youTubeLink || "").trim()

    if(youTubeLink.length > GENERAL_INPUT_MAX * 2) {
      return res.json({ ok: false, error: "YouTube link is too long" })
    }

    const quiz = await QuizQuiz.findById(quizId)

    //Only get chapter to check the quiz belongs to the login user
    const chapterId = (quiz.quizChapterId || "").toString()
    const chapter = await asyGetMyQuizChapter(req, chapterId)

    const youTubeId = GetYouTubeId(youTubeLink)

    quiz.youTubeId = youTubeId
    await quiz.save()
    
    return res.json({ok: true, youTubeId: quiz.youTubeId})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}