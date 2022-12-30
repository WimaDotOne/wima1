import { useEffect, useState } from "react"
import { ClassNames } from "../../../../../../libs/Core/Core1/fCore1"
import { IQuizQuiz } from "../../../Model/IQuizQuiz"
import cl from "./ChapterCard.module.scss"

interface IChapterCardProp {
  chapterName: string
  quizzes: Array<IQuizQuiz>
  onClickQuiz: (quiz: IQuizQuiz) => void
}

export function ChapterCard({
  chapterName,
  quizzes,
  onClickQuiz
}: IChapterCardProp) {


  const [randomNum, setRandomNum] = useState<number>(0)

  useEffect(()=>{
    if(randomNum < 1) {
      const num = Math.floor(Math.random()*6 + 1)
      setRandomNum(num)
    }
  })

  quizzes = quizzes || []
  let clRandomColor = ""
  switch (randomNum) {
    case 1: clRandomColor = cl.color1; break;
    case 2: clRandomColor = cl.color2; break;
    case 3: clRandomColor = cl.color3; break;
    case 4: clRandomColor = cl.color4; break;
    case 5: clRandomColor = cl.color5; break;
    case 6: clRandomColor = cl.color6; break;
  }

  return(<>
  <div className={cl.chapterCard}>
    <div className={ClassNames([cl.chapterName, clRandomColor])}>
      {chapterName}
    </div>
    {
      quizzes.map((quiz, i)=> {

        const clNotLastRow = i < quizzes.length ? cl.notLastRow : ""

        return(
        <div key={i} className={ClassNames([cl.quizRow, clNotLastRow])}>
          <div className={ClassNames([cl.quizNum, clRandomColor])}>
            {PadZero(i+1)}
          </div>
          <div className={cl.quizTitle} onClick={()=>{
            onClickQuiz(quiz)
          }}>
            {quiz.title}
          </div>
        </div>
        )
      }
      )
    }
  </div>
  </>)
}

function PadZero(num: number) {
  if(num < 10) {
    return "0"+num
  }
  return ""+num
}