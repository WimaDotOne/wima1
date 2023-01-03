import QuizProject from "../../Model/QuizProject.js"
import User from "../../../../../libs/Core/Core1/StripeLogin/B/Model/User.js"

export async function iLoadMyPublishedQuizBooks(req, res) {
  try{
    const user = await User.findById(req.user._id)

    if(!user) {
      return res.json({ ok: false, error: "Cannot find user" })
    }

    if(!user.quizAccountId) {
      return res.json({ok: true, books: []})
    }

    const projects = await QuizProject.find({
      quizAccountId: user.quizAccountId,
      isQuizBookPublic: true
    }).populate("quizBookId")

    const books = []

    for(const project of projects) {
      const book0 = project.quizBookId

      const book = {
        _id: book0._id.toString(),
        title: book0.title
      }
      
      books.push(book)
    }

    return res.json({ok: true, books})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}