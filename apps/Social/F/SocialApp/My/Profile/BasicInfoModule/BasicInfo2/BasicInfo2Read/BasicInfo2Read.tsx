import { FieldsWrap } from "../../../../../../../../../libs/Pop/Pop1/fPop1"
import { TextCell } from "../../../../../../../../../libs/Pop/Pop1/ReadEdit/TextCell"
import cl from "./BasicInfo2Read.module.scss"

interface IBasicInfo2ReadProp {

}

export function BasicInfo2Read({}: IBasicInfo2ReadProp) {
  return(<>
  <FieldsWrap>
    <TextCell prompt="Personality" value="Introvert" />
    <TextCell prompt="16 Personality" value="INFP" />
    <TextCell prompt="Sign" value="Cancer" />
  </FieldsWrap>
  </>)
}