import { IProject } from "../../../../Model/IProject";
import { BookPlayer2 } from "../../../BookPlayer/BookPlayer";

interface IPreviewProp {
  project: IProject
  backToProjectHome: ()=>void
}
export function Preview({
  project,
  backToProjectHome
}: IPreviewProp) {
  return(<>
     <BookPlayer2 
       projectId={project.id}
     />
  </>)
}