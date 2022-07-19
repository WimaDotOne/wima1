import { auth } from "google-auth-library"
import { GENERAL_INPUT_MAX } from "../../../../../../../../../bConfig"
import { TextField1 } from "../../../../../../../../../libs/Core/Core1/fCore1"
import { Div } from "../../../../../../../../../libs/Core/Core2/fCore2"
import cl from "./EditBookTitle.module.scss"

interface IEditBookTitle {
  title: string
  author?: string
  dedication?: string
  setTitle: (title: string)=>void
  setAuthor: (author: string)=>void
  setDedication: (dedication: string)=>void
}

export function EditBookTitle({
  title, setTitle,
  author, setAuthor,
  dedication, setDedication
}: IEditBookTitle) {


  return(<>
   <div className={cl.fields}>
    <TextField1 prompt="Title"
      value={title} onChange={(value)=>{setTitle(value)}} 
      maxLength={GENERAL_INPUT_MAX}/>
    <Div height={10} />
    <TextField1 prompt="Author"
      value={author || ""} onChange={(value)=>{setAuthor(value)}} 
      maxLength={GENERAL_INPUT_MAX}/>
    <Div height={10} />
    <TextField1 prompt="The book is dedicated to ..."
      ghost="To ..."
      value={dedication || ""} onChange={(value)=>{setDedication(value)}}
      maxLength={GENERAL_INPUT_MAX}/>
   </div>
  </>)
}