import { AppleIconButtons, AppleWindowPlainBottomBarDiv } from "../../../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../../../libs/Pop/Pop3/fPop3"
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
  </div>


  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={BookColor.themeGreen} strokeWidth={20}
      icon1="chevron.left" onClick1={backToProjectHome} text1=""
    /> 
  </AppleWindowPlainBottomBarDiv>
  </>)
}