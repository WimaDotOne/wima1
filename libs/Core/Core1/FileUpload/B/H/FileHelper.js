import fileSystem from "fs"
import { FilePath } from "../../../FilePath/FilePath.js"

const fs = fileSystem.promises

const RootPath = FilePath(import.meta.url, "../../../../../..")

async function asyNewFolder(path) {
  try {
    await fs.rmdir(path, { recursive: true })
    await fs.mkdir(path)
    return null
  } catch (err) {
    return err
  }
}

async function asyMakeFolder(path) {
  try {
    await fs.mkdir(path)
    return null
  } catch (err) {
    if(err.code === 'EEXIST') { return null }
    return err
  }
}

async function asyRemoveFolder(path) {
  try {
    await fs.rmdir(path, {recursive: true})
    return null
  } catch (err) {
    return err
  }
}

async function asyRemoveFile(path) {
  try {
    await fs.unlink(path)
    return null
  } catch (err) {
    if(err.code === "ENOENT") { return null }
    return err
  }
}

function ExtractExtension(fileName) {
  if(!fileName) return ""
  const parts = fileName.split(".")
  const len = parts.length
  if(len < 1) return ""
  return parts[len-1].toLowerCase()
}



export {
  RootPath,
  asyNewFolder,
  asyMakeFolder,
  asyRemoveFolder,
  asyRemoveFile,
  ExtractExtension
}