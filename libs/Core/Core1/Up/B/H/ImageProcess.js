import sharp from "sharp"
import imagemin from "imagemin"
import imageminMozjpeg from "imagemin-mozjpeg"
import imageminPngquant from "imagemin-pngquant"
import { promisify } from "util"
import imageSize from "image-size"

const sizeOf = promisify(imageSize)

async function asyGetImageType(path) {
  const dim = await sizeOf(path)
  return dim.type
}

async function asyResizeImage(oldPath,newPath,x,y) {
  //let caller catch error
  await sharp(oldPath).rotate().resize(x,y).toFile(newPath)
}

async function asyCompress(inputFilePaths, outputFolderPath) {
  const files = await imagemin(inputFilePaths, {
    destination: outputFolderPath,
    plugins: [ 
      imageminMozjpeg(),
      imageminPngquant({quality: [0.6, 0.8]})
    ]
  })

  return files
  //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
}

function IsMimeTypeImage(mimeType) {
  const imageType = "image/"
  const len = imageType.length
  return mimeType.substring(0,len).toLowerCase()===imageType
}

export {
  asyGetImageType,
  asyResizeImage,
  asyCompress,
  IsMimeTypeImage
}