import { IProject } from "../../../../Model/IProject"
import cl from "./Chapters.module.scss"

interface IChaptersProp {
  project: IProject
  backToProjectHome: ()=>void
}
export function Chapters({
  project,
  backToProjectHome
}: IChaptersProp) {
  return(<>
  Chapters
  </>)
}