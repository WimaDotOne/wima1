import { CenterDiv } from "../../H/CenterCardDiv/CenterCardDiv"
import { Background } from "../Background/Background"
import { UnivLoginCard } from "./UnivLoginCard/UnivLoginCard"

interface IUnivLoginProp {
}
export function UnivLogin({
}: IUnivLoginProp) {
  
  return(<>
    <Background />
    <CenterDiv brand="Social">
      <UnivLoginCard />
    </CenterDiv>
  </>)
}