import cl from "./StripeButton.module.scss"

interface IStripeButtonProp {
  text: string
  onClick: ()=>void
}

export function StripeButton({
  text,
  onClick
}: IStripeButtonProp) {
  return(<>
  <div className={cl.button}>
    {text || ""}
  </div>
  </>)
}