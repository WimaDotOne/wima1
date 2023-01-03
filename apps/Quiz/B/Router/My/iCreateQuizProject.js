import mongoose from "mongoose"
import { GENERAL_INPUT_MAX, QuizConfig } from "../../../../../bConfig.js"
import { User } from "../../../../../libs/Core/Core1/bCore1.js"
import QuizBook from "../../Model/QuizBook.js"
import QuizAccount from "../../Model/QuizAccount.js"
import QuizProject from "../../Model/QuizProject.js"

export async function iCreateQuizProject(req, res) {
  try{
    const quizBookTitle = (req.body.quizBookTitle || "").trim()

    if(!quizBookTitle) {
      return res.json({ ok: false, error: "Quiz title is required" })
    }

    if(quizBookTitle.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Quiz title is too long" })
    }

    const user = await User.findById(req.user._id)

    if(!user) {
      return res.json({ ok: false, error: "Cannot find user" })
    }

    let quizAccount = null
    if(!user.quizAccountId) {
      quizAccount = new QuizAccount({
        _id: mongoose.Types.ObjectId()
      })

      await quizAccount.save()
      user.quizAccountId = quizAccount._id
      user.save()
    } else {
      quizAccount = await QuizAccount.findById(user.quizAccountId)
    }

    if(!quizAccount) {
      return res.json({ ok: false, error: "Cannot find quiz account" })
    }

    //A quiz account can only have 100 quiz books
    const quizBookCount = await QuizBook.count({
      quizAccountId: quizAccount._id
    })
    const quizBookMax = process.env.QUIZBOOK_MAX_PER_ACCOUNT || QuizConfig.quizBookMaxPerAccount
    if(quizBookCount > quizBookMax) {
      return res.json({ ok: false, error: "Quiz book creation reach limit" })
    }
    
    const quizBook = new QuizBook({
      _id: mongoose.Types.ObjectId(),
      title: quizBookTitle
    })
    
    await quizBook.save()

    const quizProject = new QuizProject({
      _id: mongoose.Types.ObjectId(),
      quizBookId: quizBook._id,
      quizAccountId: quizAccount._id
    })

    await quizProject.save()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}