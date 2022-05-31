import { SvgIcon } from "../../../../../../../../libs/Core/Core2/Svg/SvgIcon"
import { AppleIconButton } from "../../../../../../../../libs/Core/Core2/fCore2"
import cl from "./MovicBar.module.scss"
import { Picture } from "../../../../H/Controls/Picture/Picture"

interface IMovicBarprop {
  
}
export function MovicBar() {

  function playMovic() {

  }

  const dvdCoverUrl = "/apps/WimaHome/WallPaper/macRainbowFlow.jpg"
  return(<>
    <div className={cl.movicBar}>
      <div className={cl.playButtonDiv}>
        <AppleIconButton svgName="playbutton" onClick={playMovic}/>
      </div>
      <div className={cl.movicDiv}>
        <div className={cl.movicImageDiv}>
          <Picture url={dvdCoverUrl} svgName="film" svgWidth={20} svgColor="#bbb" />
        </div>
        <div className={cl.movicNameDiv}>
          <div>Scott Pilgrilm vs the World</div>
        </div>
      </div>
    </div>
  </>)
}