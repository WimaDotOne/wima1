import { ReactNode } from "react"
import cl from "./RandomColorCard.module.scss"

interface IRandomColorCardProp {
  children: ReactNode
}

export function RandomColorCard({
  children
}: IRandomColorCardProp) {

  const colors = ["#f7d5d7", "#f7d5d7",
    "#aec4eb", "#fffde0", "#95caf6", 
    "#eeeeee","#fcfcfc", "#faeacb", "#f7dbd7"]
  
  const bgColor = colors[Math.floor(Math.random()*colors.length)]
  return(<>
  <div className={cl.cardSpace}>
    <div className={cl.card} style={{backgroundColor: bgColor}}>
      {children}
    </div>
  </div>
  </>)
}