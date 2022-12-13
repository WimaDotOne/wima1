import cl from "./ViewQuizBookTitle.module.scss"

interface IViewQuizBookTitleProp {
  title: string
}
export function ViewQuizBookTitle({
  title
}:IViewQuizBookTitleProp) {
  return(<>
    <div className={cl.title}>
      {title}
    </div>
  </>)
}