import React, { ChangeEvent } from "react"
import { PostFormData2, useShield } from "../../../../fCore1"

interface IImageUploaderProp {
  configKey: string
  multiple?: boolean
}

export const ImageUploader = React.forwardRef<HTMLInputElement, IImageUploaderProp>(({ 
  configKey,
  multiple 
}, ref)=>{
  const shield = useShield()
  
  async function onChange(e: ChangeEvent<HTMLInputElement>) {
    const formData = new FormData()
    const fileList = e.target.files
    if(!fileList || !fileList.length) return
    for(let i=0; i<fileList.length; i++) {
      formData.append("file", fileList[i])
    }
    formData.append("configKey", configKey)

    await PostFormData2(shield, "/uploadFile/uploadImage", formData,
      (res)=>{
        console.log(res)
      }
    )
  }

  return(<>
    <input ref={ref}
      onChange={onChange}
      style={{display: "none"}} 
      type="file" 
      name="file" 
      multiple={multiple}
    />
  </>)
  }
)