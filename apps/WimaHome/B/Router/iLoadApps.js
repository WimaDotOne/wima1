import {promises as fsPromises} from "fs"
import { FilePath } from "../../../../libs/Core/Core1/bCore1.js"
import { ParseAppsText } from "./H/ParseAppsText.js"

async function iLoadApps(req, res) {
  try {

    const path = FilePath(import.meta.url, `../DB/Apps.txt`)
    const text = await fsPromises.readFile(
      path, { encoding: "utf8" }
    )
      
    const apps = ParseAppsText(text)
    return res.json({
      ok: true,
      apps,
    })

  } catch(err) {
    return res.json({ ok:false, error: err.message})
  }
}

export {
  iLoadApps
} 