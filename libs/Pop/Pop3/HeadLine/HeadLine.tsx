import { ClassNames } from "../../../Core/Core1/fCore1"
import { Button1 } from "../../../Core/Core2/fCore2"
import cl from "./HeadLine.module.scss"

interface IHeadLineProp {
  text: string
  buttonText?: string
  buttonOnClick?: ()=>void
  h?: number
  color?: string
}
export function HeadLine({
  text,
  buttonText,
  buttonOnClick,
  h,
  color
}: IHeadLineProp) {

  let clH = cl.h1
  switch(h) {
    case 1: clH = cl.h1; break
    case 2: clH = cl.h2; break
    case 3: clH = cl.h3; break
    default: clH = cl.h1
  }
  return(<>
    <div className={ClassNames([clH, cl.headLine])}>
      <div className={cl.headLineText}>{text}</div>
      <div>
      {
        buttonText && buttonOnClick ?
        <Button1 text={buttonText}
          onClick={buttonOnClick}
          color={color}
        />:null
      }
      </div>
    </div>
  </>)
}