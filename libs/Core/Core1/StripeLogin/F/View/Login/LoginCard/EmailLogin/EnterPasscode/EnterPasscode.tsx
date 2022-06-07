import { MutableRefObject, useState } from "react"
import { GENERAL_INPUT_MAX } from "../../../../../../../../../../bConfig"
import { Div } from "../../../../../../../../Core2/fCore2"
import { Post2, useShield } from "../../../../../../../fCore1"
import { Button } from "../../../../../H/Button/Button"
import { Description } from "../../../../../H/Description/Description"
import { Error } from "../../../../../H/Error/Error"
import { Link } from "../../../../../H/Link/Link"
import { TextField } from "../../../../../H/TextField/TextField"
import { Title } from "../../../../../H/Title/Title"
import cl from "./EnterPasscode.module.scss"

interface IEnterPasscodeProp {
  afterLogin: ()=>void
  emailRef: MutableRefObject<string>
  goToEnterEmail: ()=>void
}

export function EnterPasscode({
  afterLogin,
  emailRef,
  goToEnterEmail
}:IEnterPasscodeProp) {
  const [passcode, setPasscode] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [disableButton, setDisableButton] = useState<boolean>(false)
  const shield = useShield()

  function onChange(newValue: string) {
    setDisableButton(false)
    setError("")

    setPasscode(newValue)
  }

  async function signIn() {
    if(!passcode) {
      setDisableButton(true)
      setError("Enter a passcode")
      return
    }
    await Post2(shield, "/login/EmailLogin", {
      email: emailRef.current,
      passcode
    }, afterLogin, (res)=>{
      setDisableButton(true)
      setError(res.error)
    })
  }

  return (<>
    <Title>Passcode</Title>
    <Description>
      Enter the one-time passcode you received in your email {emailRef?.current}.
    </Description>
    <Div height={24} />
    <TextField prompt="Passcode" value={passcode} onChange={onChange} maxLength={GENERAL_INPUT_MAX}/>
    {
      error ? 
      <>
      <Div height={12}/>
      <Error text={error} />
      </>:null
    }
    <Div height={24} />
    <Button text="Sign in" disable={disableButton}
      onClick={signIn}/>
    <Div height={28} />
    <div className={cl.back}><Link text="Send another passcode" onClick={goToEnterEmail}/></div>
  </>)
}