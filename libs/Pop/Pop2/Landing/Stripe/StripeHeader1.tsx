import cl from "./StripeHeader1.module.scss"

interface IStripeHeader1Prop {
  text1: string,
  text2: string
}
export function StripeHeader1({
  text1, text2
}: IStripeHeader1Prop) {
  return(<>
    <div className={cl.header}>
      <div className={cl.text1}>{text1}</div>
      <div className={cl.text2}>{text2}</div>
    </div>
  </>)
}