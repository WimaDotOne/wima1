import { MutableRefObject, useState } from "react"
import { GENERAL_INPUT_MAX } from "../../../../../../../../../../bConfig"
import { Div } from "../../../../../../../../Core2/fCore2"
import { IsEmail, Post2, useShield } from "../../../../../../../fCore1"
import { Button } from "../../../../../H/Button/Button"
import { Description } from "../../../../../H/Description/Description"
import { Error } from "../../../../../H/Error/Error"
import { TextField } from "../../../../../H/TextField/TextField"
import { Title } from "../../../../../H/Title/Title"

interface IEnterEmailProp {
  emailRef: MutableRefObject<string>
  givenNameRef: MutableRefObject<string>
  familyNameRef: MutableRefObject<string>
  goToEnterPasscode: ()=>void
}

export function EnterEmail({
  emailRef,
  givenNameRef,
  familyNameRef,
  goToEnterPasscode
}:IEnterEmailProp) {

  const [email, setEmail] = useState<string>(emailRef?.current || "")
  const [givenName, setGivenName] = useState<string>(givenNameRef?.current || "")
  const [familyName, setFamilyName] = useState<string>(familyNameRef?.current || "")
  const [emailError, setEmailError] = useState<string>("")
  const [disableButton, setDisableButton] = useState<boolean>(false)

  const shield = useShield()

  function onChangeGivenName(newValue: string) {
    setDisableButton(false)

    setGivenName(newValue)
  }

  function onChangeFamilyName(newValue: string) {
    setDisableButton(false)

    setFamilyName(newValue)
  }

  function onChangeEmail(newValue: string) {
    setDisableButton(false)
    setEmailError("")

    setEmail(newValue)
  }

  function Validate() {
    let isValid = true

    if(!email) {
      isValid = false
      setEmailError("Required")
    } else if(!IsEmail(email?.trim().toLowerCase())) {
      isValid = false
      setEmailError("Invalid Email")
    }

    return isValid
  }

  async function sendPasscode() {

    if(!Validate()) {
      setDisableButton(true)
      return
    }
    givenNameRef.current = givenName
    familyNameRef.current = familyName
    emailRef.current = email
    await Post2(shield, "/login/SendUnivPasscode", {
      email,
      givenName,
      familyName
    }, (res)=>{
      goToEnterPasscode()
    }, (res) => {
      setDisableButton(true)
      setEmailError(res.error)
    })
  }

  return (<>
    <Title>Sign in with University Email</Title>
    <Description>
      Your university email will be your identification and we'll send you a one-time passcode to sign in.
    </Description>
    <Div height={10} />
    <Description>
      Enter your name if it your first time to log in or if you want to change your name.
    </Description>
    <Div height={24} />
    <TextField prompt="First Name" value={givenName} 
      onChange={onChangeGivenName} maxLength={GENERAL_INPUT_MAX}/>
    <Div height={12} />
    <TextField prompt="Last Name" value={familyName} 
      onChange={onChangeFamilyName} maxLength={GENERAL_INPUT_MAX}/>
    <Div height={12} />
    <TextField prompt="University Email" value={email} 
      onChange={onChangeEmail} maxLength={GENERAL_INPUT_MAX}/>
    {
      emailError ?
      <>
      <Div height={12}/>
      <Error text={emailError} />
      </>:null
    }
    <Div height={24} />
    <Button text="Send passcode" disable={disableButton}
      onClick={sendPasscode}/>
    <Div height={28} />
  </>)
}