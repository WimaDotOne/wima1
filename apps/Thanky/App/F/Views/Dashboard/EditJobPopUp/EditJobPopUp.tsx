import { PopUp } from "../../../../../Lib/PopUp/PopUp"
import cl from "./EditJobPopUp.module.scss"

interface IEditJobPopUpProp {
  pop: boolean
  setPop: (pop: boolean)=>void
}

export function EditJobPopUp({
  pop,
  setPop
}: IEditJobPopUpProp) {
  return(<>
  <PopUp pop={pop} setPop={setPop}
    title="Edit job"
  >

  </PopUp>
  </>)
}