import express from "express"
import { iAuth } from "../../../../libs/Core/Core1/StripeLogin/B/iAuth.js"
import { iCreateQuizProject } from "./My/iCreateQuizProject.js"
import { iLoadMyProjects } from "./My/iLoadMyProjects.js"
import { iLoadSettingsIsQuizBookPublic } from "./My/QuizBookSettings/iLoadSettingsIsQuizBookPublic.js"
import { iLoadSettingsMyQuizBookId } from "./My/QuizBookSettings/iLoadSettingsMyQuizBookId.js"
import { iLoadSettingsMyQuizBookTitle } from "./My/QuizBookSettings/iLoadSettingsMyQuizBookTitle.js"
import { iSaveSettingsIsQuizBookPublic } from "./My/QuizBookSettings/iSaveSettingsIsQuizBookPublic.js"
import { iSaveSettingsMyQuizBookTitle } from "./My/QuizBookSettings/iSaveSettingsMyQuizBookTitle.js"
import { iCreateQuizChapter } from "./My/iCreateQuizChapter.js"
import { iLoadMyQuizBookChapters } from "./My/iLoadMyQuizBookChapters.js"
import { iLoadMyChapterQuizzes } from "./My/iLoadMyChapterQuizzes.js"
import { iCreateQuizQuiz } from "./My/iCreateQuizQuiz.js"
import { iLoadSettingsMyQuizChapterTitle } from "./My/QuizChapterSettings/iLoadSettingsMyQuizChapterTitle.js"
import { iLoadSettingsIsQuizChapterPublic } from "./My/QuizChapterSettings/iLoadSettingsIsQuizChapterPublic.js"
import { iSaveSettingsIsQuizChapterPublic } from "./My/QuizChapterSettings/iSaveSettingsIsQuizChapterPublic.js"
import { iSaveSettingsMyQuizChapterTitle } from "./My/QuizChapterSettings/iSaveSettingsMyQuizChapterTitle.js"

const QuizRouter = express.Router()

//My Quiz Book Settings
QuizRouter.get("/LoadSettingsMyQuizBookTitle", iAuth, iLoadSettingsMyQuizBookTitle)
QuizRouter.get("/LoadSettingsMyQuizBookId", iAuth, iLoadSettingsMyQuizBookId)
QuizRouter.get("/LoadSettingsIsQuizBookPublic", iAuth, iLoadSettingsIsQuizBookPublic)
QuizRouter.post("/SaveSettingsMyQuizBookTitle", iAuth, iSaveSettingsMyQuizBookTitle)
QuizRouter.post("/SaveSettingsIsQuizBookPublic", iAuth, iSaveSettingsIsQuizBookPublic)

//My Quiz Chapter Settings
QuizRouter.get("/LoadSettingsMyQuizChapterTitle", iAuth, iLoadSettingsMyQuizChapterTitle)
QuizRouter.get("/LoadSettingsIsQuizChapterPublic", iAuth, iLoadSettingsIsQuizChapterPublic)
QuizRouter.post("/SaveSettingsMyQuizChapterTitle", iAuth, iSaveSettingsMyQuizChapterTitle)
QuizRouter.post("/SaveSettingsIsQuizChapterPublic", iAuth, iSaveSettingsIsQuizChapterPublic)

//My Projects
QuizRouter.get("/LoadMyProjects", iAuth, iLoadMyProjects)
QuizRouter.get("/LoadMyQuizBookChapters", iAuth, iLoadMyQuizBookChapters)
QuizRouter.get("/LoadMyChapterQuizzes", iAuth, iLoadMyChapterQuizzes)

QuizRouter.post("/CreateQuizProject", iAuth, iCreateQuizProject)
QuizRouter.post("/CreateQuizChapter", iAuth, iCreateQuizChapter)
QuizRouter.post("/CreateQuizQuiz", iAuth, iCreateQuizQuiz)

export {
  QuizRouter
}