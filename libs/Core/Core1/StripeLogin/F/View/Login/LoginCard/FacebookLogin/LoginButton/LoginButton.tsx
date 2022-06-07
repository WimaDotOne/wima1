import { SvgIcon } from "../../../../../../../../Core2/Svg/SvgIcon"
import cl from "./LoginButton.module.scss"

interface ILoginButtonProp {
  onClick: ()=>void
}

export function LoginButton({
  onClick
}:ILoginButtonProp) {
  return(<>
    <div className={cl.btn} onClick={onClick}>
      <SvgIcon name="facebook.inverse" width={30} />
      <div className={cl.text}>Sign in with Facebook</div>
    </div>
  </>)
}