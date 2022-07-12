import cl from "./PageTurner.module.scss"

interface IPageTurnerProp {
  next: ()=>void
  prev: ()=>void
}
export function PageTurner({
  next,
  prev
}: IPageTurnerProp) {

  return(<>
  <div className={cl.all}>
    <div className={cl.left} onClick={prev}></div>
    <div className={cl.right} onClick={next}></div>
  </div>
  </>)
}