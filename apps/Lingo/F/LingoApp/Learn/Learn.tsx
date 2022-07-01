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
  const [level, setLevel] = useState<string>("1")
  const [lesson, setLesson] = useState<string>("1")

  function goHome() {
    setLearnTurn(LearnTurn.Landing)
  }

  function goBook() {
    setLearnTurn(LearnTurn.Book)
  }

  switch(learnTurn) {
    case LearnTurn.Book: return(
      <Book lang={lang} level={level} lesson={lesson}
        goHome={goHome} />
    )
    default: return(
      <Landing lang={lang} setLang={setLang}
        level={level} setLevel={setLevel}
        lesson={lesson} setLesson={setLesson}
        goBook={goBook}
      />)
  }
}

export const LearnTurn = {
  Landing: "Landing",
  Book: "Book"
}

