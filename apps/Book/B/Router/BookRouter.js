import express from "express"
import { iAuth } from "../../../../libs/Core/Core1/StripeLogin/B/iAuth.js"
import { iCreateBookProject } from "./My/iCreateBookProject.js"
import { iLoadMyProjects } from "./My/iLoadMyProjects.js"

const BookRouter = express.Router()

BookRouter.post("/CreateBookProject", iAuth, iCreateBookProject)
BookRouter.get("/LoadMyProjects", iAuth, iLoadMyProjects)


export {
  BookRouter
}