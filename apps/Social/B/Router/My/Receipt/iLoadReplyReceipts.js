import mongoose from "mongoose"
import SocialReplyReceipt from "../../../Model/SocialReplyReceipt.js"

export async function iLoadReplyReceipts(req, res) {
  try{
    const replyReceipts = await SocialReplyReceipt.find({
      senderUnivAccountId: mongoose.Types.ObjectId(req.univAccount._id)
    }).sort({createUtcDay: -1}).limit(200)

    return res.json({ok: true, replyReceipts})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}