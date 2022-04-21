import { IconButton } from "../../../../../../../libs/Core/Core2/AppleWindow/F/View/IconButton/IconButton"
import { AppleWindowBottomBarFill } from "../../../../../../../libs/Core/Core2/fCore2"
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
     <div className={cl.projects}>
       <div className={cl.projectDiv}>
         <GoogleFolder text="Scott Pilgrim and Romona xxx xxxx vs the World" onClick={()=>{}}/>
       </div>
       <div className={cl.projectDiv}>
        <GoogleFolder text="Knvies Out" onClick={()=>{}}/>
       </div>
       {
         arr.map((d, i)=>
         <div key={i} className={cl.projectDiv}>
          <GoogleFolder text={`Movie ${i}`} onClick={()=>{}}/>
         </div>)
       }
     </div>
   </div>
   <AppleWindowBottomBarFill />
   <MovicWindowBottomBar>
   {}
   </MovicWindowBottomBar>
  </>)
}