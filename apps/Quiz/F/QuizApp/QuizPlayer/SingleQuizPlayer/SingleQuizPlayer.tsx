import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv } from "../../../../../../libs/Core/Core2/fCore2"
import { QuizColor } from "../../../CSS/QuizColor"
import { IQuizQuiz } from "../../../Model/IQuizQuiz"
import { QuizSheet } from "../QuizSheet/QuizSheet"

interface ISingleQuizPlayerProp {
  quizId: string
  onBack: ()=>void
}

export function SingleQuizPlayer({
  quizId,
  onBack
}: ISingleQuizPlayerProp) {

  const [loaded, setLoaded] = useState<boolean>(false)
  const [quiz, setQuiz] = useState<IQuizQuiz>()
  const shield = useShield()

  async function loadQuiz() {
    
    if(loaded) return
    await Get2(shield, `/quiz/LoadSingleQuiz?quizId=${quizId}`,(res)=>{
      setLoaded(true)
      setQuiz(res.quiz)
    })
  }

  useEffect(()=>{
    loadQuiz()
  })

  if(!quiz) return null

  return(<>
    <QuizSheet quiz={quiz} />
    <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={QuizColor.themeRed}
        icon1="chevron.left" onClick1={onBack}
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
}