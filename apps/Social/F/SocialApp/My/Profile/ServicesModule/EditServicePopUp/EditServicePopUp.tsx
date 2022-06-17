import { PopUp } from "../../../../../../../../libs/Pop/Pop1/PopUp/PopUp"
import cl from "./EditServicePopUp.module.scss"

interface IEditServicePopUpProp {
  show: boolean
  setShow: (show: boolean)=>void
}

export function EditServicePopUp({
  show, setShow
}: IEditServicePopUpProp) {

  return(<>
    <PopUp show={show} setShow={setShow}>

    </PopUp>
  </>)
}