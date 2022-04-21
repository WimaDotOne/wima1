import { SvgIcon } from "../../../Core/Core2/Svg/SvgIcon"
import cl from "./GoogleFolder.module.scss"

interface IGoogleFolderProp {
  text: string,
  width?: number
  onClick: ()=>void
}
export function GoogleFolder({
  text,
  width,
  onClick
}: IGoogleFolderProp) {

  width = width || 150
  let textWidth = width - 40
  if(textWidth < 0) { textWidth = 100 }
  const textStyle = { width: textWidth + "px"}
  return(<>
    <div className={cl.folder}>
      <div className={cl.folderIcon}>
        <SvgIcon name="folder.fill" width={20} color="gray" />
      </div>
      <div className={cl.folderName} >
        <div className={cl.folderNameInner} style={textStyle}>
          {text}
        </div>
      </div>
    </div>
  </>)
}