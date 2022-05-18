import fs from "fs/promises"
import { FilePath } from "../../../FilePath/FilePath.js"

const RootPath = FilePath(import.meta.url, "../../../../../..")

async function asyNewFolder(path) {
  try {
    //depending on node js version
    //To get a behavior similar to the rm -rf Unix command, use fs.rm() with options { recursive: true, force: true }.
    await fs.rm(path, {force: true, recursive: true })
    //Calling fs.mkdir() when path is a directory that exists results in an error only when recursive is false.
    await fs.mkdir(path, {recursive: true})
    return null
  } catch (err) {
    return err
  }
}

async function asyMakeFolder(path) {
  try {
    await fs.mkdir(path, {recursive: true})
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