import { ClassNames } from "../../../Core/Core1/fCore1"
import cl from "./TextareaCell.module.scss"

interface ITextareaCellProp {
  prompt?: string
  value?: string
  pre?: boolean
}

export function TextareaCell({
  prompt,
  value,
  pre
}: ITextareaCellProp) {

  const clPre = pre ? cl.pre : ""
  return(<>
  <div className={cl.textareaCell}>
    <div className={cl.prompt}>{prompt}</div>
    <div className={ClassNames([cl.value, clPre])}>{value}</div>
  </div>
  </>)
}