import { GetUserCookie } from "./H/Cookie.js"
import { DevUser } from "./H/DevUser.js"

function iAuth(req, res, next) {
  try {
    //For development convenience
    const devUser = DevUser()
    if(devUser) {
      req.user = devUser
      next()
      return
    }
    
    req.user = GetUserCookie(req)
    next()
  } catch(err) {
    return res.json({ ok:false, error: "Authorization failed."})
  }
}

export {
  iAuth
} 