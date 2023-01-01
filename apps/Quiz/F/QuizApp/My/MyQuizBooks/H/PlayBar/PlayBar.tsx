import { SvgIcon } from "../../../../../../../../libs/Core/Core2/Svg/SvgIcon"
import { AppleIconButton } from "../../../../../../../../libs/Core/Core2/fCore2"
import cl from "./PlayBar.module.scss"
import { IQuizBook } from "../../../../../Model/IQuizBook"

interface IPlayBarProp {
  book?: IQuizBook
  onPlay?: ()=>void
}
export function PlayBar({
  book,
  onPlay
}: IPlayBarProp) {

  return(<>
    <div className={cl.playBar}>
      <div className={cl.playButtonDiv}>
        <AppleIconButton svgName="playbutton" onClick={onPlay}/>
      </div>
      <div className={cl.playDiv}>
        <div className={cl.playImageDiv}>
          <SvgIcon name="book" width={20} color="#bbb" />
        </div>
        <div className={cl.playNameDiv}>
          <div>{book?.title}</div>
        </div>
      </div>
    </div>
  </>)
}