import jwt from "jsonwebtoken"
import { DevUser } from "./DevUser.js"
const USER = "User"

function SetUserCookie(res, _id) {

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

  res.cookie(USER, token, cookieOption)

}

function GetUserCookie(req) {
  const token = req.cookies[USER] //cookie parser
  const payload = jwt.verify(token, process.env.JWT_PRIVATE)
  return payload
}

function DeleteUserCookie(res) {
  const cookieOption =
  {
    maxAge: -24*60*60*1000,  //a day ago
    httpOnly: true
  }
  res.cookie(USER, "", cookieOption)
}

//Get user when user does not have to be logged in
function TryGetUserId(req) {
  try {
    //For development convenience
    const devUser = DevUser()
    if(devUser) {
      return devUser._id
    }
    let user = null
    user = GetUserCookie(req)
    if(user) {
      return user._id
    }
  } catch (e) {
    //User does not have to be logged in, so don't return error message
  }
  return ""
}

export {
  SetUserCookie,
  GetUserCookie,
  DeleteUserCookie,
  TryGetUserId
}