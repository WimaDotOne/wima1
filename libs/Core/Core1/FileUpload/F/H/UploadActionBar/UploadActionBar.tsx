import { SvgIcon } from "../../../../../Core2/Svg/SvgIcon"
import { ImageUploadConfig } from "../../Model/ImageUploadConfig"
import { FileInput } from "./H/FileInput"
import cl from "./UploadActionBar.module.scss"

interface IUploadActionBarProp {
  onCancel: ()=>void
  onAddFiles: (fileList: FileList)=>void
  onUpload: ()=>void
  addFileText?: string
  multiple?: boolean
  themeColor?: string
}
export function UploadActionBar({
  onCancel,
  onAddFiles,
  onUpload,
  addFileText,
  multiple,
  themeColor
}: IUploadActionBarProp) {

  themeColor = themeColor || "#4285f4"
  return(<>
    <div className={cl.actionBar}>
      <div className={cl.xDiv} onClick={onCancel}>
        <SvgIcon name="x" color={themeColor} width={20} />
      </div>
      <FileInput 
        onAddFiles={onAddFiles} text={addFileText}
        multiple={multiple} textColor={themeColor}/>
      <div className={cl.saveDiv} onClick={onUpload}>
        <SvgIcon name="floppydisk" color={themeColor} width={20} />
      </div>
    </div>
  </>)
}