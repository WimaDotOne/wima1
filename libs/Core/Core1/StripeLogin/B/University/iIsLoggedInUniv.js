import { GetUniversityAccountCookie } from "../H/Cookie.js"
import { DevUnivAccount } from "../H/DevUser.js"

export async function iIsLoggedInUniv(req, res) {
  try {
    //For development convenience
    const devUnivAccount = DevUnivAccount()
    if(devUnivAccount) {
      return res.json({ok: true, isLoggedIn: true})
    }

    const univAccount = GetUniversityAccountCookie(req)

    if(univAccount) {
      return res.json({ok: true, isLoggedIn: true})
    }

    return res.json({ ok:true })
  } catch(err) {
    return res.json({ ok:true })
  }
}