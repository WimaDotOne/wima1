import { EnumText } from "../../../../../../../../../libs/Core/Core1/fCore1"
import { FieldsWrap } from "../../../../../../../../../libs/Pop/Pop1/fPop1"
import { TextCell } from "../../../../../../../../../libs/Pop/Pop1/ReadEdit/TextCell"
import { UniversityAffiliationSelectOptions } from "../../../../../../../Enum/UniversityAffiliationEnum"
import cl from "./BasicInfo1Read.module.scss"

interface IBasicInfo1ReadProp {
  givenName?: string
  familyName?: string
  universityAffiliation?: string
  major?: string
}

export function BasicInfo1Read({
  givenName,
  familyName,
  universityAffiliation,
  major
}: IBasicInfo1ReadProp) {
  return(<>
  <FieldsWrap>
    <TextCell prompt="Name" value={`${givenName} ${familyName}`} />
    <TextCell prompt="University Affliation" 
      value={EnumText(universityAffiliation, UniversityAffiliationSelectOptions)} />
    <TextCell prompt="Major" 
      value={major} />
  </FieldsWrap>
  </>)
}