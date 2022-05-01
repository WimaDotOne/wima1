import Link from "next/link"
import cl from "./PleaseLogin.module.scss"

export function PleaseLogin() {
  return(<>
    <div className={cl.pleaseLogin}>
      <div>
        <Link href="/apps/Settings/WimaLogin/">Login</Link>  to proceed
      </div>
    </div>
  </>)
}