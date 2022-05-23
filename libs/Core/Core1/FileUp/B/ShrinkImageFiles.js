import { v4 as uuidv4 } from "uuid"
import { asyGetImageInfo } from "../../File/ImageInfo.js"
import { asyImagePxResize } from "../../File/ImagePxResize.js"
import { asyImageCompress } from "../../File/ImageCompress.js"
import pathUtil from "path"

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
    const id = uuid+"."+ext
    const smallId = "sm-"+id
    const path = pathUtil.join(tempFolderPath, id)
    const smallPath = pathUtil.join(tempFolderPath, smallId)

    const image = {
      path: path,
      id: id,
      name: file.originalname,
    }
    inputFilePaths.push(path)
    imageList.push(image)

    await asyImagePxResize(file.path, image.path, width, height)

    if(smallWidth && smallHeight) {
      image.smallPath = smallPath
      image.smallId = smallId
      inputFilePaths.push(smallPath)

      await asyImagePxResize(file.path, image.smallPath, smallWidth, smallHeight)
    }

    await asyImageCompress(inputFilePaths, tempFolderPath)
  }
  return imageList
}

/*
Input files
[
  {
    fieldname: 'file',
    originalname: 'IMG_0145 - Copy.JPG',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: 'C:\\Users\\fan20\\Wima\\Wima\\wima1/Temp/Movic/caf69f65-85fa-4a23-9857-651753f8e30d',
    filename: 'IMG_0145 - Copy.JPG',
    path: 'C:\\Users\\fan20\\Wima\\Wima\\wima1\\Temp\\Movic\\caf69f65-85fa-4a23-9857-651753f8e30d\\IMG_0145 - Copy.JPG',
    size: 2203731
  }
]
Output imageList
[
  {
    path: 'C:\\Users\\fan20\\Wima\\Wima\\wima1\\Temp\\Movic\\caf69f65-85fa-4a23-9857-651753f8e30d\\f196866a-878b-4cbd-aead-1e1e0685bebe.jpg',
    id: 'f196866a-878b-4cbd-aead-1e1e0685bebe.jpg',
    name: 'IMG_0145 - Copy.JPG',
    smallPath: 'C:\\Users\\fan20\\Wima\\Wima\\wima1\\Temp\\Movic\\caf69f65-85fa-4a23-9857-651753f8e30d\\sm-f196866a-878b-4cbd-aead-1e1e0685bebe.jpg',
    smallId: 'sm-f196866a-878b-4cbd-aead-1e1e0685bebe.jpg'
  }
]
*/