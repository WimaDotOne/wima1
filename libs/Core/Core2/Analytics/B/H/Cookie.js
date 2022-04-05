const VISIT = "Visit"

function SetVisitCookie(res) {

  res.cookie(VISIT, "Visit", {
    maxAge: 24*60*60*1000,  //1 hour
    httpOnly: true
  })
}

function GetVisitCookie(req) {
  return req.cookies[VISIT] //cookie parser
}

export {
  SetVisitCookie,
  GetVisitCookie
}