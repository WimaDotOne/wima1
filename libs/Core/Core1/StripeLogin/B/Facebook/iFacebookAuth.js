import axios from "axios"

async function iFacebookAuth(req, res, next) {
  try {
    const authResponse = req.body.authResponse

    if(!authResponse) {
      return res.json({ok:false, error: "Facebook Auth failed."})
    }

    const accessToken = authResponse.accessToken
    const userID = authResponse.userID

    const url = `https://graph.facebook.com/${userID}?fields=id,name,picture,email&access_token=${accessToken}`

    const fbRes = await axios.get(url)

    req.facebookLogin = fbRes.data

    next()
  } catch (err) {
    return res.json({ok: false, error: err.message})
  }
}

export {
  iFacebookAuth
} 