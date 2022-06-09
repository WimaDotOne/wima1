import UniversityAccount from "../Model/UniversityAccount.js"

export async function iLoadUnivLogin(req, res) {
  try {
    const univAccount = await UniversityAccount.findById(req.univAccount._id)

    const msgNoLoginInfo = "Cannot find university account info"
    if(!univAccount) {
      return res.json({ok: false, error: msgNoLoginInfo})
    }

    const info = { 
      name: univAccount.givenName + " " + univAccount.familyName, 
      email: univAccount.email,
      domain: univAccount.domain
    }

    return res.json({ok: true, info})
  } catch(err) {
    return res.json({ok:false, error: err.message })
  }
}