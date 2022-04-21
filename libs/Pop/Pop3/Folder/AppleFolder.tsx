import { SvgIcon } from "../../../Core/Core2/Svg/SvgIcon"
import cl from "./AppleFolder.module.scss"

interface IAppleFolderProp {
  text: string
  onClick: ()=>void
}

export function AppleFolder({
  text,
  onClick
}: IAppleFolderProp) {
  return(<>
    <div className={cl.folder}>
      <SvgIcon name="folder2" width={50} />
      <div className={cl.folderName}>
        {text}
      </div>
    </div>
  </>)
}