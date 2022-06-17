import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, Div } from "../../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../../libs/Pop/Pop3/fPop3"
import { MovicColor } from "../../../../CSS/MovicColor"
import { IProject } from "../../../../Model/IProject"
import { DvdCover } from "./DvdCover/DvdCover"
import { MovicTitle } from "./MovicTitle/MovicTitle"
import { Publish } from "./Publish/Publish"
import cl from "./Settings.module.scss"

interface ISettingsProp {
  project: IProject
  setProjectMovicTitle: (movicTitle: string)=>void
  backToProjectHome: ()=>void
}
export function Settings({
  project,
  setProjectMovicTitle,
  backToProjectHome
}: ISettingsProp) {

  return(<>
  <div className={cl.settings}>
    <HeadLine text={project.movicTitle} h={3} />
    <Div height={10} />
    <MovicTitle project={project} setProjectMovicTitle={setProjectMovicTitle}/>
    <Div height={20} />
    <DvdCover project={project}/>
    <Div height={20} />
    <Publish project={project}/>
  </div>
  <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={MovicColor.themeRed}
        icon1="chevron.left" onClick1={backToProjectHome}
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
}