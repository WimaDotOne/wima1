import React, { ChangeEvent } from "react"
import { PostFormData2, useShield } from "../../../../fCore1"
import { IFormTextField } from "../../Model/IFormTextField"

interface IFileInputProp {
  route: string
  formTextFields?: Array<IFormTextField>
  multiple?: boolean,
  onSuccess: (res: any)=>void
  clear?: ()=>void
}

export const FileInput = React.forwardRef<HTMLInputElement, IFileInputProp>(({ 
  route,
  formTextFields,
  multiple,
  onSuccess,
  clear
}, ref)=>{
  const shield = useShield()
  const name = "file"

  async function onChange(e: ChangeEvent<HTMLInputElement>) {
    const formData = new FormData()
    const fileList = e.target.files
    if(!fileList || !fileList.length) return
    for(let i=0; i<fileList.length; i++) {
      formData.append(name, fileList[i])
    }
    if(clear) { clear() }
    if(formTextFields && formTextFields.length) {
      for(const field of formTextFields) {
        formData.append(field.key, field.value)
      }
    }

    await PostFormData2(shield, route, formData,
      (res)=>{
        onSuccess(res)
      }
    )
  }
  return(<>
    <input type="file"
      ref={ref}
      onChange={onChange}
      style={{display: "none"}} 
      name={name} 
      multiple={multiple}
    />
  </>)
  }
)