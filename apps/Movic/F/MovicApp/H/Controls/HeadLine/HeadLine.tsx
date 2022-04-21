import { Button } from "../Button/Button"
import cl from "./HeadLine.module.scss"

interface IHeadLineProp {
  text: string
  buttonText?: string
  buttonOnClick?: ()=>void
}
export function HeadLine({
  text,
  buttonText,
  buttonOnClick
}: IHeadLineProp) {
  return(<>
    <div className={cl.headLine}>
      <div className={cl.headLineText}>{text}</div>
      <div>
      {
        buttonText && buttonOnClick ?
        <Button text={buttonText} onClick={buttonOnClick} />:null
      }
      </div>
    </div>
  </>)
}