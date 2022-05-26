import cl from "./ViewMovicTitle.module.scss"

interface IViewMovicTitleProp {
  title: string
}
export function ViewMovicTitle({
  title
}:IViewMovicTitleProp) {
  return(<>
    <div className={cl.title}>
      {title}
    </div>
  </>)
}