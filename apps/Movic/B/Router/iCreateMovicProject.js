import mongoose from "mongoose"
import { GENERAL_INPUT_MAX, MovicConfig } from "../../../../bConfig.js"
import { User } from "../../../../libs/Core/Core1/bCore1.js"
import Movic from "../Model/Movic.js"
import MovicAccount from "../Model/MovicAccount.js"
import MovicProject from "../Model/MovicProject.js"

async function iCreateMovicProject(req, res) {
  try{
    const movicName = (req.body.movicName || "").trim()

    if(movicName.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Movic name is too long" })
    }

    const user = await User.findById(req.user._id)

    if(!user) {
      return res.json({ ok: false, error: "Cannot find user" })
    }

    let movicAccount = null
    if(!user.movicAccountId) {
      movicAccount = new MovicAccount({
        _id: mongoose.Types.ObjectId()
      })

      await movicAccount.save()
      user.movicAccountId = movicAccount._id
      user.save()
    } else {
      movicAccount = await MovicAccount.findById(user.movicAccountId)
    }

    if(!movicAccount) {
      return res.json({ ok: false, error: "Cannot find movic account" })
    }

    //A movic account can only have 100 movics
    const movicCount = await Movic.count({
      movicAccountId: movicAccount._id
    })
    const movicMax = process.env.MOVIC_MAX_PER_ACCOUNT || MovicConfig.movicMaxPerAccount
    if(movicCount > movicMax) {
      return res.json({ ok: false, error: "Movic creation reach limit" })
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