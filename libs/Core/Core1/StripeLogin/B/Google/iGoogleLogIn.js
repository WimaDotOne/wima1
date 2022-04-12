import mongoose from "mongoose"
import Login from "../Model/Login.js"
import { SetLoginCookie } from "../H/Cookie.js"

async function iGoogleLogIn(req, res) {
  try {
    const googleLogin = req.googleLogin

    if(!googleLogin) {
      return res.json({ok: false, error: "Google login failed unexpectedly."})
    }

    const googleId = googleLogin.sub
    const gMail = googleLogin.email
    const gName = googleLogin.name
    const gPictureUrl = googleLogin.picture
    const gGivenName = googleLogin.given_name
    const gFamilyName = googleLogin.family_name

    if(!googleId || !gMail) {
      return res.json({ok: false, error: "No Gmail or Google Id."})
    }

    if(!googleLogin.email_verified) {
      return res.json({ok: false, error: "Gmail is not verified."})
    }

    let login = await Login.findOne({
      googleId
    })

    if(!login) {
      login = new Login({
        _id: mongoose.Types.ObjectId(),
        googleId,
        gMail,
        gName,
        gGivenName,
        gFamilyName,
        gPictureUrl
      })

      await login.save()
    }

    SetLoginCookie(res, login._id)

    return res.json({ok: true})
  } catch (err) {
    return res.json({ok: false, error: err.message})
  }
}

export {
  iGoogleLogIn
} 