import jwt from "jsonwebtoken"
import { DevLogin } from "./DevLogin.js"
const LOGIN = "Login"

function SetLoginCookie(res, _id) {

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

  res.cookie(LOGIN, token, cookieOption)

}

function GetLoginCookie(req) {
  const token = req.cookies[LOGIN] //cookie parser
  const payload = jwt.verify(token, process.env.JWT_PRIVATE)
  return payload
}

function DeleteLoginCookie(res) {
  const cookieOption =
  {
    maxAge: -24*60*60*1000,  //a day ago
    httpOnly: true
  }
  res.cookie(LOGIN, "", cookieOption)
}

//Get login when user does not have to be logged in
function TryGetLoginId(req) {
  try {
    //For development convenience
    const devLogin = DevLogin()
    if(devLogin) {
      return devLogin._id
    }
    let login = null
    login = GetLoginCookie(req)
    if(login) {
      return login._id
    }
  } catch (e) {
    //User does not have to be logged in, so don't return error message
  }
  return ""
}

export {
  SetLoginCookie,
  GetLoginCookie,
  DeleteLoginCookie,
  TryGetLoginId
}