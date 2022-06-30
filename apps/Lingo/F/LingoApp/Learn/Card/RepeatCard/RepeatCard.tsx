import { useEffect, useState } from "react"
import { CardDiv } from "../H/CardDiv/CardDiv"
import { WordRow } from "../H/WordRow/WordRow"
import { VoiceField } from "../H/VoiceField/VoiceField"
import { Illustration } from "../H/Illustration/Illustration"
import { CheckMark } from "../H/CheckMark/CheckMark"
import { Div } from "../../../../../../../libs/Core/Core2/fCore2"

interface IRepeatCardProp {
  word: string
  translate: string
  lang: string
  imageUrl?: string
  autoFocus?: boolean
}
export function RepeatCard({
  word,
  translate,
  lang,
  imageUrl,
  autoFocus
}:IRepeatCardProp) {

  const [match, setMatch] = useState<boolean>(false)

  useEffect(()=>{
   
  }, [match])

  return(<>
    <CardDiv>
      <WordRow word={word} speaker lang={lang}/>
      <VoiceField lang={lang} autoFocus={autoFocus}
        word={word} setMatch={setMatch}/>
      <Div height={10} />
      <Illustration imageUrl={imageUrl} translate={translate} />
      {
        match ? <CheckMark />:null
      }
      
    </CardDiv>
  </>)
}