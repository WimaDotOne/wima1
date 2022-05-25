import { IProject } from "../../../../Model/IProject";
import { MovicPlayer } from "../../../MovicPlayer/MovicPlayer";

interface IPreviewProp {
  project: IProject
  backToProjectHome: ()=>void
}
export function Preview({
  project,
  backToProjectHome
}: IPreviewProp) {
  return(<>
    <MovicPlayer project={project}
      onStop={backToProjectHome}/>
  </>)
}