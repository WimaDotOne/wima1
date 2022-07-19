import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, Div } from "../../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../../libs/Pop/Pop3/fPop3"
import { BookColor } from "../../../../CSS/BookColor"
import { IProject } from "../../../../Model/IProject"
import { BookCover } from "./BookCover/BookCover"
import { BookTitle } from "./BookTitle/BookTitle"
import { Publish } from "./Publish/Publish"
import cl from "./Settings.module.scss"

interface ISettingsProp {
  project: IProject
  setProjectBookTitle: (bookTitle: string)=>void
  backToProjectHome: ()=>void
}
export function Settings({
  project,
  setProjectBookTitle,
  backToProjectHome
}: ISettingsProp) {

  return(<>
  <div className={cl.settings}>
    <HeadLine text={project.bookTitle} h={3} />
    <Div height={10} />
    <BookTitle 
      project={project}
      setProjectBookTitle={setProjectBookTitle}
    />
    <Div height={20} />
    <BookCover project={project} />
    <Div height={20} />
    <Publish project={project} />
  </div>
  <AppleWindowBottomBarFill />
  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={BookColor.themeGreen}
      icon1="chevron.left" onClick1={backToProjectHome}
    />
  </AppleWindowPlainBottomBarDiv>
  </>)
}