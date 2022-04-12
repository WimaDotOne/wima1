import { bConfig } from "../../../../../../bConfig.js"
import { SendGrid } from "../../../../Core1/bCore1.js"
import DailyCounter from "../Model/DailyCounter.js"

async function MonitorDailyPasscodeSend() {

  if(!bConfig.dailyPasscodeSendMax) {
    throw new Error("Email login is not supported.")
  }

  const numDay = Date.now() / (24*60*60*1000)
  const counter = await DailyCounter.findOneAndUpdate({
    numDay
  }, {
    $inc: { numPasscodeSend: 1}
  }, {upsert: true, new: true})
  
  if(counter && counter.numPasscodeSend > bConfig.dailyPasscodeSendMax) {
    const contactMe = process.env.CONTACT_ME
    if (contactMe) {
      const sg = new SendGrid()
      sg.SendEmail(contactMe, 
        "Email login is frozen",
        `Daily passcode send > ${bConfig.dailyPasscodeSendMax}`)
    }
    throw new Error("Email login is limited today, try again tomorrow.")
  }
}

export {
  MonitorDailyPasscodeSend
}
