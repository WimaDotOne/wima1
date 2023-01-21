import cl from "./BigRoundButton.module.scss"

interface IBigRoundButtonProp {
  text: string
  onClick: ()=>void
  textColor?: string
  buttonColor?: string
  light?: boolean
}

export function BigRoundButton({
  text,
  onClick,
  textColor,
  buttonColor,
  light
}: IBigRoundButtonProp) {

  if(light) {
    textColor =  textColor || "#222"
    buttonColor = buttonColor || "#f4f4f4"
  } else {
    textColor =  textColor || "white"
    buttonColor = buttonColor || "#0275d8"
  }

  return(<>
  <div className={cl.btn}
    style={{color: textColor, backgroundColor: buttonColor}}
    onClick={onClick}>
      <div className={cl.text}>{text}</div>
  </div>
  </>)
}