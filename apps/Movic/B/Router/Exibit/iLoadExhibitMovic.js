import {promises as fsPromises} from "fs"
import { ParseMovicScript } from "../H/ParseMovicScript.js"
import { FilePath } from "../../../../../libs/Core/Core1/File/FilePath.js"

export async function iLoadExhibitMovic(req, res) {
  try {
    const movicId = req.query.movicId

    if(!movicId || movicId==="undefined") {
      return res.json({ ok:false, error: "Movic id is missing"})
    }
    const path = FilePath(import.meta.url, `../../DB/ExhibitMovics/${movicId}.txt`)
    const data = await fsPromises.readFile(
      path, { encoding: "utf8" }
    )

    const scenes = ParseMovicScript(data, undefined, `/apps/Movic/Exhibit/Movics/${movicId}`)
    return res.json({
      ok: true,
      scenes
    })

  } catch(err) {
    return res.json({ ok:false, error: err.message})
  }
}