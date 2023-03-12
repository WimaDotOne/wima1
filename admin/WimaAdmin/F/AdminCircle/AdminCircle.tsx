import { useRouter } from "next/router"
import { SvgIcon } from "../../../../libs/Core/Core2/Svg/SvgIcon"
import cl from "./AdminCircle.module.scss"


export function AdminCircle() {

  const router = useRouter()
  
  function goToAdminHome() {
    router.replace("/admin/Home")
  }
  return(<>
    <div className={cl.goToAdminHome}>
      <div className={cl.wimaCircleBtn} onClick={goToAdminHome}>
        <div className={cl.wimaCirleBtnInner}>
          <SvgIcon name="wimacircle1" width={60} />
          <div className={cl.text}>Admin Home</div>
        </div>
      </div>
    </div>
  </>)
}