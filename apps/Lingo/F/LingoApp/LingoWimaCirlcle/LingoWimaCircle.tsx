import cl from "./LingoWimaCircle.module.scss"
import { LingoWindow } from "../LingoWindow/LingoWindow"
import { WimaCircle } from "../../../../Wima/F/WimaCircle/WimaCircle"

export function LingoWimaCircle() {
  return(<>
    <LingoWindow>
      <div className={cl.wimaCirlceWrap}>
        <WimaCircle />
      </div>
    </LingoWindow>
  </>)
}