import { IProject } from "../../../../Model/IProject";
import { MovicPlayer2 } from "../../../MovicPlayer/MovicPlayer";

interface IPreviewProp {
  project: IProject
  backToProjectHome: ()=>void
}
export function Preview({
  project,
  backToProjectHome
}: IPreviewProp) {
  return(<>
    <MovicPlayer2 projectId={project.id}
      onStop={backToProjectHome}/>
  </>)
}