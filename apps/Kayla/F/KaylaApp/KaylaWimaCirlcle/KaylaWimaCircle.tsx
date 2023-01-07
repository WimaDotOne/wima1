import cl from "./KaylaWimaCircle.module.scss"
import { KaylaWindow } from "../KaylaWindow/KaylaWindow"
import { WimaCircle } from "../../../../Wima/F/WimaCircle/WimaCircle"

export function KaylaWimaCircle() {
  return(<>
    <KaylaWindow>
      <div className={cl.wimaCirlceWrap}>
        <WimaCircle />
      </div>
    </KaylaWindow>
  </>)
}