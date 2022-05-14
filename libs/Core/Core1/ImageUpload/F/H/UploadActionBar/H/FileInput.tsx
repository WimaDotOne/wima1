import { ChangeEvent, ChangeEventHandler, useRef } from "react"
import cl from "./FileInput.module.scss"

interface IFileInputProp {
  onAddFiles: (fileList: FileList)=>void
  multiple?: boolean
  text?: string
}
export function FileInput({
  onAddFiles,
  multiple,
  text
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
  return(<>
    <div className={cl.fileBtn} onClick={onClick}>
    { text }
    </div>
    <input className={cl.input} ref={inputRef} type="file" 
      multiple={multiple} onChange={onChange}/>
  </>)
}