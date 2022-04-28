import {promises as fsPromises} from "fs"
import { FilePath } from "../../../../../libs/Core/Core1/bCore1.js"
import { ParseSettingsText } from "./H/ParseSettingsText.js"

async function iLoadSettings(req, res) {
  try {

    const path = FilePath(import.meta.url, `../DB/Settings.txt`)
    const text = await fsPromises.readFile(
      path, { encoding: "utf8" }
    )
      
    const settings = ParseSettingsText(text)
    return res.json({
      ok: true,
      settings,
    })

  } catch(err) {
    return res.json({ ok:false, error: err.message})
  }
}

export {
  iLoadSettings
} 