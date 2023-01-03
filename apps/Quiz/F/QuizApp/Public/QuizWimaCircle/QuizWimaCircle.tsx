import { WimaCircle } from "../../../../../Wima/F/WimaCircle/WimaCircle"
import { QuizWindow } from "../../QuizWindow/QuizWindow"
import cl from "./QuizWimaCircle.module.scss"

export function QuizWimaCircle() {
  return(<>
    <QuizWindow>
      <div className={cl.wimaCirlceWrap}>
        <WimaCircle />
      </div>
    </QuizWindow>
  </>)
}