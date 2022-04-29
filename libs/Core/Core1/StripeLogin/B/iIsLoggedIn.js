import { DevUser } from "./H/DevUser.js"
import { GetUserCookie } from "./H/Cookie.js"

async function iIsLoggedIn(req, res) {
  try {
    //For development convenience
    const devUser = DevUser()
    if(devUser) {
      return res.json({ok: true, isLoggedIn: true})
    }

    const user = GetUserCookie(req)

    if(user) {
      return res.json({ok: true, isLoggedIn: true})
    }

    return res.json({ ok:true })
  } catch(err) {
    return res.json({ ok:true })
  }
}

export {
  iIsLoggedIn
} 