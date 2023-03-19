import cl from "./ViewUnitName.module.scss"

interface IViewUnitNameProp {
  name: string,
  number: string
}
export function ViewUnitName({
  name,
  number
}:IViewUnitNameProp) {
  return(<>
    <div className={cl.title}>
      {name}  ( # {number} )
    </div>

  </>)
}