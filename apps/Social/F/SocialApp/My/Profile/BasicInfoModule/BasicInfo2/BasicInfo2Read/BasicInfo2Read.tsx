import { EnumText } from "../../../../../../../../../libs/Core/Core1/fCore1"
import { FieldsWrap } from "../../../../../../../../../libs/Pop/Pop1/fPop1"
import { TextCell } from "../../../../../../../../../libs/Pop/Pop1/ReadEdit/TextCell"
import { Personality2SelectOptions } from "../../../../../../../Enum/Personality2Enum"
import { Personality16SelectOptions } from "../../../../../../../Enum/Personality16Enum"
import { ZodiacSignSelectOptions } from "../../../../../../../Enum/ZodiacSignEnum"

interface IBasicInfo2ReadProp {
  personality2?: string
  personality16?: string
  zodiacSign?: string
}

export function BasicInfo2Read({
  personality2,
  personality16,
  zodiacSign
}: IBasicInfo2ReadProp) {
  return(<>
  <FieldsWrap>
    <TextCell prompt="Personality" 
      value={EnumText(personality2, Personality2SelectOptions)} />
    <TextCell prompt="16 Personality" 
      value={EnumText(personality16, Personality16SelectOptions)} />
    <TextCell prompt="Sign" 
      value={EnumText(zodiacSign, ZodiacSignSelectOptions)} />
  </FieldsWrap>
  </>)
}