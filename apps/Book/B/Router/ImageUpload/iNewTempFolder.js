import { asyNewTempFolder } from "../../../../../libs/Core/Core1/bCore1.js"

export async function iNewTempFolder(req, res, next) {
  try{
    //need a temp folder Book already created in code
    const tempFolderPath = await asyNewTempFolder("Book")

    req.tempFolderPath = tempFolderPath
    next()

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}