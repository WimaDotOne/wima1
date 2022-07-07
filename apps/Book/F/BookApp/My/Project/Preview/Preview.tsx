import { IProject } from "../../../../Model/IProject";

interface IPreviewProp {
  project: IProject
  backToProjectHome: ()=>void
}
export function Preview({
  project,
  backToProjectHome
}: IPreviewProp) {
  return(<>
     Preview
  </>)
}