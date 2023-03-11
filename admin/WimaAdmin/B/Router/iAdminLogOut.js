import { DeleteAdminCookie } from "../../../../libs/Core/Core1/StripeLogin/B/H/Cookie.js"

export function iAdminLogOut(req, res) {
  try {
    DeleteAdminCookie(res)

    return res.json({ok: true})
  } catch(err) {
    return res.json({ok:false, error: err.message })
  }
}