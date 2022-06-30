import express from "express"
import { iLoadWords } from "./Learn/iLoadWords.js"
const LingoRouter = express.Router()


LingoRouter.post('/LoadWords', iLoadWords)


export {
  LingoRouter
}