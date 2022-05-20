import { v4 as uuidv4 } from "uuid"
import { asyGetImageInfo } from "../../File/ImageInfo.js"
import { asyImagePxResize } from "../../File/ImagePxResize.js"
import { asyImageCompress } from "../../File/ImageCompress.js"

import path from "path"

export async function asyShrinkImageFiles(files, tempFolderPath, width, height, smallWidth, smallHeight) {
  
  const imageList = []
  const inputFilePaths = []

  for(const file of files) {

    const info = await asyGetImageInfo(file.path)
    
    let ext = info.type
    if(ext !== "png") {
      //image compress only png and jpg for now
      ext = "jpg"
    }

    //rename image file using unique id
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

    await asyImagePxResize(file.path, image.path, width, height)

    if(smallWidth && smallHeight) {
      image.smallPath = smallImagePath
      image.smallId = smallImageId
      inputFilePaths.push(smallImagePath)

      await asyImagePxResize(file.path, image.smallPath, smallWidth, smallHeight)
    }

    await asyImageCompress(inputFilePaths, tempFolderPath)
  }
  return imageList
}