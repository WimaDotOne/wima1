import { SvgIcon } from "../../../../../../../../libs/Core/Core2/Svg/SvgIcon"
import { AppleIconButton } from "../../../../../../../../libs/Core/Core2/fCore2"
import cl from "./MovieBar.module.scss"

interface IMovieBarprop {
  
}
export function MovieBar() {

  function playMovie() {

  }

  return(<>
    <div className={cl.movieBar}>
      <div className={cl.playButtonDiv}>
        <AppleIconButton svgName="playbutton" onClick={playMovie}/>
      </div>
      <div className={cl.movieDiv}>
        <div className={cl.movieImageDiv}>
          <SvgIcon name="film" width={20} color="#bbb" />
        </div>
        <div className={cl.movieNameDiv}>
          <div>Scott Pilgrilm vs the World</div>
        </div>
      </div>
    </div>
  </>)
}