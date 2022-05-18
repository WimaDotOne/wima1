

import jwt from "jsonwebtoken"
const TEMP_FOLDER="TempFolder"

function SetTempFolderCookie(res, folder) {

  if(!folder || !process.env.JWT_PRIVATE) {
    return
  }

  const payload = {folder}

  const token = jwt.sign(payload, process.env.JWT_PRIVATE, {expiresIn: '20y'})
  
  const cookieOption =
  {
    maxAge: 60*60*1000,  //1 hour
    httpOnly: true
  }

  res.cookie(TEMP_FOLDER, token, cookieOption)
}

function GetTempFolderCookie(req) {
  const token = req.cookies[TEMP_FOLDER] //cookie parser
  const payload = jwt.verify(token, process.env.JWT_PRIVATE)
  return payload
}

function DeleteTempFolderCookie(res) {
  const cookieOption =
  {
    maxAge: -24*60*60*1000,  //a day ago
    httpOnly: true
  }
  res.cookie(TEMP_FOLDER, "", cookieOption)
}

export {
  SetTempFolderCookie,
  GetTempFolderCookie,
  DeleteTempFolderCookie
}
