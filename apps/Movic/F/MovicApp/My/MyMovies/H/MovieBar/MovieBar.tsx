import { SvgIcon } from "../../../../../../../../libs/Core/Core2/Svg/SvgIcon"
import cl from "./MovieBar.module.scss"

interface IMovieBarprop {
  
}
export function MovieBar() {

  return(<>
    <div className={cl.movieBar}>
      <div className={cl.movie}>
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