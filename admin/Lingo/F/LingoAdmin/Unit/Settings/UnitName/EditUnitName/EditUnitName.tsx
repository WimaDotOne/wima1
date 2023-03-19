import { GENERAL_INPUT_MAX } from "../../../../../../../../bConfig"
import { NumberField1, TextField1 } from "../../../../../../../../libs/Core/Core1/fCore1"
import { Div } from "../../../../../../../../libs/Core/Core2/fCore2"
import cl from "./EditUnitName.module.scss"

interface IEditUnitName {
  name: string,
  setName: (name: string)=>void
  number: string,
  setNumber: (number: string)=>void
}

export function EditUnitName({
  name, setName,
  number, setNumber
}: IEditUnitName) {

  function onNameChange(newValue: string) {
    setName(newValue)
  }

  function onNumberChange(newValue: string) {
    setNumber(newValue)
  }

  return(<>
  <div className={cl.field}>
    <TextField1 prompt=""
      value={name} onChange={onNameChange} 
      maxLength={GENERAL_INPUT_MAX}/>
    <Div height={15} />
    <NumberField1 prompt="number"
      value={number} onChange={onNumberChange} 
      maxLength={GENERAL_INPUT_MAX}/>
   </div>
  </>)
}