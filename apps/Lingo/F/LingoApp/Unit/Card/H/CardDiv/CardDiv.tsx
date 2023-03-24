import { ReactNode } from "react";
import cl from "./CardDiv.module.scss"

interface ICardDivProp {
  children: ReactNode
}
export function CardDiv({
  children
}:ICardDivProp) {
  return(<>
    <div className={cl.cardWrap}>
      <div className={cl.card}>
        {children}
      </div>
    </div>
  </>)
}