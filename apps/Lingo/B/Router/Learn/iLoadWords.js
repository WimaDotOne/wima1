import {promises as fsPromises} from "fs"
import { FilePath } from "../../../../../libs/Core/Core1/File/FilePath.js"
import { ParseUnitText } from "../H/ParseUnitText.js"

export async function iLoadWords(req, res) {
  try {
    const unit = req.body.unit
    const lang = req.body.lang

    let isChinese = false
    let language = ""
    switch(lang) {
      case "fr-FR": 
        language="French"
        break
      case "de-DE":
        language="German"
        break
      case "zh-CN":
        isChinese = true
        language="Chinese"
        break
      default:
    }

    if(!language || !unit) {
      return res.json({ ok:false, error: "Invalid language or unit"})
    }
    const path = FilePath(import.meta.url, `../../DB/${language}/Unit${unit}.txt`)
    const data = await fsPromises.readFile(
      path, { encoding: "utf8" }
    )

    const pages = ParseUnitText(data, isChinese)
    return res.json({
      ok: true,
      pages
    })

  } catch(err) {
    return res.json({ ok:false, error: err.message})
  }
} 