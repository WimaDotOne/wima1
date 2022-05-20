import sharp from "sharp"

export async function asyImagePxResize(oldPath,newPath,widthPx,heightPx) {
  //let caller catch error
  await sharp(oldPath).rotate().resize(widthPx,heightPx).toFile(newPath)
}