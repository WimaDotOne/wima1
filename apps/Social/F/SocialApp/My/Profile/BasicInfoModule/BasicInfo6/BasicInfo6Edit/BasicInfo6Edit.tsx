import { GENERAL_TEXTAREA_MAX } from "../../../../../../../../../bConfig"
import { TextArea1 } from "../../../../../../../../../libs/Core/Core1/Fields/TextArea/TextArea1"

interface IBasicInfo6EditProp {
  experiences2?: string
  setExperiences2: (experiences2: string)=>void
}

export function BasicInfo6Edit({
  experiences2,
  setExperiences2
}: IBasicInfo6EditProp) {
  return(<>
  <TextArea1 value={experiences2}
    onChange={(value)=>{setExperiences2(value)}}
    maxLength={GENERAL_TEXTAREA_MAX}
    rows={5}
  />
  </>)
}