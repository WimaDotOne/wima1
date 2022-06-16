import { GENERAL_TEXTAREA_MAX } from "../../../../../../../../../bConfig"
import { TextArea1 } from "../../../../../../../../../libs/Core/Core1/Fields/TextArea/TextArea1"
import cl from "./BasicInfo4Edit.module.scss"

interface IBasicInfo4EditProp {
  experiences?: string
  setExperiences: (experiences: string)=>void
}

export function BasicInfo4Edit({
  experiences,
  setExperiences
}: IBasicInfo4EditProp) {
  return(<>
  <TextArea1 value={experiences}
    onChange={(value)=>{setExperiences(value)}}
    maxLength={GENERAL_TEXTAREA_MAX}
    rows={5}
  />
  </>)
}