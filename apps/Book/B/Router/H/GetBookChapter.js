import BookChapter from "../../Model/BookChapter.js"

export async function asyGetBookChapter(chapterId, bookId) {
  if(!chapterId) {
    throw new Error("Need chapter id")
  }
  if(!bookId) {
    throw new Error("Need book id")
  }
  const chapter = await BookChapter.findById(chapterId)

  if(!chapter) {
    throw new Error("Cannot find the chapter")
  }
  if(!chapter.bookId || 
      chapter.bookId.toString() !== bookId.toString()) {
    throw new Error("The chapter does not match with the book")
  }
  return chapter
}