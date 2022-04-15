import { SvgIcon } from "../../../../../../../../libs/Core/Core2/Svg/SvgIcon"
import { AppleIconButton } from "../../../../../../../../libs/Core/Core2/fCore2"
import cl from "./MovieBar.module.scss"
import { Picture } from "../../../../H/Controls/Picture/Picture"

interface IMovieBarprop {
  
}
export function MovieBar() {

  function playMovie() {

  }

  const dvdCoverUrl = "/apps/WimaHome/WallPaper/macRainbowFlow.jpg"
  return(<>
    <div className={cl.movieBar}>
      <div className={cl.playButtonDiv}>
        <AppleIconButton svgName="playbutton" onClick={playMovie}/>
      </div>
      <div className={cl.movieDiv}>
        <div className={cl.movieImageDiv}>
          <Picture url={dvdCoverUrl} svgName="film" svgWidth={20} svgColor="#bbb" />
        </div>
        <div className={cl.movieNameDiv}>
          <div>Scott Pilgrilm vs the World</div>
        </div>
      </div>
    </div>
  </>)
}