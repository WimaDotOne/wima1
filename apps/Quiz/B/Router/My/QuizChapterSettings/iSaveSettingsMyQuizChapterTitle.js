import { GENERAL_INPUT_MAX } from "../../../../../../bConfig.js"
import { asyGetMyQuizChapter } from "../../H/GetMyQuizChapter.js"

export async function iSaveSettingsMyQuizChapterTitle(req, res) {
  try{
    const chapterId = (req.body.chapterId || "").toString()
    const title = (req.body.title || "").trim()

    if(!title) {
      return res.json({ ok: false, error: "Quiz chapter title cannot be empty" })
    }

    if(title.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Title is too long" })
    }
    
    const chapter = await asyGetMyQuizChapter(req, chapterId)

    chapter.title = title
    await chapter.save()
    
    return res.json({ok: true, quizChapterTitle: chapter.title})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}