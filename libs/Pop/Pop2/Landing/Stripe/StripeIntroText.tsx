import cl from "./StripeIntroText.module.css"

interface IStripeIntroTextProp {
  title: string,
  text1: string,
  text2: string
}

export function StripeIntroText({
  title, text1, text2
}: IStripeIntroTextProp) {
  return(<>
    <div className={cl.introText}>
      <div className={cl.title}>{title}</div>
      <div></div>
      <div className={cl.text}>{text1}</div>
      <div className={cl.text}>{text2}</div>
    </div>
  </>)
}