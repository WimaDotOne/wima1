import { useState } from "react"
import { useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, AutoRepeatGrid, Div } from "../../../../../../../../libs/Core/Core2/fCore2"
import { AppleFolder, HeadLine } from "../../../../../../../../libs/Pop/Pop3/fPop3"
import { QuizColor } from "../../../../../CSS/QuizColor"
import { IProject } from "../../../../../Model/IProject"
import { IQuizChapter } from "../../../../../Model/IQuizChapter"
import cl from "./QuizBookChaptersHome.module.scss"

interface IQuizBookChaptersHomeProp {
  project: IProject
  goToNewChapter: ()=>void
  backToProjectHome: ()=>void
}

export function QuizBookChaptersHome({
  project,
  goToNewChapter,
  backToProjectHome
}: IQuizBookChaptersHomeProp) {

  const [loaded, setLoaded] = useState<boolean>(false)
  const [chapters, setChapters] = useState<Array<IQuizChapter>>([])
  const [selectedChapter, setSelectedChapter] = useState<IQuizChapter>()
  const shield = useShield()

  function openChapter(chapter: IQuizChapter) {
    setSelectedChapter(chapter)
  }

  return(<>
  <div className={cl.chapters}>
    <HeadLine text={project.quizBookTitle} buttonText="New Chapter" 
      buttonOnClick={goToNewChapter} 
      color={QuizColor.themeRed} h={3}/>
    
    <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
    {
      chapters.map((chapter, i)=>
      <AppleFolder key={chapter.id} text={chapter.chapterTitle} onClick={
        ()=>{openChapter(chapter)}
      }/>)
    }
    </AutoRepeatGrid>

  </div>
  <Div height={10} />

  <AppleWindowBottomBarFill />
  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={QuizColor.themeRed}
      icon1="chevron.left" onClick1={backToProjectHome}
    />
  </AppleWindowPlainBottomBarDiv>
  </>)
}