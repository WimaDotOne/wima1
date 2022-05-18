import { asyRemoveFolder, RootPath } from "./H/FileHelper.js"

export async function iRemoveTempFolder(req, res) {
  try {
    
    const folder = req.tempFolder

    if(!folder) {
      return res.json({ok:false, error: "Temp folder not found"})
    }

    const err = await asyRemoveFolder(`${RootPath}/Temp/${folder}`)

    if(err) {
      return res.json({ok:false, error: err.message})
    }
    return res.json({ok:true})
    
  } catch(err) {
    return res.json({ ok:false, error: err.message })
  }
}