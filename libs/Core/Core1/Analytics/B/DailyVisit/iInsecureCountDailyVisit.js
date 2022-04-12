import DailyCounter from "../Model/DailyCounter.js"
import { GetVisitCookie, SetVisitCookie } from "../H/Cookie.js"

async function iInsecureCountDailyVisit(req, res) {
  try {
    if(GetVisitCookie(req)) {
      return res.json({ok: true})
    }

    const numDay = Date.now() / (24*60*60*1000)
    await DailyCounter.findOneAndUpdate({
      numDay
    }, {
      $inc: { numVisit: 1}
    }, {upsert: true, new: true})
    
    SetVisitCookie(res)

    return res.json({ok: true})
  }
  catch(err) {
    return res.json({ok: false, error: err.message})
  }
}

export {
  iInsecureCountDailyVisit
}
