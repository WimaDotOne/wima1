import express from "express"
import { iImageMulter } from "../../../../libs/Core/Core1/bCore1.js"
import { iAuth } from "../../../../libs/Core/Core1/StripeLogin/B/iAuth.js"
import { iNewTempFolder } from "./ImageUpload/iNewTempFolder.js"
import { iUploadBookCover } from "./ImageUpload/iUploadBookCover.js"
import { iCreateBookProject } from "./My/iCreateBookProject.js"
import { iCreateChapter } from "./My/iCreateChapter.js"
import { iLoadBookCover } from "./My/iLoadBookCover.js"
import { iLoadMyChapters } from "./My/iLoadMyChapters.js"
import { iLoadMyProjects } from "./My/iLoadMyProjects.js"
import { iLoadSettingsBookId } from "./My/Settings/iLoadSettingsBookId.js"
import { iLoadSettingsBookTitle } from "./My/Settings/iLoadSettingsBookTitle.js"
import { iLoadSettingsIsBookPublic } from "./My/Settings/iLoadSettingsIsBookPublic.js"
import { iSaveSettingsBookTitle } from "./My/Settings/iSaveSettingsBookTitle.js"
import { iSaveSettingsIsBookPublic } from "./My/Settings/iSaveSettingsIsBookPublic.js"

const BookRouter = express.Router()

BookRouter.post("/CreateBookProject", iAuth, iCreateBookProject)
BookRouter.get("/LoadMyProjects", iAuth, iLoadMyProjects)
BookRouter.get("/LoadBookCover", iAuth, iLoadBookCover)
BookRouter.get("/LoadMyChapters", iAuth, iLoadMyChapters)

BookRouter.post("/CreateChapter", iAuth, iCreateChapter)


//Upload Image
BookRouter.post("/UploadBookCover", iAuth, iNewTempFolder, iImageMulter, iUploadBookCover)

//Settings
BookRouter.get("/LoadSettingsIsBookPublic", iAuth, iLoadSettingsIsBookPublic)
BookRouter.get("/LoadSettingsBookTitle", iAuth, iLoadSettingsBookTitle)
BookRouter.get("/LoadSettingsBookId", iAuth, iLoadSettingsBookId)
BookRouter.post("/SaveSettingsIsBookPublic", iAuth, iSaveSettingsIsBookPublic)
BookRouter.post("/SaveSettingsBookTitle", iAuth, iSaveSettingsBookTitle)


export {
  BookRouter
}