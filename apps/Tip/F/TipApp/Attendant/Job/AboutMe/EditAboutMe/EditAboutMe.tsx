import { GENERAL_INPUT_MAX, GENERAL_TEXTAREA_MAX } from "../../../../../../../../bConfig"
import { TextField1 } from "../../../../../../../../libs/Core/Core1/fCore1"
import { TextArea1 } from "../../../../../../../../libs/Core/Core1/Fields/TextArea/TextArea1"
import cl from "./EditAboutMe.module.scss"

interface IEditAboutMeProp {
  firstName?: string
  setFirstName: (name: string)=>void
  selfDescription?: string
  setSelfDescription: (desc: string)=>void
}

export function EditAboutMe({
  firstName,
  setFirstName,
  selfDescription,
  setSelfDescription
}: IEditAboutMeProp) {

  function onFirstNameChange(newValue: string) {
    setFirstName(newValue)
  }

  function onSelfDescriptionChange(newValue: string) {
    setSelfDescription(newValue)
  }

  return(<>
   <div className={cl.field}>
     <TextField1 prompt="First name"
       value={firstName} onChange={onFirstNameChange} 
       maxLength={GENERAL_INPUT_MAX}/>
   </div>
   <div className={cl.field}>
      <TextArea1 prompt="Self description"
        value={selfDescription} onChange={onSelfDescriptionChange}
        maxLength={GENERAL_TEXTAREA_MAX}
      />
   </div>

  </>)
}