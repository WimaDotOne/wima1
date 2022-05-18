import { GetTempFolderCookie } from "./H/Cookie.js"

export function iAuthTemp(req, res, next) {
  try {

    //For dev convenience
    const devTempFolder = getDevTempFolder()
    if(devTempFolder) {
      req.tempFolder = devTempFolder
      next()
      return
    }

    const { folder } = GetTempFolderCookie(req)
    req.tempFolder = folder
    next()
    
  } catch (err) {
    return res.json({ok:false, error: err.message})
  }
}