import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, Div } from "../../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../../libs/Pop/Pop3/fPop3"
import { QuizColor } from "../../../../CSS/QuizColor"
import { IProject } from "../../../../Model/IProject"
import { QuizBookTitle } from "./QuizBookTitle/QuizBookTitle"
import { Publish } from "./Publish/Publish"
import cl from "./QuizBookSettings.module.scss"

interface IQuizBookSettingsProp {
  project: IProject
  setProjectQuizBookTitle: (quizBookTitle: string)=>void
  backToProjectHome: ()=>void
}
export function QuizBookSettings({
  project,
  setProjectQuizBookTitle,
  backToProjectHome
}: IQuizBookSettingsProp) {

  return(<>
  <div className={cl.settings}>
    <HeadLine text={project.quizBookTitle} h={3} />
    <Div height={10} />
    <QuizBookTitle project={project} setProjectQuizBookTitle={setProjectQuizBookTitle}/>
    <Div height={20} />
    <Publish project={project}/>
    <Div height={20} />
  </div>
  <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={QuizColor.themeRed}
        icon1="chevron.left" onClick1={backToProjectHome}
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
}