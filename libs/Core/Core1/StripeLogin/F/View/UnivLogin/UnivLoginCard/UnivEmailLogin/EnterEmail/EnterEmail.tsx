import { MutableRefObject, useState } from "react"
import { GENERAL_INPUT_MAX } from "../../../../../../../../../../bConfig"
import { Div } from "../../../../../../../../Core2/fCore2"
import { IsEduEmail, Post2, useShield } from "../../../../../../../fCore1"
import { Button } from "../../../../../H/Button/Button"
import { Description } from "../../../../../H/Description/Description"
import { Error } from "../../../../../H/Error/Error"
import { TextField } from "../../../../../H/TextField/TextField"
import { Title } from "../../../../../H/Title/Title"

interface IEnterEmailProp {
  emailRef: MutableRefObject<string>
  goToEnterPasscode: ()=>void
}

export function EnterEmail({
  emailRef,
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
    return IsEduEmail(email?.trim().toLowerCase())
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
    <Title>Sign in with University Email</Title>
    <Description>
      Your university email will be your identification and we'll send you a one-time passcode to sign in.
    </Description>
    <Div height={24} />
    <TextField prompt="University Email" value={email} 
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
  </>)
}