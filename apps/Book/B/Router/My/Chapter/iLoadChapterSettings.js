import mongoose from "mongoose"
import { GENERAL_INPUT_MAX } from "../../../../../../bConfig.js"
import BookChapter from "../../../Model/BookChapter.js"
import { asyGetMyBookProject } from "../../H/GetMyBookProject.js"

export async function iLoadChapterSettings(req, res) {
  try{
    const chapterId = (req.query.chapterId || "").toString()

    const chapter = await BookChapter.findById(chapterId)

    if(!chapter) {
      return res.json({ ok: false, error: "Cannot find the chapter" })
    }
    const chapterName = chapter.name
    const chapterNumber = chapter.chapterNumber

    await chapter.save()
    
    return res.json({ok: true, chapterName, chapterNumber })

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}