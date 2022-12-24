import { useEffect, useState } from "react"
import { QuizConfig } from "../../../../../../../../../bConfig"
import { Get2, Post2, useShield } from "../../../../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, 
  AppleWindowPlainBottomBarDiv, TextEditor } from "../../../../../../../../../libs/Core/Core2/fCore2"
import { FileNameBar } from "../../../../../../../../../libs/Core/Core2/TextEditor/FileNameBar"
import { useWimaEnv } from "../../../../../../../../Wima/fWima"
import { QuizColor } from "../../../../../../CSS/QuizColor"
import { IQuizQuiz } from "../../../../../../Model/IQuizQuiz"

interface IQuestionsEditorProp {
  quiz: IQuizQuiz
  chapterId: string
  backToQuizHome: ()=>void
}

export function QuestionsEditor({
  quiz,
  chapterId,
  backToQuizHome
}: IQuestionsEditorProp) {

  const [text, setText] = useState<string>("")
  const [hasChange, setHasChange] = useState<boolean>(false)
  const [wrapLine, setWrapLine] = useState<boolean>(false)
  const [loaded, setLoaded] = useState<boolean>(false)

  const wimaEnv = useWimaEnv()
  const shield = useShield()

  function closeFile() {
    backToQuizHome()
  }

  async function saveFile() {
    await Post2(shield, "/quiz/SaveQuizQuestionsText", {
      quizId: quiz._id,
      chapterId,
      text
    }, (res)=>{
      backToQuizHome()
    })
  }

  async function LoadQuizQuestionsText() {
    if(!quiz._id) return
    if(!chapterId) return
    if(loaded) return
    console.log("database load")
    await Get2(shield, `/quiz/LoadQuizQuestionsTextEditor?quizId=${quiz._id}&chapterId=${chapterId}`, (res)=>{
      setLoaded(true)
      setText(res.questionsText)
    })
  }

  function toggleWrap() {
    setWrapLine(!wrapLine)
  }

  useEffect(()=>{
    LoadQuizQuestionsText()
  })

  const textMaxLength = +(wimaEnv?.quizQuestionsMaxLength || QuizConfig.quizQuestionsMaxLength)

  return(<>
  <FileNameBar fileName={quiz.title} />
  <TextEditor text={text} setText={setText} styleHeight="calc(100vh - 76px)"
    setHasChange={setHasChange} autoFocus wrapLine={wrapLine}
    maxLength={textMaxLength}
  />
  <AppleWindowBottomBarFill />
  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={QuizColor.themeRed}
      icon1="x" onClick1={closeFile}
      icon2={wrapLine ? "lineunwrap": "linewrap"} onClick2={toggleWrap}
      icon5="floppydisk" onClick5={saveFile} disabled5={!hasChange}
    />
  </AppleWindowPlainBottomBarDiv>
  </>)
}