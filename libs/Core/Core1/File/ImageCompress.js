import imagemin from "imagemin"
import imageminMozjpeg from "imagemin-mozjpeg"
import imageminPngquant from "imagemin-pngquant"

export async function asyImageCompress(inputFilePaths, outputFolderPath) {
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