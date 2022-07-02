import { useState, useRef, useEffect } from "react"
import { ClassNames } from "../../../../../../../../libs/Core/Core1/fCore1"
import { SvgIcon } from "../../../../../../../../libs/Core/Core2/Svg/SvgIcon"
import { LingoColor } from "../../../../../CSS/LingoColor"
import { IsMatch } from "../../../../../Model/Match"
import { Recog } from "../../../../../Model/Recog"
import cl from "./VoiceField.module.scss"

interface IVoiceFieldProp {
  word: string
  pinYin?: string
  lang: string
  setMatch: (match: boolean)=>void
  autoFocus?: boolean
}
export function VoiceField({
  word,
  pinYin,
  lang,
  setMatch,
  autoFocus
}: IVoiceFieldProp) {

  const [refresh, setRefresh] = useState<number>(1)
  const [text, setText] = useState<string>("")
  const [isRecording, setIsRecording] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const recogRef = useRef<Recog>()
  
  useEffect(()=>{
    const recog = recogRef.current
    if(!recog) {
      recogRef.current = new Recog(window, lang)
      setRefresh((refresh+1)%100)
    }
  }, [])

  function onInputChange(newValue: string) {
    setText(newValue)
    if(IsMatch(word, newValue, pinYin)) {
      setMatch(true)
      const input = inputRef.current
      if(input) {
        input.blur()
      }
    } else {
      setMatch(false)
    }
  }

  function onResult(result: string) {
    setText(result)
    if(IsMatch(word, result, pinYin)) {
      setMatch(true)
    }
  }

  function onAudioStart() {
    setIsRecording(true)
  }

  function onAudioEnd() {
    setIsRecording(false)
  }

  function onClickMic() {
    const input = inputRef.current
    if(input) {
      input.focus()
    }
    if(recog && recog.canRecognize) {
      setText("")
      setMatch(false)
      recog.Recognize(word, onResult, onAudioStart, onAudioEnd)
    }
  }

  const recog = recogRef.current
  const noRecog = !recog || !recog.canRecognize
  
  const micColor = noRecog ? "#ccc" : LingoColor.speakerGreen
  const clNoRecog = noRecog ? cl.noRecog : ""
  
  return(<>
    <div className={cl.voiceFieldWrap}>
    <div className={cl.voiceField}>
      <input ref={inputRef}
        className={cl.input}
        value={text} 
        autoFocus={autoFocus}
        onChange={(e)=>{onInputChange(e.target.value)}}
      />
      <div className={ClassNames([cl.micDiv, clNoRecog])}
        title={recog?.info}
        onClick={onClickMic}>
        {
          isRecording ?
          <div className={cl.recording}>
            <div className={cl.recordingInner}>
              REC
            </div>
          </div>:
          <SvgIcon name="mic" width={20} color={micColor}/>
        }
      </div>
    </div>
    </div>
  </>)
}