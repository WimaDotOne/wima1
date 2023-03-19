import cl from "./ViewUnitName.module.scss"

interface IViewUnitNameProp {
  title: string
}
export function ViewUnitName({
  title
}:IViewUnitNameProp) {
  return(<>
    <div className={cl.title}>
      {title}
    </div>
  </>)
}