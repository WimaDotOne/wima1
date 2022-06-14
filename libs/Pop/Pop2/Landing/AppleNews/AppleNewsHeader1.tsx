import { ClassNames } from "../../../../Core/Core1/fCore1"
import cl from "./AppleNewsHeader1.module.scss"

interface IAppleNewsHeader1Prop {
  text1: string
  text2?: string
  h?: number
}
export function AppleNewsHeader1({
  text1,
  text2,
  h
}: IAppleNewsHeader1Prop) {

  h = h || 1

  let clH = ""
  switch(h) {
    case 1: clH = cl.h1; break
    case 2: clH = cl.h2; break
    case 3: clH = cl.h3; break
    default: clH = cl.h1
  }
  return(<>
    <div className={ClassNames([cl.header, clH])}>
      <div className={ClassNames([cl.text1, clH])}>{text1}</div>
      <div className={ClassNames([cl.text2, clH])}>{text2}</div>
    </div>
  </>)
}