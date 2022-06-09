import { GetUniversityAccountCookie } from "../H/Cookie.js"
import { DevUnivAccount } from "../H/DevUser.js"

export function iUnivAuth(req, res, next) {
  try {
    //For development convenience
    const devUnivAccount = DevUnivAccount()
    if(devUnivAccount) {
      req.univAccount = devUnivAccount
      next()
      return
    }
    
    req.univAccount = GetUniversityAccountCookie(req)
    next()
  } catch(err) {
    return res.json({ ok:false, error: "Please login your university"})
  }
}