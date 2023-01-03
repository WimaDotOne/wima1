import { asyGetMyQuizChapter } from "../../H/GetMyQuizChapter.js"

export async function iSaveSettingsIsQuizChapterPublic(req, res) {
  try{
    const chapterId = (req.body.chapterId || "").toString()
    const isPublic = !!req.body.isQuizChapterPublic

    const chapter = await asyGetMyQuizChapter(req, chapterId)

    chapter.isPublic = isPublic

    await chapter.save()

    return res.json({ok: true, isQuizChapterPublic: chapter.isPublic})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}