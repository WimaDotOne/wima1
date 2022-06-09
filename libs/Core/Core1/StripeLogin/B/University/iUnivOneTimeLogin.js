import { SetUniversityAccountCookie } from "../H/Cookie.js"
import UniversityAccount from "../Model/UniversityAccount.js"

export async function iUnivOneTimeLogin(req, res) {
  try {
    const email = (req.body.email || "").trim().toLowerCase()
    const passcode = (req.body.passcode || "").trim()

    const msgLoginFailed = "Login failed"
    const msgPasscodeExpired = "Passcode expired"
    const FAIL_MAX = 5

    if(!email) {
      return res.json({ok:false, error: msgLoginFailed})
    }
    const univAccount = await UniversityAccount.findOne({
      email
    })

    if(!univAccount) {
      return res.json({ok:false, error: msgLoginFailed})
    }

    if(univAccount.numOneTimePasscodeFail && univAccount.numOneTimePasscodeFail>=FAIL_MAX) {
      //even passcode is correct this time
      return res.json({ok:false, error: msgPasscodeExpired})
    }
    if(!univAccount.oneTimePasscode) {
      //shouldn't happen
      return res.json({ok:false , error: msgPasscodeExpired})
    }

    if(passcode !== univAccount.oneTimePasscode) {
      univAccount.numOneTimePasscodeFail = univAccount.numOneTimePasscodeFail + 1

      await univAccount.save()
      
      //no need to wait to next time to tell user passcode expires
      const msg = univAccount.numOneTimePasscodeFail>=FAIL_MAX ? msgPasscodeExpired : msgLoginFailed
      return res.json({ok:false, error: msg})
    }

    univAccount.numOneTimePasscodeFail = 0
    univAccount.emailVerified = true
    univAccount.oneTimePasscode = ""
    await univAccount.save()

    SetUniversityAccountCookie(res, univAccount._id)
   
    return res.json({ok: true})
  } catch (err) {
    return res.json({ok:false, error: err.message})
  }
}