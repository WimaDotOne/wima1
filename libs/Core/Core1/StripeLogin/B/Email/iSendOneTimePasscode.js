import { RandomPasscode } from "../H/Random.js"
import { bConfig, GENERAL_INPUT_MAX } from "../../../../../../bConfig.js"
import mongoose from "mongoose"
import { MonitorDailyPasscodeSend } from "../../../bCore1.js"
import { SendGrid, IsEmail } from "../../../bCore1.js"
import EmailAccount from "../Model/EmailAccount.js"

async function iSendPasscode(req, res) {
  try {
    const email = (req.body.email || "").trim().toLowerCase()

    if(email.length > GENERAL_INPUT_MAX || !IsEmail(email)) {
      return res.json({ok:false, error: "Invalid Email"})
    }

    let emailAccount = await EmailAccount.findOne({
      email
    })
    if(!emailAccount) {
      emailAccount = new EmailAccount({
        _id: mongoose.Types.ObjectId(),
        email,
      })
    }

    await MonitorDailyPasscodeSend()

    const code = RandomPasscode(6)
    emailAccount.oneTimePasscode = code
    emailAccount.numOneTimePasscodeFail = 0

    const sg = new SendGrid()

    await emailAccount.save()

    sg.SendEmail(email,
      `${bConfig.brand} one-time passcode`, `Your ${bConfig.brand} one-time passcode is ${code}`)
    
    return res.json({ok: true})
  } catch (err) {
    return res.json({ok:false, error: err.message})
  }
}

export {
  iSendPasscode
} 
