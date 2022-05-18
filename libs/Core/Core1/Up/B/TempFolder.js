import { v4 as uuidv4} from "uuid"
import { asyNewFolder, asyRemoveFolder, RootPath } from "./H/FileHelper.js"

async function asyNewTempFolder(appFolder) {

  const path = `${RootPath}/Temp/${appFolder}/${uuidv4()}`

  await asyNewFolder(path)
  return path
}

async function asyRemoveTempFolder(path) {
  await asyRemoveFolder(path)
}

export {
  asyNewTempFolder,
  asyRemoveTempFolder
}

