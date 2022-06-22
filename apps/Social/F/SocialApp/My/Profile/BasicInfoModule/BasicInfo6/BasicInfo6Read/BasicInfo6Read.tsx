import { TextListCell } from "../../../../../../../../../libs/Pop/Pop1/ReadEdit/TextListCell"

interface IBasicInfo6ReadProp {
  experiences2?: string
}

export function BasicInfo6Read({
  experiences2
}: IBasicInfo6ReadProp) {
  return(<>
  <TextListCell value={experiences2} />

  </>)
}