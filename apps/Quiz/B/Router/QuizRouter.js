import express from "express"
import { iAuth } from "../../../../libs/Core/Core1/StripeLogin/B/iAuth.js"
import { iLoadMyProjects } from "./My/iLoadMyProjects.js"


const QuizRouter = express.Router()

QuizRouter.get("/LoadMyProjects", iAuth, iLoadMyProjects)

export {
  QuizRouter
}