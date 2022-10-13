import { WimaCircle } from "../../../../../Wima/F/WimaCircle/WimaCircle"
import { TipWindow } from "../../TipWindow/TipWindow"
import cl from "./TipWimaCircle.module.scss"

export function TipWimaCircle() {
  return(<>
  <TipWindow>
    <div className={cl.wimaCirlceWrap}>
      <WimaCircle />
    </div>
  </TipWindow>
  </>)
}