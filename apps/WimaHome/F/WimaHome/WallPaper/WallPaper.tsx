import { ReactNode } from "react"
import cl from "./WallPaper.module.scss"

interface WallPaperProp {
  children?: ReactNode
}
export function WallPaper({
  children
}:WallPaperProp) {

  const imageName = "macRainbowFlow.jpg"
  const imageUrl = `/apps/WimaHome/WallPaper/${imageName}`
  return(<>
    <div className={cl.wall} style={{backgroundImage: `url(${imageUrl})`}}>
      {children}
    </div>
  </>)
}
