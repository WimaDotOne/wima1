import { v4 as uuidv4 } from "uuid"
import jwt from "jsonwebtoken"
import { asyNewFolder, RootPath } from "./H/FileHelper.js"
import { DevTempFolder } from "./H/DevTempFolder.js"

export async function iNewTempFolder(req, res) {
  try {

    //for dev convenience
    const devTempFolder = DevTempFolder()

    const folder = devTempFolder || 
    
  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}