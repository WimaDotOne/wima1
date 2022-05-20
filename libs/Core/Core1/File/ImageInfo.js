import { promisify } from "util"
import imageSize from "image-size"

const sizeOf = promisify(imageSize)

export async function asyGetImageInfo(path) {
  const info = await sizeOf(path)
  return info
  //{ height: 3024, orientation: 6, width: 4032, type: 'jpg' }
}

export function IsMimeTypeImage(mimeType) {
  const imageType = "image/"
  const len = imageType.length
  return mimeType.substring(0,len).toLowerCase()===imageType
}