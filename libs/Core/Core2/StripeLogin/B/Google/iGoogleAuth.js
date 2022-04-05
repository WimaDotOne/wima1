import { OAuth2Client } from "google-auth-library"
import { bConfig } from "../../../../../../bConfig.js"

async function iGoogleAuth(req, res, next) {
  try {
    const clientId = bConfig.googleClientId
    if(!clientId) {
      return res.json({ok: false, error: "Google login is not supported"})
    }
    const data = req.body.data
    const credential = data.credential
    const client = new OAuth2Client(clientId);
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: clientId
    })
    req.googleLogin = ticket.getPayload()

    next()
  } catch (err) {
    res.json({ok: false, error: err.message})
  }
}

export {
  iGoogleAuth
} 