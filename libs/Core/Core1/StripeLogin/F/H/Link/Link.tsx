import cl from "./Link.module.scss"

interface ILinkProp {
  text: string,
  onClick: ()=>void
}
export function Link({
  text,
  onClick
}:ILinkProp) {
  return(<>
    <span className={cl.link} onClick={onClick}>{text}</span>
  </>)
}