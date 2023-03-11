import {promises as fsPromises} from "fs"
import { FilePath } from "../../../../libs/Core/Core1/bCore1.js"
import { ParseAdminAppsText } from "./H/ParseAdminAppsText.js"

export async function iLoadAdminApps(req, res) {
  try {

    const path = FilePath(import.meta.url, `../DB/AdminApps.txt`)
    const text = await fsPromises.readFile(
      path, { encoding: "utf8" }
    )
      
    const adminApps = ParseAdminAppsText(text)
    return res.json({
      ok: true,
      adminApps
    })

  } catch(err) {
    return res.json({ ok:false, error: err.message})
  }
}