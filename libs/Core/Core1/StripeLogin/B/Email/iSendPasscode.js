import { RandomPasscode } from "../H/Random.js"
import { bConfig, GENERAL_INPUT_MAX } from "../../../../../../bConfig.js"
import Login from "../Model/Login.js"
import mongoose from "mongoose"
import { MonitorDailyPasscodeSend } from "../../../bCore1.js"
import { SendGrid, IsEmail } from "../../../../Core1/bCore1.js"

async function iSendPasscode(req, res) {
  try {
    const email = (req.body.email || "").trim().toLowerCase()

    if(email.length > GENERAL_INPUT_MAX || !IsEmail(email)) {
      return res.json({ok:false, error: "Invalid Email"})
    }

    let login = await Login.findOne({
      email
    })
    if(!login) {
      login = new Login({
        _id: mongoose.Types.ObjectId(),
        email,
      })
    }

    await MonitorDailyPasscodeSend()

    const code = RandomPasscode(6)
    login.passcode = code
    login.numPasscodeFail = 0

    const sg = new SendGrid()

    await login.save()

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
