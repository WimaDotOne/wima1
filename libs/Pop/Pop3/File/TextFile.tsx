import { SvgIcon } from "../../../Core/Core2/Svg/SvgIcon"
import cl from "./TextFile.module.scss"

interface ITextFileProp {
  text: string
  onClick: ()=>void
}
export function TextFile({
  text,
  onClick
}: ITextFileProp) {
  return(<>
    <div className={cl.file} onClick={onClick}>
      <SvgIcon name="textfile" width={50} color="#6b9bd2"/>
      <div className={cl.fileName}>
        {text}
      </div>
    </div>
  </>)
}