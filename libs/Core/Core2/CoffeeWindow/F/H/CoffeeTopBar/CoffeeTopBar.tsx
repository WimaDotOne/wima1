import { ClassNames } from "../../../../../Core1/fCore1"
import cl from "./CoffeeTopBar.module.scss"
import { PhotoHamburger } from "./PhotoHamburger/PhotoHamburger"

interface ICoffeeTopBarProp {
  homeIconUrl: string
  onClickHomeIcon?: ()=>void
  onClickHamburger: ()=>void
  photoUrl?: string
}

export function CoffeeTopBar({
  homeIconUrl,
  onClickHomeIcon,
  onClickHamburger,
  photoUrl
}: ICoffeeTopBarProp) {

  const clClickHomeIcon = onClickHomeIcon ? cl.clickHomeIcon : ""

  return(<>
  <div className={cl.topBar}>
    <div className={ClassNames([cl.homeIcon, clClickHomeIcon])}
      style={{backgroundImage: `url(${homeIconUrl})`}}
      onClick={onClickHomeIcon}/>
    <div>

    </div>
    <div className={cl.photoHamburgerSpace}>
      <PhotoHamburger onClick={onClickHamburger} photoUrl={photoUrl}/>
    </div>
  </div>
  <div className={cl.topBarSpaceFill} />
  </>)
}