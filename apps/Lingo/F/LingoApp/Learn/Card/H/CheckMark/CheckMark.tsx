import { useEffect, useRef, useState } from "react"
import cl from "./CheckMark.module.scss"

interface CheckMarkProp {
}
export function CheckMark({
}: CheckMarkProp) {

  const checkDivRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(()=>{
    const checkDiv = checkDivRef.current
    if(checkDiv) {
      checkDiv.style.height = checkDiv.clientWidth +"px"
    }
    const audio = audioRef.current
    if(audio) {
      audio.volume = 0.5
      audio.play()
    }
  }, [])
  const checkStyle = { backgroundImage: "url(/apps/Lingo/img/checkmark.green.svg)"}
  return (<>
    <div ref={checkDivRef} className={cl.checkDiv}>
      <div className={cl.check} style={checkStyle}>

      </div>
    </div>
    <audio ref={audioRef} src="/apps/Lingo/mp3/correct.mp3" />
  </>)
}