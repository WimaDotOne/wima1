import mongoose from "mongoose"
import GoogleAccount from "../Model/GoogleAccount.js"
import { SetUserCookie } from "../H/Cookie.js"
import User from "../Model/User.js"

async function iGoogleLogIn(req, res) {
  try {
    const googleLogin = req.googleLogin

    if(!googleLogin) {
      return res.json({ok: false, error: "Google googleAccount failed unexpectedly."})
    }

    const googleId = googleLogin.sub
    const gmail = googleLogin.email
    const name = googleLogin.name
    const pictureUrl = googleLogin.picture
    const givenName = googleLogin.given_name
    const familyName = googleLogin.family_name

    if(!googleId || !gmail) {
      return res.json({ok: false, error: "No Gmail or Google Id."})
    }

    if(!googleLogin.email_verified) {
      return res.json({ok: false, error: "Gmail is not verified."})
    }

    let googleAccount = await GoogleAccount.findOne({
      googleId
    })

    if(!googleAccount) {
      googleAccount = new GoogleAccount({
        _id: mongoose.Types.ObjectId(),
        googleId,
        gmail,
        name,
        givenName,
        familyName,
        pictureUrl
      })

      await googleAccount.save()
    }

    let user = await User.findOne({
      googleAccountId: googleAccount._id
    })

    if(!user) {
      user = new User({
        _id: mongoose.Types.ObjectId(),
        googleAccountId: googleAccount._id
      })
      await user.save()
    }

    SetUserCookie(res, user._id)

    return res.json({ok: true})
  } catch (err) {
    return res.json({ok: false, error: err.message})
  }
}

export {
  iGoogleLogIn
} 