import { SvgIcon } from "../../../../../Core2/Svg/SvgIcon"
import { FileInput } from "./H/FileInput"
import cl from "./UploadActionBar.module.scss"

interface IUploadActionBarProp {
  onCancel: ()=>void
  onAddFiles: (fileList: FileList)=>void
  onUpload: ()=>void
  addFileText?: string
  multiple?: boolean
}
export function UploadActionBar({
  onCancel,
  onAddFiles,
  onUpload,
  addFileText,
  multiple
}: IUploadActionBarProp) {

  return(<>
    <div className={cl.actionBar}>
      <div className={cl.xDiv} onClick={onCancel}>
        <SvgIcon name="x" color="#67656a" width={20} />
      </div>
      <FileInput onAddFiles={onAddFiles} text={addFileText}
        multiple={multiple}/>
      <div className={cl.saveDiv} onClick={onUpload}>
        <SvgIcon name="floppydisk" color="#67656a" width={20} />
      </div>
    </div>
  </>)
}