import { User } from "../../../../../libs/Core/Core1/bCore1.js"
import MovicProject from "../../Model/MovicProject.js"

async function iLoadMyProjects(req, res) {
  try{
    const user = await User.findById(req.user._id)

    if(!user) {
      return res.json({ ok: false, error: "Cannot find user" })
    }

    if(!user.movicAccountId) {
      return res.json({ ok: true, projects: []})
    }

    const movicProjects = await MovicProject.find({
      movicAccountId: user.movicAccountId
    }).populate("movicId")
    
    const projects = []
    for(const proj of movicProjects) {
      projects.push({
        id: proj._id.toString(),
        movicTitle: proj.movicId.title
      })
    }

    return res.json({ok: true, projects})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}

export {
  iLoadMyProjects
}