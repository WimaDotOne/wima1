import { ClassNames } from "../../../../../../Core1/fCore1"
import { SvgIcon } from "../../../../../Svg/SvgIcon"
import cl from "./PhotoHamburger.module.scss"

interface IPhotoHamburgerProp {
  onClick: ()=>void
  photoUrl?: string
}

export function PhotoHamburger({
  onClick,
  photoUrl
}: IPhotoHamburgerProp) {

  return(<>
  <div className={cl.photoHamburger} 
    onClick = {onClick}
  >
    <div className={cl.hamburgerSpace}>
      <SvgIcon name="hamburger" width={15} strokeWidth={25} color={"#333"}/>
    </div>
    {
      photoUrl ? 
      <div className={cl.photo}
        style={{backgroundImage: `url(${photoUrl})`}}
      />:null
    }
  </div>
  </>)
}