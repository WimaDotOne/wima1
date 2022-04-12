import { ReactNode } from "react"
import cl from "./Paragraph.module.scss"

interface IParagraphProp {
  children: ReactNode
}
export function Paragraph({
  children
}: IParagraphProp) {
  return(<>
    <div className={cl.paragraph}>
      {children}
    </div>
  </>)
}


interface ISubParagraphProp {
  children: ReactNode
}
export function SubParagraph({
  children
}: ISubParagraphProp) {
  return(<>
    <div className={cl.subParagraph}>
      <div className={cl.dot}>&bull;</div>
      <div className={cl.subParagraphText}>{children}</div>
    </div>
  </>)
}