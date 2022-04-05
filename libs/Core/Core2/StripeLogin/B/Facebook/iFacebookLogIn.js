import mongoose from "mongoose"
import Login from "../Model/Login.js"
import { SetLoginCookie } from "../H/Cookie.js"

async function iFacebookLogIn(req, res) {
  try {
    const facebookLogin = req.facebookLogin
    const facebookId = facebookLogin.id
    const fMail = facebookLogin.email
    const fName = facebookLogin.name
    let fPictureUrl = ""
    let fIsPictureSilhouette = undefined
    if(facebookLogin.picture && facebookLogin.picture.data) {
      fPictureUrl = facebookLogin.picture.data.url
      fIsPictureSilhouette = facebookLogin.picture.data.is_silhouette
    }

    let login = await Login.findOne({
      facebookId
    })

    if(!login) {
      login = new Login({
        _id: mongoose.Types.ObjectId(),
        facebookId,
        fMail,
        fName,
        fPictureUrl,
        fIsPictureSilhouette
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
  iFacebookLogIn
} 