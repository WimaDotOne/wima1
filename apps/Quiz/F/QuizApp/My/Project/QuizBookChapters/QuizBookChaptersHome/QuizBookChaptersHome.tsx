import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, AutoRepeatGrid, Div } from "../../../../../../../../libs/Core/Core2/fCore2"
import { AppleFolder, HeadLine } from "../../../../../../../../libs/Pop/Pop3/fPop3"
import { QuizColor } from "../../../../../CSS/QuizColor"
import { IProject } from "../../../../../Model/IProject"
import { IQuizChapter } from "../../../../../Model/IQuizChapter"
import cl from "./QuizBookChaptersHome.module.scss"

interface IQuizBookChaptersHomeProp {
  project: IProject
  goToNewChapter: ()=>void
  goToSelectedChapter: (chapter: IQuizChapter)=>void
  backToProjectHome: ()=>void
}

export function QuizBookChaptersHome({
  project,
  goToNewChapter,
  goToSelectedChapter,
  backToProjectHome
}: IQuizBookChaptersHomeProp) {

  const [loaded, setLoaded] = useState<boolean>(false)
  const [chapters, setChapters] = useState<Array<IQuizChapter>>([])
  const shield = useShield()

  function openChapter(chapter: IQuizChapter) {
    goToSelectedChapter(chapter)
  }

  async function loadChapters() {
    if(loaded) return
    await Get2(shield, `/quiz/LoadMyQuizBookChapters?projectId=${project.id}`,
     (res) => {
      setLoaded(true)
      setChapters(res.chapters)
     }
    )
  }

  useEffect(()=>{
    loadChapters()
  })

  return(<>
  <div className={cl.chapters}>
    <HeadLine text={project.quizBookTitle} buttonText="New Chapter" 
      buttonOnClick={goToNewChapter} 
      color={QuizColor.themeRed} h={3}/>
    
    <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
    {
      chapters.map((chapter, i)=>
      <AppleFolder key={chapter._id} text={chapter.title} onClick={
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