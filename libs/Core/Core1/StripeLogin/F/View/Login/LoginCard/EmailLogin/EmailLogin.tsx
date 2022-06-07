import { useRef, useState } from "react"
import { EnterEmail } from "./EnterEmail/EnterEmail"
import { EnterPasscode } from "./EnterPasscode/EnterPasscode"

interface IEmailLoginProp {
  afterLogin: ()=>void
  goToChooseLoginMethod: ()=>void
}

export function EmailLogin({
  afterLogin,
  goToChooseLoginMethod,
}: IEmailLoginProp) {
  const [emailLoginTurn, setEmailLoginTurn] = useState<EmailLoginTurn>(EmailLoginTurn.EnterEmail)
  const emailRef = useRef<string>("")

  function goToEnterPasscode() {
    setEmailLoginTurn(EmailLoginTurn.EnterPasscode)
  }

  function goToEnterEmail() {
    setEmailLoginTurn(EmailLoginTurn.EnterEmail)
  }

  switch(emailLoginTurn) {
    case EmailLoginTurn.EnterPasscode: return(
      <EnterPasscode 
        afterLogin={afterLogin}
        emailRef={emailRef}
        goToEnterEmail={goToEnterEmail}/>
    )
    default: return(
      <EnterEmail emailRef={emailRef}
        goToChooseLoginMethod={goToChooseLoginMethod}
        goToEnterPasscode={goToEnterPasscode}/>
    )
  }
}

export enum EmailLoginTurn {
  EnterEmail = 1,
  EnterPasscode
}