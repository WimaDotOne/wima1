import mongoose from "mongoose"
import User from "../../../../../../libs/Core/Core1/StripeLogin/B/Model/User.js"
import ThankyAccount from "../../Model/ThankyAccount.js"

export async function asyGetOrCreateThankyAccountId(req) {

  const userId = req.user?._id

  if(!userId) {
    throw new Error("Cannot find user id")
  }

  const user = await User.findById(userId)

  if(!user) {
    throw new Error("Cannot find user")
  }

  if(!user.thankyAccountId) {
    const thankyAccount = new ThankyAccount({
      _id: mongoose.Types.ObjectId()
    })

    await user.save()
  }

  if(!user.thankyAccountId) {
    throw new Error("Cannot get or create Thanky account")
  }

  return user.thankyAccountId
}