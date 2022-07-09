import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, AutoRepeatGrid } from "../../../../../../../../libs/Core/Core2/fCore2"
import { File, FileType, HeadLine } from "../../../../../../../../libs/Pop/Pop3/fPop3"
import { BookColor } from "../../../../../CSS/BookColor"
import { IProject } from "../../../../../Model/IProject"
import cl from "./ChaptersHome.module.scss"

interface IChaptersHomeProp {
  project: IProject
  backToProjectHome: ()=>void
  goToNewChapter: ()=>void
}
export function ChaptersHome({
  project,
  backToProjectHome,
  goToNewChapter
}: IChaptersHomeProp) {

  return(<>
  <div className={cl.home}>
    <HeadLine text={project?.bookTitle} h={3} 
      buttonText="New Chapter"
      buttonOnClick={goToNewChapter}
      color={BookColor.themeGreen}
    />
    <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
      <File text="1. Hello there" iconName="textfile" type={FileType.text} 
        onClick={()=>{}} />
      <File text="2. Forgetting you is like forgetting myself" iconName="textfile" type={FileType.text} 
  onClick={()=>{}} />
        <File text="3. End" iconName="textfile" type={FileType.text} 
  onClick={()=>{}} />
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