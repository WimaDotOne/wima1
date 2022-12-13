import express from "express"
import { iAuth } from "../../../../libs/Core/Core1/StripeLogin/B/iAuth.js"
import { iCreateQuizProject } from "./My/iCreateQuizProject.js"
import { iLoadMyProjects } from "./My/iLoadMyProjects.js"
import { iLoadSettingsIsQuizBookPublic } from "./My/QuizBookSettings/iLoadSettingsIsQuizBookPublic.js"
import { iLoadSettingsMyQuizBookId } from "./My/QuizBookSettings/iLoadSettingsMyQuizBookId.js"
import { iLoadSettingsMyQuizBookTitle } from "./My/QuizBookSettings/iLoadSettingsMyQuizBookTitle.js"
import { iSaveSettingsIsQuizBookPublic } from "./My/QuizBookSettings/iSaveSettingsIsQuizBookPublic.js"
import { iSaveSettingsMyQuizBookTitle } from "./My/QuizBookSettings/iSaveSettingsMyQuizBookTitle.js"


const QuizRouter = express.Router()

//My Quiz Book Settings
QuizRouter.get("/LoadSettingsMyQuizBookTitle", iAuth, iLoadSettingsMyQuizBookTitle)
QuizRouter.get("/LoadSettingsMyQuizBookId", iAuth, iLoadSettingsMyQuizBookId)
QuizRouter.get("/LoadSettingsIsQuizBookPublic", iAuth, iLoadSettingsIsQuizBookPublic)
QuizRouter.post("/SaveSettingsMyQuizBookTitle", iAuth, iSaveSettingsMyQuizBookTitle)
QuizRouter.post("/SaveSettingsIsQuizBookPublic", iAuth, iSaveSettingsIsQuizBookPublic)

//My Projects
QuizRouter.get("/LoadMyProjects", iAuth, iLoadMyProjects)
QuizRouter.post("/CreateQuizProject", iAuth, iCreateQuizProject)

export {
  QuizRouter
}