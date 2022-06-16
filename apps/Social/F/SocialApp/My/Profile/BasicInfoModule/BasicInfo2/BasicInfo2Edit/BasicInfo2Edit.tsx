import { SelectField1 } from "../../../../../../../../../libs/Core/Core1/fCore1"
import { FieldsWrap, FieldWrap } from "../../../../../../../../../libs/Pop/Pop1/fPop1"
import { Personality16SelectOptions } from "../../../../../../../Enum/Personality16Enum"
import { Personality2SelectOptions } from "../../../../../../../Enum/Personality2Enum"
import { ZodiacSignSelectOptions } from "../../../../../../../Enum/ZodiacSignEnum"
import cl from "./BasicInfo2Edit.module.scss"

interface IBasicInfo2EditProp {
  personality2?: string
  personality16?: string
  zodiacSign?: string
  setPersonality2: (personality2: string)=>void
  setPersonality16: (personality16: string)=>void
  setZodiacSign: (zodiacSign: string)=>void
}

export function BasicInfo2Edit({
  personality2, setPersonality2,
  personality16, setPersonality16,
  zodiacSign, setZodiacSign
}: IBasicInfo2EditProp) {
  return(<>
  <FieldsWrap>
    <FieldWrap width={120} >
      <SelectField1 prompt="Personality"
        value={personality2}
        options={Personality2SelectOptions}
        onChange={(value)=>{setPersonality2(value)}}
      />
    </FieldWrap>
    <FieldWrap width={100} >
      <SelectField1 prompt="16 Personality"
        value={personality16}
        options={Personality16SelectOptions}
        onChange={(value)=>{setPersonality16(value)}}
      />
    </FieldWrap>
    <FieldWrap width={120} >
      <SelectField1 prompt="Zodiac Sign"
        value={zodiacSign}
        options={ZodiacSignSelectOptions}
        onChange={(value)=>{setZodiacSign(value)}}
      />
    </FieldWrap>
  </FieldsWrap>
  </>)
}