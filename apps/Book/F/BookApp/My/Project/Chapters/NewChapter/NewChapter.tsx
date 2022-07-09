import cl from "./NewChapter.module.scss"

interface INewChapterProp {
  backToChaptersHome: ()=>void
}
export function NewChapter({
  backToChaptersHome
}: INewChapterProp) {
  return(<>
  New Chapter
  </>)
}