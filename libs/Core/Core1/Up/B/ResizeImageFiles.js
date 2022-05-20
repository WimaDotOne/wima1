import { asyGetImageType, asyResizeImage, asyCompress } from "./H/ImageProcess.js"
import { v4 as uuidv4 } from "uuid"
import path from "path"

export async function asyResizeImageFiles(files, tempFolderPath, width, height, smallWidth, smallHeight) {
  
  const imageList = []
  const inputFilePaths = []

  for(const file of files) {

    let ext = await asyGetImageType(file.path)
    if(ext !== "png") {
      //image compress only png and jpg for now
      ext = "jpg"
    }

    const uuid = uuidv4()
    const imageId = uuid+"."+ext
    const smallImageId = "sm-"+imageId
    const imagePath = path.join(tempFolderPath, imageId)
    const smallImagePath = path.join(tempFolderPath, smallImageId)

    const image = {
      path: imagePath,
      id: imageId,
      name: file.originalname,
    }
    inputFilePaths.push(imagePath)
    imageList.push(image)

    await asyResizeImage(file.path, imagePath, width, height)

    if(smallWidth) {
      await asyResizeImage(file.path, smallImagePath)

      image.smallPath = smallImagePath
      image.smallId = smallImageId
      inputFilePaths.push(smallImagePath)
    }

    await asyCompress(inputFilePaths, tempFolderPath)
console.log(imageList)
    return imageList

  }
}