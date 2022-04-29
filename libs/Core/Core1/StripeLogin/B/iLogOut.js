import { DeleteUserCookie } from "./H/Cookie.js"

function iLogOut(req, res) {
  try {
    DeleteUserCookie(res)

    return res.json({ok: true})
  } catch(err) {
    return res.json({ok:false, error: err.message })
  }
}

export {
  iLogOut
}