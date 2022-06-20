import { ClassNames } from "../../../../../../libs/Core/Core1/fCore1"
import cl from "./ServiceCard.module.scss"

interface IServiceCardProp {
  name: string,
  shortDescription?: string
  description?: string
  price?: string
  onClick?: ()=>void
}

export function ServiceCard2({
  name,
  shortDescription,
  description,
  price,
  onClick
}: IServiceCardProp) {

  const clClick = onClick ? cl.click : ""
  description = (description || "").trim()
  return(<>
  <div className={cl.serviceCardSpace}>
    <div className={ClassNames([cl.serviceCard, clClick])} onClick={onClick}>
      <div className={cl.name}>{name}</div>
      <div className={cl.shortDescription}>{shortDescription}</div>
      {
        description?<div className={cl.ellipsis}>...</div>:null
      }
      <div className={cl.price}>{price}</div>
    </div>
  </div>
  </>)
}