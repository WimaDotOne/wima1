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

  function saveJob() {

  }

  return(<>
  <PopUp pop={pop} setPop={setPop}
    onSave={saveJob}
    title="Edit job"
    saveTextColor="#222"
    saveButtonColor="#FD0"
  >

  </PopUp>
  </>)
}