import { GENERAL_INPUT_MAX } from "../../../../../../../../../bConfig"
import { TextField1 } from "../../../../../../../../../libs/Core/Core1/fCore1"
import cl from "./EditQuizBookTitle.module.scss"

interface IEditQuizBookTitle {
  title: string,
  setTitle: (title: string)=>void
}

export function EditQuizBookTitle({
  title, setTitle
}: IEditQuizBookTitle) {

  function onChange(newValue: string) {
    setTitle(newValue)
  }

  return(<>
   <div className={cl.field}>
     <TextField1 prompt=""
       value={title} onChange={onChange} 
       maxLength={GENERAL_INPUT_MAX}/>
   </div>
  </>)
}