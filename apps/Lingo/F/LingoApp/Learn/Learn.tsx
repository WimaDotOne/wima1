import { useState } from 'react'
import { Lang } from '../../Model/Lang'
import { LingoWindow } from '../LingoWindow/LingoWindow'
import { Book } from './Book/Book'
import { Landing } from './Landing/Landing'
import { SpeechScript } from './SpeechScript/SpeechScript'

export function Learn() {

  return (<>
    <SpeechScript />

    <LingoWindow>
      <LearnCore />
    </LingoWindow>
  </>
  )
}

function LearnCore() {
  const [learnTurn, setLearnTurn] = useState<string>(LearnTurn.Landing)

  const [lang, setLang] = useState<string>(Lang.German)
  const [unit, setUnit] = useState<string>("1")

  function goHome() {
    setLearnTurn(LearnTurn.Landing)
  }

  function goBook() {
    setLearnTurn(LearnTurn.Book)
  }

  switch(learnTurn) {
    case LearnTurn.Book: return(
      <Book lang={lang} unit={unit}
        goHome={goHome} />
    )
    default: return(
      <Landing lang={lang} setLang={setLang}
        unit={unit} setUnit={setUnit}
        goBook={goBook}
      />)
  }
}

export const LearnTurn = {
  Landing: "Landing",
  Book: "Book"
}

