import { useState } from "react"
import { GENERAL_INPUT_MAX } from "../../../../../../../../bConfig"
import { ErrorLine, Post2, SelectField1, TextField1, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
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

  const [givenName, setGivenName] = useState<string>("")
  const [familyName, setFamilyName] = useState<string>("")
  const [affiliation, setAffiliation] = useState<string>("")
  const [major, setMajor] = useState<string>("")
  const [givenNameError, setGivenNameError] = useState<string>("")
  const [familyNameError, setFamilyNameError] = useState<string>("")
  const [affiliationError, setAffiliationError] = useState<string>("")

  const shield = useShield()

  function validate() {
    let hasError = false
    if(!givenName || !givenName.trim()) {
      setGivenNameError("Required")
      hasError = true
    }
    if(!familyName || !familyName.trim()) {
      setFamilyNameError("Required")
      hasError = true
    }
    if(!affiliation) {
      setAffiliationError("Required")
      hasError = true
    }
    return !hasError
  }

  function changeGivenName(newValue: string) {
    setGivenName(newValue)
    setGivenNameError("")
  }
  function changeFamilyName(newValue: string) {
    setFamilyName(newValue)
    setFamilyNameError("")
  }
  function changeAffiliation(newValue: string) {
    setAffiliation(newValue)
    setAffiliationError("")
  }

  async function save() {
    if(!validate()) return

    await Post2(shield, "/social/CreateProfile", {
      givenName,
      familyName,
      universityAffiliation: affiliation,
      major
    }, (res)=>{
      setShow(false)
    })

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
      value={givenName}
      onChange={changeGivenName}
      maxLength={GENERAL_INPUT_MAX}
    />
    <ErrorLine text={givenNameError} />
    <Div height={15} />
    <TextField1 prompt="Last Name"
      value={familyName} 
      onChange={changeFamilyName}
      maxLength={GENERAL_INPUT_MAX}
    />
    <ErrorLine text={familyNameError} />
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