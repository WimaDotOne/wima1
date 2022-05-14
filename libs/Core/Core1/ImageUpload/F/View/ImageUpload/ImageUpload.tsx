import cl from "./ImageUpload.module.scss"
import { ImageList } from "../../H/ImageList/ImageList";
import { UploadActionBar } from "../../H/UploadActionBar/UploadActionBar";
import { Div } from "../../../../../Core2/fCore2";
import { useState } from "react";
import { IFile } from "../../Model/IFile";

interface IImageUploadProp {
  show: boolean
  setShow: (show: boolean)=>void
  addFileText?: string
  multiple?: boolean
}
export function ImageUpload({
  show, setShow,
  addFileText,
  multiple
}: IImageUploadProp) {

  const [files, setFiles] = useState<Array<IFile>>([])

  function onCancel() {
    setShow(false)
  }

  function onAddFiles(fileList: FileList) {
    for(let i=0; i<fileList.length; i++) {
      const file = fileList[i]
      files.push({
        name: file.name,
        tempUrl: ""
      })
    }
  }

  function onUpload() {
    
  }

  if(!show) return null

  return(<>
    <div className={cl.popup}>
      <ImageList />
      <Div height={50} />
      <UploadActionBar onCancel={onCancel}
        onAddFiles={onAddFiles}
        onUpload={onUpload}
        addFileText={addFileText}
        multiple={multiple}
      />
    </div>
  </>)
}