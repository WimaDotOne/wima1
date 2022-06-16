import { TextareaCell } from "../../../../../../../../../libs/Pop/Pop1/ReadEdit/TextareaCell"

interface IBasicInfo3ReadProp {
  aboutMe?: string
}

export function BasicInfo3Read({
  aboutMe
}: IBasicInfo3ReadProp) {
  return(<>
  <TextareaCell value={aboutMe} pre />
  </>)
}