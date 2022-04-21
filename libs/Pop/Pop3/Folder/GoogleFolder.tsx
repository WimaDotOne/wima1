import { SvgIcon } from "../../../Core/Core2/Svg/SvgIcon"
import cl from "./GoogleFolder.module.scss"

interface IGoogleFolderProp {
  text: string,
  onClick: ()=>void
}
export function GoogleFolder({
  text,
  onClick
}: IGoogleFolderProp) {

  return(<>
    <div className={cl.folder}>
      <div className={cl.folderIcon}>
        <SvgIcon name="folder.fill" width={15} color="#aaa" />
      </div>
      <div className={cl.folderName} >
        <div className={cl.folderNameInner} >
          {text}
        </div>
      </div>
    </div>
  </>)
}