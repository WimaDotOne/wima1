import cl from "./IceCreamWoodButton.module.scss"

interface IIceCreamWoodButtonProp {
  text: string
  onClick: ()=>void
}

export function IceCreamWoodButton({
  text,
  onClick
}: IIceCreamWoodButtonProp) {
  return(<>
  <a className={cl.button} onClick={onClick}>
    <span className={cl.buttonText}>{text}</span>
  </a>
  </>)
}