import jwt from "jsonwebtoken"
const USER = "User"
const UNIVERSITY_ACCOUNT = "UniversityAccount"

function SetPermanentCookie(res, _id, cookieName) {

  if(!_id || !process.env.JWT_PRIVATE) {
    return
  }

  _id = _id.toString()

  const payload = {_id}

  const token = jwt.sign(payload, process.env.JWT_PRIVATE, {expiresIn: '20y'})
  
  const cookieOption =
  {
    maxAge: 20*365*24*60*60*1000,  //20 years
    httpOnly: true
  }

  res.cookie(cookieName, token, cookieOption)
}

function SetUserCookie(res, _id) {
  SetPermanentCookie(res, _id, USER)
}

function SetUniversityAccountCookie(res, _id) {
  SetPermanentCookie(res, _id, UNIVERSITY_ACCOUNT)
}

function GetCookie(req, cookieName) {
  const token = req.cookies[cookieName] //cookie parser
  if(!token) throw new Error("No token" + cookieName)
  
  const payload = jwt.verify(token, process.env.JWT_PRIVATE)
  return payload
}

function GetUserCookie(req) {
  return GetCookie(req, USER)
}

function GetUniversityAccountCookie(req) {
  return GetCookie(req, UNIVERSITY_ACCOUNT)
}

function DeleteCookie(res, cookieName) {
  const cookieOption =
  {
    maxAge: -24*60*60*1000,  //a day ago
    httpOnly: true
  }
  res.cookie(cookieName, "", cookieOption)
}

function DeleteUserCookie(res) {
  DeleteCookie(res, USER)
}

function DeleteUniversityAccountCookie(res) {
  DeleteCookie(res, UNIVERSITY_ACCOUNT)
}

export {
  SetUserCookie,
  GetUserCookie,
  DeleteUserCookie,

  SetUniversityAccountCookie,
  GetUniversityAccountCookie,
  DeleteUniversityAccountCookie
}