import { LingoAdminWindow } from "../LingoAdminWindow/LingoAdminWindow"
import cl from "./LingoAdminCircle.module.scss"
import { AdminCircle } from "../../../../WimaAdmin/F/AdminCircle/AdminCircle"

export function LingoAdminCircle() {
  return(<>
    <LingoAdminWindow>
      <div className={cl.adminCirlceWrap}>
        <AdminCircle />
      </div>
    </LingoAdminWindow>
  </>)
}