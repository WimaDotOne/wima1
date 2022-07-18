import cl from "./PaperTurner.module.scss"

interface IPaperTurnerProp {
  next: ()=>void
  prev: ()=>void
}
export function PaperTurner({
  next,
  prev
}: IPaperTurnerProp) {

  return(<>
    <div className={cl.left} onClick={prev}></div>
    <div className={cl.right} onClick={next}></div>
  </>)
}