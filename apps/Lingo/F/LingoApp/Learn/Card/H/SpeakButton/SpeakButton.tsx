import { useEffect, useRef, useState } from "react"
import { ClassNames } from "../../../../../../../../libs/Core/Core1/fCore1"
import { SvgIcon } from "../../../../../../../../libs/Core/Core2/Svg/SvgIcon"
import { Speaker } from "../../../../../Model/Speaker"
import cl from "./SpeakButton.module.scss"

interface ISpeakButtonProp {
  text: string
  lang: string
}
export function SpeakButton({
  text,
  lang
}: ISpeakButtonProp) {

  const [refreshCount, setRefreshCount] = useState<number>(1)
  const speakerRef = useRef<Speaker>()

  useEffect(()=>{
    //Speaker.canSpeak might be false the first time it is instantiated, but we should only try finite many times.
    if(refreshCount > 100) return

    const speaker = speakerRef.current
    if(!speaker || !speaker.canSpeak) {
      speakerRef.current = new Speaker(window, lang)

      setRefreshCount(refreshCount+1)
    }

  }, [])

  const speaker = speakerRef.current
  const disable = !speaker || !speaker.canSpeak

  const clDisable = disable ? cl.disable:""

  function speak() {
    if(disable) return
    speaker.Speak(text)
  }
  return(<>
    <div className={ClassNames([cl.audioDiv, clDisable])}
      onClick={speak} title={speaker?.info}>
      <SvgIcon name="audio" width={15} color="white" />
    </div>
  </>)
}