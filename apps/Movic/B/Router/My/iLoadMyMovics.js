import MovicProject from "../../Model/MovicProject.js"
import { asyGetMovicAccount, asyGetMovicProject } from "../H/GetMovicAccount.js"

export async function iLoadMyMovics(req, res) {
  try{
    const movicAccount = await asyGetMovicAccount(req.user._id)

    const projects = await MovicProject.find({
      movicAccountId: movicAccount._id,
      isMovicPublic: true
    }).populate("movicId")

    const movics = []

    for(const project of projects) {
      const movic0 = project.movicId
      const movic = {
        id: movic0._id.toString(),
        title: movic0.title,
        imageUrl: movic0.dvdCover?.urlSmall
      }
      
      movics.push(movic)
    }

    return res.json({ok: true, movics})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}