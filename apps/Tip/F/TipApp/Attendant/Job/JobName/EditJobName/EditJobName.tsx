import { GENERAL_INPUT_MAX } from "../../../../../../../../bConfig"
import { TextField1 } from "../../../../../../../../libs/Core/Core1/fCore1"
import cl from "./EditJobName.module.scss"

interface IEditJobNameProp {
  jobName: string
  setJobName: (name: string)=>void
}

export function EditJobName({
  jobName,
  setJobName
}: IEditJobNameProp) {

  function onChange(newValue: string) {
    setJobName(newValue)
  }
  return(<>
   <div className={cl.field}>
     <TextField1 prompt=""
       value={jobName} onChange={onChange} 
       maxLength={GENERAL_INPUT_MAX}/>
   </div>
  </>)
}