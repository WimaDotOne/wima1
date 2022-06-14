import { useState } from "react"
import { GENERAL_INPUT_MAX } from "../../../../../../../../bConfig"
import { ErrorLine, SelectField1, TextField1 } from "../../../../../../../../libs/Core/Core1/fCore1"
import { Div } from "../../../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1 } from "../../../../../../../../libs/Pop/Pop2/fPop2"
import cl from "./CreateProfile.module.scss"
import { UniversityAffiliationSelectOptions } from "../../../../../../Enum/UniversityAffiliationEnum"
import { PopUp } from "../../../../../../../../libs/Pop/Pop1/PopUp/PopUp"
import { SocialColor } from "../../../../../CSS/SocialColor"

interface ICreateProfile {
  show: boolean,
  setShow: (show: boolean)=>void
}
export function CreateProfile({
  show,
  setShow
}: ICreateProfile) {

  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [affiliation, setAffiliation] = useState<string>("")
  const [major, setMajor] = useState<string>("")
  const [firstNameError, setFirstNameError] = useState<string>("")
  const [lastNameError, setLastNameError] = useState<string>("")
  const [affiliationError, setAffiliationError] = useState<string>("")

  function validate() {
    let hasError = false
    if(!firstName || !firstName.trim()) {
      setFirstNameError("Required")
      hasError = true
    }
    if(!lastName || !lastName.trim()) {
      setLastNameError("Required")
      hasError = true
    }
    if(!affiliation) {
      setAffiliationError("Required")
      hasError = true
    }
    return !hasError
  }

  function changeFirstName(newValue: string) {
    setFirstName(newValue)
    setFirstNameError("")
  }
  function changeLastName(newValue: string) {
    setLastName(newValue)
    setLastNameError("")
  }
  function changeAffiliation(newValue: string) {
    setAffiliation(newValue)
    setAffiliationError("")
  }

  async function save() {
    if(!validate()) return
  }

  return(<>
  <PopUp show={show} 
    setShow={setShow}
    color={SocialColor.themeBlue}
    onSave={save}
    maxWidth={400}>
    <AppleNewsHeader1 text1="New Profile" h={2} />
    <Div height={20} />
    <TextField1 prompt="First Name" 
      value={firstName}
      onChange={changeFirstName}
      maxLength={GENERAL_INPUT_MAX}
    />
    <ErrorLine text={firstNameError} />
    <Div height={15} />
    <TextField1 prompt="Last Name"
      value={lastName} 
      onChange={changeLastName}
      maxLength={GENERAL_INPUT_MAX}
    />
    <ErrorLine text={lastNameError} />
    <Div height={15} />
    <SelectField1 prompt="University Affiliation" 
      value={affiliation}
      onChange={changeAffiliation}
      options={UniversityAffiliationSelectOptions}
    />
    <ErrorLine text={affiliationError} />
    <Div height={15} />
    <TextField1 prompt="Major (Optional)"
      value={major}
      onChange={(value)=>{setMajor(value)}}
      maxLength={GENERAL_INPUT_MAX}
    />
    <Div height={20} />
  </PopUp>
  </>)
}