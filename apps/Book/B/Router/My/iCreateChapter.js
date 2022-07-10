import mongoose from "mongoose"
import { GENERAL_INPUT_MAX } from "../../../../../bConfig.js"
import BookChapter from "../../Model/BookChapter.js"
import { asyGetMyBookProject } from "../H/GetMyBookProject.js"

export async function iCreateChapter(req, res) {
  try{
    const projectId = (req.body.projectId || "").toString()
    const chapterName = (req.body.chapterName || "").trim()
    const chapterNumber = parseInt((req.body.chapterNumber || "").trim())

    if(!chapterName) {
      return res.json({ ok: false, error: "Chapter name is required" })
    }
    if(chapterName.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Chapter name is too long" })
    }
    if(isNaN(chapterNumber)) {
      return res.json({ ok: false, error: "Chapter number is not valid" })
    }
    if(chapterNumber > 99 || chapterNumber < 1) {
      return res.json({ ok: false, error: "Chapter number is out of range" })
    }

    const project = await asyGetMyBookProject(req, projectId)

    const bookId = project.bookId

    const chapter = new BookChapter({
      _id: mongoose.Types.ObjectId(),
      bookId,
      name: chapterName,
      chapterNumber
    })

    await chapter.save()
    
    return res.json({ok: true })

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}