import { useEffect, useState } from 'react'
import { Get2, useShield } from '../../../../../../libs/Core/Core1/fCore1'
import { IQuizQuiz } from '../../../Model/IQuizQuiz'
import { ChapterCard } from '../ChapterCard/ChapterCard'
import { QuizSheet } from '../QuizSheet/QuizSheet'
import cl from './ChapterQuizPlayer.module.scss'

interface IChapterQuizPlayerProp {
  chapterId?: string
  onBack: ()=>void
}

export function ChapterQuizPlayer({
  chapterId,
  onBack
}: IChapterQuizPlayerProp) {

  const [loaded, setLoaded] = useState<boolean>(false)
  const [chapterName, setChapterName] = useState<string>("")
  const [quizzes, setQuizzes] = useState<Array<IQuizQuiz>>([])
  const [selectedQuiz, setSelectedQuiz] = useState<IQuizQuiz>()
  const [chapterQuizPlayerTurn, setChapterQuizPlayerTurn] = useState<string>("")

  const shield = useShield()

  async function loadChapterQuizzes() {
    
    if(loaded) return
    if(!chapterId) return

    await Get2(shield, `/quiz/LoadPublishedChapterQuizzes?chapterId=${chapterId}`,(res)=>{
      setLoaded(true)
      setChapterName(res.chapterName)
      setQuizzes(res.quizzes)
    })
  }

  function goToQuiz(quiz: IQuizQuiz) {
    setSelectedQuiz(quiz)
    setChapterQuizPlayerTurn(ChapterQuizPlayerTurn.QuizSheet)
  }

  function backToChapterCard() {
    setChapterQuizPlayerTurn(ChapterQuizPlayerTurn.ChapterCard)
  }

  useEffect(()=>{
    loadChapterQuizzes()
  })

  switch(chapterQuizPlayerTurn) {
    case ChapterQuizPlayerTurn.QuizSheet: return(
      <QuizSheet quiz={selectedQuiz} onBack={backToChapterCard}/>
    )
    default: return(<>
      <div className={cl.chapterQuizPlayer}>
        <ChapterCard chapterName={chapterName}
          quizzes={quizzes} onClickQuiz={goToQuiz}
          onBack={onBack}
        />
      </div>
      </>)
  }



}

const ChapterQuizPlayerTurn = {
  ChapterCard: "ChapterCard",
  QuizSheet: "QuizSheet"
}