import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, AutoRepeatGrid } from "../../../../../../../../libs/Core/Core2/fCore2"
import { File, FileType, HeadLine } from "../../../../../../../../libs/Pop/Pop3/fPop3"
import { BookColor } from "../../../../../CSS/BookColor"
import { IChapter } from "../../../../../Model/IChapter"
import { IProject } from "../../../../../Model/IProject"
import cl from "./ChaptersHome.module.scss"

interface IChaptersHomeProp {
  project: IProject
  chapters: Array<IChapter>
  backToProjectHome: ()=>void
  goToNewChapter: ()=>void
  goToChapterEditor: (chapterId: string)=>void
  goToChapterSettings: (chapterId: string)=>void
}
export function ChaptersHome({
  project,
  chapters,
  backToProjectHome,
  goToNewChapter,
  goToChapterEditor,
  goToChapterSettings
}: IChaptersHomeProp) {

  const chapters2 = []
  for(const chapter of chapters) {
    chapters2.push(chapter)
    chapters2.push(chapter)
  }

  return(<>
  <div className={cl.home}>
    <HeadLine text={project?.bookTitle} h={3} 
      buttonText="New Chapter"
      buttonOnClick={goToNewChapter}
      color={BookColor.themeGreen}
    />
    <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
    {
      chapters2.map((chapter, i)=>
        i%2===0 ?
        <File key={i} text={`§${chapter.chapterNumber}. ${chapter?.name}`} iconName="textfile" type={FileType.text} 
          onClick={()=>{goToChapterEditor(chapter.id)}} 
        />:
        <File key={i} text={`§${chapter.chapterNumber}. ${chapter?.name}`} iconName="gear" type={FileType.settings} 
          onClick={()=>{goToChapterSettings(chapter.id)}} 
        />
      )
    }
    </AutoRepeatGrid>
  </div>

  <AppleWindowBottomBarFill />

  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={BookColor.themeGreen} strokeWidth={20}
      icon1="chevron.left" onClick1={backToProjectHome} text1=""
    /> 
  </AppleWindowPlainBottomBarDiv>
  </>)
}