import { asyGetMyQuizChapter } from "../../H/GetMyQuizChapter.js"

export async function iLoadSettingsMyQuizChapterTitle(req, res) {
  try{
    const chapterId = (req.query.chapterId || "").toString()

    const chapter = await asyGetMyQuizChapter(req, chapterId)
    
    return res.json({ok: true, quizChapterTitle: chapter.title})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}