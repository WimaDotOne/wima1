import { SetLoginCookie } from "../H/Cookie.js"
import Login from "../Model/Login.js"

async function iEmailLogin(req, res) {
  try {
    const email = (req.body.email || "").trim().toLowerCase()
    const passcode = (req.body.passcode || "").trim()

    const msgLoginFailed = "Login failed"
    const msgPasscodeExpired = "Passcode expired"
    const FAIL_MAX = 5

    if(!email) {
      return res.json({ok:false, error: msgLoginFailed})
    }
    const login = await Login.findOne({
      email
    })

    if(!login) {
      return res.json({ok:false, error: msgLoginFailed})
    }

    if(login.numPasscodeFail && login.numPasscodeFail>=FAIL_MAX) {
      //even passcode is correct this time
      return res.json({ok:false, error: msgPasscodeExpired})
    }
    if(!login.passcode) {
      //shouldn't happen
      return res.json({ok:false , error: msgPasscodeExpired})
    }

    if(passcode !== login.passcode) {
      if(!login.numPasscodeFail) {
        login.numPasscodeFail = 1
      } else {
        login.numPasscodeFail = login.numPasscodeFail + 1
      }

      await login.save()
      
      //no need to wait to next time to tell user passcode expires
      const msg = login.numPasscodeFail>=FAIL_MAX ? msgPasscodeExpired : msgLoginFailed
      return res.json({ok:false, error: msg})
    }

    login.numPasscodeFail = 0
    login.emailVerified = true
    login.passcode = ""
    await login.save()

    SetLoginCookie(res, login._id)
   
    return res.json({ok: true})
  } catch (err) {
    return res.json({ok:false, error: err.message})
  }
}

export {
  iEmailLogin
}
