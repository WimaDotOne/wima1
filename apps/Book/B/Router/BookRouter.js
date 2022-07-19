import express from "express"
import { iImageMulter } from "../../../../libs/Core/Core1/bCore1.js"
import { iAuth } from "../../../../libs/Core/Core1/StripeLogin/B/iAuth.js"
import { iNewTempFolder } from "./ImageUpload/iNewTempFolder.js"
import { iUploadBookCover } from "./ImageUpload/iUploadBookCover.js"
import { iCreateBookProject } from "./My/iCreateBookProject.js"
import { iCreateChapter } from "./My/Chapter/iCreateChapter.js"
import { iLoadBookCover } from "./My/iLoadBookCover.js"
import { iLoadMyChapters } from "./My/iLoadMyChapters.js"
import { iLoadMyProjects } from "./My/iLoadMyProjects.js"
import { iLoadSettingsBookId } from "./My/Settings/iLoadSettingsBookId.js"
import { iLoadSettingsBookTitle } from "./My/Settings/iLoadSettingsBookTitle.js"
import { iLoadSettingsIsBookPublic } from "./My/Settings/iLoadSettingsIsBookPublic.js"
import { iSaveSettingsBookTitle } from "./My/Settings/iSaveSettingsBookTitle.js"
import { iSaveSettingsIsBookPublic } from "./My/Settings/iSaveSettingsIsBookPublic.js"
import { iLoadChapterSettings } from "./My/Chapter/iLoadChapterSettings.js"
import { iDeleteChapter } from "./My/Chapter/iDeleteChapter.js"
import { iSaveChapterSettings } from "./My/Chapter/iSaveChapterSettings.js"
import { iLoadChapterTextEditor } from "./My/Chapter/iLoadChapterTextEditor.js"
import { iSaveChapterText } from "./My/Chapter/iSaveChapterText.js"
import { iLoadBookPreview } from "./BookPlayer/iLoadBookPreview.js"
import { iLoadChapterTextPreview } from "./BookPlayer/iLoadChapterTextPreview.js"
import { iLoadChapterText } from "./BookPlayer/iLoadChapterText.js"
import { iLoadMyBooks } from "./My/iLoadMyBooks.js"
import { iLoadBook } from "./BookPlayer/iLoadBook.js"

const BookRouter = express.Router()

BookRouter.post("/CreateBookProject", iAuth, iCreateBookProject)
BookRouter.get("/LoadMyProjects", iAuth, iLoadMyProjects)
BookRouter.get("/LoadBookCover", iAuth, iLoadBookCover)
BookRouter.get("/LoadMyChapters", iAuth, iLoadMyChapters)
BookRouter.get("/LoadMyBooks", iAuth, iLoadMyBooks)


//Chapter
BookRouter.get("/LoadChapterSettings", iAuth, iLoadChapterSettings)
BookRouter.get("/LoadChapterTextEditor", iAuth, iLoadChapterTextEditor)
BookRouter.post("/CreateChapter", iAuth, iCreateChapter)
BookRouter.post("/SaveChapterSettings", iAuth, iSaveChapterSettings)
BookRouter.post("/DeleteChapter", iAuth, iDeleteChapter)
BookRouter.post("/SaveChapterText", iAuth, iSaveChapterText)


//Upload Image
BookRouter.post("/UploadBookCover", iAuth, iNewTempFolder, iImageMulter, iUploadBookCover)

//Settings
BookRouter.get("/LoadSettingsIsBookPublic", iAuth, iLoadSettingsIsBookPublic)
BookRouter.get("/LoadSettingsBookTitle", iAuth, iLoadSettingsBookTitle)
BookRouter.get("/LoadSettingsBookId", iAuth, iLoadSettingsBookId)
BookRouter.post("/SaveSettingsIsBookPublic", iAuth, iSaveSettingsIsBookPublic)
BookRouter.post("/SaveSettingsBookTitle", iAuth, iSaveSettingsBookTitle)

//Book Player
BookRouter.get("/LoadBookPreview", iAuth, iLoadBookPreview)
BookRouter.get("/LoadBook", iLoadBook)
BookRouter.get("/LoadChapterTextPreview", iAuth, iLoadChapterTextPreview)
BookRouter.get("/LoadChapterText", iLoadChapterText)

export {
  BookRouter
}