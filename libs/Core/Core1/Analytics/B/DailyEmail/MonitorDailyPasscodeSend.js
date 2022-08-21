import { bConfig } from "../../../../../../bConfig.js"
import { SendGrid } from "../../../../Core1/bCore1.js"
import DailyCounter from "../Model/DailyCounter.js"

async function MonitorDailyPasscodeSend() {

  if(!bConfig.dailyPasscodeSendMax) {
    throw new Error("Email login is not supported.")
  }

  const numDay = Math.floor(Date.now() / (24*60*60*1000))
  const counter = await DailyCounter.findOneAndUpdate({
    numDay
  }, {
    $inc: { numPasscodeSend: 1}
  }, {upsert: true, new: true})
  
  if(counter && counter.numPasscodeSend > bConfig.dailyPasscodeSendMax) {
    const monitorEmail = (process.env.A_MONITOR_EMAIL || "").trim()
    if (monitorEmail) {
      const sg = new SendGrid()
      sg.SendEmail(monitorEmail, 
        "Email login is frozen",
        `Daily passcode send > ${bConfig.dailyPasscodeSendMax}`)
    }
    throw new Error("Email login is limited today, try again tomorrow.")
  }
}

export {
  MonitorDailyPasscodeSend
}
