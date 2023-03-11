import jwt from "jsonwebtoken"
const USER = "User"
const UNIVERSITY_ACCOUNT = "UniversityAccount"
const ADMIN = "Admin"

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

function SetAdminCookie(res, _id) {
  SetPermanentCookie(res, _id, ADMIN)
}

function GetCookie(req, cookieName) {
  const token = req.cookies[cookieName] //cookie parser

  const payload = jwt.verify(token, process.env.JWT_PRIVATE)
  return payload
}

function GetUserCookie(req) {
  return GetCookie(req, USER)
}

function TryGetUserCookie(req) {
  try {
    return GetUserCookie(req)
  } catch (err) {
    return null
  }
}

function GetUniversityAccountCookie(req) {
  return GetCookie(req, UNIVERSITY_ACCOUNT)
}

function TryGetUniversityAccountCookie(req) {
  try {
    return GetUniversityAccountCookie(req)
  } catch (err) {
    return null
  }
}

function GetAdminCookie(req) {
  return GetCookie(req, ADMIN)
}

function TryGetAdminCookie(req) {
  try {
    return GetAdminCookie(req)
  } catch (err) {
    return null
  }
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

function DeleteAdminCookie(res) {
  DeleteAdminCookie(res, ADMIN)
}

export {
  SetUserCookie,
  GetUserCookie, TryGetUserCookie,
  DeleteUserCookie,

  SetUniversityAccountCookie,
  GetUniversityAccountCookie, TryGetUniversityAccountCookie,
  DeleteUniversityAccountCookie,

  SetAdminCookie,
  GetAdminCookie, TryGetAdminCookie,
  DeleteAdminCookie
}