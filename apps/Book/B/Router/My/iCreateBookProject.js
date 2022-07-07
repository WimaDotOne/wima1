import mongoose from "mongoose"
import { GENERAL_INPUT_MAX, BookConfig } from "../../../../../bConfig.js"
import { User } from "../../../../../libs/Core/Core1/bCore1.js"
import BookBook from "../../Model/BookBook.js"
import BookAccount from "../../Model/BookAccount.js"
import BookProject from "../../Model/BookProject.js"

export async function iCreateBookProject(req, res) {
  try{
    const bookName = (req.body.bookName || "").trim()

    if(bookName.length > GENERAL_INPUT_MAX) {
      return res.json({ ok: false, error: "Book title is too long" })
    }

    const user = await User.findById(req.user._id)

    if(!user) {
      return res.json({ ok: false, error: "Cannot find user" })
    }

    let bookAccount = null
    if(!user.bookAccountId) {
      bookAccount = new BookAccount({
        _id: mongoose.Types.ObjectId()
      })

      await bookAccount.save()
      user.bookAccountId = bookAccount._id
      user.save()
    } else {
      bookAccount = await BookAccount.findById(user.bookAccountId)
    }

    if(!bookAccount) {
      return res.json({ ok: false, error: "Cannot find Book account" })
    }

    //A Book account can only have 100 books
    const bookCount = await BookBook.count({
      bookAccountId: bookAccount._id
    })
    const bookMax = process.env.BOOK_MAX_PER_ACCOUNT || BookConfig.bookMaxPerAccount
    if(bookCount > bookMax) {
      return res.json({ ok: false, error: "Book creation reach limit" })
    }
    
    const book = new BookBook({
      _id: mongoose.Types.ObjectId(),
      title: bookName
    })
    
    await book.save()

    const bookProject = new BookProject({
      _id: mongoose.Types.ObjectId(),
      bookId: book._id,
      bookAccountId: bookAccount._id
    })

    await bookProject.save()

    return res.json({ok: true})

  } catch(err) {
    return res.json({ ok: false, error: err.message })
  }
}