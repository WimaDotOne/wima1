import cl from "./ViewBookTitle.module.scss"

interface IViewBookTitleProp {
  title: string
}
export function ViewBookTitle({
  title
}:IViewBookTitleProp) {
  return(<>
    <div className={cl.title}>
      {title}
    </div>
  </>)
}