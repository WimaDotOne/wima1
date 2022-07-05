import { WimaCircle } from "../../../../../Wima/F/WimaCircle/WimaCircle"
import { StoryWindow } from "../../StoryWindow/StoryWindow"
import cl from "./StoryWimaCircle.module.scss"

export function StoryWimaCircle() {
  return(<>
    <StoryWindow>
      <div className={cl.wimaCirlceWrap}>
        <WimaCircle />
      </div>
    </StoryWindow>
  </>)
}