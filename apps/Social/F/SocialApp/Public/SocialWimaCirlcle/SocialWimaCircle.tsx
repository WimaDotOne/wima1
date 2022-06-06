import { WimaCircle } from "../../../../../Wima/F/WimaCircle/WimaCircle"
import { SocialWindow } from "../../SocialWindow/SocialWindow"
import cl from "./SocialWimaCircle.module.scss"

export function SocialWimaCircle() {
  return(<>
    <SocialWindow>
      <div className={cl.wimaCirlceWrap}>
        <WimaCircle />
      </div>
    </SocialWindow>
  </>)
}