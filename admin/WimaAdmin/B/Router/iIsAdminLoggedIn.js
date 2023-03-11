import { DevAdmin } from "../../../../libs/Core/Core1/StripeLogin/B/H/DevUser.js"
import { TryGetAdminCookie } from "../../../../libs/Core/Core1/StripeLogin/B/H/Cookie.js"

export async function iIsAdminLoggedIn(req, res) {
  try {
    //For development convenience
    const devAdmin = DevAdmin()

    let admin = null

    if(devAdmin) {
      admin = devAdmin
    } else {
      admin = TryGetAdminCookie(req)
    }

    const isAdminLoggedIn = !!admin

    return res.json({ ok:true, isAdminLoggedIn })
  } catch(err) {
    return res.json({ ok:false, error: err.message })
  }
}