import { IconButton } from "../../../../../../../libs/Core/Core2/AppleWindow/F/View/IconButton/IconButton"
import { AppleWindowBottomBarFill, AutoRepeatGrid } from "../../../../../../../libs/Core/Core2/fCore2"
import { GoogleFolder } from "../../../../../../../libs/Pop/Pop3/Folder/GoogleFolder"
import { HeadLine } from "../../../H/Controls/HeadLine/HeadLine"
import { MovicWindowBottomBar } from "../../../MovicWindow/MovicWindowBottomBar"
import cl from "./ProjectsHome.module.scss"

interface IProjectsHomeProp {

}
export function ProjectsHome({

}: IProjectsHomeProp) {

  function onClickNewProject() {
  }
  const arr = []
  for(let i=0; i<30; i++) arr.push(i)
  return(<>
   <div className={cl.board}>
     <HeadLine text="Projects" buttonText="New Project" 
      buttonOnClick={onClickNewProject}/>
     <AutoRepeatGrid autoFit cellMinWidth={180} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
        <GoogleFolder text="Scott Pilgrim and Romona xxx xxxx vs the World" onClick={()=>{}}/>
        <GoogleFolder text="Knvies Out" onClick={()=>{}}/>
       {
         arr.map((d, i)=>
          <GoogleFolder key={i} text={`Movie ${i}`} onClick={()=>{}}/>)
       }
     </AutoRepeatGrid>
   </div>
   <AppleWindowBottomBarFill />
   <MovicWindowBottomBar>
   {}
   </MovicWindowBottomBar>
  </>)
}