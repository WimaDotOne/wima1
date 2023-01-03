import { ReactNode } from "react"
import cl from "./RandomColorCard.module.scss"

interface IRandomColorCardProp {
  children: ReactNode
}

export function RandomColorCard({
  children
}: IRandomColorCardProp) {

  const colors = ["#f7d5d7",
    "#aec4eb", "#fffde0", "#95caf6", 
    "#eeeeee","#fcfcfc", "#faeacb",
    "#ffbb73", "#ffd766", "#fffacd", "#90ee90"
  ]
  
  const index = Math.floor(Math.random()*colors.length)
  
  const bgColor = colors[index] + "66"
  
  return(<>
  <div className={cl.cardSpace}>
    <div className={cl.card} style={{backgroundColor: bgColor}}>
      {children}
    </div>
  </div>
  </>)
}