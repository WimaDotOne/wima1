import { ClassNames } from "../../../../../../libs/Core/Core1/fCore1"
import cl from "./NeedCard2.module.scss"

interface INeedCardProp {
  name: string,
  shortDescription?: string
  description?: string
  onClick?: ()=>void
}

export function NeedCard2({
  name,
  shortDescription,
  description,
  onClick
}: INeedCardProp) {

  let spaceWidth = 300

  if(name.length + (shortDescription?.length || 0) < 100) {
    spaceWidth = 200
  }
  
  if(name.length < 25 && (shortDescription?.length || 0) < 50) {
    spaceWidth = 150
  }
  
  const cardSpaceStyle = {
    width: spaceWidth + "px"
  }
  const clClick = onClick ? cl.click : ""
  description = (description || "").trim()

  const num = Math.floor(Math.random()*6)+1
  let clColor = ""
  switch (num) {
    case 1: clColor = cl.color1; break;
    case 2: clColor = cl.color2; break;
    case 3: clColor = cl.color3; break;
    case 4: clColor = cl.color4; break;
    case 5: clColor = cl.color5; break;
    case 6: clColor = cl.color6; break;
    default: clColor = cl.color7; break;
  }

  return(<>
  <div className={cl.needCardSpace} style={cardSpaceStyle}>
    <div className={ClassNames([cl.needCard, clClick])} onClick={onClick}>
      <div className={cl.name}>{name}</div>
      <div className={ClassNames([cl.stripe, clColor])}/>
      <div className={cl.bottomHalf}>
        <div className={cl.shortDescription}>{shortDescription}</div>
        {
          description?<div className={cl.ellipsis}>...</div>:null
        }
      </div>
    </div>
  </div>
  </>)
}