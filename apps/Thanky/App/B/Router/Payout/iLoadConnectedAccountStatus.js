import { asyGetOrCreateThankyAccountId } from "../H/asyGetOrCreateThankyAccountId.js"
import ThankyAccount from "../../Model/ThankyAccount.js" 
import { asyGetConnectedAccountStatus } from "../H/asyGetConnectedAccountStatus.js"

export async function iLoadConnectedAccountStatus(req, res) {
  try {
    
    const thankyAccountId = await asyGetOrCreateThankyAccountId(req)

    const thankyAccount = await ThankyAccount.findById(thankyAccountId)

    if(!thankyAccount) {
      return res.json({ok:false, error: "Cannot find Thanky account" })
    }

    const status = await asyGetConnectedAccountStatus(thankyAccount.stripeConnectedAccountId)

    return res.json({ok: true, status})

  } catch(err) {
    return res.json({ok:false, error: err.message })
  }
}