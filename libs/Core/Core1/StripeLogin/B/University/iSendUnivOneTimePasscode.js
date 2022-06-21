import { RandomPasscode } from "../H/Random.js"
import { bConfig, GENERAL_INPUT_MAX } from "../../../../../../bConfig.js"
import mongoose from "mongoose"
import { IsUniversityEmail, MonitorDailyPasscodeSend } from "../../../bCore1.js"
import { SendGrid, IsEmail } from "../../../bCore1.js"
import UniversityAccount from "../Model/UniversityAccount.js"
import { GetUniversityDomain } from "../../../Email/B/IsUniversityEmail.js"

export async function iSendUnivOneTimePasscode(req, res) {
  try {
    const email = (req.body.email || "").trim().toLowerCase()
    const givenName = (req.body.givenName || "").trim()
    const familyName = (req.body.familyName || "").trim()

    if( givenName.length > GENERAL_INPUT_MAX ||
        familyName.length > GENERAL_INPUT_MAX) {
      return res.json({ok: false, error: "Name is too long"})
    }

    if(email.length > GENERAL_INPUT_MAX || !IsEmail(email)) {
      return res.json({ok:false, error: "Invalid Email"})
    }

    if(!IsUniversityEmail(email)) {
      return res.json({ok:false, error: "The university email is not currently allowed."})
    }

    let univAccount = await UniversityAccount.findOne({
      email
    })
    if(!univAccount) {

      if(!familyName || !givenName) {
        return res.json({ok: false, error: "Full name is required for first time login"})
      }

      univAccount = new UniversityAccount({
        _id: mongoose.Types.ObjectId(),
        email,
        domain: GetUniversityDomain(email) // Only need to be set once when new
      })
    }

    await MonitorDailyPasscodeSend()

    // Modify name if account exists
    if(givenName) {
      univAccount.givenName = givenName
    }
    if(familyName) {
      univAccount.familyName = familyName
    }
    const code = RandomPasscode(6)
    univAccount.oneTimePasscode = code
    univAccount.numOneTimePasscodeFail = 0
    

    const sg = new SendGrid()

    await univAccount.save()

    sg.SendEmail(email,
      `${bConfig.brand} one-time passcode`, `Your university login one-time passcode is ${code}`)
    
    return res.json({ok: true})
  } catch (err) {
    return res.json({ok:false, error: err.message})
  }
}
