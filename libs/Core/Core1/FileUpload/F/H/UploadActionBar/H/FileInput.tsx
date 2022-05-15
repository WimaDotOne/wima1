import { ChangeEvent, ChangeEventHandler, useRef } from "react"
import { ImageUploadConfig } from "../../../Model/ImageUploadConfig"
import cl from "./FileInput.module.scss"

interface IFileInputProp {
  onAddFiles: (fileList: FileList)=>void
  multiple?: boolean
  text?: string
  textColor?: string
}
export function FileInput({
  onAddFiles,
  multiple,
  text,
  textColor
} : IFileInputProp) {

  const inputRef = useRef<HTMLInputElement>(null)

  function onClick() {
    const input = inputRef.current
    if(input) {
      input.click()
    }
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files
    if(fileList) {
      onAddFiles(fileList)
    }
    const input = inputRef.current
    if(input) {
      input.value = ""
    }
  }
  text = text || "Add File"
  const btnStyle: { color?: string } = {}
  if(textColor) {
    btnStyle.color = textColor
  }
  return(<>
    <div className={cl.fileBtn} onClick={onClick}
      style={btnStyle}>
    { text }
    </div>
    <input className={cl.input} ref={inputRef} type="file" 
      name="file"
      multiple={multiple} onChange={onChange}/>
  </>)
}