import express from "express"
import { iAuth } from "../../../../libs/Core/Core1/StripeLogin/B/iAuth.js"
import { iCreateMovicProject } from "./iCreateMovicProject.js"
const MovicRouter = express.Router()

MovicRouter.post("/CreateMovicProject", iAuth, iCreateMovicProject)

export {
  MovicRouter
}