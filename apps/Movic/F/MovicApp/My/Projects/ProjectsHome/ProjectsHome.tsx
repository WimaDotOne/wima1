import { AppleWindowBottomBarFill, AutoRepeatGrid } from "../../../../../../../libs/Core/Core2/fCore2"
import { AppleFolder } from "../../../../../../../libs/Pop/Pop3/Folder/AppleFolder"
import { HeadLine } from "../../../H/Controls/HeadLine/HeadLine"
import { MovicWindowBottomBar } from "../../../MovicWindow/MovicWindowBottomBar"
import { ProjectsTurn } from "../Projects"
import cl from "./ProjectsHome.module.scss"

interface IProjectsHomeProp {
  openProject: (projectId: string)=>void
}
export function ProjectsHome({
  openProject
}: IProjectsHomeProp) {

  function onClickNewProject() {
    
  }

  const arr = []
  for(let i=0; i<30; i++) arr.push(i)
  return(<>
   <div className={cl.board}>
     <HeadLine text="Projects" buttonText="New Project" 
      buttonOnClick={onClickNewProject}/>
     <AutoRepeatGrid autoFit cellMinWidth={100} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
       <AppleFolder text="Scott Pilgrim and Romona xxx xxxx vs the World" onClick={()=>{}}/>
       <AppleFolder text="Knvies Out" onClick={()=>{}}/>
       {
         arr.map((d, i)=>
          <AppleFolder key={i} text={`Movie ${i}`} onClick={
            ()=>{openProject("12233435")}
            
          }/>)
       }
     </AutoRepeatGrid>
   </div>
   <AppleWindowBottomBarFill />
   <MovicWindowBottomBar>
   {}
   </MovicWindowBottomBar>
  </>)
}