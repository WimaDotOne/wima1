import { ReactNode } from "react"
import cl from "./StripeParagraph.module.scss"

interface IStripeParagraphProp {
  children: ReactNode
}
export function StripeParagraph({
  children
}: IStripeParagraphProp) {
  return(<>
    <div className={cl.paragraph}>
      {children}
    </div>
  </>)
}


interface IStripeSubParagraphProp {
  children: ReactNode
}
export function StripeSubParagraph({
  children
}: IStripeSubParagraphProp) {
  return(<>
    <div className={cl.subParagraph}>
      <div className={cl.dot}>&bull;</div>
      <div className={cl.subParagraphText}>{children}</div>
    </div>
  </>)
}