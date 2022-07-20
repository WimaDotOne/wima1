import {promises as fsPromises} from "fs"
import { FilePath } from "../../../../../libs/Core/Core1/bCore1.js"
import { ParseChapterTextExhibit } from "../H/ParseChapterTextExhibit.js"

export async function iLoadChapterTextExhibit(req, res) {
  try {
    const exhibitId = req.query.exhibitId
    const chapterId = req.query.chapterId

    if(!exhibitId || exhibitId==="undefined") {
      return res.json({ ok:false, error: "Exhibit id is missing"})
    }
    if(!chapterId || chapterId==="undefined") {
      return res.json({ ok:false, error: "Chapter id is missing"})
    }
    const path = FilePath(import.meta.url, `../../DB/ExhibitBooks/${exhibitId}/Chapter${chapterId}.txt`)
    const data = await fsPromises.readFile(
      path, { encoding: "utf8" }
    )
    const { chapterName, chapterText } = ParseChapterTextExhibit(data)
    return res.json({
      ok: true,
      chapterName, chapterText
    })

  } catch(err) {
    return res.json({ ok:false, error: err.message})
  }
}