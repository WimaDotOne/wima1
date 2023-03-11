import { GetAdminCookie } from "../../../../libs/Core/Core1/StripeLogin/B/H/Cookie.js"
import { DevAdmin } from "../../../../libs/Core/Core1/StripeLogin/B/H/DevUser.js"

export function iAdminAuth(req, res, next) {
  try {
    //For development convenience
    const devAdmin = DevAdmin()
    if(devAdmin) {
      req.admin = devAdmin
      next()
      return
    }
    
    req.admin = GetAdminCookie(req)
    next()
  } catch(err) {
    return res.json({ ok:false, error: "Please log in as admin."})
  }
}