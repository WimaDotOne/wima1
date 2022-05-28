import { SectionHeader } from "../../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, Div } from "../../../../../../../libs/Core/Core2/fCore2"
import { MovicColor } from "../../../../CSS/MovicColor"
import { IProject } from "../../../../Model/IProject"
import { HeadLine } from "../../../H/Controls/HeadLine/HeadLine"
import { SettingSection } from "./H/SettingSection/SettingSection"
import { MovicTitle } from "./MovicTitle/MovicTitle"
import { Publish } from "./Publish/Publish"
import cl from "./Settings.module.scss"

interface ISettingsProp {
  project: IProject
  backToProjectHome: ()=>void
}
export function Settings({
  project,
  backToProjectHome
}: ISettingsProp) {

  function save() {

  }
  return(<>
  <div className={cl.settings}>
    <HeadLine text={project.movicTitle} h={3} />
    <Div height={10} />
    <MovicTitle title0={project.movicTitle} />
    <Publish />
  </div>
  <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={MovicColor.themeRed}
        icon1="chevron.left" onClick1={backToProjectHome}
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
}