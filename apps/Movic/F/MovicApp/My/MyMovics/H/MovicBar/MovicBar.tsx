import { SvgIcon } from "../../../../../../../../libs/Core/Core2/Svg/SvgIcon"
import { AppleIconButton } from "../../../../../../../../libs/Core/Core2/fCore2"
import cl from "./MovicBar.module.scss"
import { Picture } from "../../../../H/Controls/Picture/Picture"
import { IMovic } from "../../../../../Model/IMovic"

interface IMovicBarProp {
  movic?: IMovic
  onPlay?: ()=>void
}
export function MovicBar({
  movic,
  onPlay
}: IMovicBarProp) {

  const dvdCoverUrl = movic?.imageUrl || ""
  return(<>
    <div className={cl.movicBar}>
      <div className={cl.playButtonDiv}>
        <AppleIconButton svgName="playbutton" onClick={onPlay}/>
      </div>
      <div className={cl.movicDiv}>
        <div className={cl.movicImageDiv}>
          <Picture url={dvdCoverUrl} svgName="film" svgWidth={20} svgColor="#bbb" />
        </div>
        <div className={cl.movicNameDiv}>
          <div>{movic?.title}</div>
        </div>
      </div>
    </div>
  </>)
}