import { WimaCircle } from "../../../../../Wima/F/WimaCircle/WimaCircle"
import { BookWindow } from "../../BookWindow/BookWindow"
import cl from "./BookWimaCircle.module.scss"

export function BookWimaCircle() {
  return(<>
    <BookWindow>
      <div className={cl.wimaCirlceWrap}>
        <WimaCircle />
      </div>
    </BookWindow>
  </>)
}