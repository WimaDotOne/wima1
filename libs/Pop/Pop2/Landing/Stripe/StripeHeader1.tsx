import { ClassNames } from "../../../../Core/Core1/fCore1"
import cl from "./StripeHeader1.module.scss"

interface IStripeHeader1Prop {
  text1: string,
  text2: string,
  h2?: boolean
}
export function StripeHeader1({
  text1, text2,
  h2
}: IStripeHeader1Prop) {

  const clH2 = h2 ? cl.h2 : ""

  return(<>
    <div className={cl.header}>
      <div className={ ClassNames([cl.text1, clH2])
        }>{text1}</div>
      <div className={cl.text2}>{text2}</div>
    </div>
  </>)
}