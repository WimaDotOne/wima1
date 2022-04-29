import mongoose from "mongoose"
import FacebookAccount from "../Model/FacebookAccount.js"
import { SetUserCookie } from "../H/Cookie.js"
import User from "../Model/User.js"

async function iFacebookLogIn(req, res) {
  try {
    const facebookLogin = req.facebookLogin
    const facebookId = facebookLogin.id
    const email = facebookLogin.email
    const name = facebookLogin.name
    let pictureUrl = ""
    let isPictureSilhouette = undefined
    if(facebookLogin.picture && facebookLogin.picture.data) {
      pictureUrl = facebookLogin.picture.data.url
      isPictureSilhouette = facebookLogin.picture.data.is_silhouette
    }

    let  facebookAccount = await FacebookAccount.findOne({
      facebookId
    })

    if(!facebookAccount) {
       facebookAccount = new FacebookAccount({
        _id: mongoose.Types.ObjectId(),
        facebookId,
        email,
        name,
        pictureUrl,
        isPictureSilhouette
      })

      await  facebookAccount.save()
    }

    let user = await User.findOne({
      facebookAccountId: facebookAccount._id
    })

    if(!user) {
      user = new User({
        _id: mongoose.Types.ObjectId(),
        facebookAccountId: facebookAccount._id
      })
      await user.save()
    }

    SetUserCookie(res,  user._id)

    return res.json({ok: true})
  } catch (err) {
    return res.json({ok: false, error: err.message})
  }
}

export {
  iFacebookLogIn
} 