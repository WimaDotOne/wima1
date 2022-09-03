import SocialService from "../../Model/SocialService.js"
import SocialAccount from "../../Model/SocialAccount.js"
import { asyGetUnivAccountInfo } from "../H/GetUnivAccountInfo.js"
import { NowUtcDay, SendGrid, UniversityAccount } from "../../../../../libs/Core/Core1/bCore1.js"
import { GENERAL_TEXTAREA_MAX } from "../../../../../bConfig.js"
import SocialReplyReceipt from "../../Model/SocialReplyReceipt.js"
import mongoose from "mongoose"

export async function iReplyService(req, res) {
  try{
    
    const serviceId = req.body.serviceId
    const message = req.body.message || ""

    if(message.length > GENERAL_TEXTAREA_MAX) {
      return res.json({ok: false, error: "Message is too long"})
    }

    const service2 = await SocialService.findById(serviceId)

    if(!service2) {
      return res.json({ok: false, error: "Cannot find the service or goods"})
    }

    const socialAccount2 = await SocialAccount
      .findById(service2.socialAccountId).populate("socialProfileId")

    if(!socialAccount2) {
      return res.json({ok: false, error: "Cannot find the Sociable Account for the recipient."})
    }

    const univAccount2 = await UniversityAccount.findOne({
      socialAccountId: socialAccount2._id
    })

    if(!univAccount2) {
      return res.json({ok: false, error: "Cannot find the University Account for the recipient."})
    }
    
    const profile2 = socialAccount2.socialProfileId
    const givenName2 = profile2.givenName
    const email2 = univAccount2.email


    const univAccountInfo = await asyGetUnivAccountInfo(req)
    const univAccountId1 = univAccountInfo.univAccountId
    const givenName1 = univAccountInfo.givenName
    const email1 = univAccountInfo.email
    const domain = univAccountInfo.domain

    const receipt = new SocialReplyReceipt({
      _id: mongoose.Types.ObjectId(),
      domain,
      senderUnivAccountId: univAccountId1,
      receiverUnivAccountId: univAccount2._id,
      createUtcDay: NowUtcDay(),
      
      serviceName: service2.name,
      serviceShortDescription: service2.shortDescription,
      serviceDescription: (service2.description || "").trim(),
      servicePrice: service2.price
    })

    await receipt.save()

    const sg = new SendGrid()

    sg.SendEmail(
      [email1, email2], 
      "Sociable Notification",
      ReplyEmailHtml(givenName1, givenName2, email1,email2, message, receipt)
    )

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}

function ReplyEmailHtml(givenName1, givenName2, email1, email2, message, receipt) {
  return(
`
<div style="padding: 10px;">
${givenName1} and ${givenName2}
<br/><br/>
${givenName1} replied ${givenName2}'s Sociable post from www.wima.one. Your emails are ${email1} and ${email2}. Please use email for future communication.
<br/><br/>
<div style="background:#96dcf7; padding: 1px 5px; color: white;">
Message from ${givenName1}
</div>
<pre style="padding: 0 10px;">${message}</pre>
<br/><br/>
<div style="background:#96dcf7; padding: 1px 5px; color: white;">
Service or goods by ${givenName2}
</div>
<div style="padding: 10px;">
  <span style="color: #888;">Name:</span>
  ${receipt.serviceName}
  <br/>
  <span style="color: #888;">Shor Description:</span>
  ${receipt.serviceShortDescription}
  <br/>
  <div style="color: #888;">Description:</div>
  <pre>
  ${receipt.serviceDescription}
  </pre>
  <span style="color: #888;">Price:</span>
  ${receipt.servicePrice}
</div>
<br/><br/>
<br/>
<div style="color: #888;">- Auto generated email, no need to reply</div>
</div>
`
)
}