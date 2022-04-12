import Login from "./Model/Login.js"

async function iLoadLogin(req, res) {
  try {
    const login = await Login.findById(req.login._id)

    if(!login) {
      return res.json({ok: false, error: "Cannot find login info"})
    }

    const loginInfo = { name: "", email: "", title: ""}
    if(login.googleId) {
      loginInfo.title = "Signed in with Google"
      loginInfo.name = login.gName
      loginInfo.email = login.gMail
    } else if(login.facebookId) {
      loginInfo.title = "Signed in with Facebook"
      loginInfo.name = login.fName
      loginInfo.email = login.fMail
    } else {
      loginInfo.title = "Signed in with Email"
      loginInfo.email = login.email
    }

    return res.json({ok: true, loginInfo})
  } catch(err) {
    return res.json({ok:false, error: err.message })
  }
}

export {
  iLoadLogin
} 