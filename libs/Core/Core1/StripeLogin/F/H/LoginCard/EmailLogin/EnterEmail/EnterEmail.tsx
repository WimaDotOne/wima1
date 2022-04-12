import { MutableRefObject, useState } from "react"
import { GENERAL_INPUT_MAX } from "../../../../../../../../../bConfig"
import { Div, IsEmail, Post2, useShield } from "../../../../../../fCore1"
import { Button } from "../../../Button/Button"
import { Description } from "../../../Description/Description"
import { Error } from "../../../Error/Error"
import { Link } from "../../../Link/Link"
import { TextField } from "../../../TextField/TextField"
import { Title } from "../../../Title/Title"
import cl from "./EnterEmail.module.scss"

interface IEnterEmailProp {
  emailRef: MutableRefObject<string>
  goToChooseLoginMethod: ()=>void
  goToEnterPasscode: ()=>void
}

export function EnterEmail({
  emailRef,
  goToChooseLoginMethod,
  goToEnterPasscode
}:IEnterEmailProp) {

  const [email, setEmail] = useState<string>(emailRef?.current || "")
  const [error, setError] = useState<string>("")
  const [disableButton, setDisableButton] = useState<boolean>(false)

  const shield = useShield()

  function onChange(newValue: string) {
    setDisableButton(false)
    setError("")

    setEmail(newValue)
  }

  function Validate() {
    return IsEmail(email?.trim().toLowerCase())
  }

  async function sendPasscode() {
    if(!email) {
      setDisableButton(true)
      setError("Enter an email")
      return
    }
    if(!Validate()) {
      setDisableButton(true)
      setError("Invalid Email")
      return
    }
    emailRef.current = email
    await Post2(shield, "/login/SendPasscode", {
      email
    }, (res)=>{
      goToEnterPasscode()
    }, (res) => {
      setDisableButton(true)
      setError(res.error)
    })
  }

  return (<>
    <Title>Sign in with Email</Title>
    <Description>
      Your email will be your identification and we'll send you a one-time passcode to sign in.
    </Description>
    <Div height={24} />
    <TextField prompt="Email" value={email} 
      onChange={onChange} maxLength={GENERAL_INPUT_MAX}/>
    {
      error ? 
      <>
      <Div height={12}/>
      <Error text={error} />
      </>:null
    }
    <Div height={24} />
    <Button text="Send passcode" disable={disableButton}
      onClick={sendPasscode}/>
    <Div height={28} />
    <div className={cl.back}><Link text="Back" onClick={goToChooseLoginMethod}/></div>
  </>)
}