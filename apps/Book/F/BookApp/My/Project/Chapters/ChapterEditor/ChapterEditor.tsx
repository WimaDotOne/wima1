import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv } from "../../../../../../../../libs/Core/Core2/fCore2"
import { BookColor } from "../../../../../CSS/BookColor"
import { IProject } from "../../../../../Model/IProject"
import cl from "./ChapterEditor.module.scss"

interface IChapterEditorProp {
  project: IProject
  chapterId: string
  backToChaptersHome: ()=>void
}

export function ChapterEditor({
  project,
  chapterId,
  backToChaptersHome
}: IChapterEditorProp) {

  async function saveChapterText() {

  }

  return(<>
  <AppleWindowBottomBarFill />
  
  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={BookColor.themeGreen} strokeWidth={20}
      icon1="chevron.left" onClick1={backToChaptersHome} text1=""
      icon5="floppydisk" onClick5={saveChapterText} text2=""
    /> 
  </AppleWindowPlainBottomBarDiv>
  </>)
}