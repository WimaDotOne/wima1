import { asyRemoveTempFolder } from "../../../../../libs/Core/Core1/bCore1.js"

async function iUploadImages(req, res) {
  try{
    const tempPath = req.tempPath

    await asyRemoveTempFolder(tempPath)
    return res.json({ok: true, tempPath})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}

export {
  iUploadImages
}