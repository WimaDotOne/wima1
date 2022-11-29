import { ClassNames } from "../../../../../../../../libs/Core/Core1/fCore1"
import cl from "./Box.module.scss"

interface IBoxProp {
  title: string
  value?: string
  crossableValue?: string
  cross?: boolean
}

export function Box({
  title,
  value,
  crossableValue,
  cross
}: IBoxProp) {

  const clCross = cross ? cl.cross : ""
  return(<>
    <div>
      <div className={cl.title}>{title}</div>
      <div className={cl.value}>
        {
          crossableValue ? 
            <span className={ClassNames([cl.crossableValue, clCross])}>
              {crossableValue}
            </span>:null
        }
        {value}
      </div>
    </div>
  </>)
}