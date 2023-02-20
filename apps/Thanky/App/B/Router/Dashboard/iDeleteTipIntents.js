import mongoose from "mongoose"
import ThankyTipIntent from "../../Model/ThankyTipIntent.js"
import { asyGetOrCreateThankyJobIds } from "../H/asyGetOrCreateThankyJobIds.js"

export async function iDeleteTipIntents(req, res) {
  try {

    const tipIntentIds = req.body.tipIntentIds || []

    if(tipIntentIds.length > 100) {
      return res.json({ ok: false, error: "Please delete less than 100 messages at a time"})
    }

    if(tipIntentIds.length < 1) {
      return res.json({ ok: false, error: "No message selected."})
    }

    const tipIntentObjectIds = []

    for(const id of tipIntentIds) {
      if(!id) continue
      tipIntentObjectIds.push(mongoose.Types.ObjectId(id))
    }

    const tipIntents = await ThankyTipIntent.find ({
      _id: { $in: tipIntentObjectIds}
    })

    const [job1Id, job2Id] = await asyGetOrCreateThankyJobIds(req)

    const id1 = job1Id.toString()
    const id2 = job2Id.toString()
    for(const tipIntent of tipIntents) {
      const id = tipIntent.jobId.toString()
      if(id !== id1 && id !== id2) {
        //the tipIntent does not belong to the login user
        return res.json({ ok: false, error: "Cannot delete the messages for unexpected reasons."})
      }
    }

    await ThankyTipIntent.deleteMany({
      _id: { $in: tipIntentObjectIds }
    })

    return res.json({ ok: true })
  } catch(err) {
    return res.json({ ok: false, error: err.message})
  }   
}