import { TextListCell } from "../../../../../../../../../libs/Pop/Pop1/ReadEdit/TextListCell"

interface IBasicInfo4ReadProp {
  experiences?: string
}

export function BasicInfo4Read({
  experiences
}: IBasicInfo4ReadProp) {
  return(<>
  <TextListCell value={experiences} />

  </>)
}