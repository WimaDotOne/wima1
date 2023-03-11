import { SetAdminCookie } from "../../../../libs/Core/Core1/StripeLogin/B/H/Cookie.js"

export async function iAdminLogin(req, res) {
  try {
    const passcode = (req.body.passcode || "").trim()

    const adminPasscode = process.env.ADMIN_PASSCODE
    if(!adminPasscode || passcode !== adminPasscode) {
      return res.json({ok:false, error: "Wrong passcode"})
    }

    SetAdminCookie(res, "*")
   
    return res.json({ok: true})
  } catch (err) {
    return res.json({ok:false, error: err.message})
  }
}
