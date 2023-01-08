import { useRouter } from "next/router"
import { WimaLogin2 } from "../../../../../../Wima/F/WimaLogin/WimaLogin2"
import cl from "./Login.module.scss"

interface ILoginProp {

}

export function Login({

}: ILoginProp) {

  const router = useRouter()

  function afterLogin() {
    //use replace instead of push, otherwise back button may never be able to back up
    router.replace("/apps/Thanky/Dashboard")
  }

  function onBack() {
    router.push("/apps/Thanky/")
  }

  return(<>
  <WimaLogin2 brand="Thanky" 
    brandIconUrl="/apps/WimaHome/AppIcons/thanky.png"
    afterLogin={afterLogin}
    onBrand={onBack}
  />
  </>)
}