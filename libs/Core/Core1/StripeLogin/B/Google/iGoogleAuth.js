import { OAuth2Client } from "google-auth-library"

async function iGoogleAuth(req, res, next) {
  try {
    const clientId = process.env.GOOGLE_CLIENT_ID
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