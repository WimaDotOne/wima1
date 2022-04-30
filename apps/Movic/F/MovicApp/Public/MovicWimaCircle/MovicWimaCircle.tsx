import { WimaCircle } from "../../../../../WimaHome/F/WimaCircle/WimaCircle"
import { MovicWindow } from "../../MovicWindow/MovicWindow"
import cl from "./MovicWimaCircle.module.scss"

export function MovicWimaCircle() {
  return(<>
    <MovicWindow>
      <div className={cl.wimaCirlceWrap}>
        <WimaCircle />
      </div>
    </MovicWindow>
  </>)
}