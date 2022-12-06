import { User } from "../../../../../libs/Core/Core1/bCore1.js"
import TipAccount from "../../Model/TipAccount.js"

export async function asyGetTipAccount(req) {

  const userId = req.user._id
  const user = await User.findById(userId)

  if(!user) {
    throw new Error("Cannot find user")
  }

  let tipAccount = null
  if(!user.tipAccountId) {
    tipAccount = new TipAccount({
      _id: mongoose.Types.ObjectId()
    })

    await tipAccount.save()
    user.tipAccountId = tipAccount._id
    user.save()
  } else {
    tipAccount = await TipAccount.findById(user.tipAccountId)
  }

  if(!tipAccount || !tipAccount._id) {
    return res.json({ ok: false, error: "Cannot find Tip account" })
  }

  return tipAccount
}

export async function asyGetTipAccountInfo(req) {

  const userId = req.user._id
  const user = await User.findById(userId).populate("tipAccountId")

  if(!user) {
    throw new Error("Cannot find user")
  }

  const tipAccount = user.tipAccountId

  if(!tipAccount || !tipAccount._id) {
    throw new Error("Cannot find movic account")
  }

  return tipAccount
}