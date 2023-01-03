import cl from "./ViewQuizChapterTitle.module.scss"

interface IViewQuizChapterTitleProp {
  title: string
}
export function ViewQuizChapterTitle({
  title
}:IViewQuizChapterTitleProp) {
  return(<>
    <div className={cl.title}>
      {title}
    </div>
  </>)
}