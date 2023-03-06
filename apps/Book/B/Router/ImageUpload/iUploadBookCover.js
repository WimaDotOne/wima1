import { asyDeleteMany, 
  asyRemoveTempFolder, 
  asyShrinkImageFiles, 
  asyUploadOnePlusSmallOne, 
  S3Url, 
  User 
} from "../../../../../libs/Core/Core1/bCore1.js"
import BookBook from "../../Model/BookBook.js"
import BookProject from "../../Model/BookProject.js"

export async function iUploadBookCover(req, res) {
  try{
    const tempFolderPath = req.tempFolderPath
    const userId = req.user._id

    const projectId = (req.body.projectId || "").toString()

    if(!projectId) {
      await asyRemoveTempFolder(tempFolderPath)
      return res.json({ok: false, error: "Cannot find project"})
    }

    //Don't use asyGetMyBookProject in order to handle error and remove temp folder
    const user = await User.findById(userId)
    const project = await BookProject.findById(projectId)

    if(!project || user.bookAccountId.toString() !== project.bookAccountId.toString()) {
      await asyRemoveTempFolder(tempFolderPath)
      return res.json({ok: false, error: "Cannot find matching project"})
    }

    const book = await BookBook.findById(project.bookId)

    if(!book) {
      await asyRemoveTempFolder(tempFolderPath)
      return res.json({ok: false, error: "Cannot find book"})
    }

    const files = req.files

    if(!files || files.length < 1) {
      await asyRemoveTempFolder(tempFolderPath)
      return res.json({ok: false, error: "Cannot detect uploaded image"})
    }

    // Shrink files
    const imageList = await asyShrinkImageFiles(files, tempFolderPath, 400, 600, 80, 120)

    //Upload files to Amazon
    const image = imageList[0]
  
    const file = {
      filePath: image.path,
      key: image.id,
      smallFilePath: image.smallPath,
      smallKey: image.smallId
    }

    const BookBucket = process.env.AWS_BOOK_BUCKET
    await asyUploadOnePlusSmallOne(BookBucket, file)


    //Delete old image from Amazon S3 database
    if(book.bookCover) {
      const key1 = book.bookCover.s3Key
      const key2 = book.bookCover.s3KeySmall
      const keyArr = []
      if(key1) { keyArr.push(key1) } 
      if(key2) { keyArr.push(key2) }
      if(keyArr.length) {
        await asyDeleteMany(BookBucket, keyArr)
      }
    }

    //Save files info in database

    book.bookCover = {
      s3Key: image.id,
      s3KeySmall: image.smallId,
      url: S3Url(BookBucket, image.id),
      urlSmall: S3Url(BookBucket, image.smallId)
    }

    await book.save()

    await asyRemoveTempFolder(tempFolderPath)
    return res.json({ok: true, imageUrl: book.bookCover.urlSmall})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}