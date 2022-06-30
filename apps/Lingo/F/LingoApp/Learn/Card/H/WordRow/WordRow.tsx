import { ClassNames } from "../../../../../../../../libs/Core/Core1/fCore1"
import { SpeakButton } from "../SpeakButton/SpeakButton"
import cl from "./WordRow.module.scss"

interface IWordRowProp {
  word: string
  lang?: string
  speaker?: boolean
}
export function WordRow({
  word,
  speaker,
  lang
}:IWordRowProp) {
  
  const wordStyle = WordStyle(word)
  const clSpeaker = speaker ? cl.speaker : ""

  return(<>
    <div className={ClassNames([cl.wordRow, clSpeaker])}>
      <div className={cl.word} style={wordStyle}>
        {word}
      </div>
      {
        speaker && lang?
        <div className={cl.speakerDiv}>
          <SpeakButton text={word} lang={lang}/>
        </div>:null
      }
    </div>
  </>)
}

function WordStyle(word: string) {
  if(!word) return {}
  const len = word.length
  if(len < 22) return { fontSize: "24px"}
  if(len < 38) return { fontSize: "18px"}
  return { fontSize: "16px"}
}