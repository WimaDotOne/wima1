import { v4 as uuidv4 } from "uuid"
import { asyNewFolder, RootPath } from "./H/FileHelper.js"
import { DevTempFolder } from "./H/DevTempFolder.js"
import { ImageUploadConfig } from "../../../../../bConfig.js"
import { SetTempFolderCookie } from "./H/Cookie.js"

export async function i(req, res) {
  try {

    const configKey = req.body.configKey
    const config = ImageUploadConfig[configKey]
    if(!config || !config.temp1) {
      return res.json({ok: false, error: "Image upload is not configured"})
    }
    //for dev convenience
    const devTempFolder = DevTempFolder()
    
    const folder = `${config.temp1}/${devTempFolder || uuidv4()}`
  
    const err = await asyNewFolder(`${RootPath}/Temp/${folder}`)

    if(err) {
      return res.json({ ok: false, error: err.message })
    }

    SetTempFolderCookie(res, folder)

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}