import { FieldsWrap } from "../../../../../../../../../libs/Pop/Pop1/fPop1"
import { TextCell } from "../../../../../../../../../libs/Pop/Pop1/ReadEdit/TextCell"
import cl from "./BasicInfo1Read.module.scss"

interface IBasicInfo1ReadProp {

}

export function BasicInfo1Read({}: IBasicInfo1ReadProp) {
  return(<>
  <FieldsWrap>
    <TextCell prompt="First name" value="Fan" />
    <TextCell prompt="Last name" value="Zheng" />
    <TextCell prompt="University Affliation" value="Alum" />
    <TextCell prompt="Major" value="Alum" />
  </FieldsWrap>
  </>)
}