import mongoose from "mongoose"
import { SetUserCookie } from "../H/Cookie.js"
import EmailAccount from "../Model/EmailAccount.js"
import User from "../Model/User.js"

async function iOneTimeEmailLogin(req, res) {
  try {
    const email = (req.body.email || "").trim().toLowerCase()
    const passcode = (req.body.passcode || "").trim()

    const msgLoginFailed = "Login failed"
    const msgPasscodeExpired = "Passcode expired"
    const FAIL_MAX = 5

    if(!email) {
      return res.json({ok:false, error: msgLoginFailed})
    }
    const emailAccount = await EmailAccount.findOne({
      email
    })

    if(!emailAccount) {
      return res.json({ok:false, error: msgLoginFailed})
    }

    if(emailAccount.numOneTimePasscodeFail && emailAccount.numOneTimePasscodeFail>=FAIL_MAX) {
      //even passcode is correct this time
      return res.json({ok:false, error: msgPasscodeExpired})
    }
    if(!emailAccount.oneTimePasscode) {
      //shouldn't happen
      return res.json({ok:false , error: msgPasscodeExpired})
    }

    if(passcode !== emailAccount.oneTimePasscode) {
      emailAccount.numOneTimePasscodeFail = emailAccount.numOneTimePasscodeFail + 1

      await emailAccount.save()
      
      //no need to wait to next time to tell user passcode expires
      const msg = emailAccount.numOneTimePasscodeFail>=FAIL_MAX ? msgPasscodeExpired : msgLoginFailed
      return res.json({ok:false, error: msg})
    }

    emailAccount.numOneTimePasscodeFail = 0
    emailAccount.emailVerified = true
    emailAccount.oneTimePasscode = ""
    await emailAccount.save()

    let user = await User.findOne({
      emailAccountId: emailAccount._id
    })

    if(!user) {
      user = new User({
        _id: mongoose.Types.ObjectId(),
        emailAccountId: emailAccount._id
      })
      await user.save()
    }

    SetUserCookie(res, user._id)
   
    return res.json({ok: true})
  } catch (err) {
    return res.json({ok:false, error: err.message})
  }
}

export {
  iOneTimeEmailLogin
}
