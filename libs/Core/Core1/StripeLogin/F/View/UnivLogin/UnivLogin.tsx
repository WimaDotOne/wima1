import { CenterDiv } from "../../H/CenterCardDiv/CenterCardDiv"
import { Background } from "../Background/Background"
import { UnivLoginCard } from "./UnivLoginCard/UnivLoginCard"

interface IUnivLoginProp {
  afterLogin?: ()=>void
  afterLogout?: ()=>void
}
export function UnivLogin({
  afterLogin,
  afterLogout
}: IUnivLoginProp) {
  
  return(<>
    <Background />
    <CenterDiv brand="Social">
      <UnivLoginCard afterLogin={afterLogin}
        afterLogout={afterLogout}/>
    </CenterDiv>
  </>)
}