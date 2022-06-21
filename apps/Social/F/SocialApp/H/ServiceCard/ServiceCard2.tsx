import { ClassNames } from "../../../../../../libs/Core/Core1/fCore1"
import cl from "./ServiceCard2.module.scss"

interface IServiceCardProp {
  name: string,
  shortDescription?: string
  description?: string
  price?: string
  onClick?: ()=>void
}

export function ServiceCard2({
  name,
  shortDescription,
  description,
  price,
  onClick
}: IServiceCardProp) {

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
  <div className={cl.serviceCardSpace} style={cardSpaceStyle}>
    <div className={ClassNames([cl.serviceCard, clClick])} onClick={onClick}>
      <div className={cl.name}>{name}</div>
      <div className={ClassNames([cl.stripe, clColor])}/>
      <div className={cl.bottomHalf}>
        <div className={cl.shortDescription}>{shortDescription}</div>
        {
          description?<div className={cl.ellipsis}>...</div>:null
        }
        <div className={cl.price}>{price}</div>
      </div>
    </div>
  </div>
  </>)
}