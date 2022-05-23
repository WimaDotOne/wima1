import React, { ChangeEvent } from "react"
import { Alert, PostFormData2, useShield } from "../../../../fCore1"
import { IFormTextField } from "../../Model/IFormTextField"
import { ImageUploadConfig } from "../../../../../../../bConfig"

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
  const name = "file" // is used also in iImageMulter
  const maxFileSize = ImageUploadConfig.maxFileSize
  const maxTotalFileSize = ImageUploadConfig.maxTotalFileSize

  const maxFileSizeMb = Math.round(maxFileSize/(1000*1000))
  const maxTotalFileSizeMb = Math.round((maxTotalFileSize)/(1000*1000))

  async function onChange(e: ChangeEvent<HTMLInputElement>) {
    const formData = new FormData()
    const fileList = e.target.files
    if(!fileList || !fileList.length) return

    let totalFileSize = 0

    for(let i=0; i<fileList.length; i++) {
      const file =  fileList[i]
      if(file.size > maxFileSize) {
        Alert(`${file.name} is over ${maxFileSizeMb} MB`)
        return
      }
      totalFileSize = totalFileSize + file.size
      if(totalFileSize > maxTotalFileSize) {
        Alert(`Can only upload upto ${maxTotalFileSizeMb} MB at a time`)
      }
      formData.append(name, file)
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