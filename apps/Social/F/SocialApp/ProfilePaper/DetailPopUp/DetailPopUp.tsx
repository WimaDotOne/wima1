import { Div } from "../../../../../../libs/Core/Core2/fCore2"
import { PopUp } from "../../../../../../libs/Pop/Pop1/PopUp/PopUp"
import { TextareaCell } from "../../../../../../libs/Pop/Pop1/ReadEdit/TextareaCell"
import { AppleNewsHeader1 } from "../../../../../../libs/Pop/Pop2/fPop2"

interface IEditNeedPopUpProp {
  title?: string
  description?: string
  show: boolean
  setShow: (show: boolean)=>void
}

export function DetailPopUp({
  title,
  description,
  show,
  setShow
}: IEditNeedPopUpProp) {

  return(<>
    <PopUp show={show} setShow={setShow}>
      <AppleNewsHeader1 text1={title || ""} h={3} />
      <Div height={5} />
      <TextareaCell prompt="Description" value={description} pre/>
    </PopUp>
  </>)
}