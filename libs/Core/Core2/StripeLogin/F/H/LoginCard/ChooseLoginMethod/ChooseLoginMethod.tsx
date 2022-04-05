import { Div } from "../../../../../../Core1/fCore1"
import { LoginConfig } from "../../../Model/LoginConfig"
import { Title } from "../../Title/Title"
import { LoginCardTurn } from "../LoginCard"
import { BigIconButton } from "./BigIconButton/BigIconButton"
import cl from "./ChooseLoginMethod.module.scss"

interface IChooseLoginMethodProp {
  config: LoginConfig
  setLoginCardTurn: (turn: LoginCardTurn)=>void
}
export function ChooseLoginMethod({
  config,
  setLoginCardTurn
}: IChooseLoginMethodProp) {

  function onClickGoogle() { setLoginCardTurn(LoginCardTurn.GoogleLogin) }
  function onClickFacebook() { setLoginCardTurn(LoginCardTurn.FacebookLogin) }
  function onClickEmail() { setLoginCardTurn(LoginCardTurn.EmailLogin) }

  return(<>
    <Title>Sign in with ...</Title>
    <Div height={30} />
    <div className={cl.buttons}>
      {
        config.useGoogle?<>
        <BigIconButton name="google" text="Google" iconWidth={75}
          onClick={onClickGoogle}/>
        <Div height={20} />
        </>:null
      }
      {
        config.useFacebook?<>
        <BigIconButton name="facebook" text="Facebook" iconWidth={90}
          onClick={onClickFacebook}/>
        <Div height={20} />
        </>:null
      }
      {
        config.useEmail?<>
        <BigIconButton name="email" text="Email" iconWidth={70} color="rgb(32,180,250)" 
        onClick={onClickEmail}/>
        </>:null
      }
    </div>
  </>)
}