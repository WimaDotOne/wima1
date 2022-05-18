import fs from "fs/promises"
import { FilePath } from "../../../FilePath/FilePath.js"

const RootPath = FilePath(import.meta.url, "../../../../../..")

async function asyNewFolder(path) {
  //depending on node js version
  //To get a behavior similar to the rm -rf Unix command, use fs.rm() with options { recursive: true, force: true }.
  await fs.rm(path, {force: true, recursive: true })
  //Calling fs.mkdir() when path is a directory that exists results in an error only when recursive is false.
  await fs.mkdir(path, {recursive: true})
}

async function asyMakeFolder(path) {
  await fs.mkdir(path, {recursive: true})
}

async function asyRemoveFolder(path) {
  await fs.rm(path, {recursive: true})
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
  ExtractExtension
}