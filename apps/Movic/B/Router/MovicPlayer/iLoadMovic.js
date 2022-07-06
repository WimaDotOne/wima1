import ImageFile from "../../Model/MovicImageFile.js"
import Movic from "../../Model/Movic.js"
import MovicProject from "../../Model/MovicProject.js"
import { ParseMovicScript } from "../H/ParseMovicScript.js"

//public api
export async function iLoadMovic(req, res) {
  try{
    const movicId = (req.query.movicId || "").toString()

    const movic = await Movic.findById(movicId)

    if(!movic) {
      return res.json({ ok: false, error: "Cannot find movic" })
    }
    const project = await MovicProject.findOne({
      movicId: movic._id
    })

    if(!project) {
      return res.json({ ok: false, error: "Cannot find project" })
    }

    if(!project.isMovicPublic) {
      return res.json({ ok: false, error: "Movic is not public" })
    }

    const script = movic.script1
    const imageFiles = await ImageFile.find({
      movicId: movic._id
    })
    let imageDict = {}
    for(const image of imageFiles) {
      const name = image.name
      if(!name) continue
      if(!imageDict[name]) {
        imageDict[name]=image.url
      }
    }

    const scenes = ParseMovicScript(script, imageDict)

    return res.json({ok: true, scenes, movicTitle: movic.title})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}