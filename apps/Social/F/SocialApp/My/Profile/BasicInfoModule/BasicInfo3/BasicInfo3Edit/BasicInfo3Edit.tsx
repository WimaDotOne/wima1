import { GENERAL_TEXTAREA_MAX } from "../../../../../../../../../bConfig"
import { TextArea1 } from "../../../../../../../../../libs/Core/Core1/Fields/TextArea/TextArea1"
import cl from "./BasicInfo3Edit.module.scss"

interface IBasicInfo3EditProp {
  aboutMe?: string
  setAboutMe: (aboutMe: string)=>void
}

export function BasicInfo3Edit({
  aboutMe,
  setAboutMe
}: IBasicInfo3EditProp) {
  return(<>
  <TextArea1 value={aboutMe}
    onChange={(value)=>{setAboutMe(value)}}
    maxLength={GENERAL_TEXTAREA_MAX}
    rows={5}
  />
  </>)
}