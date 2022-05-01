import Link from "next/link"
import cl from "./PleaseLogin.module.scss"

export function PleaseLogin() {
  return(<>
    <div className={cl.pleaseLogin}>
      <div className={cl.pleaseLoginText}>
        <Link href="/apps/Settings/WimaLogin/">
          <span className={cl.loginText}>Login</span>
        </Link> &amp; come back
      </div>
    </div>
  </>)
}