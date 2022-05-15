import cl from "./ImageUpload.module.scss"
import { ImageList } from "../../H/ImageList/ImageList";
import { UploadActionBar } from "../../H/UploadActionBar/UploadActionBar";
import { Div } from "../../../../../Core2/fCore2";
import { useState } from "react";
import { IFile } from "../../Model/IFile";
import { PostFormData2, useShield } from "../../../../fCore1";

interface IImageUploadProp {
  configKey: string
  show: boolean
  setShow: (show: boolean)=>void
  addFileText?: string
  multiple?: boolean
  themeColor?: string
}
export function ImageUpload({
  configKey,
  show, setShow,
  addFileText,
  multiple,
  themeColor
}: IImageUploadProp) {

  const [files, setFiles] = useState<Array<IFile>>([])
  const shield = useShield()

  function onCancel() {
    setShow(false)
  }

  async function onAddFiles(fileList: FileList) {
    const formData = new FormData()
    for(let i=0; i<fileList.length; i++) {
      const file = fileList[i]
      formData.append("file", file)
    }
    formData.append("configKey", configKey)
    await PostFormData2(shield, `/file/AddImages`, formData,
      (res)=>{

      }
    )
  }

  function onUpload() {

  }

  if(!show) return null

  return(<>
    <div className={cl.popup}>
      <ImageList />
      <Div height={50} />
      <UploadActionBar 
        onCancel={onCancel}
        onAddFiles={onAddFiles}
        onUpload={onUpload}
        addFileText={addFileText}
        multiple={multiple}
        themeColor={themeColor}
      />
    </div>
  </>)
}