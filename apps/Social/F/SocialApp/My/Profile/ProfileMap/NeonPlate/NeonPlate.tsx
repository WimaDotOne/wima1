import { ClassNames } from "../../../../../../../../libs/Core/Core1/fCore1"
import cl from "./NeonPlate.module.scss"

interface INeonPlateProp {
  title: string
  description: string
  onClick: ()=>void
  pink?: boolean
  green?: boolean
  brown?: boolean
  blue?: boolean
  yellow?: boolean
}
export function NeonPlate({
  title,
  description,
  onClick,
  pink, green,brown, blue, yellow
}:INeonPlateProp) {

  let clBackColor = ""
  if(pink) clBackColor = cl.pink
  if(green) clBackColor = cl.green
  if(brown) clBackColor = cl.brown
  if(blue) clBackColor = cl.blue
  if(yellow) clBackColor = cl.yellow

  let clClick = ""
  clClick = cl.click

  return(<>
  <div className={cl.plateSpace}>
    <div className={ClassNames([cl.plate, clBackColor])} 
      onClick={onClick}>
      <div className={cl.title}>{title}</div>
      <div className={cl.description}>{description}</div>
    </div>
  </div>
  
  </>)
}