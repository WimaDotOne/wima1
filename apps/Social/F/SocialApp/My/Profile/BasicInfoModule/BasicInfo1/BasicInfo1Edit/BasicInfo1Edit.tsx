import { GENERAL_INPUT_MAX } from "../../../../../../../../../bConfig"
import { SelectField1, TextField1 } from "../../../../../../../../../libs/Core/Core1/fCore1"
import { FieldsWrap, FieldWrap } from "../../../../../../../../../libs/Pop/Pop1/fPop1"
import { UniversityAffiliationSelectOptions } from "../../../../../../../Enum/UniversityAffiliationEnum"
import cl from "./BasicInfo1Edit.module.scss"

interface IBasicInfo1EditProp {
  givenName?: string
  familyName?: string
  universityAffiliation?: string
  major?: string
  setGivenName: (givenName: string)=>void
  setFamilyName: (familyName: string)=>void
  setUniversityAffiliation: (universityAffiliation: string)=>void
  setMajor: (major: string)=>void
}

export function BasicInfo1Edit({
  givenName,
  familyName,
  universityAffiliation,
  major,
  setGivenName,
  setFamilyName,
  setUniversityAffiliation,
  setMajor
}: IBasicInfo1EditProp) {
  return(<>
  <FieldsWrap>
    <FieldWrap width={120} >
      <TextField1 prompt="First Name"
        value={givenName}
        onChange={(value)=>{setGivenName(value)}}
        maxLength={GENERAL_INPUT_MAX}
      />
    </FieldWrap>
    <FieldWrap width={180} >
      <TextField1 prompt="Last Name"
        value={familyName}
        onChange={(value)=>{setFamilyName(value)}}
        maxLength={GENERAL_INPUT_MAX}
      />
    </FieldWrap>
    <FieldWrap width={130} >
      <SelectField1 prompt="Affiliation" defaultValue="x"
        value={universityAffiliation}
        options={UniversityAffiliationSelectOptions}
        onChange={(value)=>{setUniversityAffiliation(value)}}
      />
    </FieldWrap>
    <FieldWrap width={170} >
      <TextField1 prompt="Major"
        value={major}
        onChange={(value)=>{setMajor(value)}}
        maxLength={GENERAL_INPUT_MAX}
      />
    </FieldWrap>
  </FieldsWrap>
  </>)
}