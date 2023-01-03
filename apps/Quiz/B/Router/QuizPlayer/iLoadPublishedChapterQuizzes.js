import QuizChapter from "../../Model/QuizChapter.js"
import QuizQuiz from "../../Model/QuizQuiz.js"

export async function iLoadPublishedChapterQuizzes(req, res) {
  try{

    const chapterId = (req.query.chapterId || "").toString()

    if(!chapterId) {
      return res.json({ ok: false, error: "Chapter id is empty"})
    }

    const chapter = await QuizChapter.findById(chapterId)

    if(!chapter) {
      return res.json({ ok: false, error: "Cannot find chapter"})
    }

    if(!chapter.isPublic) {
      return res.json({ ok: false, error: "Chapter is not published"})
    }

    const chapterName = chapter.title

    const quizzes = await QuizQuiz.find({
      quizChapterId: chapter._id
    })

    return res.json({ok: true, chapterName, quizzes})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}