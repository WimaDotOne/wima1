import { asyNewTempFolder } from "../../../../../libs/Core/Core1/bCore1.js"

async function iNewTempFolder(req, res, next) {
  try{
    const tempPath = await asyNewTempFolder("Movic")

    req.tempPath = tempPath
    next()

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}

export {
  iNewTempFolder
}