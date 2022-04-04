import sgMail from "@sendgrid/mail"
import { DeDuplicate } from "./H/Array.js"
import { bConfig } from "../../../../bConfig.js"

export class SendGrid {
  senderEmail
  senderName
  apiKey

  constructor() {

    const apiKey = process.env.SENDGRID_API_KEY
    const senderEmail = bConfig.sendGridSenderEmail
    const senderName = bConfig.sendGridSenderName || ""

    if(!apiKey || !senderEmail) {
      throw new Error("Email functionality is not configured")
    }
    this.senderEmail = senderEmail
    this.senderName = senderName
    this.apiKey = apiKey
  }

  SendEmail(to, subject, html) {
    sgMail.setApiKey(this.apiKey)
    if(typeof to !== "string") {
      to = DeDuplicate(to)
    }
    const msg = {
      to,
      from: {
        email: this.senderEmail,
        name: this.senderName
      },
      subject,
      html
    }

    sgMail.send(msg)
    .then(()=>{})
    .catch((err) => {
      //It takes a long time to send an email, no time to give browser a response
      console.log("================== Sendgrid Error ==================")
      console.log(new Date())
      console.error(err)
      console.log("================== Sendgrid Error End ==================")
    })
  }
}