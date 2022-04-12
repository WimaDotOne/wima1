import { DevLogin } from "./H/DevLogin.js"
import { GetLoginCookie } from "./H/Cookie.js"

async function iIsLoggedIn(req, res) {
  try {
    //For development convenience
    const devLogin = DevLogin()
    if(devLogin) {
      return res.json({ok: true, isLoggedIn: true})
    }

    const login = GetLoginCookie(req)

    if(login) {
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