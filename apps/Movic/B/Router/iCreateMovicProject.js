import mongoose from "mongoose"
import { User } from "../../../../libs/Core/Core1/bCore1.js"
import Movic from "../Model/Movic.js"
import MovicAccount from "../Model/MovicAccount.js"
import MovicProject from "../Model/MovicProject.js"

async function iCreateMovicProject(req, res) {
  try{
    const user = req.user
    const movicName = (req.body.movicName || "").trim()

    const oUser = await User.findById(user._id)

    if(!oUser) {
      return res.json({ ok: false, error: "Cannot find user" })
    }

    let movicAccount = null
    if(!oUser.movicAccountId) {
      movicAccount = new MovicAccount({
        _id: mongoose.Types.ObjectId()
      })

      await movicAccount.save()
      oUser.movicAccountId = movicAccount._id
      oUser.save()
    } else {
      movicAccount = await MovicAccount.findById(oUser.movicAccountId)
    }

    if(!movicAccount) {
      return res.json({ ok: false, error: "Cannot find movic account" })
    }

    const movic = new Movic({
      _id: mongoose.Types.ObjectId(),
      title: movicName
    })
    
    await movic.save()

    const movicProject = new MovicProject({
      _id: mongoose.Types.ObjectId(),
      movicId: movic._id,
      movicAccountId: movicAccount._id
    })

    await movicProject.save()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}

export {
  iCreateMovicProject
}