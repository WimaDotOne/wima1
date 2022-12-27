import QuizQuiz from "../../Model/QuizQuiz.js"

export async function iLoadSingleQuiz(req, res) {
  try{

    const quizId = (req.query.quizId || "").toString()

    if(!quizId) {
      return res.json({ ok: false, error: "Quiz id is empty"})
    }

    const quiz = await QuizQuiz.findById(quizId)

    if(!quiz) {
      return res.json({ ok: false, error: "Cannot find quiz"})
    }

    return res.json({ok: true, quiz})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}