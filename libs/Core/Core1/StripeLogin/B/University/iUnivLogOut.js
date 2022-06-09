import { DeleteUniversityAccountCookie } from "../H/Cookie.js"

export function iUnivLogOut(req, res) {
  try {
    DeleteUniversityAccountCookie(res)

    return res.json({ok: true})
  } catch(err) {
    return res.json({ok:false, error: err.message })
  }
}