import { useEffect, useState } from "react"
import { CardDiv } from "../H/CardDiv/CardDiv"
import { WordRow } from "../H/WordRow/WordRow"
import { VoiceField } from "../H/VoiceField/VoiceField"
import { Illustration } from "../H/Illustration/Illustration"
import { CheckMark } from "../H/CheckMark/CheckMark"
import { Div } from "../../../../../../../libs/Core/Core2/fCore2"
import cl from "./RepeatCard.module.scss"

interface IRepeatCardProp {
  word: string
  pinYin?: string
  translate: string
  lang: string
  imageUrl?: string
  autoFocus?: boolean
}
export function RepeatCard({
  word,
  pinYin,
  translate,
  lang,
  imageUrl,
  autoFocus
}:IRepeatCardProp) {

  const [match, setMatch] = useState<boolean>(false)

  const isChinese = lang === "zh-CN"
  return(<>
    <CardDiv>
      <WordRow word={word} pinYin={pinYin} speaker lang={lang}/>
      <VoiceField lang={lang} autoFocus={autoFocus}
        word={word} pinYin={pinYin} setMatch={setMatch}/>
      <Div height={10} />
      <Illustration imageUrl={imageUrl} translate={translate} />
      {
        match ? <CheckMark />:null
      }
          {
      isChinese ? 
      <div className={cl.chineseWord}>
      { word }
      </div>:null
    }
    </CardDiv>
  </>)
}