import { User } from "../../../../../libs/Core/Core1/bCore1.js"
import BookBook from "../../Model/BookBook.js"
import BookProject from "../../Model/BookProject.js"

export async function iLoadMyBooks(req, res) {
  try{
    const user = await User.findById(req.user._id)

    const projects = await BookProject.find({
      bookAccountId: user.bookAccountId,
      isBookPublic: true
    })

    const bookIds = []
    for(const proj of projects) {
      const bookId = proj.bookId
      if(bookId) {
        bookIds.push(bookId)
      }
    }

    const bookBooks = await BookBook.find({
      _id: { $in: bookIds }
    })

    const books = []

    for(const bookBook of bookBooks) {
      const book = {
        id: bookBook._id.toString(),
        title: bookBook.title,
        coverImgUrl: bookBook.bookCover?.urlSmall
      }
      books.push(book)
    }

    return res.json({ok: true, books})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}