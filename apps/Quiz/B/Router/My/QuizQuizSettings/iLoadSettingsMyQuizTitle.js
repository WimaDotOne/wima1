import QuizQuiz from "../../../Model/QuizQuiz.js"

export async function iLoadSettingsMyQuizTitle(req, res) {
  try{
    const quizId = (req.query.quizId || "").toString()

    if(!quizId) {
      return res.json({ok: false, error: "Quiz id is empty"})
    }

    const quiz = await QuizQuiz.findById(quizId)
    
    return res.json({ok: true, quizTitle: quiz.title})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}