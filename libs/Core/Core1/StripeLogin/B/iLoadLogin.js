import User from "./Model/User.js"

async function iLoadLogin(req, res) {
  try {
    const user = await User.findById(req.user._id)
      .populate("emailAccountId")
      .populate("googleAccountId")
      .populate("facebookAccountId")

    const msgNoLoginInfo = "Cannot find login info"
    if(!user) {
      return res.json({ok: false, error: msgNoLoginInfo})
    }

    const loginInfo = { name: "", email: "", title: ""}
    if(user.emailAccountId) {
      const emailAccount = user.emailAccountId
      loginInfo.title = "Signed in with Email"
      loginInfo.email = emailAccount.email
    } else if (user.googleAccountId) {
      const googleAccount = user.googleAccountId
      loginInfo.title = "Signed in with Google"
      loginInfo.name = googleAccount.name
      loginInfo.email = googleAccount.gmail
    } else if (user.facebookAccountId) {
      const facebookAccount = user.facebookAccountId
      loginInfo.title = "Signed in with Facebook"
      loginInfo.name = facebookAccount.name
      loginInfo.email = facebookAccount.email
    }

    if(!loginInfo.title) {
      return res.json({ok: false, error: msgNoLoginInfo})
    }

    return res.json({ok: true, loginInfo})
  } catch(err) {
    return res.json({ok:false, error: err.message })
  }
}

export {
  iLoadLogin
} 