import { IProject } from "../../../../Model/IProject";
import { BookPlayer } from "../../../BookPlayer/BookPlayer";

interface IPreviewProp {
  project: IProject
  backToProjectHome: ()=>void
}
export function Preview({
  project,
  backToProjectHome
}: IPreviewProp) {

  return(<>
     <BookPlayer
       projectId={project.id}
       onCloseBook={backToProjectHome}
     />
  </>)
}