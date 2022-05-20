import fs from "fs/promises"

export async function asyNewFolder(path) {
  //depending on node js version
  //To get a behavior similar to the rm -rf Unix command, use fs.rm() with options { recursive: true, force: true }.
  await fs.rm(path, {force: true, recursive: true })
  //Calling fs.mkdir() when path is a directory that exists results in an error only when recursive is false.
  await fs.mkdir(path, {recursive: true})
}

export async function asyMakeFolder(path) {
  await fs.mkdir(path, {recursive: true})
}

export async function asyRemoveFolder(path) {
  await fs.rm(path, {recursive: true})
}