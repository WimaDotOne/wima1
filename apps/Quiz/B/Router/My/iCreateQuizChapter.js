import mongoose from "mongoose"
import { GENERAL_INPUT_MAX, QuizConfig } from "../../../../../bConfig.js"
import { User } from "../../../../../libs/Core/Core1/bCore1.js"
import QuizBook from "../../Model/QuizBook.js"
import QuizChapter from "../../Model/QuizChapter.js"
import { asyGetMyQuizProject } from "../../Router/H/GetMyQuizProject.js"

export async function iCreateQuizChapter(req, res) {
  try{
    const chapterTitle = (req.body.chapterTitle || "").trim()
    const projectId = (req.body.projectId || "").toString()
    
    const project = await asyGetMyQuizProject(req, projectId)

    if(!chapterTitle) {
      return res.json({ ok: false, error: "Chapter title is required" })
    }

    if(chapterTitle.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Chapter title is too long" })
    }

    const quizBook = await QuizBook.findById(project.quizBookId)

    if(!quizBook) {
      return res.json({ ok: false, error: "Cannot find project quiz book" })
    }

    //A quiz book can only have 20 quiz chapters
    const quizChapterCount = await QuizChapter.count({
      quizBookId: quizBook._id
    })
    const quizChapterMax = process.env.QUIZCHAPTER_MAX_PER_QUIZBOOK || QuizConfig.quizChapterMaxPerQuizBook
    if(quizChapterCount > quizChapterMax) {
      return res.json({ ok: false, error: "Quiz chapter creation reach limit" })
    }
    
    const chapter = new QuizChapter({
      _id: mongoose.Types.ObjectId(),
      quizBookId: quizBook._id,
      title: chapterTitle
    })
    
    await chapter.save()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}