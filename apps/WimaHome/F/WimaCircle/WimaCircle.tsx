import { useRouter } from "next/router"
import { SvgIcon } from "../../../../libs/Core/Core2/Svg/SvgIcon"
import cl from "./WimaCircle.module.scss"

interface WimaCircle {
  
}

export function WimaCircle({

}: WimaCircle) {

  const router = useRouter()
  
  function goToWimaHome() {
    router.replace("/")
  }
  return(<>
    <div className={cl.goToWimaHome}>
      <div className={cl.wimaCircleBtn} onClick={goToWimaHome}>
        <SvgIcon name="wimacircle1" width={50} />
        <div className={cl.text}>Wima Home</div>
      </div>
    </div>
  </>)
}