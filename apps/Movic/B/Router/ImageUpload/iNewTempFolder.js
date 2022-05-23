import { asyNewTempFolder } from "../../../../../libs/Core/Core1/bCore1.js"

async function iNewTempFolder(req, res, next) {
  try{
    //need a temp folder Movic already created in code
    const tempFolderPath = await asyNewTempFolder("Movic")

    req.tempFolderPath = tempFolderPath
    next()

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}

export {
  iNewTempFolder
}