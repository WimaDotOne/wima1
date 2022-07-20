import {promises as fsPromises} from "fs"
import { FilePath } from "../../../../../libs/Core/Core1/bCore1.js"
import { ParseBookExhibit } from "../H/ParseBookExhibit.js"

export async function iLoadBookExhibit(req, res) {
  try {
    const exhibitId = req.query.exhibitId

    if(!exhibitId || exhibitId==="undefined") {
      return res.json({ ok:false, error: "Exhibit id is missing"})
    }
    const path = FilePath(import.meta.url, `../../DB/ExhibitBooks/${exhibitId}/Book.txt`)
    const data = await fsPromises.readFile(
      path, { encoding: "utf8" }
    )
    const [book, chapters] = ParseBookExhibit(data)
    return res.json({
      ok: true,
      book, chapters
    })

  } catch(err) {
    return res.json({ ok:false, error: err.message})
  }
}