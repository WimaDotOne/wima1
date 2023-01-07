import { FourItemNavBar } from "../../../../../Lib/FourItemNavBar/FourItemNavBar"
import cl from "./Login.module.scss"

interface ILoginProp {

}

export function Login({

}: ILoginProp) {
  return(<>
  <div className={cl.login}>
    <FourItemNavBar navModel={LoginNavModel} />
  </div>
  </>)
}

const LoginNavModel = {
  homeIconUrl: '/apps/WimaHome/AppIcons/thanky.png',
  homeRoute: "/apps/Thanky"
}