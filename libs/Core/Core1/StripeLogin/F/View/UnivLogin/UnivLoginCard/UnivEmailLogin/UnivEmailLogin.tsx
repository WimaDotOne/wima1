import { useRef, useState } from "react"
import { EnterEmail } from "./EnterEmail/EnterEmail"
import { EnterPasscode } from "./EnterPasscode/EnterPasscode"

interface IUnivEmailLoginProp {
  afterLogin: ()=>void
}

export function UnivEmailLogin({
  afterLogin,
}: IUnivEmailLoginProp) {
  const [emailLoginTurn, setUnivEmailLoginTurn] = useState<UnivEmailLoginTurn>(UnivEmailLoginTurn.EnterEmail)
  const emailRef = useRef<string>("")

  function goToEnterPasscode() {
    setUnivEmailLoginTurn(UnivEmailLoginTurn.EnterPasscode)
  }

  function goToEnterEmail() {
    setUnivEmailLoginTurn(UnivEmailLoginTurn.EnterEmail)
  }

  switch(emailLoginTurn) {
    case UnivEmailLoginTurn.EnterPasscode: return(
      <EnterPasscode 
        afterLogin={afterLogin}
        emailRef={emailRef}
        goToEnterEmail={goToEnterEmail}/>
    )
    default: return(
      <EnterEmail emailRef={emailRef}
        goToEnterPasscode={goToEnterPasscode}/>
    )
  }
}

enum UnivEmailLoginTurn {
  EnterEmail = 1,
  EnterPasscode
}