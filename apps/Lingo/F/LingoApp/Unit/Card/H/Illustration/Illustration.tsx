import { useEffect, useRef } from "react"
import cl from "./Illustration.module.scss"

interface IllustrationProp {
  imageUrl?: string
  translate: string
}
export function Illustration({
  imageUrl,
  translate
}: IllustrationProp) {

  const imageDivRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const imageDiv = imageDivRef.current
    if(imageDiv) {
      imageDiv.style.height = imageDiv.clientWidth +"px"

      if(imageUrl) {
        imageDiv.style.backgroundImage = `url(${imageUrl})`
      }
    }
  })

  return (<>
    <div ref={imageDivRef} className={cl.imageDiv}>
    {
      imageUrl? null:
      <div className={cl.translate}>{translate}</div>
    }
    </div>
  </>)
}