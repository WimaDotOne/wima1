import { GetLoginCookie } from "./H/Cookie.js"
import { DevLogin } from "./H/DevLogin.js"

function iAuth(req, res, next) {
  try {
    //For development convenience
    const devLogin = DevLogin()
    if(devLogin) {
      req.login = devLogin
      next()
      return
    }

    req.login = GetLoginCookie(req)
    next()
  } catch(err) {
    return res.json({ ok:false, error: "Authorization failed."})
  }
}

export {
  iAuth
} 