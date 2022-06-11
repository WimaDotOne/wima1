import { DevUser, DevUnivAccount } from "./H/DevUser.js"
import { GetUserCookie, GetUniversityAccountCookie } from "./H/Cookie.js"

async function iIsLoggedIn(req, res) {
  try {
    //For development convenience
    const devUser = DevUser()
    const devUnivAccount = DevUnivAccount()

    let user = null
    let univAccount = null

    if(devUser) {
      user = devUser
    } else {
      user = GetUserCookie(req)
    }

    if(devUnivAccount) {
      univAccount = devUnivAccount
    } else {
      univAccount = GetUniversityAccountCookie(req)
    }
    const isLoggedIn = !!user
    const isLoggedInUniv = !!univAccount

    return res.json({ ok:true, isLoggedIn, isLoggedInUniv })
  } catch(err) {
    return res.json({ ok:true })
  }
}

export {
  iIsLoggedIn
} 