import cl from "./ViewQuizTitle.module.scss"

interface IViewQuizTitleProp {
  title: string
}
export function ViewQuizTitle({
  title
}:IViewQuizTitleProp) {
  return(<>
    <div className={cl.title}>
      {title}
    </div>
  </>)
}