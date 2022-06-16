import { GENERAL_TEXTAREA_MAX } from "../../../../../../../../../bConfig"
import { TextArea1 } from "../../../../../../../../../libs/Core/Core1/Fields/TextArea/TextArea1"
import cl from "./BasicInfo5Edit.module.scss"

interface IBasicInfo5EditProp {
  skills?: string
  setSkills: (skills: string)=>void
}

export function BasicInfo5Edit({
  skills,
  setSkills
}: IBasicInfo5EditProp) {
  return(<>
  <TextArea1 value={skills}
    onChange={(value)=>{setSkills(value)}}
    maxLength={GENERAL_TEXTAREA_MAX}
    rows={5}
  />
  </>)
}