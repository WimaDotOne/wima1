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
import { iLoadSettingsMyQuizTitle } from "./My/QuizQuizSettings/iLoadSettingsMyQuizTitle.js"
import { iSaveSettingsMyQuizTitle } from "./My/QuizQuizSettings/iSaveSettingsMyQuizTitle.js"
import { iLoadSettingsMyQuizYouTubeId } from "./My/QuizQuizSettings/iLoadSettingsMyQuizYouTubeId.js"
import { iSaveSettingsMyQuizYouTubeId } from "./My/QuizQuizSettings/iSaveSettingsMyQuizYouTubeId.js"
import { iSaveQuizQuestionsText } from "./My/iSaveQuizQuestionsText.js"
import { iLoadQuizQuestionsTextEditor } from "./My/iLoadQuizQuestionsTextEditor.js"
import { iLoadSingleQuiz } from "./QuizPlayer/iLoadSingleQuiz.js"
import { iLoadPublishedChapterQuizzes } from "./QuizPlayer/iLoadPublishedChapterQuizzes.js"

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

//My Quiz Quiz Settings
QuizRouter.get("/LoadSettingsMyQuizTitle", iAuth, iLoadSettingsMyQuizTitle)
QuizRouter.get("/LoadSettingsMyQuizYouTubeId", iAuth, iLoadSettingsMyQuizYouTubeId)
QuizRouter.post("/SaveSettingsMyQuizTitle", iAuth, iSaveSettingsMyQuizTitle)
QuizRouter.post("/SaveSettingsMyQuizYouTubeId", iAuth, iSaveSettingsMyQuizYouTubeId)

//My Projects
QuizRouter.get("/LoadMyProjects", iAuth, iLoadMyProjects)
QuizRouter.get("/LoadMyQuizBookChapters", iAuth, iLoadMyQuizBookChapters)
QuizRouter.get("/LoadMyChapterQuizzes", iAuth, iLoadMyChapterQuizzes)
QuizRouter.get("/LoadQuizQuestionsTextEditor", iAuth, iLoadQuizQuestionsTextEditor)

QuizRouter.post("/CreateQuizProject", iAuth, iCreateQuizProject)
QuizRouter.post("/CreateQuizChapter", iAuth, iCreateQuizChapter)
QuizRouter.post("/CreateQuizQuiz", iAuth, iCreateQuizQuiz)
QuizRouter.post("/SaveQuizQuestionsText", iAuth, iSaveQuizQuestionsText)

//Quiz Player
QuizRouter.get("/LoadSingleQuiz", iAuth, iLoadSingleQuiz)
QuizRouter.get("/LoadPublishedChapterQuizzes", iAuth, iLoadPublishedChapterQuizzes)

export {
  QuizRouter
}