import { TextListCell } from "../../../../../../../../../libs/Pop/Pop1/ReadEdit/TextListCell"

interface IBasicInfo5ReadProp {
  skills?: string
}

export function BasicInfo5Read({
  skills
}: IBasicInfo5ReadProp) {
  return(<>
  <TextListCell value={skills} />
  </>)
}