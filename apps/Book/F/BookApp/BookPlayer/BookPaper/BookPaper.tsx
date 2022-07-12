import { useState } from "react"
import cl from "./BookPaper.module.scss"

interface IBookPaperProp {
  title: string
  text: string
}

export function BookPaper({
  title,
  text
}: IBookPaperProp) {


  return(<>
  {
    text
  }
  </>)
}