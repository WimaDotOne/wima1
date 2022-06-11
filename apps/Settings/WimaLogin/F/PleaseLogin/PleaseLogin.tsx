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

interface IPleaseLoginUnivProp {
  loginUrl: string
}
export function PleaseLoginUniv({
  loginUrl
}: IPleaseLoginUnivProp) {

  return(<>
    <div className={cl.pleaseLogin}>
      <div className={cl.pleaseLoginText}>
        <Link href={loginUrl}>
          <span className={cl.loginText}>Verify university email</span>
        </Link> &amp; come back
      </div>
    </div>
  </>)
}